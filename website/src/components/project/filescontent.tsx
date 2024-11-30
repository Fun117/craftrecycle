"use client";

import { useTranslations } from "next-intl";
import { MinecraftCard } from "../ui/minecraft/card";

export default function ProjectFilesContent() {
  const t = useTranslations("pages.files");
  return (
    <section className="w-full lg:!max-w-[80%]">
      <MinecraftCard variant="banner" className="flex flex-col w-full p-5">
        <h1 className="font-bold text-xl sm:!text-2xl md:!text-3xl lg:text-4xl">
          {t("coming soon")}
        </h1>
      </MinecraftCard>
    </section>
  );
}
