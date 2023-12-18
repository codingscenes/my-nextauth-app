import paths from "@/paths";
import { Avatar, Card } from "@nextui-org/react";
import Link from "next/link";

export default function NoteItem({ note }) {
  const readableDate = note.createdAt.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <Card shadow="" className="w-full mx-auto mb-4">
      <div className="flex items-center space-x-4 p-4">
        <Avatar src={note.user?.image || ""} alt="UserImage" size="large" />
        <div>
          <Link href={paths.toNoteDetailPage(note.topic.slug, note.id)}>
            <h3 className="text-lg font-semibold">{note.title}</h3>
          </Link>
          <span className="text-sm absolute top-10 right-10">{readableDate}</span>
          <p className="text-gray-500">by {note?.user?.name}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700">{note?.content}</p>
      </div>
    </Card>
  );
}
