import React from "react"
import { InputSearch, InputSearchProps, FieldGroup, Label } from "../Primitives"
export interface SearchFieldProps extends InputSearchProps {
  id: string
  labelText: string
  disabled?: boolean
  reversed?: boolean
  secondary?: boolean
}

export const SearchField: React.VFC<SearchFieldProps> = ({
  id,
  labelText,
  disabled,
  reversed = false,
  secondary = false,
  ...restProps
}) => {
  const showVisibleLabel = !secondary

  return (
    <FieldGroup>
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
        disabled={disabled}
        reversed={reversed}
        secondary={secondary}
        {...restProps}
      />
    </FieldGroup>
  )
}

SearchField.displayName = "SearchField"
