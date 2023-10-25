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

const StickerSheetTemplate: StickerSheetStory = {
  render: props => (
    <>
      <StickerSheet heading="Default">
        <StickerSheet.Header headings={["Top", "Bottom", "Left", "Right"]} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Tooltip
              {...props}
              position="above"
              text="Tooltip label"
              mood="default"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="below"
              text="Tooltip label"
              mood="default"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="left"
              text="Tooltip label"
              mood="default"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
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
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet heading="Informative">
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Tooltip
              {...props}
              position="above"
              text="Tooltip label"
              mood="informative"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="below"
              text="Tooltip label"
              mood="informative"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="left"
              text="Tooltip label"
              mood="informative"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="right"
              text="Tooltip label"
              mood="informative"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet heading="Positive">
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Tooltip
              {...props}
              position="above"
              text="Tooltip label"
              mood="positive"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="below"
              text="Tooltip label"
              mood="positive"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="left"
              text="Tooltip label"
              mood="positive"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="right"
              text="Tooltip label"
              mood="positive"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet heading="Highlight">
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Tooltip
              {...props}
              position="above"
              text="Tooltip label"
              mood="highlight"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="below"
              text="Tooltip label"
              mood="highlight"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="left"
              text="Tooltip label"
              mood="highlight"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="right"
              text="Tooltip label"
              mood="highlight"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet heading="Cautionary">
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Tooltip
              {...props}
              position="above"
              text="Tooltip label"
              mood="cautionary"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="below"
              text="Tooltip label"
              mood="cautionary"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="left"
              text="Tooltip label"
              mood="cautionary"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
            <Tooltip
              {...props}
              position="right"
              text="Tooltip label"
              mood="cautionary"
            >
              <IconButton
                label="Label"
                icon={<MeatballsIcon role="presentation" />}
              />
            </Tooltip>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
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
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}
