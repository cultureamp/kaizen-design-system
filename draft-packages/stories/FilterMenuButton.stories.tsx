import { Box, Paragraph } from "@kaizen/component-library"
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Button } from "@kaizen/draft-button"
import { CheckboxGroup } from "@kaizen/draft-checkbox-group"
import { FilterMenuButton } from "@kaizen/draft-filter-menu-button"
import { CheckboxField } from "@kaizen/draft-form"
import React, { useState } from "react"
import styles from "./FilterMenuButton.stories.scss"

const StoryWrapper = ({ children }) => (
  <div
    style={{ display: "flex", justifyContent: "flex-start", margin: "1rem" }}
  >
    {children}
  </div>
)

export default {
  title: "FilterMenuButton (React)",
}

const reversedBg = {
  backgrounds: {
    default: "Wisteria 700",
  },
}

export const DefaultStory = () => (
  <div className={styles.siteDemoWrapper}>
    <DemoFilterMenuButton />
  </div>
)

type CheckboxState = "on" | "off"

type AppliedFiltersState = {
  furry: CheckboxState
  aquatic: CheckboxState
  venomous: CheckboxState
  egglaying: CheckboxState
}

const DemoFilterMenuButton = () => {
  const [furryCheckboxState, setFurryCheckboxState] = useState<CheckboxState>(
    "off"
  )
  const [aquaticCheckboxState, setAquaticCheckboxState] = useState<
    CheckboxState
  >("off")
  const [venomousCheckboxState, setVenomousCheckboxState] = useState<
    CheckboxState
  >("off")
  const [egglayingCheckboxState, setEgglayingCheckboxState] = useState<
    CheckboxState
  >("off")
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const [appliedFilters, setAppliedFilters] = useState<AppliedFiltersState>({
    furry: "off",
    aquatic: "off",
    venomous: "off",
    egglaying: "off",
  })

  const checkedTraits: string = (appliedFilters.furry === "on" ? ["Furry"] : [])
    .concat(appliedFilters.aquatic === "on" ? ["Aquatic"] : [])
    .concat(appliedFilters.venomous === "on" ? ["Venomous"] : [])
    .concat(appliedFilters.egglaying === "on" ? ["Egg-laying"] : [])
    .join("・")

  const toggleDropdown = () => {
    clearChanges()
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
      egglaying: egglayingCheckboxState,
    })
    hideDropdown()
  }

  const clearChanges = () => {
    setFurryCheckboxState(appliedFilters.furry)
    setAquaticCheckboxState(appliedFilters.aquatic)
    setVenomousCheckboxState(appliedFilters.venomous)
    setEgglayingCheckboxState(appliedFilters.egglaying)
  }

  const haveFiltersNotChanged = () =>
    appliedFilters.furry == furryCheckboxState &&
    appliedFilters.aquatic == aquaticCheckboxState &&
    appliedFilters.venomous == venomousCheckboxState &&
    appliedFilters.egglaying == egglayingCheckboxState

  return (
    <FilterMenuButton
      id="filter-menu-button"
      labelText="Filter"
      reversed={true}
      metadata={checkedTraits}
      isDropdownVisible={isDropdownVisible}
      toggleDropdown={toggleDropdown}
      hideDropdown={hideDropdown}
    >
      <>
        <div className={styles.content}>
          <CheckboxGroup labelText="Traits">
            <CheckboxField
              onCheck={() => {
                setFurryCheckboxState(
                  furryCheckboxState === "on" ? "off" : "on"
                )
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
            <CheckboxField
              onCheck={() => {
                setEgglayingCheckboxState(
                  egglayingCheckboxState === "on" ? "off" : "on"
                )
              }}
              id="checkbox-4"
              checkedStatus={egglayingCheckboxState as any}
              labelText="Egg-laying"
            />
          </CheckboxGroup>
        </div>
        <div className={styles.buttons}>
          <Button
            secondary={true}
            label="Cancel"
            onClick={() => {
              toggleDropdown()
            }}
          />
          <Button
            primary={true}
            label="Apply"
            disabled={haveFiltersNotChanged()}
            onClick={() => {
              applyChanges()
            }}
          />
        </div>
      </>
    </FilterMenuButton>
  )
}
DefaultStory.storyName = "Reversed (Kaizen Site Demo)"
DefaultStory.parameters = { ...reversedBg }

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
      <FilterMenuButton
        id="filter-drawer-3"
        labelText="Filter"
        metadata=""
        isDropdownVisible={isDropdownVisible}
        toggleDropdown={toggleDropdown}
        hideDropdown={hideDropdown}
      >
        <div style={{ width: "300px" }}>
          <Box p={0.5}>
            <Paragraph variant="body">
              You can put anything inside the dropdown.{" "}
              <a href="https://cultureamp.design/guidelines/filtering/">
                See Filtering Guidelines
              </a>{" "}
              for usage guidelines.
            </Paragraph>
          </Box>
        </div>
      </FilterMenuButton>
    </StoryWrapper>
  )
}
DefaultEmpty.storyName = "Default (empty)"
