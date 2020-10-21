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
DefaultStory.storyName = "Default (Kaizen Site Demo)"

export const CanvasStory = () => (
  <Container>
    <Divider variant="canvas" />
  </Container>
)
CanvasStory.storyName = "Canvas Divider"

export const ContentDivider = () => (
  <Container>
    <Divider variant="content" />
  </Container>
)
ContentDivider.storyName = "Content Divider"

export const ContentDividerReversed = () => (
  <Container>
    <Divider variant="content" isReversed />
  </Container>
)
ContentDividerReversed.storyName = "Content Divider Reversed"
ContentDividerReversed.parameters = {
  backgrounds: {
    default: "Wisteria 700",
  },
}

export const CanvasDividerReversed = () => (
  <Container>
    <Divider variant="canvas" isReversed />
  </Container>
)
CanvasDividerReversed.storyName = "Canvas Divider Reversed"
CanvasDividerReversed.parameters = {
  backgrounds: {
    default: "Wisteria 700",
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
TabDivider.storyName = "Composing divider, card, box, and typography"
