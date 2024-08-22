import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}", // 수정된 경로
  ],
  theme: {
    extend: {
      colors: {
        main: "#0095F6",
        line: "#d8d5d5",
        navy: "#00376B",
        grey: "#fafafa",
        text: "#737373",
        error: "#ed2024",
      },
    },
  },
  plugins: [],
};
export default config;
