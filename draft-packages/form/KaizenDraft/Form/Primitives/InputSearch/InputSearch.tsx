import React, { InputHTMLAttributes, useRef } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import search from "@kaizen/component-library/icons/search.icon.svg"
import { LoadingSpinner } from "@kaizen/loading-spinner"
import { ClearButton } from "../ClearButton"
import styles from "./InputSearch.module.scss"

export interface InputSearchProps
  extends OverrideClassName<
    Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue">
  > {
  id: string
  reversed?: boolean
  loading?: boolean
  secondary?: boolean
  onClear?: () => void
}

export const InputSearch = (props: InputSearchProps): JSX.Element => {
  const {
    value,
    onChange,
    onClear,
    classNameOverride,
    disabled,
    reversed = false,
    loading = false,
    secondary = false,
    ...restProps
  } = props
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnClear = (): void => {
    inputRef.current?.focus()
    onClear && onClear()
  }
  return (
    <div
      className={classnames(
        styles.wrapper,
        secondary ? styles.secondary : styles.default,
        reversed && styles.reversed,
        disabled && styles.disabled,
        value && styles.hasEndIconAdornment,
        classNameOverride
      )}
    >
      <div className={styles.startIconAdornment}>
        {loading ? (
          <LoadingSpinner
            accessibilityLabel=""
            size="sm"
            classNameOverride={styles.loadingSpinner}
          />
        ) : (
          <Icon icon={search} role="presentation" />
        )}
      </div>

      <input
        ref={inputRef}
        type="search"
        className={styles.input}
        disabled={disabled}
        value={value}
        onChange={onChange}
        readOnly={onChange === undefined}
        {...restProps}
      />
      {/* Inputs aren't able to have pseudo elements like ::after on them,
          so we have to create an element ourselves for the focus ring */}
      <div className={styles.focusRing} />

      {value && (
        <ClearButton
          isReversed={reversed}
          onClick={handleOnClear}
          disabled={disabled}
          classNameOverride={styles.endIconAdornment}
          aria-label="clear search"
        />
      )}
    </div>
  )
}

InputSearch.displayName = "InputSearch"
