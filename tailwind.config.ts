import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        warm: {
          50: "#fffdf9",
          100: "#fff9f0",
          200: "#fff2df",
          300: "#f8e2c7",
        },
        citrus: {
          50: "#fff7ed",
          100: "#ffedd5",
          300: "#fdba74",
          400: "#fb923c",
          500: "#ff7a00",
          600: "#ea580c",
        },
        ink: {
          900: "#111111",
          700: "#333333",
          500: "#747474",
          300: "#a8a8a8",
        },
      },
      boxShadow: {
        soft: "0 16px 45px rgba(214, 184, 145, 0.14)",
        card: "0 12px 34px rgba(217, 190, 156, 0.12)",
        nav: "0 18px 48px rgba(191, 162, 127, 0.22)",
      },
    },
  },
  plugins: [],
} satisfies Config;
