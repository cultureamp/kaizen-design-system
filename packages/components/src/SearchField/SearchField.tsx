import React, { useId } from "react"
import { InputSearch, InputSearchProps } from "~components/Input/InputSearch"
import { Label } from "~components/Label"
import styles from "./SearchField.module.scss"

export type SearchFieldProps = Omit<InputSearchProps, "id"> & {
  id?: string
  labelText: string
  disabled?: boolean
  reversed?: boolean
  secondary?: boolean
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896613/Search+Field Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-search-field--docs Storybook}
 */
export const SearchField = ({
  id: propsId,
  labelText,
  disabled,
  reversed = false,
  secondary = false,
  classNameOverride,
  ...restProps
}: SearchFieldProps): JSX.Element => {
  const showVisibleLabel = !secondary
  const reactId = useId()
  const id = propsId ?? reactId
  // @todo: Move restProps to container div?
  return (
    <div className={classNameOverride}>
      {showVisibleLabel && (
        <Label
          htmlFor={id}
          labelText={labelText}
          reversed={reversed}
          disabled={disabled}
          classNameOverride={styles.label}
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
    </div>
  )
}

SearchField.displayName = "SearchField"
