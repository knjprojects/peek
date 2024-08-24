import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff1432",

          secondary: "#0000ff",

          accent: "#00ff00",

          neutral: "#ff00ff",

          "base-100": "#ff00ff",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ffff00",
        },
      },
      {
        light: {
          primary: "#570df8",
          secondary: "#f000b8",
          // Other color definitions
        },
        dark: {
          primary: "#0d2538",
          secondary: "#f000b8",
          // Other color definitions
        },
      },
    ],
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
} satisfies Config;

export default config;
