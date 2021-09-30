import React, { useState } from "react"
import { withDesign } from "storybook-addon-designs"

import { SearchField } from "@kaizen/draft-form"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

const ExampleContainer: React.FunctionComponent = ({ children }) => (
  <div style={{ width: "98%", margin: "1%" }}>{children}</div>
)

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Search Field`,
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component: 'import { SearchField } from "@kaizen/draft-form"',
      },
    },
  },
  decorators: [withDesign],
}

const reversedBg = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const DefaultKaizenSiteDemo = () => {
  const [value, setValue] = useState("Some value")

  return (
    <ExampleContainer>
      <SearchField
        id="search-field"
        placeholder="Search…"
        labelText="Label"
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    </ExampleContainer>
  )
}

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo) - with state"

export const SearchFieldDisabled = () => {
  const [value, setValue] = useState("Some value")
  return (
    <ExampleContainer>
      <SearchField
        id="search-field"
        placeholder="Search…"
        disabled
        labelText="Label"
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    </ExampleContainer>
  )
}

SearchFieldDisabled.storyName = "Default Disabled"

export const SearchFieldSecondary = () => {
  const [value, setValue] = useState("Some value")
  return (
    <ExampleContainer>
      <SearchField
        id="search-field"
        placeholder="Search…"
        secondary
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    </ExampleContainer>
  )
}

SearchFieldSecondary.storyName = "Secondary"

export const SearchFieldSecondaryLoading = () => {
  const [value, setValue] = useState("Some value")
  return (
    <ExampleContainer>
      <SearchField
        id="search-field"
        placeholder="Search…"
        secondary
        loading
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    </ExampleContainer>
  )
}

SearchFieldSecondaryLoading.storyName = "Secondary Loading"

export const SearchFieldSecondaryDisabled = () => {
  const [value, setValue] = useState("Some value")
  return (
    <ExampleContainer>
      <SearchField
        id="search-field"
        placeholder="Search…"
        secondary
        disabled
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    </ExampleContainer>
  )
}
SearchFieldSecondaryDisabled.storyName = "Secondary Disabled"

export const SearchFieldLoading = () => {
  const [value, setValue] = useState("Some value")

  return (
    <ExampleContainer>
      <SearchField
        id="search-field"
        placeholder="Search…"
        loading
        labelText="Label"
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    </ExampleContainer>
  )
}

SearchFieldLoading.storyName = "Default Loading"

export const SearchFieldReversed = () => {
  const [value, setValue] = useState("Some value")

  return (
    <ExampleContainer>
      <SearchField
        id="search-field"
        reversed
        placeholder="Search…"
        labelText="Label"
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    </ExampleContainer>
  )
}

SearchFieldReversed.story = {
  name: "Default Reversed",
  parameters: {
    ...reversedBg,
  },
}

export const SearchFieldReversedLoading = () => {
  const [value, setValue] = useState("Some value")

  return (
    <ExampleContainer>
      <SearchField
        id="search-field"
        reversed
        placeholder="Search…"
        labelText="Label"
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue("")}
        loading
      />
    </ExampleContainer>
  )
}

SearchFieldReversedLoading.story = {
  name: "Default Reversed Loading",
  parameters: {
    ...reversedBg,
  },
}

export const SearchFieldReversedDisabled = () => {
  const [value, setValue] = useState("Some value")
  return (
    <ExampleContainer>
      <SearchField
        id="search-field"
        reversed
        disabled
        placeholder="Search…"
        labelText="Label"
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    </ExampleContainer>
  )
}

SearchFieldReversedDisabled.story = {
  name: "Default Reversed Disabled",
  parameters: {
    ...reversedBg,
  },
}

export const SearchFieldSecondaryReversed = () => {
  const [value, setValue] = useState("Some value")
  return (
    <ExampleContainer>
      <SearchField
        id="search-field"
        reversed
        placeholder="Search…"
        secondary
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    </ExampleContainer>
  )
}

SearchFieldSecondaryReversed.story = {
  name: "Secondary Reversed",
  parameters: {
    ...reversedBg,
  },
}

export const SearchFieldSecondaryReversedLoading = () => {
  const [value, setValue] = useState("Some value")
  return (
    <ExampleContainer>
      <SearchField
        id="search-field"
        reversed
        placeholder="Search…"
        secondary
        loading
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    </ExampleContainer>
  )
}

SearchFieldSecondaryReversedLoading.story = {
  name: "Secondary Reversed Loading",
  parameters: {
    ...reversedBg,
  },
}

export const SearchFieldSecondaryReversedDisabled = () => {
  const [value, setValue] = useState("Some value")
  return (
    <ExampleContainer>
      <SearchField
        id="search-field"
        reversed
        disabled
        placeholder="Search…"
        secondary
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    </ExampleContainer>
  )
}

SearchFieldSecondaryReversedDisabled.story = {
  name: "Secondary Reversed Disabled",
  parameters: {
    ...reversedBg,
  },
}
