import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1280px",
        },
      },
      fontFamily: {
        demo1: ["Poppins", "sans-serif"],
        "demo2-serif": ["Hepta Slab", "serif"],
        "demo2-sans": ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
