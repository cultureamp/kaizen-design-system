import * as React from "react"

import { Tile } from "@kaizen/draft-tile"
import { Coaching } from "@kaizen/draft-illustration"
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Button } from "@kaizen/draft-button"

export default {
  title: "Tile (React)",
}

const containerStyles = { padding: "24px", width: "300px" }

const footerItems = [
  <Button label="Preview" secondary />,
  <Button label="Start" />,
]

export const DefaultStory = () => (
  <div style={containerStyles}>
    <Tile title="Tile heading" metadata="Metadata" footerItems={footerItems} />
  </div>
)

DefaultStory.story = {
  name: "Multi action",
}

export const MultiActionWithChildren = () => (
  <div style={containerStyles}>
    <Tile title="Tile heading" metadata="Metadata" footerItems={footerItems}>
      <div style={{ width: "160px" }}>
        <Coaching alt="" />
      </div>
    </Tile>
  </div>
)

MultiActionWithChildren.story = {
  name: "Multi action with children",
}
