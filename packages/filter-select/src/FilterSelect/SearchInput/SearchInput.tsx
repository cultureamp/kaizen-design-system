import React, { useId } from "react"
import { InputSearch } from "@kaizen/draft-form"
import { useSelectionContext } from "../provider/SelectionProvider"

export interface SearchInputProps {
  label: string
  id?: string
}

export const SearchInput = ({ label, id }: SearchInputProps) => {
  const { setSearchQuery, searchQuery } = useSelectionContext()
  const ref = React.createRef<HTMLInputElement>()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    // TODO: debounce
    setSearchQuery(e.target.value)
  }

  const handleClear = () => {
    setSearchQuery("") // TODO: focus is lost when focus on clear button
  }

  return (
    <InputSearch
      id={id ?? useId()}
      aria-label={label}
      secondary
      placeholder="Search..."
      value={searchQuery}
      onChange={handleChange}
      onClear={handleClear}
    />
  )
}
