import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { AsyncSelect, Select } from "@kaizen/draft-select"
import * as React from "react"

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

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterNames(inputValue))
    }, 1000)
  })

export default {
  title: "Select (React)",
  component: Select,
  parameters: {
    info: {
      text: `
      import { AsyncSelect, Select } from "@kaizen/draft-select"
      `,
    },
  },
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

SingleEllipsis.story = {
  name: "Single with ellipsizing selection",
}

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

MultiSelectSearchable.story = {
  name: "Multi-Select Searchable",
}

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
MultiAsyncSearchable.story = {
  name: "Multi-Async Searchable",
}

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

SingleSecondary.story = {
  name: "Single, Secondary",
}

export const SingleSecondarySmall = () => (
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

SingleSecondarySmall.story = {
  name: "Single, Secondary-Small, Reversed",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

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

SingleSecondaryDisabled.story = {
  name: "Single, Secondary, Disabled",
}

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

SingleSecondaryReversed.story = {
  name: "Single, Secondary, Reversed",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
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

SingleSecondaryWithEllipsis.story = {
  name: "Single Secondary with ellipsis",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
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

SingleSecondaryReversedDisabled.story = {
  name: "Single Secondary Reversed (disabled)",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}
