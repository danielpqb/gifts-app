"use client";

import { giftsServices } from "@/db/services/gifts";
import React from "react";

function Action() {
  return (
    <button
      style={{ width: 150, height: 100, backgroundColor: "white" }}
      onClick={() => {
        giftsServices.create();
      }}
    >
      Hifwqfqwfwq
    </button>
  );
}

export default Action;
