// postcss.config.js

import { browsersList } from "./storybook/webpack/browserslist"

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-flexbugs-fixes": {},
    "postcss-nesting": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
        grid: "no-autoplace",
      },
      browsers: browsersList,
      stage: 3,
    },
    tailwindcss: {},
  },
}
