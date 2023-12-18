import db from "@/db";
import { notFound } from "next/navigation";

export default async function ShowNoteDetail({ noteId }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const note = await db.note.findFirst({
    where: { id: noteId },
  });

  if (!note) {
    notFound();
  }
  return (
    <div className="m-4 w-6/12">
      <h1 className="text-2xl font-bold my-2">{note.title}</h1>
      <p className="p-4 border rounded">{note.content}</p>
    </div>
  );
}
