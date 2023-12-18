"use server";
import { auth } from "@/auth";
import db from "@/db";
import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";
import { z } from "zod";

const createNoteSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(5),
});
export default async function createNote(slug, prevState, formData) {
  // form input validation (server - side)
  const resultData = createNoteSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });
  //   console.log(resultData.error.flatten().fieldErrors);
  if (!resultData.success) {
    return {
      errors: resultData.error.flatten().fieldErrors,
    };
  }

  // check the session
  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        otherErrors: ["Please login first!"],
      },
    };
  }

  // save data to db
  let note;

  try {
    const topic = await db.topic.findFirst({
      where: { slug },
    });

    if (!topic) {
      return {
        errors: {
          otherErrors: ["No topic found"],
        },
      };
    }
    // if topic found in the table
    note = await db.note.create({
      data: {
        title: resultData.data.title,
        content: resultData.data.content,
        userId: session.user.id,
        topicId: topic.id,
        slug: slugify(resultData.data.title, { lower: true }),
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        otherErrors: [error.message],
      };
    } else {
      return {
        otherErrors: ["Failed to create note!"],
      };
    }
  }

  revalidatePath(paths.toTopicPage(slug));
  redirect(paths.toNoteDetailPage(slug, note.id));
}
