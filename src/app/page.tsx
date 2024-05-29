import { Button } from "@/components/client/Button";
import { Gifts } from "@/components/server/Gifts";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/imgs/bg-body.jpg')] text-white ">
      <div className="fixed w-full h-[75vh] flex justify-between items-center p-5">
        <img
          className="w-[60px] h-min"
          src={"/imgs/icon-nuvem-1.png"}
          alt=""
        />
        <img
          className="w-[60px] h-min"
          src={"/imgs/icon-nuvem-2.png"}
          alt=""
        />
      </div>

      <div className="flex flex-col w-full items-center justify-center z-10">
        <img
          className="w-[24vw] py-5"
          src={"/imgs/icon-nuvem-1.png"}
          alt=""
        />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="z-10 w-[325px] h-[48px] bg-[url('/imgs/bg-faixa.png')] bg-contain flex items-center justify-center text-2xl font-medium">
            <span>Chá de Bebê</span>
          </div>
          <div className="relative w-full h-[147px] top-[-44px] bg-[url('/imgs/nuvem-centro.png')] bg-contain bg-no-repeat bg-center flex items-center justify-center text-2xl font-medium">
            <span className="text-[#65acac] font-lobster text-[2.5rem]">
              Gabriel
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-4">
          <span className="text-[#65acac] text-[1.7rem] font-medium">
            Lista de presentes
          </span>
        </div>

        {/* <Button /> */}
        <Gifts />
      </div>
    </main>
  );
}
