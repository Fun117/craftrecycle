"use client";

import { useEffect, useState } from "react";
import { useFormatter, useTranslations } from "next-intl";
import { MinecraftCard } from "../ui/minecraft/card";
import datapack from "../../../datapack.config";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { createListCollection } from "@chakra-ui/react";
import {
  DataPackConfigProps,
  DataPackReleaseProps,
} from "@/types/datapack.config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReleaseChannelBadge } from "./components/releasechannel";

interface Item {
  label: string;
  value: string;
}

function generateGameVersions(datapackConfig: DataPackConfigProps): Item[] {
  const t = useTranslations("pages.files");
  const gameVersions: Item[] = [
    { label: t("all game versions"), value: "all" },
  ];
  datapackConfig.release.forEach((release) => {
    release.game_versions.forEach((version) => {
      if (!gameVersions.some((v) => v.value === version)) {
        gameVersions.push({
          label: version,
          value: version,
        });
      }
    });
  });
  return gameVersions;
}

export default function ProjectFilesContent() {
  const t = useTranslations("pages.files");
  const [selectedGameVersion, setSelectedGameVersion] = useState("all");
  const [selectedGameEdition, setSelectedGameEdition] = useState("all");
  const [selectedReleaseChannel, setSelectedReleaseChannel] = useState("all");
  const [filteredReleases, setFilteredReleases] = useState<
    DataPackReleaseProps[]
  >(datapack.release);

  const format = useFormatter();

  // 各セレクションのデータ作成
  const gameVersionCollection = createListCollection({
    items: generateGameVersions(datapack),
  });

  const gameEditionCollection = createListCollection({
    items: [
      { label: t("all game edition"), value: "all" },
      { label: "Java", value: "java" },
      { label: "Bedrock", value: "bedrock" },
    ],
  });

  const releaseChannelCollection = createListCollection({
    items: [
      { label: t("all release channel"), value: "all" },
      { label: "Release", value: "release" },
      { label: "Pre Release", value: "pre-release" },
      { label: "Beta", value: "beta" },
      { label: "Alpha", value: "alpha" },
    ],
  });

  // フィルター処理
  useEffect(() => {
    let releases = datapack.release;

    if (selectedGameVersion !== "all") {
      releases = releases.filter((release) =>
        release.game_versions.includes(selectedGameVersion)
      );
    }

    if (selectedGameEdition !== "all") {
      releases = releases.filter(
        (release) => release.game_edition === selectedGameEdition
      );
    }

    if (selectedReleaseChannel !== "all") {
      releases = releases.filter(
        (release) => release.release_channel === selectedReleaseChannel
      );
    }

    setFilteredReleases(releases);
  }, [selectedGameVersion, selectedGameEdition, selectedReleaseChannel]);

  return (
    <section className="w-full lg:!max-w-[80%]">
      <div className="flex flex-col">
        <MinecraftCard className="flex flex-wrap gap-3">
          {/* Game Versions */}
          <SelectRoot
            collection={gameVersionCollection}
            defaultValue={["all"]}
            size="sm"
            width="320px"
            onValueChange={(value) => setSelectedGameVersion(value.value[0])}
          >
            <SelectLabel>{t("select game versions")}</SelectLabel>
            <SelectTrigger className="minecraft-input">
              <SelectValueText placeholder={t("all game versions")} />
            </SelectTrigger>
            <SelectContent>
              {gameVersionCollection.items.map((version, index) => (
                <SelectItem key={index} item={version}>
                  {version.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>

          {/* Game Edition */}
          <SelectRoot
            collection={gameEditionCollection}
            defaultValue={["all"]}
            size="sm"
            width="320px"
            onValueChange={(value) => setSelectedGameEdition(value.value[0])}
          >
            <SelectLabel>{t("select game edition")}</SelectLabel>
            <SelectTrigger className="minecraft-input">
              <SelectValueText placeholder={t("all game edition")} />
            </SelectTrigger>
            <SelectContent>
              {gameEditionCollection.items.map((edition, index) => (
                <SelectItem key={index} item={edition}>
                  {edition.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>

          {/* Release Channel */}
          <SelectRoot
            collection={releaseChannelCollection}
            defaultValue={["all"]}
            size="sm"
            width="320px"
            onValueChange={(value) => setSelectedReleaseChannel(value.value[0])}
          >
            <SelectLabel>{t("select release channel")}</SelectLabel>
            <SelectTrigger className="minecraft-input">
              <SelectValueText placeholder={t("all release channel")} />
            </SelectTrigger>
            <SelectContent>
              {releaseChannelCollection.items.map((channel, index) => (
                <SelectItem key={index} item={channel}>
                  {channel.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        </MinecraftCard>

        {/* Filtered Results */}
        <section className="flex flex-col mt-4">
          {filteredReleases.length > 0 ? (
            filteredReleases.map((release, index) => (
              <Link key={index} href={`/files/${release.version_id}`}>
                <div className="flex flex-col items-center gap-2 p-5 my-1 lg:!my-0 minecraft-card-shadow-default">
                  <div className="flex w-full">
                    <h1 className="font-bold truncate">{release.title}</h1>
                  </div>
                  <div className="flex flex-wrap justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      <ReleaseChannelBadge
                        label={release.release_channel.charAt(0)}
                        type={release.release_channel}
                        className="w-5 h-5"
                      />
                      <span className="font-normal text-sm">
                        {release.game_versions[0]}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="opacity-60">
                        {format.relativeTime(
                          new Date(release.created_at),
                          new Date()
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div>No releases match the filters.</div>
          )}
        </section>
      </div>
    </section>
  );
}
