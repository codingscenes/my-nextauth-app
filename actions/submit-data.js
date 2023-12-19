"use server";
import { currentUser } from "@clerk/nextjs";

export default async function submitData(formData) {
  const userName = formData.get("username");
  const user = await currentUser();
  //   console.log(user.id);
  //   console.log(userName);

  if (!user || !user?.id) {
    throw Error("Please sign in");
  }

  console.log(userName);
}
