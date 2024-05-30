import { Button } from "@/components/server/Button";
import { Input } from "@/components/server/Input";
import { giftServices } from "@/db/services";

export default async function Page() {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <span className="text-[#65acac] text-[1.7rem] font-medium">
          Criação de Presente
        </span>
      </div>

      <form
        className="flex flex-col gap-2"
        action={async (e) => {
          "use server";
          const title = e.get("title") as string;
          const value = e.get("value") as string;

          giftServices.create({
            title,
            value: Number(value) || 0,
          });
        }}
      >
        <Input
          label="Título"
          name="title"
        />

        <Input
          label="Valor"
          name="value"
          type="number"
        />

        <Input
          label="URL da Imagem"
          name="url"
          type="url"
          required={false}
        />

        <Button>CRIAR PRESENTE</Button>
      </form>
    </>
  );
}
