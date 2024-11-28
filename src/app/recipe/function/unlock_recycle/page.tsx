import { Metadata } from "next";
import { RecipeGeneration } from "./generation";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Recipe function - unlock recycle",
  };
}

export default function Page() {
  return (
    <div className="w-full h-full p-5">
      <RecipeGeneration />
    </div>
  );
}
