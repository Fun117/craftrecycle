# クラフトリサイクル

![GitHub Release](https://img.shields.io/github/v/release/fun117/craftrecycle)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/fun117/craftrecycle)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/fun117/craftrecycle)
![GitHub Discussions](https://img.shields.io/github/discussions/fun117/craftrecycle)
![GitHub License](https://img.shields.io/github/license/fun117/craftrecycle)
![Website](https://img.shields.io/website?url=https%3A%2F%2Ffun117.github.io%2Fcraftrecycle)

このプロジェクトは、Minecraftにおけるアイテムやブロックをリサイクル可能にするためのレシピを追加し、新たなクラフト体験を提供するデータパックです。

- [バージョン](#バージョン)
- [公開プラットフォーム](#公開プラットフォーム)
- [使い方](#使い方)
  - [リサイクル機能](#1-リサイクル機能)
  - [リセット](#2-リセット)
  - [アンインストール](#3-アンインストール)
- [動画・配信について](#動画配信について)
- [レシピ一覧](#レシピ一覧)
- [レシピプレビューサイトについて](#レシピプレビューサイトについて)
  - [サーバーの起動](#サーバーの起動)
    - [環境をセットアップ](#1-必要な環境をセットアップ)
    - [開発サーバーを起動](#2-開発サーバーを起動)
  - [サーバーを停止](#サーバーの停止)

---

## バージョン

当データパックは以下のバージョンに対応しています。

- **Minecraft Java Edition 1.21** から **1.21.1**  
  最新情報については、[公式リリースノート (1.21)](https://www.minecraft.net/ja-jp/article/minecraft-java-edition-1-21) および [公式リリースノート (1.21.1)](https://www.minecraft.net/ja-jp/article/minecraft-java-edition-1-21-1) をご参照ください。

- **パックフォーマット 48**  
  パックフォーマットの詳細については、[Minecraft Wiki](https://minecraft.wiki/w/Pack_format) をご確認ください。

> ⚠ **注意**  
> このデータパックは **1.21 以降のバージョン** を対象としているため、1.20.x 以前のバージョンでは動作しません。ご利用の際はゲームのバージョンをご確認ください。

将来的なバージョンアップや互換性の更新については、[リポジトリ](https://github.com/Fun117/craftrecycle)の更新情報をご確認ください。

## 公開プラットフォーム

データパックの詳細およびダウンロードはこちらのリンクからご確認いただけます。

[Modrinth - CraftRecycle](https://modrinth.com/project/craftrecycle)

---

## 使い方

このデータパックは以下の主要機能を提供しています。

### 1. リサイクル機能

アイテムやブロックを素材に戻したり、他の形状に変換したりするレシピが追加されます。例として以下のレシピが含まれます：

- **ドア**を素材に戻す
- **ハーフブロック**を元のブロックに戻す
- **ハーフブロック**から階段を作る

これらを含め、合計250以上のクラフトレシピが利用可能です。詳しくは[レシピ一覧](#レシピ一覧)をご確認ください。

---

### 2. リセット

当データパックに関連する進捗やデータをリセットする機能です。セットアップ関数実行時に自動でリセットされるため、データが一貫して管理されます。リセットを手動で実行する場合は以下のコマンドを使用してください。

```command
/function craftrecycle:reset
```

---

### 3. アンインストール

データパック無効化後もスコアボードなどの関連データが残ることを防ぐため、アンインストール関数を実行することを推奨します。削除の際は以下のコマンドを使用した後、データパックをフォルダから削除してください。

```command
/function craftrecycle:uninstall
```

---

## 動画・配信について

データパックを使用した動画や配信を行う際は、概要欄やコメント欄など視聴者が確認できる場所にクレジットの記載をお願いします。以下は例です：

```text
▼ クラフトリサイクル / 制作: Fun117
https://craftrecycle.fun117.dev
```

二次配布および自作発言は固くお断りしています。不具合やバグの報告は[こちら](https://github.com/Fun117/craftrecycle/issues)からお願いいたします。

---

## レシピ一覧

追加されるレシピの詳細は以下のリンクから確認可能です：

- [レシピ一覧を見る](README/recipe.md)

完全な情報を簡単に閲覧したい場合、[レシピプレビューサイト](#レシピプレビューサイトについて)を活用してください。

---

## レシピプレビューサイトについて

レシピのプレビューサイトでは、データパックに含まれるすべてのレシピを簡単に確認できます。現在はローカル環境での利用を推奨しており、以下の手順で起動できます。

---

### サーバーの起動

#### 1. 必要な環境をセットアップ

以下のコマンドを使用してプロジェクトをクローンし、依存関係をインストールします。

```bash
git clone https://github.com/Fun117/craftrecycle.git
cd preview
npm install
```

#### 2. 開発サーバーを起動

次のコマンドを実行して開発サーバーを起動します。

```bash
npm run dev
```

実行後、以下のようなログが表示されます。指定されたURL（例: `http://localhost:3000`）をブラウザで開いてサイトを閲覧できます。

```log
> preview@0.1.0 dev
> next dev

   ▲ Next.js 15.0.3
   - Local:        http://localhost:3000

 ✓ Starting...
```

---

### サーバーの停止

開発サーバーを停止するには、実行中のターミナルで `Ctrl + C` を押してください。

---

現在、オンラインでの公開についても対応を検討中です。進捗については、公式リポジトリやサイトをご確認ください。
