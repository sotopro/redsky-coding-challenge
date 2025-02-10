export default {
  content: ["./src/**/*.{html,svelte,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          white: "var(--color-white)",
          gray: "var(--color-gray)",
          opacity: "var(--color-opacity)",
        },
      },
      textColor: {
        skin: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          white: "var(--color-white)",
          gray: "var(--color-gray)",
        },
      },
    },
  },
  plugins: [],
};
