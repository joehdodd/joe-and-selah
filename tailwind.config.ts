import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero":
          "linear-gradient(to right bottom, rgba(0,0, 0, 0.4), rgba(0,0, 0, 0.4)), url('/img/KatieDave-3.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
