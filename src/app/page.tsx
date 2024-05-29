import { Button } from "@/components/client/Button";
import { Gifts } from "@/components/server/Gifts";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/imgs/bg-body.jpg')] text-white ">
      <img
        className="w-[25vw]"
        src={"/imgs/icon-nuvem-1.png"}
        alt=""
      />
      <div className="w-[325px] h-[48px] bg-[url('/imgs/bg-faixa.png')] bg-contain flex items-center justify-center text-2xl font-medium">
        {/* <img
          className="w-full"
          src={"/imgs/bg-faixa.png"}
          alt=""
        /> */}
        <span>Chá de Bebê</span>
      </div>
      <Button />
      <Gifts />
    </main>
  );
}
