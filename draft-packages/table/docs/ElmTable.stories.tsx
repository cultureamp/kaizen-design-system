import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/TableStories.elm").Elm.ElmStories
  .TableStories

loadElmStories(`${CATEGORIES.elm}/Table`, module, compiledElm, ["Default"])
