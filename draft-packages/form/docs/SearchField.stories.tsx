import * as React from "react"
import { SearchField, CheckboxField, CheckboxGroup } from "@kaizen/draft-form"
import { FilterMenuButton } from "@kaizen/draft-filter-menu-button"
import { Button } from "@kaizen/draft-button"
import styles from "./SearchField.module.scss"

export default {
  title: "SearchField (React)",
  component: SearchField,
  parameters: {
    info: {
      text: `
        import { SearchField } from "@kaizen/draft-form";
      `,
    },
  },
}

export const DefaultStory = () => {
  const [textVal, setTextVal] = React.useState("")

  const handleTextClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setTextVal("")
  }

  const handleChange = val => {
    setTextVal(val.currentTarget.value)
  }

  return (
    <div className={styles.componentWrapper}>
      <SearchField
        id="1"
        onChange={handleChange}
        onClearText={handleTextClear}
        inputValue={textVal}
      />
    </div>
  )
}

DefaultStory.storyName = "Default (Kaizen Site Demo)"

export const SearchFieldWithWorkingState = () => {
  const [working, setWorking] = React.useState(false)
  const [textVal, setTextVal] = React.useState("")

  const handleTextClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setTextVal("")
    setWorking(false)
  }

  const handleChange = val => {
    setTextVal(val.currentTarget.value)
    setWorking(val.currentTarget.value !== "")
  }

  return (
    <div className={styles.componentWrapper}>
      <SearchField
        id="1"
        working={working}
        inputValue={textVal}
        onChange={handleChange}
        onClearText={handleTextClear}
      />
    </div>
  )
}

SearchFieldWithWorkingState.storyName = "SearchField (with working state)"

type DropdownOption = {
  id: number
  label: string
}

const dropdownOptions = [
  { id: 1, label: "Furry" },
  { id: 2, label: "Aquatic" },
  { id: 3, label: "Venomous" },
  { id: 4, label: "Egg-laying" },
  { id: 5, label: "Water-proof feathers" },
  { id: 6, label: "Cold-blooded" },
  { id: 7, label: "Warm-blooded" },
]

export const SearchFieldInsideFilterMenuButton = () => {
  const [working, setWorking] = React.useState(false)
  const [textVal, setTextVal] = React.useState("")

  const handleTextClear = (e: React.MouseEvent<any>) => {
    setTextVal("")
    setWorking(false)
  }

  const handleChange = val => {
    setTextVal(val.currentTarget.value)
    setWorking(val.currentTarget.value !== "")
  }

  const [isDropdownVisible, setIsDropdownVisible] = React.useState(false)
  const [appliedFilters, setAppliedFilters] = React.useState<DropdownOption[]>(
    []
  )

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
    <div className={styles.componentWrapper}>
      <FilterMenuButton
        id="filter-menu-button"
        labelText="Animal traits"
        metadata={checkedTraits}
        isDropdownVisible={isDropdownVisible}
        toggleDropdown={toggleDropdown}
        hideDropdown={hideDropdown}
      >
        <>
          <div className={styles.searchFieldContainer}>
            <SearchField
              id="1"
              working={working}
              inputValue={textVal}
              onChange={handleChange}
              onClearText={handleTextClear}
            />
          </div>
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
              onClick={e => {
                e.stopPropagation()
                hideDropdown()
              }}
            />
          </div>
        </>
      </FilterMenuButton>
    </div>
  )
}

SearchFieldInsideFilterMenuButton.storyName =
  "SearchField (with FilterMenuButton)"
