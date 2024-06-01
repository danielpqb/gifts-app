import React from "react";
import { twMerge } from "tailwind-merge";

type TProps = {
  classNames?: { label?: string; input?: string; container?: string };
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
};
export function Input({
  classNames,
  label,
  name,
  required,
  placeholder,
  type,
  ...others
}: TProps) {
  return (
    <div className={twMerge("w-full", classNames?.container)}>
      {label ? (
        <label
          className={twMerge(
            "block text-sm font-medium text-gray-900",
            classNames?.label
          )}
        >
          {label}
        </label>
      ) : null}
      <input
        type={type || "text"}
        placeholder={placeholder || "Digite aqui..."}
        required={required}
        name={name}
        className={twMerge(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          classNames?.input
        )}
        {...others}
      />
    </div>
  );
}
