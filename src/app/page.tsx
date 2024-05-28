import Action from "@/components/Action";
import Gifts from "@/components/Gifts";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-950 text-white">
      <Action />
      <Gifts />
    </main>
  );
}
