import { loadElmStories } from "@cultureamp/elm-storybook"
import { Select } from "@kaizen/component-library/draft"
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

storiesOf("Select", module)
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

loadElmStories("Select (Elm)", module, require("./SelectStories.elm"), [
  "Single",
  "Single Searchable",
  "Multi-Select Searchable",
])
