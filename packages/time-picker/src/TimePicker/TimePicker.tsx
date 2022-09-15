import { Icon } from "@kaizen/component-library"
import { FieldMessage, Label } from "@kaizen/draft-form"
import React, { useMemo, useRef } from "react"
import {
  CalendarDate,
  CalendarDateTime,
  parseTime,
  Time,
} from "@internationalized/date"
import { useTimeField } from "@react-aria/datepicker"
import { useLocale } from "@react-aria/i18n"
import { useMenuTrigger, AriaMenuTriggerProps } from "@react-aria/menu"

import { Item } from "@react-stately/collections"
import { useMenuTriggerState } from "@react-stately/menu"
import {
  useTimeFieldState,
  TimeFieldStateOptions,
} from "@react-stately/datepicker"

import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import classNames from "classnames"
import { getAllTimeOptions, TIME_OPTION } from "./utils"
import { DateSegment, Menu, Button, Popover } from "./components"
import styles from "./TimePicker.module.scss"

export type StatusType = "default" | "error"

export interface TimePickerProps
  extends Omit<
    TimeFieldStateOptions,
    "errorMessage" | "validationState" | "value" | "onChange"
  > {
  id: string
  onChange: (_: Date) => void
  value: Date
  status?: StatusType
  validationMessage?: React.ReactNode
}

export const TimePicker: React.VFC<TimePickerProps> = ({
  status = "default",
  validationMessage,
  id,
  isDisabled,
  value,
  onChange,
  ...rest
}: TimePickerProps) => {
  // TODO: this should take a custom locale
  const { locale } = useLocale()
  const handleOnChange = (timeValue: Time) =>
    onChange(
      new CalendarDateTime(
        value.getFullYear(),
        value.getMonth(),
        value.getDate(),
        timeValue.hour,
        timeValue.minute
      ).toDate("Australia/Sydney")
    )
  const state = useTimeFieldState({
    ...rest,
    value: value
      ? new CalendarDateTime(
          value.getFullYear(),
          value.getMonth(),
          value.getDate(),
          value.getHours(),
          value.getMinutes()
        )
      : undefined,
    onChange: handleOnChange,
    isDisabled,
    locale: "en-AU",
    validationState: status === "default" ? "valid" : "invalid",
  })

  const menuState = useMenuTriggerState({})

  const inputRef = React.useRef(null)
  const { fieldProps } = useTimeField({ ...rest }, state, inputRef)
  const buttonRef = useRef(null)
  const { menuTriggerProps, menuProps } = useMenuTrigger<TIME_OPTION>(
    { isDisabled },
    menuState,
    buttonRef
  )

  const options = useMemo(() => getAllTimeOptions(), [])
  return (
    <div className={styles.wrapper}>
      <Label>{rest.label}</Label>

      <button
        {...fieldProps}
        id={id}
        ref={inputRef}
        onFocus={() => {
          menuState.open()
        }}
        className={classNames(styles.input, {
          [styles.isDisabled]: state.isDisabled,
          [styles.error]: state.validationState === "invalid",
        })}
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
        <div className={styles.focusRing} />
        <div className={styles.dropdownIndicator}>
          <Icon
            role="presentation"
            icon={menuState.isOpen ? chevronUp : chevronDown}
          />
        </div>
      </button>
      {validationMessage ? (
        <FieldMessage message={validationMessage} status={status} />
      ) : null}
      <Popover
        shouldCloseOnInteractOutside={element => {
          console.log("ELEMENT", element)
          return !(
            (element.id && element.id === id) ||
            element.className.includes("DateSegment") ||
            element.className.includes("dropdownIndicator") ||
            element.getAttribute("role") === "spinbutton" ||
            element.getAttribute("role") === "presentation"
          )
        }}
        isOpen={menuState.isOpen}
        onClose={menuState.close}
      >
        <Menu
          {...menuProps}
          onAction={key => {
            const time = parseTime(key.toString())
            state.setValue(
              new CalendarDateTime(
                value.getFullYear(),
                value.getMonth(),
                value.getDate(),
                time.hour,
                time.minute
              )
            )
          }}
        >
          {options.map(option => (
            <Item key={option.value}>{option.label}</Item>
          ))}
        </Menu>
      </Popover>
    </div>
  )
}

TimePicker.displayName = "TimePicker"
