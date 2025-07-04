import { fontFamily as defaultFontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimatePlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const darkMode = ["class"];
export const plugins = [tailwindcssAnimatePlugin];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
      xs: "360px",
    },
  },
  extend: {
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      rotate: "rotate 5s linear infinite",
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    boxShadow: {
      "aura-booksy": "0 0 8px 4px rgba(0, 163, 173, 0.5)",
    },
    colors: {
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      background: "hsl(var(--background))",
      booksy: "#00a3ad",
      "booksy-hover": "#52B6BE",
      border: "hsl(var(--border))",
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      foreground: "hsl(var(--foreground))",
      input: "hsl(var(--input))",
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      ring: "hsl(var(--ring))",
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
    },
    flexGrow: {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
    },
    fontFamily: {
      raleway: ["Raleway Variable", "sans-serif"],
      sans: ["Roboto", ...defaultFontFamily.sans],
    },
    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
  },
};
