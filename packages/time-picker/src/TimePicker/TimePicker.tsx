import React, { useMemo } from "react"
import { Icon } from "@kaizen/component-library"
import { FieldMessage, Label } from "@kaizen/draft-form"
import {
  getLocalTimeZone,
  now,
  parseAbsolute,
  Time,
  ZonedDateTime,
} from "@internationalized/date"
import { useTimeField } from "@react-aria/datepicker"
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
import { formatDateToTime, getAllTimeOptions, TIME_OPTION } from "./utils"
import { DateSegment, Menu, Button, Popover } from "./components"
import styles from "./TimePicker.module.scss"
import { TimeValue } from "./types"
import { convertTimeToZonedDateTime } from "./utils/convertTimeToZonedDateTime"

export type StatusType = "default" | "error"

const isZonedDateTimeObject = (
  timeValue: TimeValue
): timeValue is ZonedDateTime => timeValue && "toDate" in timeValue
export interface TimePickerProps
  extends Omit<
    TimeFieldStateOptions,
    "errorMessage" | "validationState" | "value" | "onChange" | "label"
  > {
  id: string
  label: string
  onChange: (date: Date | null) => void
  value: Date | undefined | null
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
  const handleOnChange = (timeValue: TimeValue | null): void => {
    if (timeValue === null) {
      onChange(null)
      return
    }
    // onChange does not fire until user interacts with all placeholders
    // if user interacts with spin buttons, timeValue is Time type, which cannot be converted directly into Date object
    // if user interacts with MenuItems, it has to be CalendarDateTime or ZonedDateTime, as Time objects cannot be formatted properly to display in a list
    if (isZonedDateTimeObject(timeValue)) {
      onChange(timeValue.toDate())
    } else {
      const today = now(timeZone).toDate()
      const date = convertTimeToZonedDateTime({
        date: value ?? today,
        hour: timeValue.hour,
        minutes: timeValue.minute,
        timeZone,
      }).toDate()
      onChange(date)
    }
  }

  const state = useTimeFieldState({
    ...restProps,
    // @ts-expect-error controlled values should not be undefined and library throws warning if such is supplied for value,
    // however library does not allow for null values despite handling properly
    // https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/utils/src/useControlledState.ts#L23
    // https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/datepicker/src/useTimeFieldState.ts
    value: value ? parseAbsolute(value.toISOString(), timeZone) : null,
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

  const timeZoneLabel = Intl.DateTimeFormat(locale, {
    timeZoneName: "short",
    timeZone,
  })
    .formatToParts(new Date())
    .find(segment => segment.type === "timeZoneName")?.value

  const options = useMemo(
    () =>
      getAllTimeOptions({
        locale,
        timeZone,
        date: value,
        increments: dropdownIncrements,
      }),
    [locale, timeZone, dropdownIncrements]
  )

  return (
    <>
      <Label data-testid="timepicker-label">{`${label} ${
        restProps.hideTimeZone && timeZoneLabel ? "" : `(${timeZoneLabel})`
      }`}</Label>
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
        <Popover
          shouldCloseOnInteractOutside={element =>
            // FIXME: Requires better type guarding
            !element ||
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
            selectedKeys={
              value
                ? new Set([formatDateToTime(value, locale, timeZone)])
                : undefined
            }
            selectionMode="single"
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
      {validationMessage && status === "error" && (
        <FieldMessage message={validationMessage} status={status} />
      )}
    </>
  )
}

TimePicker.displayName = "TimePicker"
