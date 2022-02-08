import { TextField } from "@kaizen/draft-form"
import React, { RefObject, useEffect, useRef, useState } from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import "react-day-picker/lib/style.css"
import DayPicker from "react-day-picker/DayPicker"
import { usePopper } from "react-popper"
import customStyles from "./DatePicker.scss"
import { CalendarNav, CalendarNavProps } from "./CalendarNav"
import { defaultDatePickerClasses } from "./DatePickerClasses"

type DatePickerProps = {
  id: string
  selectedDate?: Date
  onDayChange: (day: Date) => void
  labelText?: string
  isDisabled?: boolean
  inputRef?: RefObject<HTMLInputElement> | undefined
  description?: string
}

export const DatePickerWrapper: React.FunctionComponent<DatePickerProps> = ({
  id,
  inputRef,
  description,
  selectedDate,
  onDayChange,
  labelText,
  isDisabled = false,
  ...inputProps
}) => {
  const getNavbar = ({ ...navbarProps }: CalendarNavProps) => (
    <CalendarNav {...navbarProps} />
  )

  const [isOpen, setIsOpen] = useState(false)
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
    placement: "bottom-start",
  })

  useEffect(() => {
    if (!isOpen) return undefined

    const callback = (e: Event) => {
      const elem = wrapperRef.current
      if (!elem) return

      const didClickOnPopover =
        elem === e.target || elem.contains(e.target as Node)
      const didClickOnReferenceElement =
        referenceElement &&
        (referenceElement === e.target ||
          referenceElement.contains(e.target as Node))
      if (!didClickOnPopover && !didClickOnReferenceElement) {
        setIsOpen(false)
      }
    }
    document.addEventListener("click", callback, false)

    return () => {
      document.removeEventListener("click", callback, false)
    }
  }, [isOpen, referenceElement])

  const handleKeyDown = e => {
    switch (e.keyCode) {
      case 27:
        setIsOpen(false)
        break
    }
  }

  return (
    <div ref={wrapperRef}>
      <div ref={setReferenceElement}>
        <TextField
          id={id}
          labelText={labelText}
          icon={dateStart}
          inputValue={
            selectedDate ? selectedDate.toLocaleDateString() : undefined
          }
          disabled={isDisabled}
          inputRef={inputRef}
          description={description}
          onFocus={() => setIsOpen(true)}
          {...inputProps}
          onKeyDown={e => handleKeyDown(e)}
          readOnly
        />
      </div>
      {isOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <DayPicker
            selectedDays={selectedDate}
            // TODO create disabledDays prop, this is to display disabled styling
            disabledDays={{
              daysOfWeek: [6],
            }}
            onDayClick={onDayChange}
            navbarElement={getNavbar}
            classNames={defaultDatePickerClasses}
            className={customStyles.calendar}
            onKeyDown={e => handleKeyDown(e)}
          />
        </div>
      )}
    </div>
  )
}
