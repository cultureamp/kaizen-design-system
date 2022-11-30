import React, { useState, Key } from "react"
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
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A25645"
    ),
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Select>

export const DefaultStory: ComponentStory<typeof Select> = props => {
  const [selectedKey, setSelectedKey] = useState<Key | null>()
  const [isOpen, setIsOpen] = useState<boolean>()

  const handleSelectionChange = (key: Key) => {
    setSelectedKey(key)
    setIsOpen(!isOpen)
  }

  const handleOpenChange = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Select
        {...props}
        isOpen={isOpen}
        onOpenChange={handleOpenChange}
        onSelectionChange={handleSelectionChange}
        trigger={triggerProps => (
          <Select.TriggerButton {...triggerProps} placeholder="Placeholder" />
        )}
      >
        {({ items, state }) =>
          items.map(item => (
            <Select.Option
              key={item.key}
              item={item}
              state={state}
              data-testid="hello"
            />
          ))
        }
      </Select>

      {/* Minimum */}
      <br />
      <br />
      <Select {...props} />

      {/* Disabled */}
      <br />
      <br />
      <Select {...props} isDisabled />
    </>
  )
}

DefaultStory.storyName = "Select"
DefaultStory.args = {
  label: "label",
  id: "single-select",
  items: singleItems,
  isFullWidth: false,
  description: "This is a description",
  isDisabled: false,
}

DefaultStory.parameters = {
  chromatic: { disable: false },
  docs: { source: { type: "code" } },
}
