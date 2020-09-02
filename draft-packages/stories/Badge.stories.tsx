import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import React, { useState } from "react"

import { Badge } from "@kaizen/draft-badge"
import { Button } from "@kaizen/component-library"

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

export const Animated = () => {
  const [badgeCount, setBadgeCount] = useState(1)

  return (
    <div style={{ padding: "20px" }}>
      <Badge animateChange={true} variant="default">
        {String(badgeCount)}
      </Badge>
      <span style={{ display: "inline-block", width: "100px" }} />
      <Badge animateChange={true} variant="active">
        {String(badgeCount)}
      </Badge>
      <br />
      <Button
        label="Add Notification"
        onClick={() => setBadgeCount(bc => bc + 1)}
      />
    </div>
  )
}

Animated.story = {
  name: "Animate change",
}
