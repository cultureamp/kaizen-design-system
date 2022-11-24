import React, { useMemo } from "react"
import { v4 } from "uuid"
import { InputSearch } from "@kaizen/draft-form"
import { useSelectionContext } from "../../provider"
import styles from "./SearchInput.module.scss"

export interface SearchInputProps {
  label?: string
  id?: string
  isLoading?: boolean
}

export const SearchInput: React.VFC<SearchInputProps> = ({
  label,
  id,
  isLoading,
}) => {
  const { setSearchQuery, searchQuery } = useSelectionContext()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setSearchQuery(e.target.value)
  }

  const handleClear = () => {
    setSearchQuery("")
  }

  const inputId = useMemo(() => id ?? v4(), [id])

  return (
    <div className={styles.inputSearchContainer}>
      <InputSearch
        id={inputId}
        aria-label={label ?? "Filter options by search query"}
        secondary
        placeholder="Search…"
        value={searchQuery}
        onChange={handleChange}
        onClear={handleClear}
        loading={isLoading}
      />
    </div>
  )
}

SearchInput.displayName = "SearchInput"
