import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yt: {
          bg: "#0F0F0F",
          surface: "#181818",
          surface2: "#272727",
          hover: "#3F3F3F",
          border: "#303030",
          borderLight: "#3E3E3E",
          text: "#F1F1F1",
          muted: "#AAAAAA",
          red: "#FF0033",
          redHover: "#CC0000",
          blue: "#3EA6FF",
          chip: "#272727",
          chipActive: "#F1F1F1",
          chipActiveText: "#0F0F0F",
        },
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
