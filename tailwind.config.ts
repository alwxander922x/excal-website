import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f2f2f2",
        surface: "#cbcbcb",
        ink: "#17201c",
        divider: "rgba(23,32,28,0.4)",
        accent: {
          DEFAULT: "#174d38",
          100: "#e8f0ec",
          200: "#c9dcd2",
          300: "#9dc0af",
          400: "#679b82",
          500: "#3c7a5d",
          600: "#245c40",
          700: "#174d38",
          800: "#123a2a",
          900: "#0d291e"
        },
        maroon: {
          DEFAULT: "#4d1717",
          100: "#f4e6e6",
          200: "#e0bdbd",
          300: "#c58a8a",
          400: "#a35555",
          500: "#7c3232",
          600: "#632222",
          700: "#4d1717",
          800: "#3a1010",
          900: "#280a0a"
        }
      },
      fontFamily: {
        heading: ["Archivo", "system-ui", "sans-serif"],
        body: ["Archivo", "system-ui", "sans-serif"]
      },
      borderRadius: { none: "0px" },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        slideUp: { from: { opacity: "0", transform: "translateY(100%)" }, to: { opacity: "1", transform: "translateY(0)" } }
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        slideUp: "slideUp .4s cubic-bezier(.16,1,.3,1) both"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config
