import React from "react"
import { Decorator, Meta } from "@storybook/react"
import isChromatic from "chromatic/isChromatic"
import { IconButton } from "~components/Button"
import { MeatballsIcon } from "~components/Icon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Tooltip } from "../index"

const openTooltipInChromatic: Decorator = (Story, { args }) => {
  if (isChromatic()) args.isInitiallyVisible = true
  return <Story />
}

export default {
  title: "Components/Tooltip",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
  decorators: [openTooltipInChromatic],
} satisfies Meta

const cellStyle = {
  padding: "0 50px",
}

const StickerSheetTemplate: StickerSheetStory = {
  render: props => (
    <div style={{ padding: "50px 100px" }}>
      <StickerSheet heading="Positions">
        <StickerSheet.Header headings={["Top", "Bottom", "Left", "Right"]} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <StickerSheet.Cell style={cellStyle}>
              <Tooltip {...props} position="above" text="Tooltip label">
                <IconButton
                  label="Label"
                  icon={<MeatballsIcon role="presentation" />}
                />
              </Tooltip>
            </StickerSheet.Cell>
            <StickerSheet.Cell style={cellStyle}>
              <Tooltip {...props} position="below" text="Tooltip label">
                <IconButton
                  label="Label"
                  icon={<MeatballsIcon role="presentation" />}
                />
              </Tooltip>
            </StickerSheet.Cell>
            <StickerSheet.Cell style={cellStyle}>
              <Tooltip {...props} position="left" text="Tooltip label">
                <IconButton
                  label="Label"
                  icon={<MeatballsIcon role="presentation" />}
                />
              </Tooltip>
            </StickerSheet.Cell>
            <StickerSheet.Cell style={cellStyle}>
              <Tooltip
                {...props}
                position="right"
                text="Tooltip label"
                mood="default"
              >
                <IconButton
                  label="Label"
                  icon={<MeatballsIcon role="presentation" />}
                />
              </Tooltip>
            </StickerSheet.Cell>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet heading="Moods">
        <StickerSheet.Header
          headings={[
            "Default",
            "Informative",
            "Positive",
            "Highlight",
            "Cautionary",
          ]}
        />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <StickerSheet.Cell style={cellStyle}>
              <Tooltip {...props} text="Tooltip label" mood="default">
                <IconButton
                  label="Label"
                  icon={<MeatballsIcon role="presentation" />}
                />
              </Tooltip>
            </StickerSheet.Cell>
            <StickerSheet.Cell style={cellStyle}>
              <Tooltip {...props} text="Tooltip label" mood="informative">
                <IconButton
                  label="Label"
                  icon={<MeatballsIcon role="presentation" />}
                />
              </Tooltip>
            </StickerSheet.Cell>
            <StickerSheet.Cell style={cellStyle}>
              <Tooltip {...props} text="Tooltip label" mood="positive">
                <IconButton
                  label="Label"
                  icon={<MeatballsIcon role="presentation" />}
                />
              </Tooltip>
            </StickerSheet.Cell>
            <StickerSheet.Cell style={cellStyle}>
              <Tooltip {...props} text="Tooltip label" mood="highlight">
                <IconButton
                  label="Label"
                  icon={<MeatballsIcon role="presentation" />}
                />
              </Tooltip>
            </StickerSheet.Cell>
            <StickerSheet.Cell style={cellStyle}>
              <Tooltip {...props} text="Tooltip label" mood="cautionary">
                <IconButton
                  label="Label"
                  icon={<MeatballsIcon role="presentation" />}
                />
              </Tooltip>
            </StickerSheet.Cell>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </div>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl",
  },
}
