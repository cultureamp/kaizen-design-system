import { Divider } from "@kaizen/divider"
import { Card } from "@kaizen/card"
import { Box, Heading, Paragraph } from "@kaizen/component-library"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

const reversedBg = {
  backgrounds: {
    default: "Purple 700",
  },
}

export default {
  title: `${CATEGORIES.components}/Divider`,
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: 'import { Divider } from "@kaizen/divider"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A14040"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = () => (
  <Box m={1}>
    <Divider variant="canvas" />
  </Box>
)
DefaultStory.storyName = "Default (Kaizen Site Demo)"

export const CanvasStory = () => (
  <Box m={1}>
    <Divider variant="canvas" />
  </Box>
)
CanvasStory.storyName = "Canvas Divider"

export const ContentDivider = () => (
  <Box m={1}>
    <Divider variant="content" />
  </Box>
)
ContentDivider.storyName = "Content Divider"

export const ContentDividerReversed = () => (
  <Box m={1}>
    <Divider variant="content" isReversed />
  </Box>
)
ContentDividerReversed.storyName = "Content Divider Reversed"
ContentDividerReversed.parameters = { ...reversedBg }

export const CanvasDividerReversed = () => (
  <Box m={1}>
    <Divider variant="canvas" isReversed />
  </Box>
)
CanvasDividerReversed.storyName = "Canvas Divider Reversed"
CanvasDividerReversed.parameters = { ...reversedBg }

export const TabDivider = () => (
  <Card>
    <Box p={0.75}>
      <Heading variant="heading-4" color="dark">
        Understands people's agenda and perspectives
      </Heading>
      <Box pt={0.25}>
        <Paragraph variant="small" color="dark-reduced-opacity">
          Interpersonal
        </Paragraph>
      </Box>
    </Box>
    <Divider variant="content" />
    <Box p={0.75}>
      <Heading variant="heading-4">Anticipates customers needs</Heading>
      <Box pt={0.25}>
        <Paragraph variant="small" color="dark-reduced-opacity">
          Self management
        </Paragraph>
      </Box>
    </Box>
    <Divider variant="content" />
    <Box p={0.75}>
      <Heading variant="heading-4">
        Initiates and develops relationships
      </Heading>
      <Box pt={0.25}>
        <Paragraph variant="small" color="dark-reduced-opacity">
          Interpersonal
        </Paragraph>
      </Box>
    </Box>
  </Card>
)
TabDivider.storyName = "Composing divider, card, box, and typography"
