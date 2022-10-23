import React, { InputHTMLAttributes, useRef } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import { LoadingSpinner } from "@kaizen/loading-spinner"
import search from "@kaizen/component-library/icons/search.icon.svg"
import clear from "@kaizen/component-library/icons/clear.icon.svg"
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

export const InputSearch: React.VFC<InputSearchProps> = (
  props: InputSearchProps
) => {
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
        styles.withStartIconAdornment,
        styles.withEndIconAdornment,
        styles.withSearch,
        {
          [styles.withReversed]: reversed,
          [styles.withDisabled]: disabled,
          [styles.withSecondary]: secondary,
          [styles.withLoading]: loading,
        }
      )}
    >
      <div className={styles.startIconAdornment}>
        {loading ? (
          <div className={styles.loadingIcon}>
            <LoadingSpinner accessibilityLabel="" size="sm" />
          </div>
        ) : (
          <Icon icon={search} role="presentation" />
        )}
      </div>

      <input
        ref={inputRef}
        type="search"
        className={classnames(styles.input, styles.search, classNameOverride, {
          [styles.default]: !reversed,
          [styles.reversed]: reversed,
          [styles.disabled]: disabled,
          [styles.secondary]: secondary,
        })}
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
        <div className={styles.endIconAdornment}>
          <button
            type="button"
            className={styles.cancelButton}
            aria-label="clear"
            onClick={handleOnClear}
          >
            <Icon icon={clear} role="presentation" />
          </button>
        </div>
      )}
    </div>
  )
}

InputSearch.displayName = "InputSearch"
