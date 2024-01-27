import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ["var(--font-merriweather)"],
        sans: ["var(--font-inter)"],
      },
      colors: {
        foreground: "rgba(var(--color-foreground))",
        background: "rgba(var(--color-background))",
        accent: "rgba(var(--color-accent))",
        "darkmode-toggle-bg": "rgba(var(--color-darkmode-toggle-bg))",
        "darkmode-toggle-border": "rgba(var(--color-darkmode-toggle-border))",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "4096px",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgba(var(--color-foreground))",
            "--tw-prose-headings": "rgba(var(--color-accent))",
            "--tw-prose-links": "rgba(var(--color-accent))",
            "--tw-prose-bold": "rgba(var(--color-foreground))",
            "--tw-prose-counters": "rgba(var(--color-accent))",
            "--tw-prose-bullets": "rgba(var(--color-accent))",
            "--tw-prose-hr": "rgba(var(--color-table-border))",
            "--tw-prose-quotes": "rgba(var(--color-foreground))",
            "--tw-prose-quote-borders": "rgba(var(--color-accent))",
            "--tw-prose-captions": "rgba(var(--color-foreground))",
            "--tw-prose-code": "rgba(var(--color-foreground))",
            "--tw-prose-pre-code": "rgba(var(--color-background))",
            "--tw-prose-pre-bg": "rgba(var(--color-background))",

            // Links
            a: {
              fontFamily: "var(--font-merriweather)",
              fontWeight: "bold",
            },
            "a:hover": {
              "text-decoration": "none",
            },

            // Images
            img: {
              display: "block",
              borderRadius: "10px",
              margin: "0px",
              width: "100%",
            },

            // Captions
            figcaption: {
              textAlign: "center",
              fontFamily: "var(--font-merriweather)",
              fontStyle: "italic",
              fontWeight: "normal",
              fontSize: "0.875rem",
            },

            // Unordered lists
            ul: {
              "font-family": "var(--font-merriweather)",
            },

            // Paragraphs
            p: {
              "font-family": "var(--font-merriweather)",
            },

            // Code
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            code: {
              display: "inline-block",
              "text-indent": "0px",
              "background-color": "rgba(var(--color-inline-code-background))",
              padding: "0px 6px",
              "border-radius": "5px",
            },

            // Table
            table: {
              maxWidth: "100%",
              color: "rgba(var(--color-foreground))",
              marginBottom: "1rem",
              padding: 0,
              borderCollapse: "collapse",

              // Table row
              tr: {
                borderWidth: "1px",
                borderColor: "rgba(var(--color-table-border))",
                margin: 0,
                padding: 0,
                "&:nth-child(2n)": {
                  backgroundColor: "rgba(var(--color-table-dark-background))",
                },
              },
              // Table Header
              th: {
                fontWeight: "bold",
                borderWidth: "1px",
                borderColor: "rgba(var(--color-table-border))",
                textAlign: "left !important",
                margin: 0,
                padding: "6px 13px",
                "&:first-child": {
                  marginBottom: 0,
                },
                "&:last-child": {
                  marginBottom: 0,
                },
              },
              td: {
                borderWidth: "1px",
                borderColor: "rgba(var(--color-table-border))",
                textAlign: "left !important",
                padding: "6px 13px",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
