"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type TProps = {
  className?: string;
};
export function InputImage({ className }: TProps) {
  const [url, setUrl] = useState("");

  return (
    <div className="flex flex-col items-center w-full">
      <div className="pb-1 w-full">
        <label className={twMerge("block text-sm font-medium text-gray-900")}>
          URL da Imagem
        </label>
        <textarea
          style={{ resize: "none" }}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          rows={3}
          name="url"
          placeholder={"Digite aqui..."}
          required={false}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <picture
        className={twMerge(
          "w-full h-min max-w-80 rounded-lg flex justify-center items-center overflow-hidden",
          className
        )}
        onError={() => {
          setUrl("");
        }}
      >
        <source srcSet={url}></source>
        <img
          src="/imgs/icon-nuvem-3.png"
          alt=""
        />
      </picture>
    </div>
  );
}
