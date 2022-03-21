import React from "react"
import { Story } from "@storybook/react"
import { AsyncSelect, Select } from "@kaizen/draft-select"
import { withDesign } from "storybook-addon-designs"
import { Label } from "@kaizen/draft-form"
import { Heading } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const options = [
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
    value: "a",
    label:
      "Long option where the container is fixed width and the selected option should ellipsize",
  },
]

const asyncOptions = [
  { value: "Mindy", label: "Mindy" },
  { value: "Jaime", label: "Jaime" },
  { value: "Rafa", label: "Rafa" },
  { value: "Elaine", label: "Elaine" },
  { value: "Julio", label: "Julio" },
  { value: "Priyanka", label: "Priyanka" },
  { value: "Prince", label: "Prince" },
  { value: "Charith", label: "Charith" },
  { value: "Nick", label: "Nick" },
  { value: "Marc", label: "Marc" },
  { value: "Victor", label: "Victor" },
  { value: "Nicholas", label: "Nicholas" },
  { value: "Juan", label: "Juan" },
  { value: "Pedro", label: "Pedro" },
  { value: "Jack", label: "Jack" },
  { value: "Michael", label: "Michael" },
  { value: "Melisa", label: "Melisa" },
  { value: "Roberto", label: "Roberto" },
]

export default {
  title: `${CATEGORIES.components}/Select`,
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

export const DefaultSelectStory = args => (
  <>
    <Label labelText="label" />
    <Select {...args} />
  </>
)
DefaultSelectStory.parameters = { chromatic: { disable: false } }
DefaultSelectStory.storyName = "Select"
DefaultSelectStory.args = {
  options,
  placeholder: "Placeholder",
  isSearchable: false,
  isDisabled: false,
  defaultValue: options[0],
}

export const DefaultAsyncSelectStory = args => (
  <>
    <Label labelText="label" />
    <AsyncSelect {...args} />
  </>
)
DefaultAsyncSelectStory.parameters = { chromatic: { disable: false } }
DefaultAsyncSelectStory.storyName = "Async Select"
DefaultAsyncSelectStory.args = {
  options,
  placeholder: "Placeholder",
  isSearchable: false,
  isDisabled: false,
  defaultValue: options[0],
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const filterNames = (inputValue: string) =>
    asyncOptions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    )

  const promiseOptions = (inputValue): Promise<any[]> =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterNames(inputValue))
      }, 1000)
    })
  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <Heading variant="heading-3" color={isReversed ? "white" : "dark"}>
          Default Select
        </Heading>
        <StoryWrapper.RowHeader headings={["Base", "Clearble", "Disabled"]} />
        <StoryWrapper.Row rowTitle="Default">
          <Select options={options} placeholder="Edit survey" />
          <Select options={options} defaultValue={options[0]} isClearable />
          <Select options={options} placeholder="Edit survey" isDisabled />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Ellipsis">
          <Select
            options={options}
            placeholder="Edit survey"
            defaultValue={options[9]}
          />
          <Select
            options={options}
            placeholder="Edit survey"
            defaultValue={options[9]}
            isClearable
          />
          <Select
            options={options}
            placeholder="Edit survey"
            isDisabled
            defaultValue={options[9]}
          />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
        <StoryWrapper.Row rowTitle="Multi Select">
          <Select options={options} isMulti={true} defaultValue={options[0]} />
          <Select
            options={options}
            placeholder="Edit survey"
            isDisabled
            isMulti={true}
            defaultValue={options[0]}
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
            options={options}
            reversed={isReversed}
            variant="secondary"
            defaultValue={options[0]}
          />
          <Select
            options={options}
            placeholder="Edit survey"
            isDisabled
            reversed={isReversed}
            variant="secondary"
            defaultValue={options[0]}
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Secondary Small">
          <Select
            options={options}
            reversed={isReversed}
            variant="secondary-small"
            defaultValue={options[0]}
          />
          <Select
            options={options}
            isDisabled
            reversed={isReversed}
            variant="secondary-small"
            defaultValue={options[0]}
          />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <Heading variant="heading-3" color={isReversed ? "white" : "dark"}>
          Async Select
        </Heading>
        <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
        <StoryWrapper.Row rowTitle="Default">
          <AsyncSelect
            loadOptions={promiseOptions}
            defaultOptions={options}
            placeholder="Placeholder"
          />
          <AsyncSelect
            loadOptions={promiseOptions}
            defaultOptions={options}
            placeholder="Placeholder"
            isDisabled
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Multi Select">
          <AsyncSelect
            loadOptions={promiseOptions}
            defaultOptions={options}
            placeholder="Placeholder"
            isMulti={true}
          />
          <AsyncSelect
            loadOptions={promiseOptions}
            defaultOptions={options}
            placeholder="Placeholder"
            isMulti={true}
            isDisabled
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Ellipsis">
          <AsyncSelect
            loadOptions={promiseOptions}
            defaultOptions={options}
            defaultValue={options[9]}
          />
          <AsyncSelect
            loadOptions={promiseOptions}
            defaultOptions={options}
            defaultValue={options[9]}
            isDisabled
          />
        </StoryWrapper.Row>
      </StoryWrapper>
    </>
  )
}
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
