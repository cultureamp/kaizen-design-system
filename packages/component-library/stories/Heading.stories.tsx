import * as React from "react"
import Box from "../components/Box"
import { Heading } from "../components/Heading"

export default { title: "typography/Heading" }

export const Display0 = () => (
  <Heading tag="h1" level="0">
    This is a display heading
  </Heading>
)

export const Heading1 = () => <Heading level="1">This is Heading 1</Heading>

export const Heading2 = () => <Heading level="2">Heading 2</Heading>

export const Heading3 = () => <Heading level="3">Heading 3</Heading>

export const Heading4 = () => <Heading level="4">Heading 4</Heading>

export const Heading5 = () => <Heading level="5">Heading 5</Heading>

export const Heading6 = () => <Heading level="6">Heading 6</Heading>

export const Heading1Responsive = () => (
  <Box m={{ mobile: "1", tablet: "4", desktop: "8" }}>
    <Heading level="1">This is a responsive heading, wrapped in a box</Heading>
    <Heading level="2">Move the viewport this way to see the magic 👈 </Heading>
  </Box>
)
