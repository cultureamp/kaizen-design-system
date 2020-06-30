import * as React from "react"

import { Badge } from "@kaizen/draft-badge"

export default {
  title: "Badge (React)",
}

export const DefaultStory = () => <Badge variant="default">3</Badge>

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}

export const Active = () => <Badge variant="active">3</Badge>

Active.story = {
  name: "Active",
}

export const LongerText = () => <Badge variant="default">2x</Badge>

LongerText.story = {
  name: "Longer text",
}
