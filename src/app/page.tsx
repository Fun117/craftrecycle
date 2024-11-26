import { RecipeCards } from "@/components/cards";

export default async function Home() {
  return (
    <div className="w-full min-h-dvh p-5">
      <RecipeCards />
    </div>
  );
}
