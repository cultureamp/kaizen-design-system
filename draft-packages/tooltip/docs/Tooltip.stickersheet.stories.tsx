import React from "react"
import { Decorator, Meta, StoryFn } from "@storybook/react"
import isChromatic from "chromatic/isChromatic"
import { IconButton } from "../../../packages/button"
import meatballsIcon from "../../../packages/component-library/icons/meatballs.icon.svg"
import { Heading } from "../../../packages/typography"
import { Tooltip } from "../index"

const openTooltipInChromatic: Decorator = (Story, { args }) => {
  if (isChromatic()) args.isInitiallyVisible = true
  return <Story />
}

export default {
  title: "Stickersheets/Tooltip",
  decorators: [openTooltipInChromatic],
} satisfies Meta<typeof Tooltip>

export const StickerSheetTemplate: StoryFn<typeof Tooltip> = props => (
  <div
    style={{
      marginTop: "100px",
      display: "grid",
      justifyContent: "center",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    }}
  >
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
        rowGap: "5rem",
      }}
    >
      <Heading variant="heading-5" tag="h2">
        {" "}
      </Heading>
      <Heading variant="heading-5" tag="h2">
        Default
      </Heading>
      <Heading variant="heading-5" tag="h2">
        Informative
      </Heading>
      <Heading variant="heading-5" tag="h2">
        Positive
      </Heading>
      <Heading variant="heading-5" tag="h2">
        Highlight
      </Heading>
      <Heading variant="heading-5" tag="h2">
        Cautionary
      </Heading>
    </div>
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
        rowGap: "5rem",
      }}
    >
      <Heading variant="heading-3" tag="h1">
        Top
      </Heading>
      <Tooltip {...props} position="above" text="Tooltip label" mood="default">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="above"
        text="Tooltip label"
        mood="informative"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip {...props} position="above" text="Tooltip label" mood="positive">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="above"
        text="Tooltip label"
        mood="highlight"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="above"
        text="Tooltip label"
        mood="cautionary"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
    </div>
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
        rowGap: "5rem",
      }}
    >
      <Heading variant="heading-3" tag="h1">
        Bottom
      </Heading>
      <Tooltip {...props} position="below" text="Tooltip label" mood="default">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="below"
        text="Tooltip label"
        mood="informative"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip {...props} position="below" text="Tooltip label" mood="positive">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="below"
        text="Tooltip label"
        mood="highlight"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="below"
        text="Tooltip label"
        mood="cautionary"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
    </div>
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
        rowGap: "5rem",
      }}
    >
      <Heading variant="heading-3" tag="h1">
        Left
      </Heading>
      <Tooltip {...props} position="left" text="Tooltip label" mood="default">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="left"
        text="Tooltip label"
        mood="informative"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip {...props} position="left" text="Tooltip label" mood="positive">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip {...props} position="left" text="Tooltip label" mood="highlight">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="left"
        text="Tooltip label"
        mood="cautionary"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
    </div>
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        flexDirection: "column",
        justifyItems: "center",
        rowGap: "5rem",
      }}
    >
      <Heading variant="heading-3" tag="h1">
        Right
      </Heading>
      <Tooltip {...props} position="right" text="Tooltip label" mood="default">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="right"
        text="Tooltip label"
        mood="informative"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip {...props} position="right" text="Tooltip label" mood="positive">
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="right"
        text="Tooltip label"
        mood="highlight"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
      <Tooltip
        {...props}
        position="right"
        text="Tooltip label"
        mood="cautionary"
      >
        <IconButton label="Label" icon={meatballsIcon} />
      </Tooltip>
    </div>
  </div>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
