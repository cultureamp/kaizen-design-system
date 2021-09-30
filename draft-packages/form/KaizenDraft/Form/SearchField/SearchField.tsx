import React from "react"

import { InputSearch } from "../Primitives/InputSearch"
import { FieldGroup, Label } from ".."
export interface SearchFieldProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "className" | "defaultValue"
  > {
  reversed?: boolean
  loading?: boolean
  secondary?: boolean
  labelText?: React.ReactNode
  onClear?: () => void
}

const SearchField: React.FunctionComponent<SearchFieldProps> = ({
  id,
  disabled = false,
  placeholder,
  reversed = false,
  loading,
  secondary,
  value,
  labelText,
  onClear,
  ...genericInputProps
}) => {
  const searchFieldId = `${id}-search-field-input`

  return (
    <FieldGroup inline={false}>
      <Label
        htmlFor={searchFieldId}
        labelText={labelText}
        reversed={reversed}
        disabled={disabled}
      />
      <InputSearch
        id={searchFieldId}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        reversed={reversed}
        secondary={secondary}
        onClear={onClear}
        loading={loading}
        {...genericInputProps}
      />
    </FieldGroup>
  )
}

export default SearchField
