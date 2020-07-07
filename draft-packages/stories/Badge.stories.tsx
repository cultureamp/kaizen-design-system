import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"

import { Badge } from "@kaizen/draft-badge"

export default {
  title: "Badge (React)",
}

export const DefaultStory = () => <Badge variant="default">3</Badge>

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}

export const Active = () => <Badge variant="active">1</Badge>

Active.story = {
  name: "Active",
}

export const Reversed = () => (
  <Badge variant="default" reversed>
    3
  </Badge>
)

Reversed.story = {
  name: "Reversed",
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

export const ReversedActive = () => (
  <Badge variant="active" reversed>
    3
  </Badge>
)

ReversedActive.story = {
  name: "Reversed, Active",
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

export const LongerText = () => <Badge variant="default">2x</Badge>

LongerText.story = {
  name: "Longer text",
}
