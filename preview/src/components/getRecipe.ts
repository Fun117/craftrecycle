"use server";

import fs from "fs";
import path from "path";

export async function getRecipe() {
  const dirPath = "../datapack/data/craftrecycle/recipe";
  const files = fs.readdirSync(dirPath);

  const recipes = files.map((file) => {
    const filePath = path.join(dirPath, file);
    const baseName = file.substring(0, file.indexOf("."));
    const imagePath = `./public/images/recipe/${baseName}.png`;
    const image = fs.existsSync(imagePath) ? `/images/recipe/${baseName}.png` : `/images/recipe/_.png`;

    const content = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(content);
    return { fileName: file, data, image };
  });

  return recipes;
}