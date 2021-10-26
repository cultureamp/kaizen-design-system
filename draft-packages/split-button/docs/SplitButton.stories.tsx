import { MenuItem } from "@kaizen/draft-menu"
import { SplitButton } from "@kaizen/draft-split-button"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"

import duplicateIcon from "@kaizen/component-library/icons/duplicate.icon.svg"
import editIcon from "@kaizen/component-library/icons/edit.icon.svg"
import { figmaEmbed } from "../../../storybook/helpers"
import { Box } from "../../../packages/component-library"
import { CATEGORIES } from "../../../storybook/constants"

const withBottomMargin = (Story: React.ComponentType) => (
  <Box mb={4}>
    <Story />
  </Box>
)

export default {
  title: `${CATEGORIES.components}/Split Button`,
  component: SplitButton,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    docs: {
      description: {
        component: 'import { SplitButton } from "@kaizen/draft-split-button"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14512%3A404"
    ),
  },
  decorators: [withDesign, withBottomMargin],
}

export const DefaultKaizenSiteDemo = () => (
  <SplitButton
    label="Edit"
    onClick={() => undefined}
    dropdownContent={
      <>
        <MenuItem
          onClick={e => undefined}
          icon={editIcon}
          label="Menu Item 1"
        />
        <MenuItem
          onClick={e => undefined}
          icon={duplicateIcon}
          label="Menu Item 2"
        />
      </>
    }
    dropdownAltText="Open menu"
  />
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const Disabled = () => (
  <SplitButton
    label="Edit"
    onClick={() => undefined}
    disabled
    dropdownContent={
      <MenuItem onClick={e => undefined} icon={editIcon} label="Menu Item 1" />
    }
    dropdownAltText="Open menu"
  />
)

Disabled.storyName = "Default button disabled"

export const EnabledWithDisabledItems = () => (
  <SplitButton
    label="Edit"
    onClick={() => undefined}
    dropdownContent={
      <>
        <MenuItem
          onClick={e => undefined}
          disabled
          label="Disabled Menu Item"
        />
        <MenuItem
          onClick={e => undefined}
          icon={editIcon}
          label="Menu Item 1"
        />
        <MenuItem
          onClick={e => undefined}
          icon={editIcon}
          label="Menu Item 2"
        />
      </>
    }
    dropdownAltText="Open menu"
  />
)

EnabledWithDisabledItems.storyName = "Default enabled with disabled items"

export const Primary = () => (
  <SplitButton
    label="Edit"
    variant="primary"
    onClick={() => undefined}
    dropdownContent={
      <>
        <MenuItem
          onClick={e => undefined}
          icon={editIcon}
          label="Menu Item 1"
        />
        <MenuItem
          onClick={e => undefined}
          icon={duplicateIcon}
          label="Menu Item 2"
        />
      </>
    }
    dropdownAltText="Open menu"
  />
)

Primary.storyName = "Primary"

export const PrimaryDisabled = () => (
  <SplitButton
    label="Edit"
    variant="primary"
    onClick={() => undefined}
    disabled
    dropdownContent={
      <>
        <MenuItem
          onClick={e => undefined}
          icon={editIcon}
          label="Menu Item 1"
        />
        <MenuItem
          onClick={e => undefined}
          icon={duplicateIcon}
          label="Menu Item 2"
        />
      </>
    }
    dropdownAltText="Open menu"
  />
)

PrimaryDisabled.storyName = "Primary disabled"

export const AnchorLink = () => (
  <SplitButton
    label="Edit"
    href="//example.com"
    dropdownContent={
      <MenuItem onClick={e => undefined} icon={editIcon} label="Menu Item 1" />
    }
    dropdownAltText="Open menu"
  />
)

AnchorLink.storyName = "Anchor link"

export const Rtl = () => (
  <SplitButton
    label="Edit"
    onClick={() => undefined}
    dropdownContent={
      <>
        <MenuItem
          onClick={e => undefined}
          icon={editIcon}
          label="Menu Item 1"
        />
        <MenuItem
          onClick={e => undefined}
          icon={duplicateIcon}
          label="Menu Item 2"
        />
      </>
    }
    dir="rtl"
    dropdownAltText="Open menu"
  />
)

Rtl.storyName = "RTL"

export const PrimaryRtl = () => (
  <SplitButton
    label="Edit"
    variant="primary"
    onClick={() => undefined}
    dropdownContent={
      <>
        <MenuItem
          onClick={e => undefined}
          icon={editIcon}
          label="
          Menu Item 1
        "
        />
        <MenuItem
          onClick={e => undefined}
          icon={duplicateIcon}
          label="Menu Item 2"
        />
      </>
    }
    dir="rtl"
    dropdownAltText="Open menu"
  />
)

PrimaryRtl.storyName = "Primary RTL"
