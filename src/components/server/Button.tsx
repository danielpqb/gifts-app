import React from "react";
import { twMerge } from "tailwind-merge";

type TProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export async function Button({ className, children, ...others }: TProps) {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center text-center w-full rounded-md p-3 max-w-4xl bg-[#65acac] text-white font-medium py-2 hover:opacity-80 active:scale-95",
        className
      )}
      type="submit"
      {...others}
    >
      {children || "Button"}
    </button>
  );
}
