"use client";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";

import { createTopic } from "@/actions/create-topic";
import FormButton from "../common/form-button";

export default function TopicCreationForm() {
  const [formState, formAction] = useFormState(createTopic, { errors: {} });
  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={formAction}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3>Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors?.name}
              errorMessage={formState.errors?.name?.join(", ")}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacment="outside"
              placeholder="Tell us about the topic."
              isInvalid={!!formState.errors?.description}
              errorMessage={formState.errors?.description?.join(", ")}
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
