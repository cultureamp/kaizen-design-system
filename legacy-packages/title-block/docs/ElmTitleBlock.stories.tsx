import { loadElmStories } from "elm-storybook"
const compiledElm = require("../ElmStories/TitleBlockStories.elm").Elm
  .ElmStories.TitleBlockStories

loadElmStories("Elm/Title Block (deprecated)", module, compiledElm, [
  "Admin, with breadcrumb",
  "Admin, with navigation buttons",
  "Reversed",
])
