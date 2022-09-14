import { Icon } from "@kaizen/component-library"
import { Label } from "@kaizen/draft-form"
import React, { useMemo, useRef } from "react"
import { CalendarDateTime, Time } from "@internationalized/date"
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

export type TimePickerProps = TimeFieldStateOptions & AriaMenuTriggerProps

export const TimePicker: React.VFC<TimePickerProps> = (
  props: TimePickerProps
) => {
  // TODO: this should take a custom locale
  const { locale } = useLocale()
  const state = useTimeFieldState({
    ...props,
    locale,
  })

  const menuState = useMenuTriggerState(props)

  const ref = React.useRef(null)
  const { fieldProps } = useTimeField(props, state, ref)
  const buttonRef = useRef(null)
  const { menuTriggerProps, menuProps } = useMenuTrigger<TIME_OPTION>(
    {},
    menuState,
    buttonRef
  )
  const options = useMemo(() => getAllTimeOptions(), [])
  return (
    <div className={styles.wrapper}>
      {/* <span {...labelProps}>{props.label}</span> */}
      <Label>{props.label}</Label>

      <div
        {...fieldProps}
        ref={ref}
        className={classNames(styles.input, {
          [styles.isDisabled]: state.isDisabled,
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
      {menuState.isOpen && (
        <Popover isOpen={menuState.isOpen} onClose={menuState.close}>
          <Menu
            {...menuProps}
            onAction={key => {
              const splitTime = key.toString().split(":")
              props.onChange &&
                props.onChange(
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
