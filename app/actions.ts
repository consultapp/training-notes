"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

export async function insertCategory(name: string) {
  await prisma.category.create({
    data: {
      name,
    },
  });

  revalidatePath("/");
}

// export async function deleteTodo(id: number) {
//   await prisma.todo.delete({ where: { id } });

//   revalidatePath("/");
// }

// export async function setChecked(id: number, checked: boolean) {
//   await prisma.todo.update({ data: { checked }, where: { id } });

//   revalidatePath("/");
// }
