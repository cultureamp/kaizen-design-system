import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta } from "@storybook/react"
import { MenuItem, MenuList } from "@kaizen/draft-menu"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { SplitButton, SplitButtonProps } from "../index"

const ACTION_BUTTON_PROPS__BUTTON = {
  label: "Edit Survey",
  onClick: action("clicked"),
}
const ACTION_BUTTON_PROPS__ANCHOR = {
  label: "Edit Survey",
  href: "//example.com",
}

const DROPDOWN_CONTENT__ENABLED = (
  <MenuList>
    <MenuItem
      // @todo: Add icon when Menu migrated
      // icon={editIcon}
      label="Menu Item 1"
      onClick={action("clicked")}
    />
    <MenuItem
      // @todo: Add icon when Menu migrated
      // icon={duplicateIcon}
      label="Menu Item 2"
    />
  </MenuList>
)

const DROPDOWN_CONTENT__ONE_DISABLED = (
  <MenuList>
    <MenuItem
      // @todo: Add icon when Menu migrated
      // icon={editIcon}
      label="Menu Item 1"
      disabled
    />
    <MenuItem
      // @todo: Add icon when Menu migrated
      // icon={duplicateIcon}
      label="Menu Item 2"
    />
  </MenuList>
)

export default {
  title: "Components/SplitButton",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const ROWS_MAP = [
  {
    rowTitle: "Default",
    actionButtonProps: ACTION_BUTTON_PROPS__BUTTON,
    dropdownContent: DROPDOWN_CONTENT__ENABLED,
  },
  {
    rowTitle: "RTL",
    actionButtonProps: ACTION_BUTTON_PROPS__BUTTON,
    dropdownContent: DROPDOWN_CONTENT__ENABLED,
    dir: "rtl",
  },
  {
    rowTitle: "Anchor Link",
    actionButtonProps: ACTION_BUTTON_PROPS__ANCHOR,
    dropdownContent: DROPDOWN_CONTENT__ENABLED,
  },
  {
    rowTitle: "With Disabled Dropdown Option",
    actionButtonProps: ACTION_BUTTON_PROPS__BUTTON,
    dropdownContent: DROPDOWN_CONTENT__ONE_DISABLED,
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
                ...ACTION_BUTTON_PROPS__BUTTON,
                classNameOverride: "__hover",
              }}
              dropdownContent={DROPDOWN_CONTENT__ENABLED}
            />
            <SplitButton
              isReversed={isReversed}
              actionButtonProps={{
                ...ACTION_BUTTON_PROPS__BUTTON,
                classNameOverride: "__active",
              }}
              dropdownContent={DROPDOWN_CONTENT__ENABLED}
            />
            <SplitButton
              isReversed={isReversed}
              actionButtonProps={{
                ...ACTION_BUTTON_PROPS__BUTTON,
                classNameOverride: "__focus",
              }}
              dropdownContent={DROPDOWN_CONTENT__ENABLED}
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Dropdown button">
            <SplitButton
              isReversed={isReversed}
              actionButtonProps={ACTION_BUTTON_PROPS__BUTTON}
              dropdownContent={DROPDOWN_CONTENT__ENABLED}
              dropdownButtonProps={{ classNameOverride: "__hover" }}
            />
            <SplitButton
              isReversed={isReversed}
              actionButtonProps={ACTION_BUTTON_PROPS__BUTTON}
              dropdownContent={DROPDOWN_CONTENT__ENABLED}
              dropdownButtonProps={{ classNameOverride: "__active" }}
            />
            <SplitButton
              isReversed={isReversed}
              actionButtonProps={ACTION_BUTTON_PROPS__BUTTON}
              dropdownContent={DROPDOWN_CONTENT__ENABLED}
              dropdownButtonProps={{ classNameOverride: "__focus" }}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
  parameters: {
    /** @todo: Remove any inapplicable pseudo states */
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
