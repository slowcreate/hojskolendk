/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      orange: {
        950: "rgba(25, 9, 0, 1)",
        900: "rgba(51, 18, 0, 1)",
        800: "rgba(102, 36, 1, 1)",
        700: "rgba(153, 54, 0, 1)",
        600: "rgba(204, 71, 1, 1)",
        500: "rgba(255, 89, 0, 1)",
        400: "rgba(255, 121, 51, 1)",
        300: "rgba(255, 156, 102, 1)",
        200: "rgba(255, 189, 152, 1)",
        100: "rgba(255, 222, 204, 1)",
        50: "rgba(255, 238, 229, 1)",
      },

      turkis: {
        950: "rgba(6, 34, 29, 1)",
        900: "rgba(13, 73, 61, 1)",
        800: "rgba(26, 142, 119, 1)",
        700: "rgba(40, 215, 180, 1)",
        600: "rgba(113, 229, 206, 1)",
        500: "rgba(184, 242, 230, 1)",
        400: "rgba(199, 245, 236, 1)",
        300: "rgba(212, 247, 240, 1)",
        200: "rgba(225, 249, 245, 1)",
        100: "rgba(242, 253, 251, 1)",
        50: "rgba(246, 253, 252, 1)",
      },

      brun: {
        950: "rgba(8, 7, 7, 1)",
        900: "rgba(18, 14, 14, 1)",
        800: "rgba(34, 29, 27, 1)",
        700: "rgba(51, 43, 41, 1)",
        600: "rgba(68, 57, 55, 1)",
        500: "rgba(86, 72, 71, 1)",
        400: "rgba(124, 105, 101, 1)",
        300: "rgba(159, 141, 137, 1)",
        200: "rgba(191, 179, 175, 1)",
        100: "rgba(223, 217, 216, 1)",
        50: "rgba(238, 236, 235, 1)",
      },

      beige: {
        950: "rgba(52, 26, 0, 1)",
        900: "rgba(97, 50, 0, 1)",
        800: "rgba(194, 100, 0, 1)",
        700: "rgba(255, 149, 35, 1)",
        600: "rgba(255, 196, 133, 1)",
        500: "rgba(255, 243, 230, 1)",
        400: "rgba(255, 245, 235, 1)",
        300: "rgba(255, 248, 240, 1)",
        200: "rgba(255, 250, 246, 1)",
        100: "rgba(255, 253, 250, 1)",
        50: "rgba(255, 255, 255, 1)",
      },

      petroleum: {
        950: "rgba(0, 12, 15, 1)",
        900: "rgba(1, 29, 35, 1)",
        800: "rgba(2, 53, 65, 1)",
        700: "rgba(2, 82, 100, 1)",
        600: "rgba(3, 110, 134, 1)",
        500: "rgba(4, 139, 168, 1)",
        400: "rgba(6, 192, 234, 1)",
        300: "rgba(56, 215, 250, 1)",
        200: "rgba(121, 228, 252, 1)",
        100: "rgba(190, 242, 253, 1)",
        50: "rgba(220, 248, 254, 1)",
      },

      white: "#fff",
      black: "#000",
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      konsultativDesk: ["1.125rem", { lineHeight: "1.0rem" }],
      bodyDesk: ["1.5rem", { lineHeight: "1.25rem" }],
      baseDesk: ["1.938rem", { lineHeight: "2.22rem" }],
      smallDesk: ["2.369rem", { lineHeight: "2.25rem" }],
      mediumDesk: ["3.156rem", { lineHeight: "3rem" }],
      largeDesk: ["2.8rem", { lineHeight: "3.75rem" }],
      xlargeDesk: ["5.735rem", { lineHeight: "5rem" }],
      konsultativMobile: ["0.688rem", { lineHeight: "1.0rem" }],
      bodyMobile: ["0.813rem", { lineHeight: "1.25rem" }],
      baseMobile: ["1rem", { lineHeight: "1.5rem" }],
      smallMobile: ["1.281rem", { lineHeight: "2.25rem" }],
      mediumMobile: ["1.7rem", { lineHeight: "3rem" }],
      largeMobile: ["2rem", { lineHeight: "3.2rem" }],
      xlargeMobile: ["2.988rem", { lineHeight: "4rem" }],
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    fontWeight: {
      light: "300",
      regular: "400",
      semibold: "500",
      bold: "600",
      extrabold: "800",
    },

    /* Borders - borderstørrelser herunder */
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      3: "3px",
      4: "4px",
    },

    /* Border radius størrelser herunder */
    borderRadius: {
      DEFAULT: "1.25rem",
      none: "0rem",
      xs: "0.438rem",
      sm: "0.875rem",
      md: "1.344rem",
      lg: "2.188rem",
      xl: "3.063rem",
      xxl: "4.938rem",
      full: "999rem",
    },

    /* Box shadows herunder */
    boxShadow: {
      drop: "63px 136px 42px 0px rgba(111, 110, 109, 0.00), 40px 87px 38px 0px rgba(111, 110, 109, 0.01), 23px 49px 32px 0px rgba(111, 110, 109, 0.05), 10px 22px 24px 0px rgba(111, 110, 109, 0.09), 3px 5px 13px 0px rgba(111, 110, 109, 0.10)",
      inner: "2px 3px 9.1px 2px rgba(0, 0, 0, 0.25) inset;",
    },

    extend: {
      spacing: {
        xxs: "8px",
        xs: "16px",
        s: "24px",
        sm: "32px",
        m: "40px",
        ml: "48px",
        lg: "60px",
        xl: "80px",
        "2xl": "96px",
        "3xl": "112px",
        "4xl": "128px",
        "5xl": "160px",
        "6xl": "208px",
        "7xl": "320px",
        "8xl": "360px",
        "9xl": "424px",
      },

      backgroundImage: {
        "gradient-card-desktop": "linear-gradient(179deg, rgba(4, 127, 127, 0.10) 0.83%, #0D493D 93.28%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
