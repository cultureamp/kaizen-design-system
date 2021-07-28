import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/LoadingPlaceholderStories.elm").Elm
  .ElmStories.LoadingPlaceholderStories

loadElmStories("Elm/Loading Placeholder", module, compiledElm, [
  "Default, Multiple",
  "Default, Multiple, Inline",
  "Default, Multiple, Variable width",
  "Default, Multiple, Variable width, Centered",
  "Default, Multiple, Combined block and inline",
  "Default, Without bottom margin",
  "Default, Inherit baseline",
  "Heading",
  "Reversed, Default",
  "In the wild",
])
