import NoteItem from "./note-item";

export default async function ShowNotes({ dbFn, slug }) {
  let notes;
  if (slug) {
    notes = await dbFn(slug);
  } else {
    notes = await dbFn();
  }

  let renderedNotes;

  if (!notes.length) {
    renderedNotes = <h1 className="text-2xl font-bold text-gray-800">Notes are not available!</h1>;
  } else {
    renderedNotes = notes.map((note) => <NoteItem note={note} />);
  }

  return renderedNotes;
}
