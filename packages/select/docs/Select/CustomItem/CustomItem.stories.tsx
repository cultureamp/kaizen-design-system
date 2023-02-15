import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES, SUB_CATEGORIES } from "../../../../../storybook/constants"
import { figmaEmbed } from "../../../../../storybook/helpers"
import { Select } from "../../../src/Select"
import { ListBoxSectionWithSubtitle } from "./ListBoxSectionWithSubtitle"
import {
  CustomOptionWithSubtitle,
  WithSubtitleType,
} from "./OptionWithSubtitle"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.select}/Select/Custom Item`,
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

export const CustomOption: ComponentStory<typeof Select> = props => {
  const singleMockItemsWithSubLabel: WithSubtitleType[] = [
    { label: "Front-End", value: "id-fe", subtitle: "React" },
    { label: "Back-End", value: "id-be", subtitle: "Ruby on rails" },
    { label: "SRE", value: "id-sre", subtitle: "Infrastructure" },
    {
      label: "Dev-ops",
      value: "id-devops",
      subtitle: "Site reliability engineering",
    },
    { label: "Others", value: "id-others", subtitle: "Sublabel" },
  ]

  return (
    <Select<WithSubtitleType> {...props} items={singleMockItemsWithSubLabel}>
      {(optionsProps): JSX.Element[] =>
        optionsProps.items.map(item => (
          <CustomOptionWithSubtitle
            {...optionsProps}
            key={item.key}
            item={item}
          />
        ))
      }
    </Select>
  )
}

CustomOption.args = {
  label: "label",
  id: "single-select",
  isFullWidth: false,
  description: "This is a description",
  isDisabled: false,
  placeholder: "Placeholder",
  defaultOpen: false,
  selectedKey: undefined,
}

export const CustomOptionWithSections: ComponentStory<
  typeof Select
> = props => {
  const customGroupedMockItems: WithSubtitleType[] = [
    {
      label: "Colours",
      value: [
        { label: "Blue", value: "blue", subtitle: "Royal Blue" },
        { label: "Red", value: "red", subtitle: "Ruby Red" },
        { label: "Green", value: "green", subtitle: "Mossy Green" },
      ],
      subtitle: "My Pretty Colours",
    },
    {
      label: "Flavours",
      value: [
        { label: "Vanilla", value: "Vanilla" },
        { label: "Chocolate", value: "Chocolate" },
        { label: "Strawberry", value: "Strawberry" },
      ],
      subtitle: "My yummy flavours",
    },
  ]

  return (
    <Select<WithSubtitleType> {...props} items={customGroupedMockItems}>
      {(optionsProps): JSX.Element[] =>
        optionsProps.items.map(item =>
          item.type === "section" ? (
            <ListBoxSectionWithSubtitle key={item.key} section={item} />
          ) : (
            <CustomOptionWithSubtitle
              {...optionsProps}
              key={item.key}
              item={item}
            />
          )
        )
      }
    </Select>
  )
}

CustomOptionWithSections.args = {
  label: "label",
  id: "single-select-custom-section",
  isFullWidth: false,
  description: "This is a description",
  isDisabled: false,
  placeholder: "Placeholder",
  defaultOpen: false,
  selectedKey: undefined,
}
