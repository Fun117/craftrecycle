"use client";

import GetMarkdownContent from "./getContent";

export default function ProjectMainContent() {
  return (
    <section className="w-full lg:!max-w-[80%]">
      <div className="flex flex-col w-full p-5 minecraft-box-shadow">
        <GetMarkdownContent url="/description.md"/>
      </div>
    </section>
  );
}
