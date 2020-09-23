const { addUtility } = require("smelte/src/utils/style.js");

const buildPalette = require("smelte/src/utils/color.js");

const colors = {
  primary: "#b027b0",
  secondary: "#009688",
  error: "#f44336",
  success: "#4caf50",
  alert: "#ff9800",
  blue: "#2196f3",
  dark: "#212121",

  // These are material palette colors. You should keep only colors that you're using.
  // red: "#f44336",
  // pink: "#e91e63",
  // purple: "#9c27b0",
  // "deep-purple": "#673ab7",
  // indigo: "#3f51b5",
  // blue: "#2196f3",
  // "light-blue": "#03a9f4",
  // cyan: "#00bcd4",
  // teal: "#009688",
  // green: "#4caf50",
  // "light-green": "#8bc34a",
  // lime: "#cddc39",
  // yellow: "#ffeb3b",
  // amber: "#ffc107",
  orange: "#ff9800",
  // "deep-orange": "#ff5722",
  // brown: "#795548"
};


module.exports = {
  purge: [
    './src/**/*.svelte',
  ],
  theme: {
    extend: {},
    colors: {
      ...buildPalette(colors),
      gray: {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121",
        trans: "rgba(250, 250, 250, 0.5)",
        transLight: "rgba(250, 250, 250, 0.1)",
        transDark: "rgba(100, 100, 100, 0.2)"
      }
    }
  },
  variants: {},
  plugins: [
    require("tailwind-css-variables")(),
    require("tailwindcss-elevation")(["hover"]),
    function({ addUtilities }) {
      return addUtilities({
        [".border-box"]: {
          boxSizing: "border-box"
        },
        [".content-box"]: {
          boxSizing: "content-box"
        },
      });
    },
    addUtility({
      prop: "caret-color",
      className: ".caret"
    }),
    addUtility({
      prop: "stroke",
      className: ".stroke"
    })
  ],
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
}
