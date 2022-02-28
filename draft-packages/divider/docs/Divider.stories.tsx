import React from "react"
import { Divider } from "@kaizen/draft-divider"
import { Card } from "@kaizen/draft-card"
import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

const REVERSED_BG = {
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
        component: 'import { Divider } from "@kaizen/draft-divider"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A14040"
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

export const CanvasDivider = () => (
  <Box m={1}>
    <Divider variant="canvas" />
  </Box>
)
CanvasDivider.storyName = "Canvas Divider"
CanvasDivider.parameters = { chromatic: { disable: false } }

export const ContentDivider = () => (
  <Box m={1}>
    <Divider variant="content" />
  </Box>
)
ContentDivider.storyName = "Content Divider"
ContentDivider.parameters = { chromatic: { disable: false } }

export const CanvasDividerReversed = () => (
  <Box m={1}>
    <Divider variant="canvas" isReversed />
  </Box>
)
CanvasDividerReversed.storyName = "Canvas Divider Reversed"
CanvasDividerReversed.parameters = {
  ...REVERSED_BG,
  chromatic: { disable: false },
}

export const ContentDividerReversed = () => (
  <Box m={1}>
    <Divider variant="content" isReversed />
  </Box>
)
ContentDividerReversed.storyName = "Content Divider Reversed"
ContentDividerReversed.parameters = {
  ...REVERSED_BG,
  chromatic: { disable: false },
}

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
