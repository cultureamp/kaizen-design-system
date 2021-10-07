import React, { useState } from "react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../storybook/constants"
import FilterBarContainer from "../src/FilterBarContainer/FilterBarContainer"
import { IFilter } from "../src/types"

export default {
  title: `${CATEGORIES.components}/Filter Bar`,
  component: FilterBarContainer,
  parameters: {
    docs: {
      description: {
        component:
          'Import { FilterBarContainer } from "@kaizen/FilterBarContainer"',
      },
    },
  },
  decorators: [withDesign],
}

const ExampleContainer: React.FunctionComponent = ({ children }) => (
  <div style={{ width: "98%", margin: "1%" }}>{children}</div>
)

const reversedBg = {
  backgrounds: {
    default: "Purple 700",
  },
}

const filterArray: IFilter[] = [
  {
    name: "Department",
    id: "0123",
    removable: false,
    Component: <></>,
  },
  {
    name: "Location",
    id: "0124",
    removable: false,
    Component: <></>,
  },
]

export const DefaultSiteDemo = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <ExampleContainer>
      <FilterBarContainer
        handleMinimize={() => setExpanded(!expanded)}
        expanded={expanded}
        flexible
        showControls
        filters={filterArray}
      />
    </ExampleContainer>
  )
}
DefaultSiteDemo.story = {
  name: "Flexible",
}

export const FilterBarContainerEmpty = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <ExampleContainer>
      <FilterBarContainer
        handleMinimize={() => setExpanded(!expanded)}
        expanded={expanded}
        flexible
        showControls
      />
    </ExampleContainer>
  )
}
FilterBarContainerEmpty.story = {
  name: "Flexible, Empty",
}

export const FlexibleReversed = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <ExampleContainer>
      <FilterBarContainer
        handleMinimize={() => setExpanded(!expanded)}
        expanded={expanded}
        flexible
        reversed
        showControls
        filters={filterArray}
      />
    </ExampleContainer>
  )
}
FlexibleReversed.story = {
  name: "Flexible, Reversed",
  parameters: {
    ...reversedBg,
  },
}

export const FlexibleEmptyReversed = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <ExampleContainer>
      <FilterBarContainer
        handleMinimize={() => setExpanded(!expanded)}
        expanded={expanded}
        flexible
        showControls
        reversed
      />
    </ExampleContainer>
  )
}
FlexibleEmptyReversed.story = {
  name: "Flexible, Empty, Reversed",
  parameters: {
    ...reversedBg,
  },
}

export const SmartDefault = () => (
  <ExampleContainer>
    <FilterBarContainer filters={filterArray} />
  </ExampleContainer>
)
SmartDefault.story = {
  name: "Smart Default",
}

export const SmartDefaultReversed = () => (
  <ExampleContainer>
    <FilterBarContainer filters={filterArray} reversed />
  </ExampleContainer>
)
SmartDefaultReversed.story = {
  name: "Smart Default, Reversed",
  parameters: {
    ...reversedBg,
  },
}
