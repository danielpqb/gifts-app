"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { InputImage } from "../InputImage";
import { Button } from "../Button";
import { Input } from "../Input";

export function FormGiftCreate() {
  type TFormData = {
    title: string;
    value: number;
    url: string;
  };
  // const { register, handleSubmit } = useForm<TFormData>();

  // const onSubmit: SubmitHandler<TFormData> = (data) => {
  //   console.log(data);
  //   const { title, value, url } = data;
  //   // try {
  //   //   await giftServices.create({
  //   //     title,
  //   //     value: Number(value) || 0,
  //   //     url: url || undefined,
  //   //   });
  //   // } catch (error) {
  //   //   throw error;
  //   // }
  // };

  return (
    <form
      className="flex flex-col gap-2 w-full max-w-xl"
      // onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Título"
        name="title"
        // {...register("title")}
      />

      <Input
        label="Valor"
        type="number"
        name="value"
        // {...register("value")}
      />

      <InputImage />

      <Button type="submit">CRIAR PRESENTE</Button>
    </form>
  );
}
