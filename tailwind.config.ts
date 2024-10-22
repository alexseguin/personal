import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        alexDark: "#30211D",
        alexSemiDark: "#705448",
        alexMid: "#796666",
        alexSemiMid: "#9F736A"
      },
    },
  },
  plugins: [],
};
export default config;
