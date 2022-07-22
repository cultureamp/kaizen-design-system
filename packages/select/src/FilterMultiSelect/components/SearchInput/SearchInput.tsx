import React, { useId } from "react"
import { InputSearch } from "@kaizen/draft-form"
import { useSelectionContext } from "../../provider"
import styles from "./SearchInput.scss"

export interface SearchInputProps {
  label: string
  id?: string
}

export const SearchInput: React.VFC<SearchInputProps> = ({ label, id }) => {
  const { setSearchQuery, searchQuery } = useSelectionContext()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setSearchQuery(e.target.value)
  }

  const handleClear = () => {
    setSearchQuery("")
  }

  return (
    <InputSearch
      id={id ?? useId()}
      aria-label={label}
      secondary
      placeholder="Search…"
      value={searchQuery}
      onChange={handleChange}
      onClear={handleClear}
      classNameOverride={styles.searchInput}
    />
  )
}

SearchInput.displayName = "SearchInput"
