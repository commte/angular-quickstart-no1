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

### app.component.html

このファイルは MyComponentComponent のテンプレートを定義しており、「my-component が表示されました!」というテキストを含む単純なパラグラフを表示します。これらのファイルは、Angular アプリケーションの基本的な構造を構成する良い例です。AppComponent がメインのコンポーネントであり、MyComponentComponent はその中で使用される子コンポーネントです。このようにコンポーネントを組み合わせることで、より複雑なアプリケーションを構築できます。

```html
<div class="flex flex-col items-center justify-center min-h-screen py-2">
  <h1 class="text-5xl">Welcome to {{ title }}!</h1>
</div>
```

### app.component.ts

```ts
// angular-quickstart-no1/src/app/my-component/my-component.component.ts

// AngularのコアライブラリからComponentとOnInitをインポート
import { Component, OnInit } from "@angular/core";

// 特定のクラスがAngularコンポーネントであることをフレームワークに伝えます
@Component({
  selector: "app-my-component", // コンポーネントのセレクター名を定義。HTMLで <app-my-component> として使用
  standalone: true, // スタンドアロンコンポーネントを示す。独立して存在し、他のモジュールに含まれない
  templateUrl: "./my-component.component.html", // コンポーネントのテンプレートファイルのパス
  styleUrls: ["./my-component.component.scss"], // コンポーネントのスタイルファイルのパス
})
export class MyComponentComponent implements OnInit {
  // MyComponentComponentクラスの定義。OnInitインターフェースを実装
  constructor() {} // コンストラクタ。コンポーネントの初期化時に呼ばれる

  ngOnInit(): void {} // ngOnInitメソッド。コンポーネントの初期化時に呼ばれるライフサイクルフック
}
```

@Component デコレータは、このクラスが Angular のコンポーネントであることを示します。selector はこのコンポーネントの HTML タグ名を定義し、templateUrl と styleUrls はそれぞれこのコンポーネントの HTML と CSS ファイルへのパスです。imports 配列に MyComponentComponent を含めることで、このコンポーネント内で MyComponentComponent を使用できるようになります。

### スタンドアロンコンポーネント

@Component デコレータがあるだけでは、そのコンポーネントがスタンドアロンであるかどうかを判断することはできません。スタンドアロンコンポーネントかどうかを確認するためには、@Component デコレータ内の設定を確認する必要があります。

```ts
@Component({
  selector: "app-example",
  standalone: true, // これがスタンドアロンコンポーネントであることを示す
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.scss"],
})
export class ExampleComponent {
  // コンポーネントのロジック
}
```

スタンドアロンコンポーネントであるかを判断するためのキーは、@Component デコレータ内で standalone: true が設定されているかどうかです。

### @Component と、@NgModule が混在していることはありますか？

@Component と @NgModule が同じファイル内に混在していることはありますが、それは比較的珍しいケースです。通常、Angular アプリケーションでは、コンポーネント（@Component で定義される）とモジュール（@NgModule で定義される）は別々のファイルに配置されます。しかし、特定の状況下では、これらが 1 つのファイル内に共存することもあります。

### @NgModule

@Component はアプリケーションのビューを構成する個々の要素を定義し、それぞれの要素の見た目と振る舞いを指定します。@NgModule はアプリケーションの異なる部分（コンポーネントやサービスなど）をグループ化し、アプリケーションの構造と依存関係を整理します。@NgModule は Angular で用いられるデコレータで、アプリケーションの一部をモジュールとしてまとめる役割を担います。モジュールは Angular アプリケーションの構成要素で、関連するコンポーネント、サービス、ディレクティブ、パイプなどをグループ化し、機能的な単位を形成します。

### ディレクティブ（Directive）

Angular における「ディレクティブ（Directive）」は、HTML 要素の外見や振る舞いを動的に変更するための重要な機能です。ディレクティブは、HTML テンプレートに新しい動作を追加したり、既存の要素を変更したりするために使用されます。

Angular には大きく分けて 3 種類のディレクティブがあります：

1. コンポーネントディレクティブ:
   これは実際には特別な種類のディレクティブで、テンプレート（HTML）とロジック（TypeScript）を組み合わせて、アプリケーションの UI 部分を形成します。Angular では、コンポーネントもディレクティブの一種と見なされます。

2. 構造ディレクティブ:
   構造ディレクティブは、DOM における要素の構造を変更します。たとえば、要素を追加したり削除したりすることができます。代表的な構造ディレクティブには *ngIf（条件に基づいて要素を表示/非表示にする）や *ngFor（リストをループして要素を繰り返し表示する）があります。

3. 属性ディレクティブ:
   属性ディレクティブは、要素の外見や動作を変更しますが、その構造は変えません。例えば、ngStyle や ngClass ディレクティブは、要素のスタイルやクラスを動的に変更するのに使用されます。
