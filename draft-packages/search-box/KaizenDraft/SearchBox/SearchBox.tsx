import * as React from "react"
import classnames from "classnames"
import searchIcon from "@kaizen/component-library/icons/search.icon.svg"
import { Icon } from "@kaizen/component-library"
import spinnerIcon from "@kaizen/component-library/icons/spinner.icon.svg"
import clearIcon from "@kaizen/component-library/icons/clear-white.icon.svg"
import { FieldMessage, Label } from "../../../form"
import styles from "./styles.module.scss"

export interface SearchBoxProps {
  id: string
  placeholder?: string
  labelText?: string | React.ReactNode
  className?: string
  disabled?: boolean
  inputValue?: string
  defaultInputValue?: string
  inputRef?: React.RefObject<HTMLInputElement>
  reversed?: boolean
  inline?: boolean
  icon?: React.SVGAttributes<SVGSymbolElement>
  description?: React.ReactNode
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => any
  name?: string
  working?: boolean
  onClearText: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const SearchBox = ({
  id,
  placeholder,
  labelText,
  disabled,
  inputValue,
  defaultInputValue,
  inputRef,
  reversed,
  icon,
  description,
  onChange,
  onBlur,
  onFocus,
  onPressEnter,
  name,
  className,
  working = false,
  onClearText,
}: SearchBoxProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onPressEnter) {
      onPressEnter(e)
    }
  }

  const renderIcon = () => {
    if (working) {
      return <Icon role="img" icon={spinnerIcon} />
    }

    return icon ? icon : <Icon role="img" icon={searchIcon} />
  }

  return (
    <div
      className={classnames(styles.wrapper, styles.withStartIconAdornment, {
        [styles.withReversed]: reversed,
        [styles.withDisabled]: disabled,
        // [styles.withEndIconAdornment]: endIconAdornment,
      })}
    >
      {labelText && (
        <Label
          id={`${id}-field-label`}
          automationId={`${id}-field-label`}
          htmlFor={`${id}-field-input`}
          labelText={labelText}
          reversed={reversed}
        />
      )}
      <div className={styles.startIconAdornment}>{renderIcon()}</div>
      <input
        id={`${id}-field-input`}
        name={name}
        data-automation-id={`${id}-field-input`}
        type={"text"}
        value={inputValue}
        defaultValue={defaultInputValue}
        ref={inputRef}
        // aria-describedby={description}
        // aria-label={labelText}
        placeholder={placeholder ? placeholder : "Search"}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={classnames(styles.input, styles.default, className)}
      />
      <div className={styles.focusRing} />
      {onClearText && !!inputValue ? (
        <button
          type="button"
          onClick={onClearText}
          className={styles.clearButton}
        >
          <Icon role="img" icon={clearIcon} />
        </button>
      ) : null}

      {description && (
        <div className={styles.message}>
          <FieldMessage
            id={`${id}-field-message`}
            automationId={`${id}-field-description`}
            message={description}
            reversed={reversed}
          />
        </div>
      )}
    </div>
  )
}
