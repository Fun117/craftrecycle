import { Metadata } from "next";
import { RecipeTable } from "@/components/recipeTable";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Recipe Table",
  };
}

export default function Page() {
  return (
    <div className="w-full h-full p-5">
      <RecipeTable />
    </div>
  );
}
