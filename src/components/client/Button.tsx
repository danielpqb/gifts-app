"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

type TProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export function Button({ className, children, onClick }: TProps) {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center text-center w-full rounded-md p-3 max-w-4xl bg-[#65acac] text-white font-medium py-2 hover:opacity-80 active:scale-95",
        className
      )}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      {children || "Button"}
    </button>
  );
}
