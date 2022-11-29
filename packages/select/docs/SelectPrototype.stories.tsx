import React, { useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { Select } from "../src/SelectPrototype"
import { singleItems } from "./MockData"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.select}/Select Prototype`,
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
} as ComponentMeta<typeof Select>


export const DefaultStory: ComponentStory<typeof Select> = props => {
  // const [selectedKey, setSelectedKey] = useState<Key | null>()
  const [isOpen, setIsOpen] = useState<boolean>()

  // const handleSelectionChange = (key: Key) => {
  //   setSelectedKey(key)
  //   setIsOpen(!isOpen)
  // }

  // const handleOpenChange = () => {
  //   setIsOpen(!isOpen)
  // }

  return (
    <Select
      {...props}
      // isOpen={isOpen}
      // onOpenChange={handleOpenChange}
      // onSelectionChange={handleSelectionChange}
      trigger={triggerProps => (
        <Select.TriggerButton {...triggerProps} placeholder="Placeholder" />
      )}
    >
      {singleItems.map(item => (
        <Select.Item key={item.value}>{item.label}</Select.Item>
      ))}
    </Select>
  )
}

DefaultStory.storyName = "Select"
DefaultStory.args = {
  label: "label",
  id: "single-select",
  // items: singleItems,
  isFullWidth: false,
  description: "This is a description",
  isDisabled: false,
}

DefaultStory.parameters = {
  chromatic: { disable: false },
  docs: { source: { type: "code" } },
}
