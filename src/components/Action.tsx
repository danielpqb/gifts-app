"use client";

import { giftServices } from "@/db/services";
import React from "react";
import { ulid } from "ulid";

function Action() {
  return (
    <button
      className="bg-white/20 rounded-md p-3"
      onClick={() => {
        giftServices.create({
          title: ulid(),
          value: Math.floor(Math.random() * 10000),
        });
      }}
    >
      Create Gift
    </button>
  );
}

export default Action;
