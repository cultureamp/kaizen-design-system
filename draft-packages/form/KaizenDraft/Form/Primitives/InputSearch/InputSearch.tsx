import { Icon } from "@kaizen/component-library"
import { LoadingSpinner } from "@kaizen/draft-loading-spinner"
import classnames from "classnames"
import React from "react"
import search from "@kaizen/component-library/icons/search.icon.svg"
import clear from "@kaizen/component-library/icons/clear.icon.svg"

import styles from "./styles.scss"

export interface InputSearchProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "className" | "defaultValue"
  > {
  id: string
  classNameAndIHaveSpokenToDST?: string
  reversed?: boolean
  loading?: boolean
  secondary?: boolean
  onClear?: () => void
}

const InputSearch: React.FunctionComponent<InputSearchProps> = (
  props: InputSearchProps
) => {
  const {
    id,
    value,
    onChange,
    onClear,
    classNameAndIHaveSpokenToDST,
    placeholder,
    disabled = false,
    reversed = false,
    loading,
    secondary,
    ...genericInputProps
  } = props

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
        id={id}
        type="search"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={classnames(styles.input, styles.search, {
          [styles.default]: !reversed,
          [styles.reversed]: reversed,
          [styles.disabled]: disabled,
          [styles.secondary]: secondary,
        })}
        {...genericInputProps}
      />
      {/* Inputs aren't able to have pseudo elements like ::after on them,
          so we have to create an element ourselves for the focus ring */}
      <div className={styles.focusRing} />

      {value && (
        <div className={styles.endIconAdornment} onClick={onClear}>
          <button className={styles.cancelButton} aria-label="clear">
            <Icon icon={clear} role="presentation" />
          </button>
        </div>
      )}
    </div>
  )
}

export default InputSearch
