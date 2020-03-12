import * as React from "react"
import { Paragraph } from "../components/Paragraph"

export default { title: "typography/Paragraph" }

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
