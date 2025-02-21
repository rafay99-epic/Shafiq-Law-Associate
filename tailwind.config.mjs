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
        "dracula-bg": "#FFFFFFFF",
        "dracula-current-line": "#D9D9D9",
        "dracula-foreground": "#222222",
        "dracula-comment": "#888888",
        "dracula-cyan": "#3A506B",
        "dracula-green": "#D35400",
        "dracula-orange": "#4A4A4A",
        "dracula-pink": "#D35400",
        "dracula-purple": "#3A506B",
        "dracula-red": "#C0392B",
        "dracula-yellow": "#222222",
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
