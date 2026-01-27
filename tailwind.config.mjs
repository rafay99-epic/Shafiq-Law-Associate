/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out",
      },
      maxWidth: {
        "7.5xl": "98rem",
      },
      scrollbarHide: {
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },

      colors: {
        "dracula-bg": "#F5F0E8",
        "dracula-current-line": "#E8E0D5",
        "dracula-foreground": "#2B2826",
        "dracula-comment": "#7F7670",
        "dracula-cyan": "#3D5233",
        "dracula-green": "#A67A4F",
        "dracula-orange": "#5C7352",
        "dracula-pink": "#C09970",
        "dracula-purple": "#3D5233",
        "dracula-red": "#B54040",
        "dracula-yellow": "#2B2826",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
