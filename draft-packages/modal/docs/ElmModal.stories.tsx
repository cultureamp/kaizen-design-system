import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Modal (Elm)", module, require("./ModalStories.elm"), [
  "Confirmation (cautionary), shown by default",
  "Generic, shown by default",
  "Confirmation (informative), shown by default",
  "Confirmation (positive), shown by default",
  "Confirmation (negative), shown by default",
  "Confirmation (negative), with disabled confirm button",
  "Confirmation, user initiated",
  "InputEdit (positive), user initiated",
  "InputEdit (negative), user initiated",
])
