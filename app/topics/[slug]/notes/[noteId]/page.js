import NoteLoader from "@/components/notes/note-loader";
import ShowNoteDetail from "@/components/notes/show-note-detail";
import paths from "@/paths";
import { Card, Divider } from "@nextui-org/react";
import Link from "next/link";
import { Suspense } from "react";

export default function NoteDetailPage({ params }) {
  const { slug, noteId } = params;
  return (
    <div className="space-y-3 m-5">
      <Link href={paths.toTopicPage(slug)} className="underline decoration-solid">
        back to {slug}
      </Link>
      <Divider />
      <Suspense fallback={<NoteLoader />}>
        <Card className="w-8/12">
          <ShowNoteDetail noteId={noteId} />
        </Card>
      </Suspense>
    </div>
  );
}

// http://localhost:3000/topics/[slug]/notes/[noteId]
