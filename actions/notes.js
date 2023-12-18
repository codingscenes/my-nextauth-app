"use server";

import db from "@/db";
import { redirect } from "next/navigation";

export async function getAllNotes() {
  const notes = await db.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: { select: { name: true, image: true } },
      topic: { select: { slug: true } },
    },
    take: 5,
  });
  return notes;
}

export async function getNotesBySlug(slug) {
  const notes = await db.note.findMany({
    where: { topic: { slug } },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: { select: { name: true, image: true } },
      topic: { select: { slug: true } },
    },
    take: 5,
  });

  return notes;
}

export async function search(formData) {
  const term = formData.get("term");
  if (typeof term !== "string" || !term) {
    redirect("/");
  }
  redirect(`/search?term=${term}`);
}

export async function searchNotesByTerm(term) {
  return await db.note.findMany({
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
    },
    where: {
      OR: [
        {
          title: { contains: term },
        },
        {
          content: { contains: term },
        },
      ],
    },
  });
}
