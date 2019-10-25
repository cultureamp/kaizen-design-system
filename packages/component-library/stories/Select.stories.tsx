import { loadElmStories } from "@cultureamp/elm-storybook"
import { Select } from "@cultureamp/kaizen-component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"

const StoryContainer = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ width: "300px", margin: "12px auto" }}>{children}</div>
}

storiesOf("Select", module)
  .add("Single", () => (
    <StoryContainer>
      <Select
        options={[
          { value: "Mindy", label: "Mindy" },
          { value: "Jaime", label: "Jaime" },
          { value: "Rafa", label: "Rafa" },
          { value: "Elaine", label: "Elaine" },
          { value: "Julio", label: "Julio" },
          { value: "Priyanka", label: "Priyanka" },
          { value: "Prince", label: "Prince" },
          { value: "Charith", label: "Charith" },
          { value: "Nick", label: "Nick" },
        ]}
        placeholder="Placeholder"
        isSearchable={false}
      />
    </StoryContainer>
  ))

  .add("Single Searchable", () => (
    <StoryContainer>
      <Select
        options={[
          { value: "Mindy", label: "Mindy" },
          { value: "Jaime", label: "Jaime" },
          { value: "Rafa", label: "Rafa" },
          { value: "Elaine", label: "Elaine" },
          { value: "Julio", label: "Julio" },
          { value: "Priyanka", label: "Priyanka" },
          { value: "Prince", label: "Prince" },
          { value: "Charith", label: "Charith" },
          { value: "Nick", label: "Nick" },
        ]}
        placeholder="Placeholder"
        menuIsOpen={true}
      />
    </StoryContainer>
  ))

loadElmStories("Select (Elm)", module, require("./SelectStories.elm"), [
  "Single",
  "Single Searchable",
  "Multi-Select Searchable",
])
