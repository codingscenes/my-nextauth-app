import ShowNotes from "@/components/notes/show-notes";
import { redirect } from "next/navigation";
import { searchNotesByTerm } from "@/actions/notes";

export default function SearchPage({searchParams}) {

    const {term } = searchParams;
    if (!term) {
        redirect('/')
    }

    return <div>
            <ShowNotes dbFn={ () => searchNotesByTerm(term) }/>
    </div>
}