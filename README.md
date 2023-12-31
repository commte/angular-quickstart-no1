# AngularQuickstartNo1

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
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
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

### コンポーネントの編集

src/app/app.component.html

```html
<div class="flex flex-col items-center justify-center min-h-screen py-2">
  <h1 class="text-5xl">Welcome to {{ title }}!</h1>
  <img width="300" src="https://angular.io/assets/images/logos/angular/angular.svg" />
</div>
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# angular-quickstart-no1
