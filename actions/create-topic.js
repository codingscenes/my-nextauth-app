"use server";
import { auth } from "@/auth";
import db from "@/db";
import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

//create schema for your input validation
const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, { message: "Only LowerCase, or dashes, no spaces" }),
  description: z.string().min(3),
});

export async function createTopic(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //validate user input
  const dataOutput = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  //   console.log(dataOutput.error.flatten().fieldErrors);

  if (!dataOutput.success) {
    return {
      errors: dataOutput.error.flatten().fieldErrors,
    };
  }

  // validate user session
  const session = await auth();

  if (!session || !session?.user) {
    return {
      errors: {
        otherErrors: ["Please login first!"],
      },
    };
  }

  // data and session is valid - save data to db
  const data = dataOutput.data;
  let topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: data.name,
        description: data.description,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          otherErrors: [error.message],
        },
      };
    } else {
      return {
        errors: {
          otherErrors: ["Something went wrong"],
        },
      };
    }
  }

  // revalidatePath -> /
  revalidatePath("/");

  // redirect
  redirect(paths.toTopicPage(topic.slug));
}
