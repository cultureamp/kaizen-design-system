import { Box, Paragraph } from "@kaizen/component-library"
import { Button } from "@kaizen/draft-button"
import { FilterMenuButton } from "@kaizen/draft-filter-menu-button"
import { CheckboxField, CheckboxGroup } from "@kaizen/draft-form"
import React, { useState } from "react"
import styles from "./FilterMenuButton.stories.scss"

const StoryWrapper = ({ children }) => (
  <div className={styles.siteDemoWrapper}>{children}</div>
)

export default {
  title: "FilterMenuButton (React)",
}

type DropdownOption = {
  id: number
  label: string
}

export const DefaultStory = () => <DefaultWithChildrenSimpleFilter />
DefaultStory.storyName = "Simple Filter (Kaizen Site Demo)"

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
DefaultEmpty.storyName = "Default (Empty)"

const dropdownOptions = [
  { id: 1, label: "Furry" },
  { id: 2, label: "Aquatic" },
  { id: 3, label: "Venomous" },
  { id: 4, label: "Egg-laying" },
]

export const DefaultWithChildrenSimpleFilter = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
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
    <StoryWrapper>
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
    </StoryWrapper>
  )
}
DefaultWithChildrenSimpleFilter.storyName =
  "Default with children (Simple filter)"

export const DefaultWithChildrenAdvancedFilter = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
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
    <StoryWrapper>
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
    </StoryWrapper>
  )
}
DefaultWithChildrenAdvancedFilter.storyName =
  "Default with children (Advanced filter)"
