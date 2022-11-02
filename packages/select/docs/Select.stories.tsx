import React, { useState, Key } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Select } from "../src/Select/Select"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { getSelectedOptionLabel } from "../src/Select/utils"
import { items } from "./MockData"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.select}/Select New`,
  component: Select,
  parameters: {
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

export const DefaultKaizenSiteDemo: ComponentStory<typeof Select> = args => {
  const [selectedKey, setSelectedKey] = useState<Key | null>("id-fe")

  const handleSelectionChange = (key: Key) => setSelectedKey(key)

  return (
    <>
      <Select
        {...args}
        id="single-select"
        onSelectionChange={handleSelectionChange}
        selectedKey={selectedKey}
        items={items}
        trigger={() => (
          <Select.TriggerButton
            selectedOptionLabel={getSelectedOptionLabel(selectedKey, items)}
          />
        )}
      >
        {() => (
          <Select.ListBox>
            {({ allItems }) =>
              allItems.map(item => <Select.Option key={item.key} item={item} />)
            }
          </Select.ListBox>
        )}
      </Select>
    </>
  )
}

DefaultKaizenSiteDemo.storyName = "Select"
DefaultKaizenSiteDemo.args = { label: "label" }
DefaultKaizenSiteDemo.parameters = {
  chromatic: { disable: false },
}
