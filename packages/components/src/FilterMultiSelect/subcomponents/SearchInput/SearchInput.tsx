import React, { useMemo } from "react"
import { v4 } from "uuid"
import { InputSearch } from "~components/Input/InputSearch"
import { useSelectionContext } from "../../context"
import styles from "./SearchInput.module.scss"

export type SearchInputProps = {
  label?: string
  id?: string
  isLoading?: boolean
}

export const SearchInput = ({
  label,
  id,
  isLoading,
}: SearchInputProps): JSX.Element => {
  const { setSearchQuery, searchQuery } = useSelectionContext()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setSearchQuery(e.target.value)
  }

  const handleClear = (): void => setSearchQuery("")

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

SearchInput.displayName = "FilterMultiSelect.SearchInput"
