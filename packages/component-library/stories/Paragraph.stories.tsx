import * as React from "react"
import { Paragraph } from "../components/Paragraph"

export default { title: "typography/Paragraph" }

export const IntroLede = () => (
  <Paragraph variant="intro-lede">Intro Lede</Paragraph>
)

export const Body = () => (
  <Paragraph data-automation-id="test" variant="body">
    Body
  </Paragraph>
)

export const Small = () => <Paragraph variant="small">Small</Paragraph>

export const ExtraSmall = () => (
  <Paragraph variant="extra-small">Extra Small</Paragraph>
)
