import { getAllNotes } from "@/actions/notes";
import ShowNotes from "@/components/notes/show-notes";
import TopicCreationForm from "@/components/topics/topic-creation-form";
import TopicList from "@/components/topics/topic-list";
import { Divider } from "@nextui-org/react";
export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top 5 Notes</h1>
        <ShowNotes dbFn={getAllNotes} />
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreationForm />
        <Divider className="my-4" />
        <h3 className="text-lg mb-2">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
