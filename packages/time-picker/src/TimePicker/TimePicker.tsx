import { Icon } from "@kaizen/component-library"
import { FieldMessage, Label } from "@kaizen/draft-form"
import React, { useMemo } from "react"
import { CalendarDateTime } from "@internationalized/date"
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

export interface TimePickerProps
  extends Omit<
    TimeFieldStateOptions,
    "errorMessage" | "validationState" | "value" | "onChange" | "label"
  > {
  id: string
  label: string
  onChange: (date: Date) => void
  timeZone?: string
  value?: Date | undefined
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
  timeZone,
  dropdownIncrements,
  ...restProps
}: TimePickerProps) => {
  const { locale } = useLocale()

  const handleOnChange = (timeValue: TimeValue): void => {
    const today = new Date()
    onChange(
      new Date(
        (value ?? today).getFullYear(),
        (value ?? today).getMonth(),
        (value ?? today).getDate(),
        timeValue.hour,
        timeValue.minute
      )
    )
  }
  const state = useTimeFieldState({
    ...restProps,
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
    locale: restProps.locale ?? locale,
    validationState: status === "default" ? "valid" : "invalid",
  })

  const menuState = useMenuTriggerState({})

  const inputRef = React.useRef(null)
  const { fieldProps } = useTimeField({ ...restProps }, state, inputRef)

  const { menuProps, menuTriggerProps } = useMenuTrigger<TIME_OPTION>(
    { isDisabled },
    menuState,
    inputRef
  )

  const options = useMemo(
    () =>
      getAllTimeOptions({ locale, timeZone, increments: dropdownIncrements }),
    []
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
          <Button {...menuTriggerProps} aria-label={`${id} dropdown`}>
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
