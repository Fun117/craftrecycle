import { DataPackConfigProps } from "@/types/datapack.config";

const datapack: DataPackConfigProps = {
  created_at: "2024-11-29",
  license: {
    label: "CC-BY-SA-4.0",
    link: "https://github.com/Fun117/craftrecycle/blob/main/LICENSE.txt",
  },
  members: [
    {
      avatar: "https://github.com/fun117.png",
      username: "Fun117",
      role: "owner",
      website: "https://fun117.dev",
    },
  ],
  release: [
    {
      version_id: "je-1.0.0-beta",
      title: "Craft Recycle 1.0.0 Beta",
      i18n_title: false,
      created_at: "2024/12/1",
      updated_at: "2024/12/1",
      release_channel: "beta",
      game_edition: "java",
      game_versions: ["1.21", "1.21.1"],
      file: {
        label: "Java Edition 1.21 beta",
        filename: "je-1.21-beta.zip",
      },
    },
  ],
};

export default datapack;
