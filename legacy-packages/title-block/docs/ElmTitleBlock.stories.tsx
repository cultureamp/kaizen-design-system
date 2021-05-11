import { loadElmStories } from "elm-storybook"
const compiledElm = require("../ElmStories/TitleBlockStories.elm").Elm
  .ElmStories.TitleBlockStories

loadElmStories("Titleblock (Elm) (deprecated)", module, compiledElm, [
  "Admin, with breadcrumb",
  "Admin, with navigation buttons",
  "Reversed",
])
