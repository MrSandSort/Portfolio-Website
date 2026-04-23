import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"]
      },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)"
        },
        secondary: "rgb(var(--accent-secondary) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 25px 80px -45px rgba(15, 23, 42, 0.35)",
        darksoft: "0 25px 80px -45px rgba(2, 6, 23, 0.85)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top left, rgba(0, 120, 215, 0.24), transparent 38%), radial-gradient(circle at 85% 20%, rgba(0, 188, 242, 0.18), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
