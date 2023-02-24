import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import isChromatic from "chromatic"
import { withDesign } from "storybook-addon-designs"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { LoadingInput } from "../../components/src"
import { Button, ButtonProps } from ".."
import mdx from "./Button.mdx"

const IS_CHROMATIC = isChromatic()

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.button}/Button/Docs`,
  component: Button,
  args: {
    label: "Label",
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      page: mdx,
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=13555%3A0"
    ),
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Button>

export const Base: ComponentStory<typeof Button> = () => (
  <Button label="Label" />
)

export const SkeletonState: Story<ButtonProps> = () => (
  <LoadingInput isAnimated width={13} />
)

export const Variants: Story<ButtonProps> = () => (
  <StickerSheet>
    <StickerSheet.Row>
      <Button label="Default" />
      <Button label="Primary" primary />
      <Button label="Destructive" destructive />
      <Button label="Secondary" secondary />
      <Button label="Secondary Destructive" secondary destructive />
    </StickerSheet.Row>
  </StickerSheet>
)

export const Disabled: Story<ButtonProps> = () => (
  <Button label="Label" disabled />
)

export const IconPosition: Story<ButtonProps> = () => (
  <StickerSheet>
    <StickerSheet.Row>
      <Button label="Label" icon={addIcon} />
      <Button label="Label" icon={arrowRight} iconPosition="end" />
    </StickerSheet.Row>
  </StickerSheet>
)

export const Badge: Story<ButtonProps> = () => (
  <Button
    label="Label"
    icon={filterIcon}
    badge={{ text: "3", variant: "active" }}
    secondary
  />
)

export const FullWidth: Story<ButtonProps> = () => (
  <Button
    label="Label"
    icon={filterIcon}
    badge={{ text: "3", variant: "active" }}
    secondary
  />
)

export const Working: Story<ButtonProps> = () => (
  <StickerSheet>
    <StickerSheet.Row>
      <Button label="Label" working workingLabel="Submitting" />
      <Button
        label="Label"
        working
        workingLabel="Submitting"
        workingLabelHidden
      />
    </StickerSheet.Row>
  </StickerSheet>
)
