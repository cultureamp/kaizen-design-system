import React from "react"
import { Meta } from "@storybook/react"
import { Button } from "~components/__actions__/v2"
import { Icon } from "~components/__future__/Icon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Menu } from "../index"
import { MenuContentExample } from "./MenuContentExample"

export default {
  title: "Actions/Menu/v1",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} style={{ margin: "0 auto" }}>
      <StickerSheet.Header headings={["Long list", "Short List"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <StickerSheet.Cell width={250}>
            <Menu
              menuVisible
              autoHide="off"
              button={
                <Button
                  label="Menu"
                  icon={<Icon name="keyboard_arrow_down" isPresentational />}
                  iconPosition="end"
                />
              }
            >
              <MenuContentExample />
            </Menu>
          </StickerSheet.Cell>
          <StickerSheet.Cell width={250}>
            <Menu
              menuVisible
              autoHide="off"
              button={
                <Button
                  label="Menu"
                  icon={<Icon name="keyboard_arrow_down" isPresentational />}
                  iconPosition="end"
                />
              }
            >
              <MenuContentExample isShortList />
            </Menu>
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
  decorators: [
    (Story) => (
      <div style={{ minHeight: "500px" }}>
        <Story />
      </div>
    ),
  ],
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
