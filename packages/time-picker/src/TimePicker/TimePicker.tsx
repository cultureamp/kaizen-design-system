import React from "react"
import { FieldMessage } from "@kaizen/draft-form"
import { Time } from "@internationalized/date"
import { useTimeField } from "@react-aria/datepicker"
import { I18nProvider } from "@react-aria/i18n"

import {
  useTimeFieldState,
  TimeFieldStateOptions,
} from "@react-stately/datepicker"

import { Heading } from "@kaizen/typography"
import classNames from "classnames"

import { DateSegment } from "./components"
import styles from "./TimePicker.module.scss"
import { StatusType, TimeValue, ValueType } from "./types"

export interface TimePickerProps
  extends Omit<
    TimeFieldStateOptions,
    | "errorMessage"
    | "validationState"
    | "value"
    | "onChange"
    | "label"
    | "hideTimeZone"
  > {
  id: string
  label: string
  locale: string
  onChange: (value: ValueType | null) => void
  value: ValueType | undefined | null
  status?: StatusType
  validationMessage?: React.ReactNode
}
const TimePickerComponent: React.VFC<TimePickerProps> = ({
  status = "default",
  validationMessage,
  id,
  isDisabled,
  value,
  onChange,
  label,
  locale,
  ...restProps
}) => {
  const handleOnChange = (timeValue: TimeValue | null): void => {
    if (timeValue === null) {
      return onChange(null)
    }
    onChange({ hour: timeValue.hour, minutes: timeValue.minute })
  }

  const state = useTimeFieldState({
    ...restProps,
    // @ts-expect-error controlled values should not be undefined and library throws warning if such is supplied for value,
    // however library does not allow for null values despite handling properly
    // https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/utils/src/useControlledState.ts#L23
    // https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/datepicker/src/useTimeFieldState.ts
    value: value ? new Time(value.hour, value.minutes) : null,
    onChange: handleOnChange,
    isDisabled,
    hideTimeZone: true,
    locale,
    validationState: status === "default" ? "valid" : "invalid",
  })

  const inputRef = React.useRef(null)
  const { fieldProps, labelProps } = useTimeField(
    { ...restProps, label },
    state,
    inputRef
  )

  return (
    <div>
      <Heading tag="div" variant="heading-6" {...labelProps}>
        {label}
      </Heading>
      <div className={styles.wrapper}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
        <div
          {...fieldProps}
          id={id}
          ref={inputRef}
          className={classNames(styles.input, {
            [styles.isDisabled]: state.isDisabled,
            [styles.error]: state.validationState === "invalid",
          })}
        >
          {state.segments.map((segment, i) => (
            <DateSegment key={i} segment={segment} state={state} />
          ))}
          <div className={styles.focusRing} />
        </div>
      </div>
      {validationMessage && status === "error" && (
        <FieldMessage message={validationMessage} status={status} />
      )}
    </div>
  )
}
TimePickerComponent.displayName = "TimePickerComponent"

export const TimePicker: React.VFC<TimePickerProps> = props => (
  <I18nProvider locale={props.locale}>
    <TimePickerComponent {...props} />
  </I18nProvider>
)

TimePicker.displayName = "TimePicker"
