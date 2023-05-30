import { browsersList } from "./storybook/webpack/browserslist"

module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      features: { "nesting-rules": false },
      autoprefixer: {
        flexbox: "no-2009",
        grid: "no-autoplace",
      },
      browsers: browsersList,
      stage: 3,
    },
  },
}
