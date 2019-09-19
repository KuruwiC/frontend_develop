# フロントエンド開発環境(in Docker)
## 構成
  自分用フロントエンド開発環境です。

  本番環境などを考慮し、browsersyncをnginxコンテナと連携させ、nginxコンテナのpublicルートに `/app/dist` ディレクトリをマウントして動作させています。

  スクリプトでよしなにやってDockerfileに `dist` の `COPY` を追加すれば本番でもそのまま使える想定です。

  nodejsコンテナはworkspaceコンテナです。開発に合わせて適宜パッケージを追加・削除していきます。

  動作確認用にsassとvue.jsを使った稚拙なコードが存在しているので要削除。

  主な使用技術 : Webpack4, babel7, Vue.js, ESLint, Prettier, BrowserSync, Jest, Docker, NginX

```
.
├── README.md                  ... 本ファイル
├── app                        ... フロントエンド環境ルート
│   ├── .eslintrc.js          ... eslint設定
│   ├── babel.config.js       ... babel設定
│   ├── bs-config.js          ... BrowserSync設定
│   ├── dist                  ... publicにするもの
│   │   └── index.html       ... 動作確認用index.html
│   ├── jest.config.js        ... jest(テスト)設定
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── js
│   │   └── scss
│   ├── webpack.base.js       ... webpack共通設定
│   ├── webpack.dev.js        ... webpack開発環境設定
│   └── webpack.prod.js       ... webpack本番環境設定
├── docker
│   ├── nginx
│   │   ├── Dockerfile
│   │   ├── default.conf
│   │   └── nginx.conf
│   └── nodejs
│       └── Dockerfile
└── docker-compose.yml
```

## 使い方
### セットアップ
* 環境起動

```
docker-compose up
```

* nodejsコンテナ入る

```
docker-compose exec nodejs sh
```

* 依存パッケージのインストール(nodejsコンテナ内)

```
npm install
```

### 監視, ビルドなど(nodejsコンテナ内)
* 開発用ビルド & lint & fix & 監視開始

```
npm run watch
```

* 本番用ビルド

```
npm run build
```

* 開発用ビルド

```
npm run build-dev
```

* lint & fix

```
npm run format
```

* テスト実行(詳細は[jest](https://jestjs.io/ja/)参照)

```
npm run test
```

* 動作確認

  `localhost:3000` でbrowsersync経由でアクセス

  `localhost:80` でnginxコンテナに直接アクセス
