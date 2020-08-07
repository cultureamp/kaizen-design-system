import * as React from "react"

import { MultiActionTile } from "@kaizen/draft-tile"
import { Coaching } from "@kaizen/draft-illustration"

const bookmarkIcon = require("@kaizen/component-library/icons/bookmark-off.icon.svg")
  .default

export default {
  title: "Tile (React)",
}

const containerStyles = { padding: "24px", width: "300px" }

const primaryAction = {
  label: "View",
  href: "",
}

const secondaryAction = {
  label: "Bookmark",
  href: "",
  icon: bookmarkIcon,
}

export const MultiAction = () => (
  <div style={containerStyles}>
    <MultiActionTile
      title="Tile heading"
      metadata="Metadata"
      primaryAction={primaryAction}
    />
  </div>
)

MultiAction.story = {
  name: "Multi action",
}

export const MultiActionWithSecondary = () => (
  <div style={containerStyles}>
    <MultiActionTile
      title="Tile heading"
      metadata="Metadata"
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
    />
  </div>
)

MultiActionWithSecondary.story = {
  name: "Multi action with secondary action",
}

export const MultiActionWithChildren = () => (
  <div style={containerStyles}>
    <MultiActionTile
      title="Tile heading"
      metadata="Metadata"
      primaryAction={primaryAction}
    >
      <div style={{ width: "160px" }}>
        <Coaching alt="" />
      </div>
    </MultiActionTile>
  </div>
)

MultiActionWithChildren.story = {
  name: "Multi action with children",
}
