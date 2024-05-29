import { giftServices } from "@/db/services";
import React from "react";

export async function Gifts() {
  const gifts = await giftServices.findAll();

  return (
    <div className="flex flex-col gap-4 max-w-7xl">
      {gifts.map((gift, idx) => {
        return (
          <div
            className="flex flex-col bg-white/20 rounded-lg shadow p-4"
            key={idx}
          >
            <span>Presente: {gift.title}</span>
            <span>Valor: R$ {gift.value}</span>
          </div>
        );
      })}
    </div>
  );
}
