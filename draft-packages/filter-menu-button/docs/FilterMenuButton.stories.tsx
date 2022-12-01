import React, { useState } from "react"
import { ComponentStory } from "@storybook/react"
import isChromatic from "chromatic/isChromatic"
import { Button } from "@kaizen/button"
import { Box } from "@kaizen/component-library"
import { FilterMenuButton } from "@kaizen/draft-filter-menu-button"
import { CheckboxField, CheckboxGroup } from "@kaizen/draft-form"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import styles from "./FilterMenuButton.stories.module.scss"

const IS_CHROMATIC = isChromatic()
const IS_INITIAL_DROPDOWN_VISIBLE = IS_CHROMATIC

export default {
  title: `${CATEGORIES.deprecated}/Filter Menu`,
  component: FilterMenuButton,
  parameters: {
    docs: {
      description: {
        component:
          '⛔️ This component is deprecated. No further changes will be made to it as it will be superseded by `<FilterMultiSelect>` from `@kaizen/select`.<br/><br/>Import { FilterMenuButton } from "@kaizen/draft-filter-menu-button"',
      },
    },
  },
}

type DropdownOption = {
  id: number
  label: string
}

const DROPDOWN_OPTIONS: DropdownOption[] = [
  { id: 1, label: "Furry" },
  { id: 2, label: "Aquatic" },
  { id: 3, label: "Venomous" },
  { id: 4, label: "Egg-laying" },
  { id: 5, label: "Water-proof feathers" },
  { id: 6, label: "Cold-blooded" },
  { id: 7, label: "Warm-blooded" },
]

const DROPDOWN_OPTIONS_CHROMATIC_SELECTED: DropdownOption[] = [
  DROPDOWN_OPTIONS[1],
  DROPDOWN_OPTIONS[2],
]

const SimpleFilterTemplate: ComponentStory<typeof FilterMenuButton> = ({
  id: argsId,
  labelText: argsLabelText,
  isDropdownVisible: argsIsDropdownVisible,
  metadata: argsMetadata,
  ...args
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(
    IS_INITIAL_DROPDOWN_VISIBLE
  )
  const [appliedFilters, setAppliedFilters] = useState<DropdownOption[]>(
    IS_CHROMATIC ? DROPDOWN_OPTIONS_CHROMATIC_SELECTED : []
  )

  const checkedTraits: string = appliedFilters
    .map(trait => trait.label)
    .join(", ")

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible)

  const hideDropdown = () => setIsDropdownVisible(false)

  const onCheckboxChange = (option: DropdownOption) => {
    if (appliedFilters.find(filter => filter.id === option.id)) {
      setAppliedFilters(
        appliedFilters.filter(filter => filter.id !== option.id)
      )
    } else {
      setAppliedFilters([...appliedFilters, option])
    }
  }

  return (
    <FilterMenuButton
      {...args}
      id={argsId || "filter-menu-button--simple"}
      labelText={argsLabelText || "Animal traits"}
      metadata={argsMetadata || checkedTraits}
      isDropdownVisible={argsIsDropdownVisible || isDropdownVisible}
      toggleDropdown={toggleDropdown}
      hideDropdown={hideDropdown}
    >
      <>
        <div className={styles.content}>
          <CheckboxGroup labelText="Traits">
            {DROPDOWN_OPTIONS.map(trait => (
              <CheckboxField
                key={trait.id}
                onCheck={() => onCheckboxChange(trait)}
                id={`checkbox-${trait.id}`}
                checkedStatus={
                  appliedFilters.find(({ id }) => id === trait.id)
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

export const DefaultStory = SimpleFilterTemplate.bind({})
DefaultStory.storyName = "Simple Filter (Kaizen Site Demo)"
DefaultStory.args = {
  id: "filter-menu-button--default",
  labelText: "Filter",
}
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}

export const DefaultEmpty = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(
    IS_INITIAL_DROPDOWN_VISIBLE
  )

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible)

  const hideDropdown = () => setIsDropdownVisible(false)

  return (
    <FilterMenuButton
      id="filter-menu-button--empty"
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

export const DefaultWithChildrenSimpleFilter = SimpleFilterTemplate.bind({})
DefaultWithChildrenSimpleFilter.storyName =
  "Default with children (Simple filter)"
DefaultWithChildrenSimpleFilter.parameters = {
  chromatic: { disable: false },
  docs: { source: { type: "code" } },
}

export const DefaultWithChildrenAdvancedFilter = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(
    IS_INITIAL_DROPDOWN_VISIBLE
  )
  const [appliedFilters, setAppliedFilters] = useState<DropdownOption[]>(
    IS_CHROMATIC ? DROPDOWN_OPTIONS_CHROMATIC_SELECTED : []
  )

  const checkedTraits: string = appliedFilters
    .map(trait => trait.label)
    .join(", ")

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible)

  const hideDropdown = () => setIsDropdownVisible(false)

  const onCheckboxChange = (option: DropdownOption) => {
    if (appliedFilters.find(filter => filter.id === option.id)) {
      setAppliedFilters(
        appliedFilters.filter(filter => filter.id !== option.id)
      )
    } else {
      setAppliedFilters([...appliedFilters, option])
    }
  }

  const clearFilter = () => setAppliedFilters([])

  return (
    <FilterMenuButton
      id="filter-menu-button--advanced"
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
            {DROPDOWN_OPTIONS.map(trait => (
              <CheckboxField
                key={trait.id}
                onCheck={() => onCheckboxChange(trait)}
                id={`checkbox-${trait.id}`}
                checkedStatus={
                  appliedFilters.find(({ id }) => id === trait.id)
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
DefaultWithChildrenAdvancedFilter.parameters = { chromatic: { disable: false } }

export const AutoHideBehaviours = SimpleFilterTemplate.bind({})
AutoHideBehaviours.args = {
  autoHide: "outside-click-only",
  id: "filter-menu-button--autohide",
}

AutoHideBehaviours.storyName = "Auto hide behaviours"
