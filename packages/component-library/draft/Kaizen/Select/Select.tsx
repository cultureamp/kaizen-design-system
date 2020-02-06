import classNames from "classnames"
import * as React from "react"
import ReactSelect, { components } from "react-select"
import Async from "react-select/async"
import { AsyncProps as ReactAsyncSelectProps } from "react-select/src/Async"
import { Props as ReactSelectProps } from "react-select/src/Select"

import { Icon } from "@kaizen/component-library"

const chevronDownIcon = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default

const styles = require("./styles.react.scss")

export const Select = (props: ReactSelectProps) => {
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
        ClearIndicator: null,
        IndicatorSeparator: null,
      }}
      className={classNames(styles.container, props.className)}
    />
  )
}

interface AsyncProps extends ReactAsyncSelectProps<any>, ReactSelectProps {}

export const AsyncSelect = (props: AsyncProps) => {
  return (
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
        ClearIndicator: null,
        IndicatorSeparator: null,
      }}
      className={classNames(styles.container, props.className)}
    />
  )
}

const Control: typeof components.Control = props => (
  <components.Control
    {...props}
    className={classNames(styles.control, {
      [styles.focusedControl]: props.isFocused,
    })}
  />
)

const Placeholder: typeof components.Placeholder = props => (
  <components.Placeholder {...props}>
    <span className={styles.placeholder}>{props.children}</span>
  </components.Placeholder>
)

const DropdownIndicator: typeof components.DropdownIndicator = props => (
  // Suppress typing issue - looks like the type defs are incorrect
  // @ts-ignore
  <components.DropdownIndicator {...props}>
    <Icon icon={chevronDownIcon} role="presentation" />
  </components.DropdownIndicator>
)

const Menu: typeof components.Menu = props => (
  <components.Menu {...props} className={styles.menu} />
)

// TODO - needsclick class disables fastclick on this element. Remove when fastclick is removed from consuming repos
const Option: typeof components.Option = props => (
  <components.Option
    {...props}
    className={classNames("needsclick", styles.option, {
      [styles.focusedOption]: props.isFocused,
      [styles.selectedOption]: props.isSelected,
    })}
  />
)

const NoOptionsMessage: typeof components.NoOptionsMessage = props => (
  <components.NoOptionsMessage {...props}>
    <span className={styles.noOptionsMessage}>{props.children}</span>
  </components.NoOptionsMessage>
)

const SingleValue: typeof components.SingleValue = props => (
  <components.SingleValue {...props}>
    <span className={styles.singleValue}>{props.children}</span>
  </components.SingleValue>
)

const MultiValue: typeof components.MultiValue = props => (
  <components.MultiValue {...props} className={styles.multiValue} />
)
