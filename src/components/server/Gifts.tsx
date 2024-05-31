import { giftServices } from "@/db/services";
import React from "react";
import { Button } from "./Button";
import { revalidatePath } from "next/cache";

export async function Gifts() {
  const gifts = await giftServices.findAll();

  return (
    <div className="grid grid-cols-2 items-center justify-center gap-4 p-4 w-full max-w-7xl xl:grid-cols-4">
      {gifts.map((gift, idx) => {
        return (
          <div
            className="flex flex-col items-center bg-white rounded-lg shadow p-3 w-full overflow-hidden text-gray-900 text-sm font-sans gap-4"
            key={idx}
          >
            <img
              className="w-full h-min"
              src={
                gift.url ||
                `/imgs/icon-nuvem-${Math.floor(Math.random() * 3) + 1}.png`
              }
              alt=""
            />
            <span className="">{gift.title}</span>
            <span className="font-medium">
              {(gift.value / 100).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <form
              className="w-full"
              action={async () => {
                "use server";
                await giftServices.update({ id: gift.id, acquired: true });
                revalidatePath("/gifts");
              }}
            >
              <Button
                disabled={!!gift.acquired}
                className={
                  gift.acquired ? "bg-gray-900/10 text-gray-950/30" : ""
                }
              >
                {gift.acquired ? "COMPRADO" : "PRESENTEAR"}
              </Button>
            </form>
          </div>
        );
      })}
    </div>
  );
}
