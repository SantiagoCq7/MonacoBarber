/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--color-border)", // subtle-cream
        input: "var(--color-input)", // white
        ring: "var(--color-ring)", // warm-brass
        background: "var(--color-background)", // warm-white
        foreground: "var(--color-foreground)", // near-black
        primary: {
          DEFAULT: "var(--color-primary)", // deep-espresso
          foreground: "var(--color-primary-foreground)", // warm-white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // warm-brass
          foreground: "var(--color-secondary-foreground)", // warm-white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // deep-red
          foreground: "var(--color-destructive-foreground)", // warm-white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // subtle-cream
          foreground: "var(--color-muted-foreground)", // medium-gray
        },
        accent: {
          DEFAULT: "var(--color-accent)", // rich-saddle-brown
          foreground: "var(--color-accent-foreground)", // warm-white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // near-black
        },
        card: {
          DEFAULT: "var(--color-card)", // subtle-cream
          foreground: "var(--color-card-foreground)", // near-black
        },
        success: {
          DEFAULT: "var(--color-success)", // forest-green
          foreground: "var(--color-success-foreground)", // warm-white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // amber
          foreground: "var(--color-warning-foreground)", // warm-white
        },
        error: {
          DEFAULT: "var(--color-error)", // deep-red
          foreground: "var(--color-error-foreground)", // warm-white
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        crimson: ["Crimson Text", "serif"],
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        display: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        heading: ["2rem", { lineHeight: "1.3" }],
        subheading: ["1.5rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        xs: ["0.75rem", { lineHeight: "1.4" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      animation: {
        "pulse-soft": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      boxShadow: {
        warm: "0 4px 12px rgba(44, 24, 16, 0.08)",
        "warm-lg": "0 8px 24px rgba(44, 24, 16, 0.12)",
        "warm-xl": "0 16px 48px rgba(44, 24, 16, 0.16)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
