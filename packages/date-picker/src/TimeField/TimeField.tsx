import React, { useState } from "react"
import { Time } from "@internationalized/date"
import { useTimeField } from "@react-aria/datepicker"
import { I18nProvider } from "@react-aria/i18n"
import {
  useTimeFieldState,
  TimeFieldStateOptions,
} from "@react-stately/datepicker"
import classnames from "classnames"
import { v4 } from "uuid"
import { OverrideClassName } from "@kaizen/component-base"
import { FieldMessage } from "@kaizen/draft-form"
import { Heading } from "@kaizen/typography"
import { TimeSegment } from "./components/TimeSegment"
import { StatusType, TimeValue, ValueType } from "./types"
import styles from "./TimeField.module.scss"

type OmittedTimeFieldProps =
  | "errorMessage"
  | "validationState"
  | "value"
  | "onChange"
  | "label"
  | "hideTimeZone"

export interface TimeFieldProps
  extends OverrideClassName<
    Omit<TimeFieldStateOptions, OmittedTimeFieldProps>
  > {
  id?: string
  /**
   * Field label.
   */
  label: string
  /**
   * Accepts any valid locale code (https://npm.io/package/locale-codes).
   */
  locale: string
  onChange: (value: ValueType | null) => void
  value: ValueType | null
  status?: StatusType
  validationMessage?: React.ReactNode
}

// This needed to be placed directly below the props because
// the prop descriptions wouldn't show in Storybook otherwise.
export const TimeField = (props: TimeFieldProps): JSX.Element => (
  <I18nProvider locale={props.locale}>
    <TimeFieldComponent {...props} />
  </I18nProvider>
)

TimeField.displayName = "TimeField"

const TimeFieldComponent = ({
  id: propsId,
  label,
  locale,
  onChange,
  value,
  status = "default",
  validationMessage,
  isDisabled,
  classNameOverride,
  ...restProps
}: TimeFieldProps): JSX.Element => {
  const [id] = useState<string>(propsId || v4())
  const handleOnChange = (timeValue: TimeValue | null): void => {
    if (timeValue === null) {
      return onChange(null)
    }
    onChange({ hour: timeValue.hour, minutes: timeValue.minute })
  }

  const state = useTimeFieldState({
    ...restProps,
    value: value ? new Time(value.hour, value.minutes) : null,
    onChange: handleOnChange,
    isDisabled,
    hideTimeZone: true,
    locale,
    validationState: status === "default" ? "valid" : "invalid",
  })
  const descriptionId = `${id}-field-message`

  const inputRef = React.useRef(null)
  const { fieldProps, labelProps } = useTimeField(
    {
      ...restProps,
      label,
      isDisabled,
      "aria-describedby": descriptionId,
    },
    state,
    inputRef
  )
  return (
    <div className={classNameOverride}>
      <Heading tag="div" variant="heading-6" {...labelProps}>
        {label}
      </Heading>
      <div className={styles.wrapper}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
        <div
          {...fieldProps}
          id={id}
          ref={inputRef}
          className={classnames(
            styles.input,
            state.isDisabled && styles.isDisabled,
            state.validationState === "invalid" && styles.error
          )}
        >
          {state.segments.map((segment, i) => (
            <TimeSegment key={i} segment={segment} state={state} />
          ))}
          <div className={styles.focusRing} />
        </div>
      </div>
      {validationMessage && status === "error" && (
        <FieldMessage
          id={descriptionId}
          message={validationMessage}
          status={status}
        />
      )}
    </div>
  )
}

TimeFieldComponent.displayName = "TimeFieldComponent"
