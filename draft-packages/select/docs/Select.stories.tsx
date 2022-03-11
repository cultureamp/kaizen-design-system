import React from "react"
import { AsyncSelect, Select } from "@kaizen/draft-select"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "300px", margin: "12px auto" }}>{children}</div>
)

const WideStoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "500px", margin: "12px auto" }}>{children}</div>
)

const NarrowStoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "200px", margin: "12px auto" }}>{children}</div>
)

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

export const Single = () => (
  <StoryContainer>
    <Select
      options={options}
      placeholder="Placeholder"
      isSearchable={false}
      isDisabled={false}
      defaultValue={options[0]}
    />
  </StoryContainer>
)
Single.parameters = { chromatic: { disable: false } }

export const SingleDisabled = () => (
  <StoryContainer>
    <Select
      options={options}
      placeholder="Placeholder"
      isSearchable={false}
      isDisabled={true}
      defaultValue={options[0]}
    />
  </StoryContainer>
)
SingleDisabled.parameters = { chromatic: { disable: false } }

export const SingleError = () => (
  <StoryContainer>
    <Select
      options={options}
      placeholder="Placeholder"
      isSearchable={false}
      defaultValue={options[0]}
      status="error"
    />
  </StoryContainer>
)
SingleDisabled.parameters = { chromatic: { disable: false } }

export const SingleEllipsis = () => {
  const localOptions = [
    {
      value: "a",
      label:
        "Long option where the container is 200px fixed width and the selected option should ellipsize",
    },
    { value: "b", label: "B" },
  ]

  return (
    <NarrowStoryContainer>
      <Select
        options={localOptions}
        isSearchable={false}
        defaultValue={localOptions[0]}
      />
    </NarrowStoryContainer>
  )
}
SingleEllipsis.storyName = "Single with ellipsizing selection"
SingleEllipsis.parameters = { chromatic: { disable: false } }

export const SingleClearable = () => (
  <StoryContainer>
    <Select
      options={options}
      placeholder="Placeholder"
      isSearchable={false}
      isClearable={true}
    />
  </StoryContainer>
)

export const SingleSearchable = () => (
  <StoryContainer>
    <Select options={options} placeholder="Placeholder" />
  </StoryContainer>
)

export const MultiSelectSearchable = () => (
  <WideStoryContainer>
    <Select options={options} placeholder="Placeholder" isMulti={true} />
  </WideStoryContainer>
)
MultiSelectSearchable.storyName = "Multi-Select Searchable"

export const AsyncSearchable = () => (
  <WideStoryContainer>
    <AsyncSelect
      loadOptions={promiseOptions}
      defaultOptions={options}
      placeholder="Placeholder"
    />
  </WideStoryContainer>
)

export const MultiAsyncSearchable = () => (
  <WideStoryContainer>
    <AsyncSelect
      loadOptions={promiseOptions}
      defaultOptions={options}
      placeholder="Placeholder"
      isMulti={true}
    />
  </WideStoryContainer>
)
MultiAsyncSearchable.storyName = "Multi-Async Searchable"

export const SingleSecondary = () => (
  <StoryContainer>
    <Select
      options={options}
      isSearchable={false}
      defaultValue={options[0]}
      variant="secondary"
    />
  </StoryContainer>
)
SingleSecondary.storyName = "Single, Secondary"
SingleSecondary.parameters = { chromatic: { disable: false } }

export const SingleSecondaryDisabled = () => (
  <StoryContainer>
    <Select
      options={options}
      isDisabled={true}
      isSearchable={false}
      defaultValue={options[0]}
      variant="secondary"
    />
  </StoryContainer>
)
SingleSecondaryDisabled.storyName = "Single, Secondary, Disabled"
SingleSecondaryDisabled.parameters = { chromatic: { disable: false } }

export const SingleSecondaryReversed = () => (
  <StoryContainer>
    <Select
      options={options}
      isSearchable={false}
      defaultValue={options[0]}
      variant="secondary"
      reversed={true}
    />
  </StoryContainer>
)
SingleSecondaryReversed.storyName = "Single, Secondary, Reversed"
SingleSecondaryReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}

export const SingleSecondarySmallReversed = () => (
  <StoryContainer>
    <Select
      options={options}
      isSearchable={false}
      defaultValue={options[0]}
      variant="secondary-small"
      reversed={true}
    />
  </StoryContainer>
)
SingleSecondarySmallReversed.storyName = "Single, Secondary-Small, Reversed"
SingleSecondarySmallReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}

export const SingleSecondaryReversedDisabled = () => (
  <StoryContainer>
    <Select
      options={options}
      isDisabled={true}
      isSearchable={false}
      defaultValue={options[0]}
      variant="secondary"
      reversed={true}
    />
  </StoryContainer>
)
SingleSecondaryReversedDisabled.storyName =
  "Single Secondary Reversed (disabled)"
SingleSecondaryReversedDisabled.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}

export const SingleSecondaryWithEllipsis = () => {
  const localOptions = [
    {
      value: "a",
      label:
        "Long option where the container is 200px fixed width and the selected option should ellipsize",
    },
    { value: "b", label: "B" },
    { value: "c", label: "Regular" },
  ]
  return (
    <NarrowStoryContainer>
      <Select
        options={localOptions}
        isSearchable={false}
        defaultValue={localOptions[0]}
        variant="secondary"
        reversed={true}
      />
    </NarrowStoryContainer>
  )
}
SingleSecondaryWithEllipsis.storyName = "Single Secondary with ellipsis"
SingleSecondaryWithEllipsis.parameters = {
  backgrounds: { default: "Purple 700" },
}
