# About

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Flow

Angular CLI をインストール

```bash
npm install -g @angular/cli
```

インストール

```bash
ng new angular-quickstart-no1
cd angular-quickstart-no1
```

.git 削除

```bash
rm -rf .git  # OS/X (bash)
rd .git /S/Q # windows
```

実行

```bash
ng serve --open
```

github に push

```bash
git status
git add .
git commit -m "first commit"
git push origin main
```

開発サーバーの起動

```bash
npm start
```

ビルドとテスト

```bash
# ビルド
npm run build

# テスト
npm run test

```

### Tailwind CSS

インストール

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

tailwind.config.js

```js
/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: ["./src//*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

styles.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
ng serve
```

Install Tailwind CSS with Angular - Tailwind CSS
https://tailwindcss.com/docs/guides/angular

### 新しいコンポーネントの作成

以下のコマンドで新しいコンポーネントを作成します。

```bash
ng generate component <component-name>
```
