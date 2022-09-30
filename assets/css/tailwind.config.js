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
      fontFamily: {
         courgette: ['Courgette', 'serif'],
      GreatVibes: ['GreatVibes', 'serif'] },
      backgroundImage: {
        "var-sm": "var(--bg-sm)",
        var: "var(--bg)",
      },
    },
  },
  variants: {},
  // plugins: [require("@tailwindcss/typography")],
};
