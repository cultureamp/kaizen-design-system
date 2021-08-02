import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/CardStories.elm").Elm.ElmStories
  .CardStories

loadElmStories(`${CATEGORIES.elm}/Card`, module, compiledElm, ["Default"])
