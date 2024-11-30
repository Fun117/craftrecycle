"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { MinecraftCard } from "../ui/minecraft/card";

export default function GetMarkdownImagesContent({ url }: { url: string }) {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    // GitHub APIのエンドポイントからMarkdownを取得
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Markdownファイルの取得に失敗しました");
        }
        return response.text();
      })
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ReactMarkdown
      className="markdown-body"
      remarkPlugins={[remarkGfm]}
      components={{
        img(props) {
          const { src, alt } = props;
          return (
            <Dialog>
              <DialogTrigger>
                <div
                  className="relative w-[200px] h-[200px] bg-left bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${src})` }}
                ></div>
              </DialogTrigger>
              <DialogContent className="border-none p-0">
                <MinecraftCard>
                  <DialogTitle />
                  <DialogDescription />
                  <img alt={alt} src={src} />
                </MinecraftCard>
              </DialogContent>
            </Dialog>
          );
        },
        p(props) {
          const { children } = props;
          return <div className="flex flex-wrap gap-2">{children}</div>;
        },
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
}
