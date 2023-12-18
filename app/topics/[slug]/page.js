import { getNotesBySlug } from "@/actions/notes";
import FormNotesCreation from "@/components/notes/form-notes-creation";
import ShowNotes from "@/components/notes/show-notes";
export default function TopicPage({ params }) {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-3xl font-bold-5 font-bold text-grey-800">{slug}</h1>
        <ShowNotes dbFn={getNotesBySlug} slug={slug} />
      </div>
      <div>
        <FormNotesCreation slug={slug} />
      </div>
    </div>
  );
}

// http://localhost:3000/topics/[slug]
