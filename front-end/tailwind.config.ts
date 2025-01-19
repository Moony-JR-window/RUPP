import { redirect } from "next/dist/server/api-utils";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        first:'#e2e8f0'
      },
      container: {
        padding: '1rem',
        center: true,
      },
    },
  },
  plugins: [],
} satisfies Config;
