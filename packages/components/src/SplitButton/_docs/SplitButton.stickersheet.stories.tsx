import React from "react"
import { Meta } from "@storybook/react"
import {
  exampleActionButtonPropsAnchor,
  exampleActionButtonPropsButton,
  exampleDropdownContentEnabled,
} from "~components/Menu/_docs/examples"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { SplitButton, SplitButtonProps } from "../index"

export default {
  title: "Components/Buttons/SplitButton",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const ROWS_MAP = [
  {
    rowTitle: "Default",
    actionButtonProps: exampleActionButtonPropsButton,
    dropdownContent: exampleDropdownContentEnabled,
  },
  {
    rowTitle: "Anchor Link",
    actionButtonProps: exampleActionButtonPropsAnchor,
    dropdownContent: exampleDropdownContentEnabled,
  },
] satisfies Array<{ rowTitle: string } & SplitButtonProps>

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet isReversed={isReversed} heading="Split Button">
        <StickerSheet.Header
          headings={["Base", "Disabled"]}
          hasVerticalHeadings
          verticalHeadingsWidth="10rem"
        />
        <StickerSheet.Body>
          {ROWS_MAP.map(({ rowTitle, ...props }) => (
            <StickerSheet.Row key={rowTitle} rowTitle={rowTitle}>
              <SplitButton isReversed={isReversed} {...props} />
              <SplitButton isReversed={isReversed} disabled {...props} />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} heading="Pseudo states">
        <StickerSheet.Header
          headings={["Hover", "Active", "Focus"]}
          hasVerticalHeadings
          verticalHeadingsWidth="10rem"
        />
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Action button">
            <SplitButton
              isReversed={isReversed}
              actionButtonProps={{
                ...exampleActionButtonPropsButton,
                "data-sb-pseudo-styles": "hover",
              }}
              dropdownContent={exampleDropdownContentEnabled}
            />
            <SplitButton
              isReversed={isReversed}
              actionButtonProps={{
                ...exampleActionButtonPropsButton,
                "data-sb-pseudo-styles": "active",
              }}
              dropdownContent={exampleDropdownContentEnabled}
            />
            <SplitButton
              isReversed={isReversed}
              actionButtonProps={{
                ...exampleActionButtonPropsButton,
                "data-sb-pseudo-styles": "focus",
              }}
              dropdownContent={exampleDropdownContentEnabled}
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Dropdown button">
            <SplitButton
              isReversed={isReversed}
              actionButtonProps={exampleActionButtonPropsButton}
              dropdownContent={exampleDropdownContentEnabled}
              dropdownButtonProps={{ "data-sb-pseudo-styles": "hover" }}
            />
            <SplitButton
              isReversed={isReversed}
              actionButtonProps={exampleActionButtonPropsButton}
              dropdownContent={exampleDropdownContentEnabled}
              dropdownButtonProps={{ "data-sb-pseudo-styles": "active" }}
            />
            <SplitButton
              isReversed={isReversed}
              actionButtonProps={exampleActionButtonPropsButton}
              dropdownContent={exampleDropdownContentEnabled}
              dropdownButtonProps={{ "data-sb-pseudo-styles": "focus" }}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      active: '[data-sb-pseudo-styles="active"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}
