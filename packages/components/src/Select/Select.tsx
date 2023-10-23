import React, { useId, useState } from "react"
import classnames from "classnames"
import ReactSelect, {
  components,
  Props as ReactSelectProps,
  NoticeProps,
} from "react-select"
import Async, { AsyncProps as ReactAsyncSelectProps } from "react-select/async"
import { FieldMessage } from "~components/FieldMessage"
import { ChevronDownIcon, ChevronUpIcon, ClearIcon } from "~components/Icon"
import { Label } from "~components/Label"
import { Tag } from "~components/Tag"
import styles from "./Select.module.scss"

export type SelectProps = {
  /**
   * The secondary variant is a more subdued variant that takes up as little space as possible
   * `variant="secondary" reversed="false" is not implemented and will throw a "not implemented" error
   * @default "default"
   */
  variant?: "default" | "secondary" | "secondary-small"
  status?: "default" | "error"
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
} & ReactSelectProps<any, boolean>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896474/Select Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-select--docs Storybook}
 */
export const Select = React.forwardRef<any, SelectProps>(
  (
    {
      variant = "default",
      status = "default",
      reversed = false,
      label,
      validationMessage,
      description,
      fullWidth: propsFullWidth,
      className: propsClassName,
      isDisabled,
      ...props
    },
    ref
  ) => {
    const reactId = useId()

    // the default for fullWidth depends on the variant
    const fullWidth =
      propsFullWidth != null
        ? propsFullWidth
        : variant === "secondary" || variant === "secondary-small"
        ? false
        : true

    const classes = classnames(
      propsClassName,
      styles.specificityIncreaser,
      (!reversed || variant === "default") && styles.default,
      reversed && styles.reversed,
      variant === "secondary" && styles.secondary,
      variant === "secondary-small" && styles.secondarySmall,
      !fullWidth && styles.notFullWidth,
      isDisabled && styles.disabled,
      status === "error" && styles.error
    )

    const [labelId] = useState<string | undefined>(label ? reactId : undefined)

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
  }
)
Select.displayName = "Select"

interface AsyncProps
  extends ReactAsyncSelectProps<any, boolean, any>,
    ReactSelectProps<any, boolean, any> {}

export const AsyncSelect = React.forwardRef(
  (
    { className: propsClassName, ...props }: AsyncProps,
    ref: React.Ref<any>
  ) => (
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
      className={classnames(styles.specificityIncreaser, propsClassName)}
    />
  )
)
AsyncSelect.displayName = "AsyncSelect"

const Control: typeof components.Control = props => (
  <div data-automation-id="Select__Control">
    <components.Control
      {...props}
      className={classnames(
        styles.control,
        props.isFocused && styles.focusedControl,
        props.isDisabled && styles.disabled
      )}
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
    {props.selectProps.menuIsOpen ? (
      <ChevronUpIcon role="presentation" />
    ) : (
      <ChevronDownIcon role="presentation" />
    )}
  </components.DropdownIndicator>
)

const LoadingMessage = (props: NoticeProps): JSX.Element => (
  <components.LoadingMessage {...props} className={styles.loadingMessage} />
)

const Menu: typeof components.Menu = props => (
  <components.Menu {...props} className={styles.menu} />
)

const GroupHeading: typeof components.GroupHeading = props => (
  <components.GroupHeading {...props} className={styles.groupHeading} />
)

const Option: typeof components.Option = props => (
  <div data-automation-id="Select__Option">
    <components.Option
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
      variant="default"
      dismissible
      inline
      onDismiss={props.removeProps.onClick}
    >
      {props.children}
    </Tag>
  </div>
)

const IndicatorsContainer: typeof components.IndicatorsContainer = props => (
  <components.IndicatorsContainer
    {...props}
    className={styles.indicatorsContainer}
  />
)

const Input: typeof components.Input = props => (
  <components.Input className={styles.input} {...props} />
)

const ValueContainer: typeof components.ValueContainer = props => (
  <components.ValueContainer {...props} className={styles.valueContainer} />
)
const ClearIndicator: typeof components.ClearIndicator = props => (
  <components.ClearIndicator {...props} className={styles.clearIndicator}>
    <ClearIcon role="presentation" />
  </components.ClearIndicator>
)
