module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
      },
      width: { "1-3": "calc(33.33% - 1rem)", "1-2": "calc(50% - .5rem)" },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
      },
      fontFamily: { courgette: ['Courgette', 'serif'] },
      backgroundImage: {
        "var-sm": "var(--bg-sm)",
        var: "var(--bg)",
        "main-rg":
          "radial-gradient(circle, rgba(28,41,62,1) 50%, rgba(26,37,56,1) 70%, rgba(17,24,36,1) 100%);",
      },
    },
  },
  variants: {},
  // plugins: [require("@tailwindcss/typography")],
};
