import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0E17",
          soft: "#0D1220",
          surface: "#121826",
          border: "#1E2636",
        },
        paper: {
          DEFAULT: "#F7F8FA",
          surface: "#FFFFFF",
          border: "#E3E7EE",
        },
        signal: {
          DEFAULT: "#F2A93B",
          soft: "#FFD59E",
          dim: "#8A5D1F",
        },
        circuit: {
          DEFAULT: "#4FD1C5",
          soft: "#9BEEE6",
          dim: "#1F6E68",
        },
        ash: {
          50: "#F5F6F8",
          100: "#E8ECF2",
          300: "#B7C0CE",
          400: "#8B94A7",
          500: "#6B7484",
          700: "#3A4152",
          900: "#171C28",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(30,38,54,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,38,54,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(232,236,242,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,236,242,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "40px 40px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-24" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "pulse-node": "pulse-node 2.4s ease-in-out infinite",
        "dash-flow": "dash-flow 1.2s linear infinite",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
