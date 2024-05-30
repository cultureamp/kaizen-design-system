import React, { useId } from "react"
import { InputSearch } from "~components/Input/InputSearch"
import { useSelectionContext } from "../../context"
import styles from "./SearchInput.module.scss"

export type SearchInputProps = {
  label?: string
  id?: string
  isLoading?: boolean
  /**
   * @deprecated Use of placeholder text goes against our a11y standards.
   * Use the `label` prop to provide a concise name
   */
  placeholder?: string
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

  const reactId = useId()
  const inputId = id ?? reactId

  return (
    <div className={styles.inputSearchContainer}>
      <InputSearch
        id={inputId}
        aria-label={label ?? "Filter options by search query"}
        secondary
        value={searchQuery}
        onChange={handleChange}
        onClear={handleClear}
        loading={isLoading}
      />
    </div>
  )
}

SearchInput.displayName = "FilterMultiSelect.SearchInput"
