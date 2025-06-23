# Vue-project
Vue.jsの勉強用リポジトリ

## 概要
dockerを使用して構築した、Nuxt.js (Vue.js) のフロントエンド開発環境。wsl2+ubuntu上で動作する。

## 環境構築手順
1.  **リポジトリをクローン**
    ```bash
    git clone [https://github.com/yahata00009/Vue-project.git](https://github.com/yahata00009/Vue-project.git)
    ```

2.  **プロジェクトディレクトリに移動**
    ```bash
    cd Vue-project
    ```
3.  **コンテナのビルドと起動**
    以下のコマンド一発で、依存パッケージのインストールと開発サーバーの起動が自動的に行われます。
    ```bash
    docker compose up -d --build
    ```

* **開発環境の起動:**
    ```bash
    docker compose up -d
    ```
* **Nuxtアプリケーション:**
    * [http://localhost:3000](http://localhost:3000)
## ディレクトリ構成 (Directory Structure)

```
.
├── Dockerfile          # Node.js環境を定義
├── docker-compose.yml  # Dockerの起動設定
└── src/                # Nuxtアプリケーションの全ソースコード
    ├── app.vue
    ├── nuxt.config.ts
    ├── package.json
    └── ...
```
