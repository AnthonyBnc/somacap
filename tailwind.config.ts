import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      gridAutoFlow: {
        dense: "dense",
      },
      colors: {
        deepPurple: '#2A005F',
        midGray: '#999999',
        customPurple: "rgba(69, 18, 135, 0.74)"
      },
      backgroundImage: {  
        'gradient-to-r': 'linear-gradient(to bottom, #2A005F, #999999)', 
      }
    },
  },
  plugins: [],
} satisfies Config;
