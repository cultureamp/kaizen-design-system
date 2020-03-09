import * as React from "react"
import { Box } from "../components/Box"
import { Heading } from "../components/Heading"

export default { title: "typography/Heading" }

export const Display0 = () => <Heading variant="display-0">Display 0</Heading>

export const Heading1 = () => (
  <Heading data-automation-id="test" variant="heading-1">
    Heading 1
  </Heading>
)

export const Heading2 = () => <Heading variant="heading-2">Heading 2</Heading>

export const Heading3 = () => <Heading variant="heading-3">Heading 3</Heading>

export const Heading4 = () => <Heading variant="heading-4">Heading 4</Heading>

export const Heading5 = () => <Heading variant="heading-5">Heading 5</Heading>

export const Heading6 = () => <Heading variant="heading-6">Heading 6</Heading>

export const HeadingResponsive = () => (
  <Box m={{ mobile: 0.25, tablet: 2, desktop: 4 }}>
    <Heading variant="heading-1">
      This is a responsive heading, wrapped in a box
    </Heading>
    <Heading variant="heading-2">
      Move the viewport this way to see the magic 👈{" "}
    </Heading>
  </Box>
)
