import { search } from "@/actions/notes";
import { Input } from "@nextui-org/react";

export default function SearchInput() {
  return (
    <form action={search}>
      <Input placeholder="Search notes" className="w-96" variant="bordered" name="term" />
    </form>
  );
}
