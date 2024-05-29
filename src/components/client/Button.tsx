"use client";

import { giftServices } from "@/db/services";
import React from "react";
import { twMerge } from "tailwind-merge";
import { ulid } from "ulid";

export function Button() {
  return (
    <button
      className={twMerge("bg-white/20 rounded-md p-3")}
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
