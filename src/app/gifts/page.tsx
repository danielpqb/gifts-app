import { Gifts } from "@/components/server/Gifts";

export default async function Index() {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <span className="text-[#65acac] text-[1.7rem] font-medium">
          Lista de presentes
        </span>
      </div>

      <Gifts />
      
    </>
  );
}
