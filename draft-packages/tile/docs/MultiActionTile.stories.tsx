import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import bookmarkIcon from "@kaizen/component-library/icons/bookmark-off.icon.svg"
import { Coaching } from "@kaizen/draft-illustration"

import {
  MultiActionTile,
  TileInformation,
  TileAction,
  TileGrid,
} from "@kaizen/draft-tile"

export default {
  tags: ["autodocs"],
  title: "Components/Tile/Multi Action Tile",
  component: MultiActionTile,
  parameters: {
    docs: {
      description: {
        component: 'import {  MultiActionTile } from "@kaizen/draft-tile"',
      },
    },
  },
} satisfies Meta<typeof MultiActionTile>

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

export const MultiAction: StoryFn<typeof MultiActionTile> = () => (
  <MultiActionTile
    title="Tile heading"
    metadata="Metadata"
    primaryAction={primaryAction}
  />
)
MultiAction.storyName = "Multi action tile"

export const MultiActionMoods: StoryFn = () => (
  <TileGrid>
    <MultiActionTile
      title="Default"
      metadata="Metadata"
      primaryAction={primaryAction}
    />
    <MultiActionTile
      title="Positive"
      metadata="Metadata"
      primaryAction={primaryAction}
      mood="positive"
    />
    <MultiActionTile
      title="Informative"
      metadata="Metadata"
      primaryAction={primaryAction}
      mood="informative"
    />
    <MultiActionTile
      title="Cautionary"
      metadata="Metadata"
      primaryAction={primaryAction}
      mood="cautionary"
    />
    <MultiActionTile
      title="Assertive"
      metadata="Metadata"
      primaryAction={primaryAction}
      mood="assertive"
    />
    <MultiActionTile
      title="Negative"
      metadata="Metadata"
      primaryAction={primaryAction}
      mood="negative"
    />
    <MultiActionTile
      title="Prominent"
      metadata="Metadata"
      primaryAction={primaryAction}
      mood="prominent"
    />
  </TileGrid>
)
MultiActionMoods.storyName = "Multi action tile moods"
MultiActionMoods.parameters = { chromatic: { disable: false } }

export const MultiActionWithSecondary: StoryFn = () => (
  <MultiActionTile
    title="Tile heading"
    metadata="Metadata"
    primaryAction={primaryAction}
    secondaryAction={secondaryAction}
  />
)
MultiActionWithSecondary.storyName = "Multi action tile with secondary action"
MultiActionWithSecondary.parameters = { chromatic: { disable: false } }

export const MultiActionWithChildren: StoryFn = () => (
  <MultiActionTile
    title="Tile heading"
    metadata="Metadata"
    primaryAction={primaryAction}
  >
    {children}
  </MultiActionTile>
)
MultiActionWithChildren.storyName = "Multi action tile with children"
MultiActionWithChildren.parameters = { chromatic: { disable: false } }

export const MultiActionWithCustomTitle: StoryFn = () => (
  <MultiActionTile
    title="Custom title"
    primaryAction={primaryAction}
    titleTag="div"
  >
    {children}
  </MultiActionTile>
)
MultiActionWithCustomTitle.storyName = "Multi action tile with custom title tag"

export const MultiActionWithInformation: StoryFn = () => (
  <MultiActionTile
    title="Tile heading"
    metadata="Metadata"
    primaryAction={primaryAction}
    information={information}
  />
)
MultiActionWithInformation.storyName = "Multi action tile with information"

export const MultiActionActionInNewTabs: StoryFn = () => (
  <MultiActionTile
    title="Tile heading"
    metadata="Metadata"
    primaryAction={{
      ...primaryAction,
      href: "https://www.cultureamp.com",
      newTabAndIUnderstandTheAccessibilityImplications: true,
    }}
    secondaryAction={{
      ...secondaryAction,
      href: "https://www.cultureamp.com",
      newTabAndIUnderstandTheAccessibilityImplications: true,
    }}
  />
)
MultiActionActionInNewTabs.storyName =
  "Multi action tile with actions opening in new tabs"
