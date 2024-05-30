"use server";

import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";
import { db } from "@/db";
import { giftsTable } from "@/db/schemas/gifts";
import { eq } from "drizzle-orm";

export type TCreateGift = {
  title: string;
  value: number;
  url?: string;
};
export const create = async (props: TCreateGift) => {
  await db.insert(giftsTable).values(props);
  revalidateTag("findAll-gifts");
};

export const findAll = unstable_cache(
  async () => {
    const gifts = await db.select().from(giftsTable);
    return gifts;
  },
  ["findAll-gifts"],
  { tags: ["findAll-gifts"] }
);

export type TUpdateGift = {
  id: number;
  acquired?: boolean;
  title?: string;
  url?: string;
  value?: number;
};
export const update = async (props: TUpdateGift) => {
  const { id, ...newProps } = props;
  await db.update(giftsTable).set(newProps).where(eq(giftsTable.id, id));
  revalidateTag("findAll-gifts");
};
