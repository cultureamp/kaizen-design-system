import React from "react"
import { action } from "@storybook/addon-actions"
import { ComponentMeta, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import duplicateIcon from "@kaizen/component-library/icons/duplicate.icon.svg"
import editIcon from "@kaizen/component-library/icons/edit.icon.svg"
import { MenuItem, MenuList } from "@kaizen/draft-menu"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { ActionButton, DropdownButton } from "../src/SplitButton/components"
import { SplitButton, SplitButtonProps } from "../"

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
    <MenuItem icon={editIcon} label="Menu Item 1" onClick={action("clicked")} />
    <MenuItem icon={duplicateIcon} label="Menu Item 2" />
  </MenuList>
)

const DROPDOWN_CONTENT__ONE_DISABLED = (
  <MenuList>
    <MenuItem icon={editIcon} label="Menu Item 1" disabled />
    <MenuItem icon={duplicateIcon} label="Menu Item 2" />
  </MenuList>
)

export default {
  title: `${CATEGORIES.components}/Split Button`,
  component: SplitButton,
  subcomponents: {
    actionButtonProps: ActionButton,
    dropdownButtonProps: DropdownButton,
  },
  argTypes: {
    actionButtonProps: {
      options: ["Button", "Anchor"],
      control: {
        type: "select",
        labels: {
          Button: '{ label: "Edit Survey", onClick: action("clicked") }',
          Anchor: '{ label: "Edit Survey", href: "//example.com" }',
        },
      },
      mapping: {
        Button: ACTION_BUTTON_PROPS__BUTTON,
        Anchor: ACTION_BUTTON_PROPS__ANCHOR,
      },
    },
    dropdownContent: {
      options: [
        "MenuList - MenuItems enabled",
        "MenuList - one MenuItem disabled",
      ],
      control: { type: "select" },
      mapping: {
        "MenuList - MenuItems enabled": DROPDOWN_CONTENT__ENABLED,
        "MenuList - one MenuItem disabled": DROPDOWN_CONTENT__ONE_DISABLED,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: '`import { SplitButton } from "@kaizen/split-button"`',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14512%3A404"
    ),
  },
  decorators: [withDesign],
} as ComponentMeta<typeof SplitButton>

export const DefaultKaizenSiteDemo = args => <SplitButton {...args} />
DefaultKaizenSiteDemo.storyName = "Split Button"
DefaultKaizenSiteDemo.args = {
  actionButtonProps: "Button",
  dropdownContent: "MenuList - MenuItems enabled",
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const ROWS_MAP: Array<{ rowTitle: string } & SplitButtonProps> = [
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
  ]

  return (
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
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  chromatic: { disable: false },
  backgrounds: { default: "Purple 700" },
  controls: { disable: true },
}
