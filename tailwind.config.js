/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // JITモードを有効にする
  content: ["./src/**/*.{html,ts}"], // ここにプロジェクト内のHTMLとAngularテンプレートへのパスを指定
  theme: {
    extend: {},
  },
  plugins: [],
};
