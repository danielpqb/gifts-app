"use server";

import { giftServices } from "@/db/services";
import React from "react";

async function Gifts() {
  const gifts = await giftServices.findAll();
  return (
    <div>
      {gifts.map((gift, idx) => {
        return (
          <div
            className="flex gap-4"
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

export default Gifts;
