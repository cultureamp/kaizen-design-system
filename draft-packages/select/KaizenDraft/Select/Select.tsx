import React, { useState } from "react"
import classnames from "classnames"
import ReactSelect, {
  components as ReactSelectComponents,
  Props as ReactSelectProps,
  NoticeProps,
} from "react-select"
import Async, { AsyncProps as ReactAsyncSelectProps } from "react-select/async"
import { v4 } from "uuid"
import { Icon } from "@kaizen/component-library"
import chevronDownIcon from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUpIcon from "@kaizen/component-library/icons/chevron-up.icon.svg"
import clearIcon from "@kaizen/component-library/icons/clear.icon.svg"
import { Label, FieldMessage } from "@kaizen/draft-form"
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

  const classes = classnames(
    props.className,
    styles.specificityIncreaser,
    (!reversed || variant === "default") && styles.default,
    reversed && styles.reversed,
    variant === "secondary" && styles.secondary,
    variant === "secondary-small" && styles.secondarySmall,
    !fullWidth && styles.notFullWidth,
    props.isDisabled && styles.disabled,
    status === "error" && styles.error
  )

  const [labelId] = useState<string | undefined>(label ? v4() : undefined)

  return (
    <>
      {label ? (
        <Label reversed={reversed} id={labelId}>
          {label}
        </Label>
      ) : null}
      <ReactSelect
        {...props}
        ref={ref}
        aria-labelledby={labelId}
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
  ({ components, className, ...rest }: AsyncProps, ref: React.Ref<any>) => (
    <Async
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
        ...components,
      }}
      className={classnames(styles.specificityIncreaser, className)}
      {...rest}
    />
  )
)
AsyncSelect.displayName = "AsyncSelect"

const Control: typeof ReactSelectComponents.Control = props => (
  <div data-automation-id="Select__Control">
    <ReactSelectComponents.Control
      {...props}
      className={classnames(
        styles.control,
        props.isFocused && styles.focusedControl,
        props.isDisabled && styles.disabled
      )}
    />
  </div>
)

const Placeholder: typeof ReactSelectComponents.Placeholder = props => (
  <ReactSelectComponents.Placeholder
    {...props}
    className={styles.placeholderOverrides}
  >
    <span className={styles.placeholder}>{props.children}</span>
  </ReactSelectComponents.Placeholder>
)

const DropdownIndicator: typeof ReactSelectComponents.DropdownIndicator =
  props => (
    <ReactSelectComponents.DropdownIndicator
      {...props}
      className={styles.dropdownIndicator}
    >
      <Icon
        icon={props.selectProps.menuIsOpen ? chevronUpIcon : chevronDownIcon}
        role="presentation"
      />
    </ReactSelectComponents.DropdownIndicator>
  )

const LoadingMessage = (props: NoticeProps): JSX.Element => (
  <ReactSelectComponents.LoadingMessage
    {...props}
    className={styles.loadingMessage}
  />
)

const Menu: typeof ReactSelectComponents.Menu = props => (
  <ReactSelectComponents.Menu {...props} className={styles.menu} />
)

const GroupHeading: typeof ReactSelectComponents.GroupHeading = props => (
  <ReactSelectComponents.GroupHeading
    {...props}
    className={styles.groupHeading}
  />
)

const Option: typeof ReactSelectComponents.Option = props => (
  <div data-automation-id="Select__Option">
    <ReactSelectComponents.Option
      {...props}
      className={classnames(
        styles.option,
        props.isFocused && styles.focusedOption,
        props.isSelected && styles.selectedOption,
        props.isDisabled && styles.disabledOption
      )}
    />
  </div>
)

const NoOptionsMessage = (props: NoticeProps): JSX.Element => (
  <ReactSelectComponents.NoOptionsMessage {...props}>
    <span className={styles.noOptionsMessage}>{props.children}</span>
  </ReactSelectComponents.NoOptionsMessage>
)

const SingleValue: typeof ReactSelectComponents.SingleValue = props => (
  <ReactSelectComponents.SingleValue
    {...props}
    className={styles.singleValueOverrides}
  >
    <span className={styles.singleValue}>{props.children}</span>
  </ReactSelectComponents.SingleValue>
)

const MultiValue: typeof ReactSelectComponents.MultiValue = props => (
  <div className={styles.multiValue}>
    <Tag
      variant="default"
      dismissible
      inline
      onDismiss={props.removeProps.onClick}
    >
      {props.children}
    </Tag>
  </div>
)

const IndicatorsContainer: typeof ReactSelectComponents.IndicatorsContainer =
  props => (
    <ReactSelectComponents.IndicatorsContainer
      {...props}
      className={styles.indicatorsContainer}
    />
  )

const Input: typeof ReactSelectComponents.Input = props => (
  <ReactSelectComponents.Input className={styles.input} {...props} />
)

const ValueContainer: typeof ReactSelectComponents.ValueContainer = props => (
  <ReactSelectComponents.ValueContainer
    {...props}
    className={styles.valueContainer}
  />
)
const ClearIndicator: typeof ReactSelectComponents.ClearIndicator = props => (
  <ReactSelectComponents.ClearIndicator
    {...props}
    className={styles.clearIndicator}
  >
    <Icon icon={clearIcon} role="presentation" />
  </ReactSelectComponents.ClearIndicator>
)
