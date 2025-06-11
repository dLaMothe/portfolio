import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-quest-1",
    "bg-quest-2",
    "bg-quest-3",
    "bg-quest-4",
    "bg-quest-5",
    "bg-quest-6",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["var(--font-pixel)", "Monaco", "Consolas", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        "quest-1": "linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)",
        "quest-2": "linear-gradient(135deg, #ffa726 0%, #fb8c00 100%)",
        "quest-3": "linear-gradient(135deg, #ff8a80 0%, #ff5722 100%)",
        "quest-4": "linear-gradient(135deg, #81c784 0%, #4caf50 100%)",
        "quest-5": "linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)",
        "quest-6": "linear-gradient(135deg, #f8bbd9 0%, #e91e63 100%)",
      },
      colors: {
        "skill-blue": "#4facfe",
        "skill-green": "#43e97b",
        "skill-pink": "#fa709a",
        "skill-purple": "#c471ed",
        "skill-orange": "#f093fb",
        "skill-yellow": "#f6d365",
      },
    },
  },
  plugins: [],
};
export default config;
