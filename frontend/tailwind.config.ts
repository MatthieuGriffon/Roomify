import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "anonymous-pro": ['"Anonymous Pro"', "monospace"],
      },
      screens: {
        desktop:"1920px",
        laptop: "1440px",
        laptopSmall: "1230px",
        tablet: "920px",
        smartphone: "700px" // Breakpoint personnalisé
      },
      padding: {
        buttonX: "clamp(0.25rem, 1vw, 1rem)",  // Padding horizontal
        buttonY: "clamp(0.25rem, 1vw, 1rem)",   // Padding vertical
      },
      fontSize: {
        roomify: ["clamp(0.5rem, 4vw, 2rem)", "1.2"], // Police dynamique
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
      },
      container: {
        padding: "1%",
      },
      
    },
  },
  plugins: [],
} satisfies Config;
