"use client";

import React, { useEffect, useState } from "react";
import { getRecipe } from "./getRecipe";
import { Button } from "./ui/button";
import { Check, Clipboard } from "lucide-react";
import { Input } from "./ui/input";

type RecipeResponseType = {
  fileName: string;
  image: string;
  data: any;
};

export function RecipeTable() {
  const [recipes, setRecipes] = useState<null | RecipeResponseType[]>(null);
  const [recipeTable, setRecipeTable] = useState<null | string>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [filePath, setFilePath] = useState<string>("/images/recipe/"); // ファイルパスのステート

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

  // レシピデータを取得し Markdown テーブルを生成
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

  // ファイルパスに基づいて Markdown テーブルを生成
  useEffect(() => {
    if (!recipes) return;

    const tableHeader = `| Recipe ID | Preview |\n|-----------|------------|\n`;
    const tableRows = recipes
      .map(
        (recipe) =>
          `| ${recipe.fileName.substring(
            0,
            recipe.fileName.indexOf(".")
          )} | ![${recipe.fileName}](${filePath}${recipe.image}) |`
      )
      .join("\n");
    setRecipeTable(tableHeader + tableRows);
  }, [recipes, filePath]);

  function CustomTable() {
    return (
      <div className="relative w-full bg-neutral-100 dark:bg-neutral-900 p-2 rounded-lg overflow-auto">
        <Button
          size="icon"
          variant="outline"
          className="absolute right-2 top-2"
          onClick={() => copyToClipboard(recipeTable || "")}
          type="button"
        >
          {isCopied ? <Check /> : <Clipboard />}
        </Button>
        <pre className="w-full whitespace-pre overflow-scroll">
          <code>{recipeTable}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-[80px] flex max-w-[1024px] flex-col items-start px-8">
      <div className="flex flex-col mb-5">
        <h1 className="font-bold text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl">
          Recipe Table
        </h1>
      </div>
      <form
        className="flex w-full mb-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          placeholder="file path..."
          className="w-full"
          value={filePath}
          onChange={(e) => setFilePath(e.target.value)}
        />
      </form>
      {recipes ? <CustomTable /> : <div>loading</div>}
    </div>
  );
}
