import React from "react"
import classNames from "classnames"
import ReactSelect, {
  components,
  Props as ReactSelectProps,
  NoticeProps,
} from "react-select"
import Async, { AsyncProps as ReactAsyncSelectProps } from "react-select/async"
import { Label, FieldMessage } from "@kaizen/draft-form"
import { Icon } from "@kaizen/component-library"
import chevronDownIcon from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUpIcon from "@kaizen/component-library/icons/chevron-up.icon.svg"
import clearIcon from "@kaizen/component-library/icons/clear.icon.svg"
import { Tag } from "@kaizen/draft-tag"
import styles from "./Select.module.scss"

export type { OnChangeValue as ValueType } from "react-select"

export interface SelectProps extends ReactSelectProps<any, boolean> {
  /**
   * The secondary variant is a more subdued variant that takes up as little space as possible
   * `variant="secondary" reversed="false" is not implemented and will throw a "not implemented" error
   * @default "default"
   */
  variant?: VariantType
  status?: StatusType
  label?: React.ReactNode
  validationMessage?: React.ReactNode
  description?: React.ReactNode
  /**
   * Use a reversed colour scheme
   * @default false
   */
  reversed?: boolean
  /**
   * Whether the "select control" (the button you click to open the menu) width fills the
   * full width of  the container or is as wide as the selected option text.
   * Note that the control text will ellipsize if it is wider than the parent container.
   * @default false
   */
  fullWidth?: boolean
}

export type VariantType = "default" | "secondary" | "secondary-small"

export type StatusType = "default" | "error"

/**
 * {@link https://cultureamp.design/components/select/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-select--default-select-story Storybook}
 */
export const Select = React.forwardRef<any, SelectProps>((props, ref) => {
  const {
    variant = "default",
    status = "default",
    reversed = false,
    label,
    validationMessage,
    description,
  } = props

  // the default for fullWidth depends on the variant
  const fullWidth =
    props.fullWidth != null
      ? props.fullWidth
      : variant === "secondary" || variant === "secondary-small"
      ? false
      : true

  const classes = classNames(props.className, styles.specificityIncreaser, {
    [styles.default]: !reversed || variant === "default",
    [styles.reversed]: reversed,
    [styles.secondary]: variant === "secondary",
    [styles.secondarySmall]: variant === "secondary-small",
    [styles.notFullWidth]: !fullWidth,
    [styles.disabled]: props.isDisabled,
    [styles.error]: status === "error",
  })
  return (
    <>
      {label ? <Label reversed={reversed}>{label}</Label> : null}
      <ReactSelect
        {...props}
        ref={ref}
        components={{
          Control,
          Placeholder,
          DropdownIndicator,
          Menu,
          GroupHeading,
          Option,
          NoOptionsMessage,
          Input,
          SingleValue,
          MultiValue,
          IndicatorsContainer,
          ValueContainer,
          ClearIndicator,
          IndicatorSeparator: null,
        }}
        className={classes}
      />
      {validationMessage ? (
        <FieldMessage message={validationMessage} status={status} />
      ) : null}
      {description ? <FieldMessage message={description} /> : null}
    </>
  )
})
Select.displayName = "Select"

interface AsyncProps
  extends ReactAsyncSelectProps<any, boolean, any>,
    ReactSelectProps<any, boolean, any> {}

export const AsyncSelect = React.forwardRef(
  (props: AsyncProps, ref: React.Ref<any>) => (
    <Async
      {...props}
      ref={ref}
      components={{
        Control,
        Placeholder,
        DropdownIndicator,
        Menu,
        Option,
        NoOptionsMessage,
        Input,
        SingleValue,
        MultiValue,
        IndicatorsContainer,
        ValueContainer,
        ClearIndicator: undefined,
        IndicatorSeparator: null,
        LoadingMessage,
      }}
      className={classNames(styles.specificityIncreaser, props.className)}
    />
  )
)
AsyncSelect.displayName = "AsyncSelect"

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
  <components.Placeholder {...props} className={styles.placeholderOverrides}>
    <span className={styles.placeholder}>{props.children}</span>
  </components.Placeholder>
)

const DropdownIndicator: typeof components.DropdownIndicator = props => (
  <components.DropdownIndicator {...props} className={styles.dropdownIndicator}>
    <Icon
      icon={props.selectProps.menuIsOpen ? chevronUpIcon : chevronDownIcon}
      role="presentation"
    />
  </components.DropdownIndicator>
)

const LoadingMessage: React.VFC<NoticeProps> = (props: NoticeProps) => (
  <components.LoadingMessage {...props} className={styles.loadingMessage} />
)

const Menu: typeof components.Menu = props => (
  <components.Menu {...props} className={styles.menu} />
)

const GroupHeading: typeof components.GroupHeading = props => (
  <components.GroupHeading
    {...props}
    className={classNames(styles.groupHeading)}
  />
)

const Option: typeof components.Option = props => (
  <div data-automation-id="Select__Option">
    <components.Option
      {...props}
      className={classNames(styles.option, {
        [styles.focusedOption]: props.isFocused,
        [styles.selectedOption]: props.isSelected,
        [styles.disabledOption]: props.isDisabled,
      })}
    />
  </div>
)

const NoOptionsMessage: React.VFC<NoticeProps> = (props: NoticeProps) => (
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
  <div className={styles.multiValue}>
    <Tag
      children={props.children}
      variant="default"
      dismissible
      inline
      onDismiss={props.removeProps.onClick}
    />
  </div>
)

const IndicatorsContainer: typeof components.IndicatorsContainer = props => (
  <components.IndicatorsContainer {...props} />
)

const Input: typeof components.Input = props => (
  <components.Input className={styles.input} {...props} />
)

const ValueContainer: typeof components.ValueContainer = props => (
  <components.ValueContainer {...props} className={styles.valueContainer} />
)
const ClearIndicator: typeof components.ClearIndicator = props => (
  <components.ClearIndicator {...props}>
    <Icon icon={clearIcon} role="presentation" />
  </components.ClearIndicator>
)
