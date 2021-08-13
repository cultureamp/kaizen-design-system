import { Box, Paragraph } from "@kaizen/component-library"
import { Button } from "@kaizen/button"
import { FilterMenuButton } from "@kaizen/filter-menu-button"
import { CheckboxField, CheckboxGroup } from "@kaizen/form"
import isChromatic from "chromatic/isChromatic"
import React, { useState } from "react"
import { CATEGORIES } from "../../../storybook/constants"
import styles from "./FilterMenuButton.stories.scss"

/**
 * When running visual regressions on this story we need to do two things to
 * ensure the stories are snapshotted and tested correctly:
 * 1) Expand the dropdown
 * 2) Set a minimum height on the container to capture the dropdown
 */
const withMinHeight = Story => {
  if (!isChromatic()) return <Story />
  return <div className={styles.siteDemoWrapper}>{Story}</div>
}

export default {
  title: `${CATEGORIES.components}/Filter Menu`,
  component: FilterMenuButton,
  parameters: {
    docs: {
      description: {
        component:
          'import { FilterMenuButton } from "@kaizen/filter-menu-button"',
      },
    },
  },
  decorators: [withMinHeight],
}

type DropdownOption = {
  id: number
  label: string
}

export const DefaultStory = props => (
  <DefaultWithChildrenSimpleFilter {...props} />
)
DefaultStory.storyName = "Simple Filter (Kaizen Site Demo)"

export const DefaultEmpty = () => {
  const isInitialDropdownVisible = isChromatic()
  const [isDropdownVisible, setIsDropdownVisible] = useState(
    isInitialDropdownVisible
  )

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const hideDropdown = () => {
    setIsDropdownVisible(false)
  }

  return (
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
  )
}
DefaultEmpty.storyName = "Default (Empty)"

const dropdownOptions = [
  { id: 1, label: "Furry" },
  { id: 2, label: "Aquatic" },
  { id: 3, label: "Venomous" },
  { id: 4, label: "Egg-laying" },
  { id: 5, label: "Water-proof feathers" },
  { id: 6, label: "Cold-blooded" },
  { id: 7, label: "Warm-blooded" },
]

export const DefaultWithChildrenSimpleFilter = () => {
  const isInitialDropdownVisible = isChromatic()
  const [isDropdownVisible, setIsDropdownVisible] = useState(
    isInitialDropdownVisible
  )
  const [appliedFilters, setAppliedFilters] = useState<DropdownOption[]>([])

  const checkedTraits: string = appliedFilters
    .map(trait => trait.label)
    .join(", ")

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const hideDropdown = () => {
    setIsDropdownVisible(false)
  }

  const onCheckboxChange = (option: DropdownOption) => {
    if (appliedFilters.filter(filter => filter.id === option.id).length > 0) {
      setAppliedFilters(
        appliedFilters.filter(filter => filter.id !== option.id)
      )
    } else {
      setAppliedFilters([...appliedFilters, option])
    }
  }

  return (
    <FilterMenuButton
      id="filter-menu-button"
      labelText="Animal traits"
      metadata={checkedTraits}
      isDropdownVisible={isDropdownVisible}
      toggleDropdown={toggleDropdown}
      hideDropdown={hideDropdown}
    >
      <>
        <div className={styles.content}>
          <CheckboxGroup labelText="Traits">
            {dropdownOptions.map(trait => (
              <CheckboxField
                onCheck={() => {
                  onCheckboxChange(trait)
                }}
                id={`checkbox-${trait.id}`}
                checkedStatus={
                  appliedFilters.filter(filter => filter.id === trait.id)
                    .length > 0
                    ? "on"
                    : "off"
                }
                labelText={trait.label}
              />
            ))}
          </CheckboxGroup>
        </div>
        <div className={styles.buttons}>
          <Button
            secondary={true}
            fullWidth
            label="Done"
            onClick={hideDropdown}
          />
        </div>
      </>
    </FilterMenuButton>
  )
}
DefaultWithChildrenSimpleFilter.storyName =
  "Default with children (Simple filter)"

export const DefaultWithChildrenAdvancedFilter = () => {
  const isInitialDropdownVisible = isChromatic()
  const [isDropdownVisible, setIsDropdownVisible] = useState(
    isInitialDropdownVisible
  )
  const [appliedFilters, setAppliedFilters] = useState<DropdownOption[]>([])

  const checkedTraits: string = appliedFilters
    .map(trait => trait.label)
    .join(", ")

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const hideDropdown = () => {
    setIsDropdownVisible(false)
  }

  const onCheckboxChange = (option: DropdownOption) => {
    if (appliedFilters.filter(filter => filter.id === option.id).length > 0) {
      setAppliedFilters(
        appliedFilters.filter(filter => filter.id !== option.id)
      )
    } else {
      setAppliedFilters([...appliedFilters, option])
    }
  }

  const clearFilter = () => {
    setAppliedFilters([])
  }

  return (
    <FilterMenuButton
      id="filter-menu-button"
      labelText="Animal traits"
      metadata={checkedTraits}
      isDropdownVisible={isDropdownVisible}
      toggleDropdown={toggleDropdown}
      hideDropdown={hideDropdown}
      onFilterClear={clearFilter}
    >
      <>
        <div className={styles.content}>
          <CheckboxGroup labelText="Traits">
            {dropdownOptions.map(trait => (
              <CheckboxField
                onCheck={() => {
                  onCheckboxChange(trait)
                }}
                id={`checkbox-${trait.id}`}
                checkedStatus={
                  appliedFilters.filter(filter => filter.id === trait.id)
                    .length > 0
                    ? "on"
                    : "off"
                }
                labelText={trait.label}
              />
            ))}
          </CheckboxGroup>
        </div>
        <div className={styles.buttons}>
          <Button
            secondary={true}
            fullWidth
            label="Done"
            onClick={hideDropdown}
          />
        </div>
      </>
    </FilterMenuButton>
  )
}
DefaultWithChildrenAdvancedFilter.storyName =
  "Default with children (Advanced filter)"
