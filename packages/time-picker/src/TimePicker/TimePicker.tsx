import { Icon } from "@kaizen/component-library"
import { FieldMessage, Label } from "@kaizen/draft-form"
import React, { useMemo } from "react"
import {
  getLocalTimeZone,
  now,
  parseAbsolute,
  ZonedDateTime,
} from "@internationalized/date"
import { toDate } from "@internationalized/date/src/conversion"
import { useTimeField } from "@react-aria/datepicker"
import { useLocale } from "@react-aria/i18n"
import { useMenuTrigger } from "@react-aria/menu"

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
import { TimeValue } from "./types"

export type StatusType = "default" | "error"

const isZonedDateTimeObject = (obj): obj is ZonedDateTime => "toDate" in obj
export interface TimePickerProps
  extends Omit<
    TimeFieldStateOptions,
    "errorMessage" | "validationState" | "value" | "onChange" | "label"
  > {
  id: string
  label: string
  onChange: (date: Date) => void
  value?: Date | undefined
  /**
   * Supply timeZone in IANA format, i.e. "Australia/Melbourne"
   */
  timeZone?: string
  dropdownIncrements?: number
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
  label,
  timeZone = getLocalTimeZone(),
  locale,
  dropdownIncrements,
  ...restProps
}: TimePickerProps) => {
  const utcOffset = now(timeZone).offset

  const handleOnChange = (timeValue: TimeValue): void => {
    // onChange does not fire until user interacts with all placeholders
    // if user interacts with spin buttons, timeValue is Time type, which cannot be converted directly into Date object
    // if user interacts with MenuItems, it has to be CalendarDateTime or ZonedDateTime, as Time objects cannot be formatted properly to display in a list
    // console.log("STATE", state.dateValue, timeValue)
    if (isZonedDateTimeObject(timeValue)) {
      onChange(timeValue.toDate())
    } else {
      const today = now(timeZone).toDate()
      const date = new ZonedDateTime(
        (value ?? today).getFullYear(),
        (value ?? today).getMonth(),
        (value ?? today).getDay(),
        timeZone,
        utcOffset,
        timeValue.hour,
        timeValue.minute
      ).toDate()
      onChange(date)
    }
  }

  const state = useTimeFieldState({
    ...restProps,
    value: value ? parseAbsolute(value.toISOString(), timeZone) : undefined,
    onChange: handleOnChange,
    isDisabled,
    hideTimeZone: true,
    locale,
    validationState: status === "default" ? "valid" : "invalid",
  })
  const menuState = useMenuTriggerState({})

  const inputRef = React.useRef(null)
  const { fieldProps } = useTimeField({ ...restProps, label }, state, inputRef)

  const { menuProps, menuTriggerProps } = useMenuTrigger<TIME_OPTION>(
    { isDisabled },
    menuState,
    inputRef
  )
  const options = useMemo(
    () =>
      getAllTimeOptions({
        locale,
        timeZone,
        utcOffset,
        date: value,
        increments: dropdownIncrements,
      }),
    [locale, timeZone, dropdownIncrements]
  )

  return (
    <>
      <Label>{label}</Label>
      <div className={styles.wrapper}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
        <div
          {...fieldProps}
          id={id}
          aria-label={label}
          data-testid="timepicker-input"
          ref={inputRef}
          onClick={() => menuState.open()}
          className={classNames(styles.input, {
            [styles.isDisabled]: state.isDisabled,
            [styles.error]: state.validationState === "invalid",
          })}
        >
          {state.segments.map((segment, i) => (
            <DateSegment key={i} segment={segment} state={state} />
          ))}
          <div className={styles.focusRing} />
          <Button
            {...menuTriggerProps}
            aria-label={`${id} dropdown`}
            data-testid="timepicker-button"
          >
            <Icon
              role="presentation"
              icon={menuState.isOpen ? chevronUp : chevronDown}
            />
          </Button>
        </div>
        {validationMessage ? (
          <FieldMessage message={validationMessage} status={status} />
        ) : null}
        <Popover
          shouldCloseOnInteractOutside={element =>
            // FIXME: Requires better type guarding
            !(
              (element.id && element.id === id) ||
              (element.className &&
                element.className.includes("DateSegment")) ||
              element.className.includes("dropdownIndicator") ||
              element.getAttribute("role") === "spinbutton" ||
              element.getAttribute("role") === "presentation"
            )
          }
          isOpen={menuState.isOpen}
          onClose={menuState.close}
        >
          <Menu
            {...menuProps}
            data-testid="timepicker-menu"
            // state.setValue doesn't work unless value is undefined
            onAction={key => handleOnChange(options[key].value)}
          >
            {Object.keys(options).map(option => (
              <Item key={option}>{options[option].label}</Item>
            ))}
          </Menu>
        </Popover>
      </div>
    </>
  )
}

TimePicker.displayName = "TimePicker"
