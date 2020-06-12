import { withA11y } from "@storybook/addon-a11y"
import { withInfo } from "@storybook/addon-info"
import { addDecorator, addParameters } from "@storybook/react"
import { create } from "@storybook/theming"
import { backgrounds } from "./backgrounds"

// Log to the browser console and actions panel (e.g. from Elm's Debug.log)
import "@storybook/addon-console"

// Polyfill for :focus-visible pseudo-selector
// See: https://github.com/WICG/focus-visible
require("focus-visible")

// Standard base stylesheet used across Culture Amp products
// See: https://github.com/necolas/normalize.css/
require("normalize.css")

require("@kaizen/component-library/styles/fonts.scss")

addDecorator(withA11y)
addDecorator(
  withInfo({
    styles: {
      button: {
        topRight: {
          top: "calc(100vh - 24px)",
          left: 0,
          borderRadius: "0px 7px 0px 0px",
        },
      },
      infoBody: {
        fontFamily:
          '"Inter", Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif',
        color: "#35374a",
      },
      header: {
        h1: {
          fontFamily:
            '"Greycliff CF", Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif',
        },
        h2: {
          fontFamily:
            '"Greycliff CF", Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif',
          fontWeight: "700",
        },
        h3: {
          fontFamily:
            '"Greycliff CF", Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif',
        },
      },
    },
  })
)

addParameters({
  backgrounds,
  options: {
    theme: create({ brandTitle: "🌱 Storybook", base: "light" }),
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  },
})
