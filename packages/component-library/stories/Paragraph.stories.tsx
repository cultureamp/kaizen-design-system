import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Paragraph (Elm)", module, require("./Paragraph.stories.elm"), [
  "IntroLede",
  "Body",
  "Small",
  "ExtraSmall",
])
