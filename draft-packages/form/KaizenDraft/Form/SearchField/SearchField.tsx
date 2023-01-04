import React from "react"
import { InputSearch, InputSearchProps, FieldGroup, Label } from "../Primitives"
export interface SearchFieldProps extends InputSearchProps {
  id: string
  labelText: string
  disabled?: boolean
  reversed?: boolean
  secondary?: boolean
}

/**
 * {@link https://cultureamp.design/components/search-field/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-form-search-field--default-kaizen-demo Storybook}
 */
export const SearchField = ({
  id,
  labelText,
  disabled,
  reversed = false,
  secondary = false,
  ...restProps
}: SearchFieldProps): JSX.Element => {
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
