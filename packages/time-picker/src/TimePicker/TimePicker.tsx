import { Icon } from "@kaizen/component-library"
import { FieldMessage, Label } from "@kaizen/draft-form"
import React, { useMemo, useRef } from "react"
import { CalendarDateTime } from "@internationalized/date"
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

export type TimePickerProps = Exclude<
  TimeFieldStateOptions,
  "errorMessage" | "validationState"
> &
  AriaMenuTriggerProps & {
    status?: StatusType
    validationMessage?: React.ReactNode
  }

export const TimePicker: React.VFC<TimePickerProps> = ({
  status = "default",
  validationMessage,
  ...rest
}: TimePickerProps) => {
  // TODO: this should take a custom locale
  const { locale } = useLocale()
  const state = useTimeFieldState({
    ...rest,
    locale,
    validationState: status === "default" ? "valid" : "invalid",
  })

  const menuState = useMenuTriggerState(rest)

  const ref = React.useRef(null)
  const { fieldProps } = useTimeField(rest, state, ref)
  const buttonRef = useRef(null)
  const { menuTriggerProps, menuProps } = useMenuTrigger<TIME_OPTION>(
    {},
    menuState,
    buttonRef
  )

  const options = useMemo(() => getAllTimeOptions(), [])
  return (
    <div className={styles.wrapper}>
      <Label>{rest.label}</Label>

      <div
        {...fieldProps}
        ref={ref}
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
          isDisabled={state.isDisabled}
          ref={buttonRef}
        >
          <Icon icon={menuState.isOpen ? chevronUp : chevronDown} />
        </Button>
      </div>
      {validationMessage ? (
        <FieldMessage message={validationMessage} status={status} />
      ) : null}
      {menuState.isOpen && (
        <Popover isOpen={menuState.isOpen} onClose={menuState.close}>
          <Menu
            {...menuProps}
            onAction={key => {
              const splitTime = key.toString().split(":")
              rest.onChange &&
                rest.onChange(
                  new CalendarDateTime(
                    // @ts-expect-error not sure why how to fix below
                    2022,
                    8,
                    13,
                    splitTime[0],
                    splitTime[1]
                  )
                )
            }}
          >
            {options.map(option => (
              <Item key={option.value}>{option.label}</Item>
            ))}
          </Menu>
        </Popover>
      )}
    </div>
  )
}

TimePicker.displayName = "TimePicker"
