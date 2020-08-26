import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Divider } from "@kaizen/draft-divider"
import { Card } from "@kaizen/draft-card"
import { Box, Heading, Paragraph } from "@kaizen/component-library"
import * as React from "react"

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "600px", margin: "0 auto", padding: "20px" }}>
    {children}
  </div>
)

export default {
  title: "Divider (React)",
}

export const DefaultStory = () => (
  <Container>
    <Divider variant="canvas" />
  </Container>
)

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}

export const CanvasStory = () => (
  <Container>
    <Divider variant="canvas" />
  </Container>
)

CanvasStory.story = {
  name: "Canvas Divider",
}

export const ContentDivider = () => (
  <Container>
    <Divider variant="content" />
  </Container>
)

ContentDivider.story = {
  name: "Content Divider",
}

export const ContentDividerReversed = () => (
  <Container>
    <Divider variant="content" isReversed />
  </Container>
)

ContentDividerReversed.story = {
  name: "Content Divider Reversed",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[600],
        default: true,
      },
    ],
  },
}

export const CanvasDividerReversed = () => (
  <Container>
    <Divider variant="canvas" isReversed />
  </Container>
)

CanvasDividerReversed.story = {
  name: "Canvas Divider Reversed",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

export const TabDivider = () => (
  <Container>
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
  </Container>
)

TabDivider.story = {
  name: "Composing divider, card, box, and typography",
}
