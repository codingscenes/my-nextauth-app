"use client";

import createNote from "@/actions/create-note";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import FormButton from "../common/form-button";

export default function FormNotesCreation({ slug }) {
  const [formState, formAction] = useFormState(createNote.bind(null, slug), { errors: {} });
  return (
    <Popover placement="left-side">
      <PopoverTrigger>
        <Button color="primary">Create Note</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={formAction}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Note</h3>

            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              onInvalid={!!formState.errors?.title}
              errorMessage={formState.errors?.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              onInvalid={!!formState.errors?.content}
              errorMessage={formState.errors?.content?.join(", ")}
            />
            {formState.errors?.otherErrors ? (
              <div className="p-2 bg-red-200 border border-red-500 rounded">
                {formState.errors?.otherErrors?.join(", ")}
              </div>
            ) : (
              ""
            )}
            <FormButton> Create </FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
