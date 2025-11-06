import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"]
      },
      colors: {
        "surface-50": "#f6f8fb",
        "surface-100": "#e9eef5",
        "surface-900": "#111827",
        brand: {
          50: "#f3f9ff",
          100: "#e0edff",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e3fa8"
        }
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem"
      }
    }
  },
  plugins: []
};

export default config;
