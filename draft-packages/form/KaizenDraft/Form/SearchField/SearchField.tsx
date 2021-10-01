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
  labelText: string
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
      {secondary && (
        <Label
          htmlFor={searchFieldId}
          labelText={labelText}
          reversed={reversed}
          disabled={disabled}
        />
      )}
      <InputSearch
        ariaLabel={secondary ? labelText : ""}
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
