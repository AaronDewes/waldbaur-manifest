import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./**/*.vue"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fadeOut: "fadeOut 2s ease-in-out forwards",
        fadeIn: "fadeIn 2s ease-in-out",
      },

      // that is actual animation
      keyframes: ({ theme }) => ({
        fadeIn: {
          "0%": { color: theme("colors.transparent") },
          "100%": { color: theme("colors.white") },
        },
        fadeOut: {
          "0%": { color: theme("colors.white") },
          "100%": { color: theme("colors.transparent") },
        },
      }),
    },
  },
};
