"use client";

import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export default function FormButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} isLoading={pending} type="submit">
      {children}
    </Button>
  );
}
