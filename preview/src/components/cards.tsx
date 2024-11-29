"use client";

import React, { useEffect, useState } from "react";
import { getRecipe } from "./getRecipe";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Check, Clipboard } from "lucide-react";
import { Input } from "./ui/input";

type RecipeResponseType = {
  fileName: string;
  image: string;
  data: any;
};

export function RecipeCards() {
  const [recipes, setRecipes] = useState<null | RecipeResponseType[]>(null);
  const [filteredRecipes, setFilteredRecipes] = useState<
    null | RecipeResponseType[]
  >(null);
  const [searchKeyword, setSearchKeyword] = useState("");

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
    const get = async () => {
      const res = await getRecipe();
      setRecipes(res);
      setFilteredRecipes(res); // 初期状態ではすべてのレシピを表示
    };
    get();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);

    if (recipes) {
      const filtered = recipes.filter((recipe) =>
        recipe.fileName.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredRecipes(filtered);
    }
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // ページのリロードを防止
  };

  function Cards() {
    if (!filteredRecipes || filteredRecipes.length < 1) {
      return (
        <div className="flex w-full p-2">
          <h1>No recipes match your search criteria.</h1>
        </div>
      );
    }

    return (
      <section className="grid sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 justify-items-stretch gap-3 w-full overflow-hidden">
        {filteredRecipes.map((recipe, index) => {
          const recipe_json_data = JSON.stringify(recipe.data, null, 4);
          return (
            <Dialog key={index}>
              <DialogTrigger>
                <div className="flex flex-col justify-self-auto max-w-80 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow rounded-lg">
                  <div className="w-full p-2 text-start">
                    <h1 className="truncate">{recipe.fileName}</h1>
                  </div>
                  <img
                    src={recipe.image}
                    alt={recipe.fileName}
                    className="w-full rounded-b-lg"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-h-dvh overflow-scroll">
                <DialogHeader>
                  <DialogTitle>{recipe.fileName}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2 w-full overflow-auto">
                  <div className="relative w-full bg-neutral-100 dark:bg-neutral-900 p-2 rounded-lg overflow-auto">
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute right-2 top-2"
                      onClick={() => copyToClipboard(recipe_json_data)}
                      type="button"
                    >
                      {isCopied ? <Check /> : <Clipboard />}
                    </Button>
                    <pre className="w-full whitespace-pre overflow-scroll">
                      <code>{recipe_json_data}</code>
                    </pre>
                  </div>
                  <img
                    src={recipe.image}
                    alt={recipe.fileName}
                    className="w-full rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </section>
    );
  }

  return (
    <div className="container mx-auto mt-[80px] flex max-w-[1024px] flex-col items-start px-8">
      <div className="flex flex-col mb-5">
        <h1 className="font-bold text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl">
          Recipe Search
        </h1>
        <p className="font-sm text-foreground/50">recipe: {recipes?.length}</p>
      </div>
      <form className="flex w-full mb-5" onSubmit={onSubmit}>
        <Input
          placeholder="Search..."
          className="w-full"
          value={searchKeyword}
          onChange={handleSearch}
        />
      </form>
      {recipes ? <Cards /> : <div>loading</div>}
    </div>
  );
}
