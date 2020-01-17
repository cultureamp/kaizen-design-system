import { loadElmStories } from "@cultureamp/elm-storybook"
import { AsyncSelect, Select } from "@cultureamp/kaizen-component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"

const StoryContainer = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ width: "300px", margin: "12px auto" }}>{children}</div>
}

const WideStoryContainer = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ width: "500px", margin: "12px auto" }}>{children}</div>
}

const options = [
  { value: "Mindy", label: "Mindy" },
  { value: "Jaime", label: "Jaime" },
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

const filterNames = (inputValue: string) => {
  return asyncOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  )
}

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterNames(inputValue))
    }, 1000)
  })

storiesOf("Select (React)", module)
  .add("Single", () => (
    <StoryContainer>
      <Select
        options={options}
        placeholder="Placeholder"
        isSearchable={false}
      />
    </StoryContainer>
  ))

  .add("Single Searchable", () => (
    <StoryContainer>
      <Select options={options} placeholder="Placeholder" />
    </StoryContainer>
  ))

  .add("Multi-Select Searchable", () => (
    <WideStoryContainer>
      <Select options={options} placeholder="Placeholder" isMulti={true} />
    </WideStoryContainer>
  ))

  .add("Async Searchable", () => (
    <WideStoryContainer>
      <AsyncSelect
        loadOptions={promiseOptions}
        defaultOptions={options}
        placeholder="Placeholder"
      />
    </WideStoryContainer>
  ))

  .add("Multi-Async Searchable", () => (
    <WideStoryContainer>
      <AsyncSelect
        loadOptions={promiseOptions}
        defaultOptions={options}
        placeholder="Placeholder"
        isMulti={true}
      />
    </WideStoryContainer>
  ))

loadElmStories("Select (Elm)", module, require("./SelectStories.elm"), [
  "Single (Kaizen Site Demo)",
  "Single Searchable",
  "Multi-Select Searchable",
])
