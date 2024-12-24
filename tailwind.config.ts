import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard-Regular", "sans-serif"],
        freesentation: ["Freesentation-9Black", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "bubble-1":
          "bubble 8s ease-in-out infinite, sideways 4s ease-in-out infinite alternate",
        "bubble-2":
          "bubble 10s ease-in-out infinite, sideways 4s ease-in-out infinite alternate",
        "bubble-3":
          "bubble 20s ease-in-out infinite, sideways 4s ease-in-out infinite alternate",
        "bubble-4":
          "bubble 17s ease-in-out infinite, sideways 4s ease-in-out infinite alternate",
        "bubble-5":
          "bubble 15s ease-in-out infinite, sideways 4s ease-in-out infinite alternate",
        "bubble-6":
          "bubble 30s ease-in-out infinite, sideways 4s ease-in-out infinite alternate",
        "bubble-7":
          "bubble 14s ease-in-out infinite, sideways 4s ease-in-out infinite alternate",
        "bubble-8":
          "bubble 16s ease-in-out infinite, sideways 4s ease-in-out infinite alternate",
        "bubble-9":
          "bubble 19s ease-in-out infinite, sideways 4s ease-in-out infinite alternate",
        "bubble-10":
          "bubble 12s ease-in-out infinite, sideways 4s ease-in-out infinite alternate",
        "bubble-11":
          "bubble 20s ease-in-out infinite, sideways 4s ease-in-out infinite alternate",
        "bubble-12":
          "bubble 19s ease-in-out infinite, sideways 4s ease-in-out infinite alternate",
        bounceUp: "bounceUp 1s ease-in-out infinite",
        bounceDown: "bounceDown 2s ease-in-out infinite",
      },
      keyframes: {
        bubble: {
          "0%": { transform: "translateY(0%)", opacity: "0.1" },
          "100%": { transform: "translateY(-130vh)" },
        },
        sideways: {
          "0%": { marginLeft: "0px" },
          "100%": { marginLeft: "200px" },
        },
        sprite: {
          "0%": { backgroundPosition: "-600px" },
          "20%": { backgroundPosition: "0px" },
          "25%": { backgroundPosition: "-200px" },
          "35%": { backgroundPosition: "-400px" },
          "50%": { backgroundPosition: "-200px" },
          "60%": { backgroundPosition: "0px" },
          "67%": { backgroundPosition: "-600px" },
          "100%": { backgroundPosition: "-600px" },
        },
        swim: {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(calc(-50vw - 100px), 0)" },
          "25%": { transform: "translate(calc(-50vw - 100px), 0)" },
          "35%": { transform: "translate(calc(-50vw - 100px), -20vh)" },
          "50%": { transform: "translate(-25vw, 15vh)" },
          "60%": { transform: "translate(-25vw, -20vh)" },
          "67%": { transform: "translate(-25vw, -20vh)" },
          "100%": { transform: "translate(calc(-100vw - 300px), 0)" },
        },
        bounceUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        bounceDown: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
        },
      },
    },
    safeList: [{ pattern: /animate-bubble-\d+/ }],
  },
  plugins: [],
} satisfies Config;
