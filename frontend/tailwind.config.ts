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
        smartphone: { max: "699px" },  // Pour les écrans <= 699px
        tablet: "700px",               // À partir de 700px
        laptopSmall: "1230px",         // À partir de 1230px
        laptop: "1440px",              // À partir de 1440px
        desktop: "1920px",             // À partir de 1920px
      },
      padding: {
        buttonX: "clamp(0.25rem, 1vw, 1rem)",  // Padding horizontal
        buttonY: "clamp(0.25rem, 1vw, 1rem)",   // Padding vertical
      },
      fontSize: {
        responsive: ["clamp(0.875rem, 2vw, 1.5rem)", "1.2"], // Police dynamique
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
