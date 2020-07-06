import { Box, Paragraph } from "@kaizen/component-library"
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Button } from "@kaizen/draft-button"
import { CheckboxGroup } from "@kaizen/draft-checkbox-group"
import { FilterDrawer } from "@kaizen/draft-filter-drawer"
import { CheckboxField } from "@kaizen/draft-form"
import React, { useState } from "react"
const styles = require("./FilterDrawer.stories.scss")
const StoryWrapper = ({ children }) => (
  <div
    style={{ display: "flex", justifyContent: "flex-start", margin: "1rem" }}
  >
    {children}
  </div>
)

export default {
  title: "FilterDrawer (React)",
}

export const DefaultStory = () => (
  <StoryWrapper>
    <DemoFilterDrawer />
  </StoryWrapper>
)

type CheckboxState = "on" | "off"

type AppliedFiltersState = {
  furry: CheckboxState
  aquatic: CheckboxState
  venomous: CheckboxState
}

const DemoFilterDrawer = () => {
  const [furryCheckboxState, setFurryCheckboxState] = useState<CheckboxState>(
    "off"
  )
  const [aquaticCheckboxState, setAquaticCheckboxState] = useState<
    CheckboxState
  >("off")
  const [venomousCheckboxState, setVenomousCheckboxState] = useState<
    CheckboxState
  >("off")
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const [appliedFilters, setAppliedFilters] = useState<AppliedFiltersState>({
    furry: "off",
    aquatic: "off",
    venomous: "off",
  })

  const checkedTraits: string[] = (appliedFilters.furry === "on"
    ? ["Furry"]
    : []
  )
    .concat(appliedFilters.aquatic === "on" ? ["Aquatic"] : [])
    .concat(appliedFilters.venomous === "on" ? ["Venomous"] : [])

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const hideDropdown = () => {
    setIsDropdownVisible(false)
  }

  const applyChanges = () => {
    setAppliedFilters({
      furry: furryCheckboxState,
      aquatic: aquaticCheckboxState,
      venomous: venomousCheckboxState,
    })
  }

  const clearChanges = () => {
    setFurryCheckboxState(appliedFilters.furry)
    setAquaticCheckboxState(appliedFilters.aquatic)
    setVenomousCheckboxState(appliedFilters.venomous)
  }

  const getNumFiltersEnabled = () =>
    [
      appliedFilters.furry,
      appliedFilters.aquatic,
      appliedFilters.venomous,
    ].filter(status => status == "on").length

  const haveFiltersNotChanged = () =>
    appliedFilters.furry == furryCheckboxState &&
    appliedFilters.aquatic == aquaticCheckboxState &&
    appliedFilters.venomous == venomousCheckboxState

  return (
    <FilterDrawer
      labelText="Filter"
      reversed={true}
      metadata={checkedTraits}
      isDropdownVisible={isDropdownVisible}
      toggleDropdown={toggleDropdown}
      hideDropdown={hideDropdown}
      numFiltersEnabled={getNumFiltersEnabled()}
    >
      <>
        <CheckboxGroup labelText="Traits">
          <CheckboxField
            onCheck={() => {
              setFurryCheckboxState(furryCheckboxState === "on" ? "off" : "on")
            }}
            id="checkbox-1"
            checkedStatus={furryCheckboxState as any}
            labelText="Furry"
          />
          <CheckboxField
            onCheck={() => {
              setAquaticCheckboxState(
                aquaticCheckboxState === "on" ? "off" : "on"
              )
            }}
            id="checkbox-2"
            checkedStatus={aquaticCheckboxState as any}
            labelText="Aquatic"
          />
          <CheckboxField
            onCheck={() => {
              setVenomousCheckboxState(
                venomousCheckboxState === "on" ? "off" : "on"
              )
            }}
            id="checkbox-3"
            checkedStatus={venomousCheckboxState as any}
            labelText="Venomous"
          />
        </CheckboxGroup>
        <div className={styles.buttons}>
          <Button
            secondary={true}
            label="Cancel"
            onClick={() => {
              clearChanges()
              toggleDropdown()
            }}
          />
          <Button
            primary={true}
            label="Apply"
            disabled={haveFiltersNotChanged()}
            onClick={() => {
              applyChanges()
              toggleDropdown()
            }}
          />
        </div>
      </>
    </FilterDrawer>
  )
}

DefaultStory.story = {
  name: "Reversed (Kaizen Site Demo)",
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

export const ReversedEmpty = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const hideDropdown = () => {
    setIsDropdownVisible(false)
  }

  return (
    <StoryWrapper>
      <FilterDrawer
        labelText="Filter"
        reversed={true}
        metadata={["example 1", "example 2"]}
        isDropdownVisible={isDropdownVisible}
        toggleDropdown={toggleDropdown}
        hideDropdown={hideDropdown}
        numFiltersEnabled={2}
      >
        <div style={{ width: "300px" }}>
          <Box p={0.5}>
            <Paragraph variant="body">
              You can put anything inside the Dropdown.{" "}
              <a href="https://cultureamp.design/guidelines/filtering/">
                See Filtering Guidelines
              </a>{" "}
              for usage guidelines.
            </Paragraph>
          </Box>
        </div>
      </FilterDrawer>
    </StoryWrapper>
  )
}

ReversedEmpty.story = {
  name: "Reversed (empty)",
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

export const DefaultEmpty = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const hideDropdown = () => {
    setIsDropdownVisible(false)
  }

  return (
    <StoryWrapper>
      <FilterDrawer
        labelText="Filter"
        metadata={["example 1", "example 2"]}
        isDropdownVisible={isDropdownVisible}
        toggleDropdown={toggleDropdown}
        hideDropdown={hideDropdown}
        numFiltersEnabled={2}
      >
        <div style={{ width: "300px" }}>
          <Box p={0.5}>
            <Paragraph variant="body">
              You can put anything inside the Dropdown.{" "}
              <a href="https://cultureamp.design/guidelines/filtering/">
                See Filtering Guidelines
              </a>{" "}
              for usage guidelines.
            </Paragraph>
          </Box>
        </div>
      </FilterDrawer>
    </StoryWrapper>
  )
}

DefaultEmpty.story = {
  name: "Default (empty)",
}
