import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Divider } from "@kaizen/draft-divider"
import * as React from "react"

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "500px", margin: "0 auto" }}>{children}</div>
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
