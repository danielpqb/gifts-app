import { FormGiftCreate } from "@/components/client/forms/FormGiftCreate";

export default async function Index() {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <span className="text-[#65acac] text-[1.7rem] font-medium">
          Criação de Presente
        </span>
      </div>

      <FormGiftCreate />
    </>
  );
}
