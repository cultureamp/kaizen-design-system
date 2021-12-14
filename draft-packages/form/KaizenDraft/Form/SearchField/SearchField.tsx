import React from "react"

import { InputSearch } from "../Primitives/InputSearch"
import { FieldGroup, Label } from ".."
export interface SearchFieldProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "className" | "defaultValue"
  > {
  id: string
  labelText: string
  reversed?: boolean
  loading?: boolean
  secondary?: boolean
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
  const showVisibleLabel = !secondary

  return (
    <FieldGroup inline={false}>
      {showVisibleLabel && (
        <Label
          htmlFor={id}
          labelText={labelText}
          reversed={reversed}
          disabled={disabled}
        />
      )}
      <InputSearch
        aria-label={!showVisibleLabel ? labelText : undefined}
        id={id}
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
