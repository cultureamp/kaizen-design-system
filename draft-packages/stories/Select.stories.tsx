import { AsyncSelect, Select } from "@kaizen/component-library/draft"
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

export default {
  title: "Select (React)",
}

export const Single = () => (
  <StoryContainer>
    <Select options={options} placeholder="Placeholder" isSearchable={false} />
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
