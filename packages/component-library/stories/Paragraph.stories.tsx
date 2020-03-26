import { loadElmStories } from "@cultureamp/elm-storybook"
import * as React from "react"
import { Paragraph } from "../components/Paragraph"

export default { title: "Paragraph", component: Paragraph }

export const IntroLede = () => (
  <Paragraph variant="intro-lede">Paragraph Intro Lede</Paragraph>
)

export const Body = () => (
  <Paragraph data-automation-id="test" variant="body">
    Paragraph Body
  </Paragraph>
)

export const Small = () => (
  <Paragraph variant="small">Paragraph Small</Paragraph>
)

export const ExtraSmall = () => (
  <Paragraph variant="extra-small">Paragraph Extra Small</Paragraph>
)

loadElmStories("Paragraph (Elm)", module, require("./Paragraph.stories.elm"), [
  "IntroLede",
  "Body",
  "Small",
  "ExtraSmall",
])
