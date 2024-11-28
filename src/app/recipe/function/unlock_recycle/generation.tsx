"use client";

import React, { useEffect, useState } from "react";
import { Check, Clipboard } from "lucide-react";
import { getRecipe } from "@/components/getRecipe";
import { Button } from "@/components/ui/button";

type RecipeResponseType = {
  fileName: string;
  image: string;
  data: any;
};

export function RecipeGeneration() {
    const [recipes, setRecipes] = useState<null | RecipeResponseType[]>(null);
    const [lockFunction, setLockFunction] = useState<null | string>(null);
    const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await getRecipe();
        setRecipes(res);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    if (!recipes) return;

    // Minecraft関数ファイルの生成
    const functionCommands = recipes
      .map(
        (recipe) =>
          `recipe give @s craftrecycle:${recipe.fileName.substring(
            0,
            recipe.fileName.indexOf(".")
          )}`
      )
      .join("\n");
    setLockFunction(functionCommands);
  }, [recipes]);

  function LockFunction() {
    return (
      <div className="relative w-full bg-neutral-100 dark:bg-neutral-900 p-2 rounded-lg overflow-auto mt-5">
        <Button
          size="icon"
          variant="outline"
          className="absolute right-2 top-2"
          onClick={() => copyToClipboard(lockFunction || "")}
          type="button"
        >
          {isCopied ? <Check /> : <Clipboard />}
        </Button>
        <pre className="w-full whitespace-pre overflow-scroll">
          <code>{lockFunction}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-[80px] flex max-w-[1024px] flex-col items-start px-8">
      <div className="flex flex-col mb-5">
        <h1 className="font-bold text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl">
          Recipe generation
        </h1>
      </div>
      {recipes ? <LockFunction /> : <div>loading</div>}
    </div>
  );
}
