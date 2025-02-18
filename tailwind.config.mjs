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
                "dracula-bg": "#F5F5F5", // Lighter grayish white for a clean, professional background
                "dracula-current-line": "#D9D9D9", // Softer gray for subtle dividers
                "dracula-foreground": "#222222", // Darker gray for stronger contrast in text
                "dracula-comment": "#888888", // Slightly darker for better readability
                "dracula-cyan": "#3A506B", // Deep muted blue for accents (trustworthy & professional)
                "dracula-green": "#D35400", // Warm dark orange for CTA buttons (law firms avoid bright greens)
                "dracula-orange": "#4A4A4A", // Neutral dark gray for muted secondary text
                "dracula-pink": "#D35400", // Matched to `dracula-green` for consistent action colors
                "dracula-purple": "#3A506B", // Matched to `dracula-cyan` for uniform branding
                "dracula-red": "#C0392B", // Deep professional red for warnings/errors
                "dracula-yellow": "#222222", // Dark gray instead of yellow (yellow often doesn’t work well in law designs)
            },
        },
    },
    plugins: [
        function({ addUtilities }) {
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