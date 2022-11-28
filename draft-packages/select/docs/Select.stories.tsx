import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Label } from "@kaizen/draft-form"
import { AsyncSelect, Select } from "@kaizen/draft-select"
import { Heading } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

const OPTIONS = [
  { value: "Mindy", label: "Mindy" },
  { value: "Jaime", label: "Jaime", isDisabled: true },
  { value: "Rafa", label: "Rafa" },
  { value: "Elaine", label: "Elaine" },
  { value: "Julio", label: "Julio" },
  { value: "Priyanka", label: "Priyanka" },
  { value: "Prince", label: "Prince" },
  { value: "Charith", label: "Charith" },
  { value: "Nick", label: "Nick" },
  {
    value: "Long option",
    label:
      "Long option where the container is fixed width and the selected option should ellipsize",
  },
]

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.selectLegacy}`,
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'import { AsyncSelect, Select } from "@kaizen/draft-select"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14321%3A65630"
    ),
  },
  decorators: [withDesign],
}

export const DefaultSelectStory: ComponentStory<typeof Select> = args => (
  <Select {...args} />
)
DefaultSelectStory.storyName = "Select"
DefaultSelectStory.args = {
  label: "Label",
  options: OPTIONS,
  placeholder: "Placeholder",
  defaultValue: OPTIONS[0],
  fullWidth: true,
  reversed: false,
  status: "default",
  isClearable: false,
  isSearchable: false,
}

export const GroupedStory: ComponentStory<typeof Select> = args => {
  const COLOUR_OPTIONS = [
    { value: "blue", label: "blue" },
    { value: "red", label: "red", isDisabled: true },
    { value: "green", label: "green" },
  ]

  const FLAVOUR_OPTIONS = [
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
  ]

  const GROUPED_OPTIONS = [
    {
      label: "Colours",
      options: COLOUR_OPTIONS,
    },
    {
      label: "Flavours",
      options: FLAVOUR_OPTIONS,
    },
  ]
  return (
    <Select
      options={GROUPED_OPTIONS}
      defaultValue={COLOUR_OPTIONS[0]}
      {...args}
    />
  )
}
GroupedStory.storyName = "Grouped Options"
GroupedStory.args = {
  label: "Label",
  placeholder: "Placeholder",
  fullWidth: true,
  reversed: false,
  status: "default",
}

export const DefaultAsyncSelectStory: ComponentStory<
  typeof AsyncSelect
> = args => {
  const filterNames = (inputValue: string) =>
    OPTIONS.filter(({ label }) =>
      label.toLowerCase().includes(inputValue.toLowerCase())
    )

  const promiseOptions = (
    inputValue: string
  ): Promise<Array<{ value: string; label: string }>> =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterNames(inputValue))
      }, 1000)
    })

  return (
    <>
      <Label labelText="Type to see options" />
      <AsyncSelect loadOptions={promiseOptions} {...args} />
    </>
  )
}
DefaultAsyncSelectStory.storyName = "Async Select"
DefaultAsyncSelectStory.parameters = {
  docs: { source: { type: "code" } },
}
DefaultAsyncSelectStory.args = {
  options: OPTIONS,
  placeholder: "Placeholder",
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <div>
    {/* {!isReversed && ( */}
    <>
      <StoryWrapper isReversed={isReversed}>
        <Heading variant="heading-3" color={isReversed ? "white" : "dark"}>
          Default Select
        </Heading>
        <StoryWrapper.RowHeader headings={["Base", "Clearable", "Disabled"]} />
        <StoryWrapper.Row rowTitle="Default">
          <Select
            options={OPTIONS}
            reversed={isReversed}
            placeholder="Edit survey"
          />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[0]}
            isClearable
          />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            placeholder="Edit survey"
            isDisabled
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Ellipsis">
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[9]}
            placeholder="Edit survey"
          />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[9]}
            placeholder="Edit survey"
            isClearable
          />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[9]}
            placeholder="Edit survey"
            isDisabled
          />
        </StoryWrapper.Row>
      </StoryWrapper>

      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
        <StoryWrapper.Row rowTitle="Multi Select">
          <Select
            options={OPTIONS}
            reversed={isReversed}
            isMulti={true}
            defaultValue={OPTIONS[0]}
          />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[0]}
            placeholder="Edit survey"
            isDisabled
            isMulti
          />
        </StoryWrapper.Row>
      </StoryWrapper>
    </>
    {/* )} */}

    <StoryWrapper isReversed={isReversed}>
      <Heading variant="heading-3" color={isReversed ? "white" : "dark"}>
        Secondary
      </Heading>
      <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
      <StoryWrapper.Row rowTitle="Secondary">
        <Select
          reversed={isReversed}
          variant="secondary"
          options={OPTIONS}
          defaultValue={OPTIONS[0]}
        />
        <Select
          reversed={isReversed}
          variant="secondary"
          options={OPTIONS}
          defaultValue={OPTIONS[0]}
          placeholder="Edit survey"
          isDisabled
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Secondary Small">
        <Select
          reversed={isReversed}
          variant="secondary-small"
          options={OPTIONS}
          defaultValue={OPTIONS[0]}
        />
        <Select
          reversed={isReversed}
          variant="secondary-small"
          options={OPTIONS}
          defaultValue={OPTIONS[0]}
          isDisabled
        />
      </StoryWrapper.Row>
    </StoryWrapper>

    <StoryWrapper isReversed={isReversed}>
      <Heading variant="heading-3" color={isReversed ? "white" : "dark"}>
        Menu
      </Heading>
      <StoryWrapper.RowHeader headings={["Has options", "Has no options"]} />
      <StoryWrapper.Row rowTitle="Is open">
        <Select
          reversed={isReversed}
          variant="secondary"
          options={OPTIONS}
          menuIsOpen
        />
        <Select
          reversed={isReversed}
          variant="secondary"
          options={[]}
          menuIsOpen
        />
      </StoryWrapper.Row>
    </StoryWrapper>
  </div>
)
export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
