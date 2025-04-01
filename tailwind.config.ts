import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        dmserif: ["DM Serif Display", "serif"],
      }, 
      screens: {
        'w768': '768px',
        'w820': '820px',
        'w853': '853px',
        'w912': '912px',
      },
      
    },
  },
  plugins: [],
} satisfies Config;
