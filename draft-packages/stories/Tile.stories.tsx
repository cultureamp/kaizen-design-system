import * as React from "react"

import {
  MultiActionTile,
  TileInformation,
  TileAction,
  InformationTile,
} from "@kaizen/draft-tile"
import { Coaching } from "@kaizen/draft-illustration"
import { Tag } from "@kaizen/draft-tag"

const bookmarkIcon = require("@kaizen/component-library/icons/bookmark-off.icon.svg")
  .default

export default {
  title: "Tile (React)",
}

const containerStyles = { padding: "24px", width: "300px" }

const primaryAction: TileAction = {
  label: "View",
  href: "",
}

const secondaryAction: TileAction = {
  label: "Bookmark",
  href: "",
  icon: bookmarkIcon,
}

const children = (
  <div style={{ width: "170px" }}>
    <Coaching alt="" />
  </div>
)

const information: TileInformation = {
  text:
    "Additional information can be included on the underside of the tile and viewed on click of the information" +
    " icon.",
  secondaryAction: {
    label: "Learn more",
    href: "",
  },
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
  name: "Multi action tile",
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
  name: "Multi action tile with secondary action",
}

export const MultiActionWithChildren = () => (
  <div style={containerStyles}>
    <MultiActionTile
      title="Tile heading"
      metadata="Metadata"
      primaryAction={primaryAction}
    >
      {children}
    </MultiActionTile>
  </div>
)

MultiActionWithChildren.story = {
  name: "Multi action tile with children",
}

export const MultiActionWithInformation = () => (
  <div style={containerStyles}>
    <MultiActionTile
      title="Tile heading"
      metadata="Metadata"
      primaryAction={primaryAction}
      information={information}
    />
  </div>
)

MultiActionWithInformation.story = {
  name: "Multi action tile with information",
}

export const Information = () => (
  <div style={containerStyles}>
    <InformationTile
      title="Tile heading"
      metadata="Metadata"
      information={information}
      footer={<Tag variant="statusLive">Live</Tag>}
    />
  </div>
)

Information.story = {
  name: "Information tile",
}
