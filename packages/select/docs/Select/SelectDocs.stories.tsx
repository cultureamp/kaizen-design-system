import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  LoadingInput,
  LoadingHeading,
  LoadingParagraph,
} from "@kaizen/loading-skeleton"
import { CATEGORIES, SUB_CATEGORIES } from "../../../../storybook/constants"
import { figmaEmbed } from "../../../../storybook/helpers"
import { Select } from "../../src/Select/Select"
import { singleMockItems } from "../MockData"
import { selectControls } from "../controls/selectControls"
export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.select}/Select/Doc Stories`,
  component: Select,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      source: { type: "code" },
      description: {
        component: 'import { Select } from "@kaizen/select".',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=22814%3A96966"
    ),
  },
  decorators: [withDesign],
  argTypes: {
    ...selectControls,
  },
} as ComponentMeta<typeof Select>

export const Base: ComponentStory<typeof Select> = () => (
  <div className="pl-32">
    <Select
      label="label"
      id="single-select"
      items={singleMockItems}
      description="This is a description"
      placeholder="Placeholder"
      selectedKey={undefined}
    />
  </div>
)

export const SkeletonState: Story<typeof Select> = () => (
  <>
    <LoadingHeading variant="heading-6" width={6} />
    <LoadingInput isAnimated width={16} height={48} />
    <LoadingParagraph classNameOverride="mt-6" width={8} isInline />
  </>
)

export const Disabled: ComponentStory<typeof Select> = () => (
  <div className="pl-32">
    <Select
      label="label"
      id="single-select"
      items={singleMockItems}
      isDisabled
    />
  </div>
)

export const Reversed: ComponentStory<typeof Select> = () => (
  <div className="bg-purple-700 p-32">
    <Select
      label="label"
      id="single-select"
      items={singleMockItems}
      isReversed
    />
  </div>
)

export const SelectedKey: ComponentStory<typeof Select> = () => (
  <div className="pl-32">
    <Select
      label="label"
      id="single-select"
      items={singleMockItems}
      selectedKey={"id-sre"}
    />
  </div>
)
export const DisabledValue: ComponentStory<typeof Select> = () => (
  <div className="pl-32">
    <Select
      label="label"
      id="single-select"
      items={singleMockItems}
      disabledValues={["id-sre"]}
    />
  </div>
)

export const Validation: ComponentStory<typeof Select> = () => (
  <Select
    label="label"
    id="single-select"
    items={singleMockItems}
    status="error"
    validationMessage="This is an error"
  />
)
