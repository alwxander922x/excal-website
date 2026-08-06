import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f3f2f2",
        surface: "#eae9e9",
        ink: "#201e1d",
        divider: "rgba(32,30,29,0.4)",
        accent: {
          DEFAULT: "#ec3013",
          100: "#fff2ef",
          200: "#ffe0d9",
          300: "#ffc4b8",
          400: "#ff9783",
          500: "#ff563c",
          600: "#dd2b0f",
          700: "#ae1800",
          800: "#7c1405",
          900: "#4d170e"
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
