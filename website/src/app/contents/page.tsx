import { MinecraftButton } from "@/components/ui/minecraft/button";
import { MinecraftCard } from "@/components/ui/minecraft/card";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-2 container p-5 mb-10">
      <MinecraftCard>
        <h1>Hello World</h1>
        <p>94781974104219471491724174194717</p>
      </MinecraftCard>
      <MinecraftCard variant="banner">
        <h1>Hello World</h1>
        <p>94781974104219471491724174194717</p>
      </MinecraftCard>
      <MinecraftCard variant="green">
        <h1>Hello World</h1>
        <p>94781974104219471491724174194717</p>
      </MinecraftCard>
      <MinecraftButton variant="transparent">Hello World</MinecraftButton>
      <MinecraftButton variant="green">Hello World</MinecraftButton>
      <MinecraftButton variant="gold">Hello World</MinecraftButton>
      <MinecraftButton variant="deepBlue">Hello World</MinecraftButton>
    </div>
  );
}

export default page;
