import { Metadata } from "next";
import { RecipeCards } from "@/components/cards";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Recipe",
  };
}

export default function Page() {
  return (
    <div className="w-full h-full p-5">
      <RecipeCards />
    </div>
  );
}
