import React, { useMemo } from "react"
import { Icon } from "@kaizen/component-library"
import { FieldMessage } from "@kaizen/draft-form"
import { Time } from "@internationalized/date"
import { useTimeField } from "@react-aria/datepicker"
import { useMenuTrigger } from "@react-aria/menu"

import { Item } from "@react-stately/collections"
import { useMenuTriggerState } from "@react-stately/menu"
import {
  useTimeFieldState,
  TimeFieldStateOptions,
} from "@react-stately/datepicker"

import { Heading } from "@kaizen/typography"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import classNames from "classnames"
import { generateLocalisedTime, getAllTimeOptions } from "./utils"
import { DateSegment, Menu, Button, Popover } from "./components"
import styles from "./TimePicker.module.scss"
import { TimeOption, TimeValue } from "./types"
import { generateInputRegexString } from "./utils/generateInputRegexString"

export type StatusType = "default" | "error"

export type ValueType = {
  /**
   * Supply hour in 24 hour format
   */
  hour: number | undefined
  minutes: number | undefined
}
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
  dropdownButtonAriaLabel: string
  onChange: (value: ValueType | null) => void
  value: ValueType | undefined | null
  dropdownIncrements?: number
  status?: StatusType
  validationMessage?: React.ReactNode
}
// https:// react-spectrum.adobe.com/react-aria/useFocusRing.html
export const TimePicker: React.VFC<TimePickerProps> = ({
  status = "default",
  validationMessage,
  id,
  isDisabled,
  value,
  onChange,
  label,
  locale,
  dropdownButtonAriaLabel,
  dropdownIncrements,
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

  const menuState = useMenuTriggerState({})

  const inputRef = React.useRef(null)
  const { fieldProps, labelProps } = useTimeField(
    { ...restProps, label },
    state,
    inputRef
  )

  const { menuProps, menuTriggerProps } = useMenuTrigger<TimeOption>(
    { isDisabled },
    menuState,
    inputRef
  )

  const options: Record<string, TimeOption> = useMemo(() => {
    const allOptions = getAllTimeOptions({
      locale,
      increments: dropdownIncrements,
    })

    // TODO pull this out into a filter util function
    if (!state.segments) {
      return allOptions
    }

    const regexMatcher = generateInputRegexString(state.segments)

    return Object.keys(allOptions).reduce((filteredOptions, optionKey) => {
      if (regexMatcher.test(optionKey)) {
        filteredOptions[optionKey] = allOptions[optionKey]
      }
      return filteredOptions
    }, {} as Record<string, TimeOption>)
  }, [locale, dropdownIncrements, state])

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
          <Button {...menuTriggerProps} aria-label={dropdownButtonAriaLabel}>
            <Icon
              role="presentation"
              icon={menuState.isOpen ? chevronUp : chevronDown}
            />
          </Button>
        </div>
        <Popover
          shouldCloseOnInteractOutside={element =>
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
          isOpen={Object.keys(options).length > 0 && menuState.isOpen}
          onClose={menuState.close}
        >
          <Menu
            {...menuProps}
            selectedKeys={
              value
                ? new Set([
                    generateLocalisedTime({
                      hour: value.hour,
                      minutes: value.minutes,
                      locale,
                    }),
                  ])
                : undefined
            }
            selectionMode="single"
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
    </div>
  )
}

TimePicker.displayName = "TimePicker"
