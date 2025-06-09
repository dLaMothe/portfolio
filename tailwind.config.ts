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
        "quest-1": "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
        "quest-2": "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        "quest-3": "linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)",
        "quest-4": "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        "quest-5": "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        "quest-6": "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
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
