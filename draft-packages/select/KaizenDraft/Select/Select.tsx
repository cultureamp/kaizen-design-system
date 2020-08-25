import classNames from "classnames"
import * as React from "react"
import ReactSelect, { components } from "react-select"
import Async from "react-select/async"
import { AsyncProps as ReactAsyncSelectProps } from "react-select/src/Async"
import { Props as ReactSelectProps } from "react-select/src/Select"

import { Icon } from "@kaizen/component-library"

const chevronDownIcon = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const clearIcon = require("@kaizen/component-library/icons/clear.icon.svg")
  .default

const styles = require("./styles.react.scss")

export { ValueType } from "react-select"

export type SelectProps = {
  /**
   * The secondary variant is a more subdued variant that takes up as little space as possible
   * `variant="secondary" reversed="false" is not implemented and will throw a "not implemented" error
   * @default "default"
   */
  variant?: VariantType

  /**
   * Use a reversed colour scheme
   * `variant="default" reversed="true" is not implemented and will throw a "not implemented" error
   * @default false
   */
  reversed?: boolean

  /**
   * Whether the "select control" (the button you click to open the menu) width fills the
   * full width of  the container or is as wide as the selected option text.
   * Note that the control text will ellipsize if it is wider than the parent container.
   * `variant="default" fullWidth=false"` is not implemented and
   * will throw a "not implemented" error
   * @default false if variant is "secondary", otherwise true
   */
  fullWidth?: boolean
}

export type VariantType = "default" | "secondary" | "secondary-small"

export const Select = (props: SelectProps & ReactSelectProps) => {
  if (props.fullWidth === false && props.variant !== "secondary") {
    throw new Error(
      'the prop fullWidth=false is not yet implemented when variant="default"'
    )
  }
  const { variant = "default", reversed = false } = props

  // the default for fullWidth depends on the variant
  const fullWidth =
    props.fullWidth != null
      ? props.fullWidth
      : variant === "secondary" || variant === "secondary-small"
      ? false
      : true

  if (reversed === true && variant === "default") {
    throw new Error(
      'the combo variant="default" and reversed=true is not yet implemented for the Select component'
    )
  }

  const classes = classNames(props.className, styles.specificityIncreaser, {
    [styles.default]: !reversed,
    [styles.reversed]: reversed,
    [styles.secondary]: variant === "secondary",
    [styles.secondarySmall]: variant === "secondary-small",
    [styles.notFullWidth]: !fullWidth,
  })
  return (
    <ReactSelect
      {...props}
      components={{
        Control,
        Placeholder,
        DropdownIndicator,
        Menu,
        Option,
        NoOptionsMessage,
        SingleValue,
        MultiValue,
        IndicatorsContainer,
        ClearIndicator,
        IndicatorSeparator: null,
      }}
      className={classes}
    />
  )
}

interface AsyncProps extends ReactAsyncSelectProps<any>, ReactSelectProps {}

export const AsyncSelect = (props: AsyncProps) => (
  <Async
    {...props}
    components={{
      Control,
      Placeholder,
      DropdownIndicator,
      Menu,
      Option,
      NoOptionsMessage,
      SingleValue,
      MultiValue,
      IndicatorsContainer,
      ClearIndicator: null,
      IndicatorSeparator: null,
    }}
    className={classNames(styles.specificityIncreaser, props.className)}
  />
)

const Control: typeof components.Control = props => (
  <div data-automation-id="Select__Control">
    <components.Control
      {...props}
      className={classNames(styles.control, {
        [styles.focusedControl]: props.isFocused,
        [styles.disabled]: props.isDisabled,
      })}
    />
  </div>
)

const Placeholder: typeof components.Placeholder = props => (
  <components.Placeholder {...props}>
    <span className={styles.placeholder}>{props.children}</span>
  </components.Placeholder>
)

const DropdownIndicator: typeof components.DropdownIndicator = props => (
  // Suppress typing issue - looks like the type defs are incorrect
  // @ts-ignore
  <components.DropdownIndicator {...props} className={styles.dropdownIndicator}>
    <Icon icon={chevronDownIcon} role="presentation" />
  </components.DropdownIndicator>
)

const Menu: typeof components.Menu = props => (
  <components.Menu {...props} className={styles.menu} />
)

// TODO - needsclick class disables fastclick on this element. Remove when fastclick is removed from consuming repos
const Option: typeof components.Option = props => (
  <div data-automation-id="Select__Option">
    <components.Option
      {...props}
      className={classNames("needsclick", styles.option, {
        [styles.focusedOption]: props.isFocused,
        [styles.selectedOption]: props.isSelected,
      })}
    />
  </div>
)

const NoOptionsMessage: typeof components.NoOptionsMessage = props => (
  <components.NoOptionsMessage {...props}>
    <span className={styles.noOptionsMessage}>{props.children}</span>
  </components.NoOptionsMessage>
)

const SingleValue: typeof components.SingleValue = props => (
  <components.SingleValue {...props} className={styles.singleValueOverrides}>
    <span className={styles.singleValue}>{props.children}</span>
  </components.SingleValue>
)

const MultiValue: typeof components.MultiValue = props => (
  <components.MultiValue {...props} className={styles.multiValue} />
)

const IndicatorsContainer: typeof components.IndicatorsContainer = props => (
  <components.IndicatorsContainer
    {...props}
    className={styles.indicatorsContainer}
  />
)
const ClearIndicator: typeof components.ClearIndicator = props => (
  <components.ClearIndicator {...props}>
    <Icon icon={clearIcon} role="presentation" />
  </components.ClearIndicator>
)
