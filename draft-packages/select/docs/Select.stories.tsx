import React from "react"
import { StoryFn } from "@storybook/react"
import { Label } from "@kaizen/draft-form"
import { AsyncSelect, Select } from "@kaizen/draft-select"
import { Heading } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

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
  tags: ["autodocs"],
  title: "Components/Select/Select Legacy",
  component: Select,
  parameters: {
    a11y: { disable: true },
    docs: {
      description: {
        component: 'import { AsyncSelect, Select } from "@kaizen/draft-select"',
      },
    },
  },
}

export const DefaultSelectStory: StoryFn<typeof Select> = args => (
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

export const GroupedStory: StoryFn<typeof Select> = args => {
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

export const DefaultAsyncSelectStory: StoryFn<typeof AsyncSelect> = args => {
  const filterNames = (inputValue: string): typeof OPTIONS =>
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
      <Label id="async-select-label" labelText="Type to see options" />
      <AsyncSelect
        aria-labelledby="async-select-label"
        loadOptions={promiseOptions}
        {...args}
      />
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

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <div>
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
