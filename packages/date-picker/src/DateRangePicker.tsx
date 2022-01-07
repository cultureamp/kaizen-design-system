import React, { useState } from "react"
import ArrowKeysReact from "arrow-keys-react"
import Dayzed, { useDayzed } from "dayzed"
import styled from "@emotion/styled"
import { monthNamesFull, weekdayNamesShort } from "./calendarUtils"

const Calendar = styled.div({
  maxWidth: 800,
  margin: "0 auto",
  textAlign: "center",
})

const Month = styled.div({
  display: "inline-block",
  width: "50%",
  padding: "0 10px 30px",
  boxSizing: "border-box",
})

const dayOfMonthStyle = {
  display: "inline-block",
  width: "calc((100% / 7) - 4px)", // make allowance for active border
  border: "none",
  margin: "2px", // make allowance for active border
}

const DayOfMonth = styled.button(
  dayOfMonthStyle,
  ({ selected, unavailable, today, isInRange }) => {
    let background = today ? "cornflowerblue" : ""
    background = selected || isInRange ? "purple" : background
    background = unavailable ? "teal" : background
    return { background }
  }
)

const DayOfMonthEmpty = styled.div(dayOfMonthStyle, {
  background: "transparent",
})

type RangeDatePickerProps = {
  selected: any
  onDateSelected: any
  monthsToDisplay: any
}

const DateRangePickerWrapper = (props: RangeDatePickerProps) => {
  const [hoveredDate, setHoveredDate] = useState(null)

  ArrowKeysReact.config({
    left: () => {
      getKeyOffset(-1)
    },
    right: () => {
      getKeyOffset(1)
    },
    up: () => {
      getKeyOffset(-7)
    },
    down: () => {
      getKeyOffset(7)
    },
  })

  function getKeyOffset(number) {
    const e = document.activeElement
    const buttons = document.querySelectorAll("button")
    buttons.forEach((el, i) => {
      const newNodeKey = i + number
      if (el == e) {
        if (newNodeKey <= buttons.length - 1 && newNodeKey >= 0) {
          buttons[newNodeKey].focus()
        } else {
          buttons[0].focus()
        }
      }
    })
  }

  // Calendar level
  function onMouseLeave() {
    setHoveredDate(null)
  }

  // Date level
  function onMouseEnter(date) {
    if (!props.selected.length) {
      return
    }
    setHoveredDate(date)
  }

  function isInRange(date) {
    if (props.selected.length) {
      const firstSelected = props.selected[0].getTime()
      if (props.selected.length === 2) {
        const secondSelected = props.selected[1].getTime()
        return firstSelected < date && secondSelected > date
      } else {
        return (
          hoveredDate &&
          ((firstSelected < date && hoveredDate >= date) ||
            (date < firstSelected && date >= hoveredDate))
        )
      }
    }
    return false
  }

  return (
    <Dayzed
      date={props.date}
      onDateSelected={props.onDateSelected}
      minDate={props.minDate}
      maxDate={props.maxDate}
      selected={props.selected}
      monthsToDisplay={props.monthsToDisplay}
    >
      {({ calendars, getDateProps, getBackProps, getForwardProps }) => {
        if (calendars.length) {
          return (
            <Calendar {...ArrowKeysReact.events} onMouseLeave={onMouseLeave}>
              <div>
                <button
                  {...getBackProps({
                    calendars,
                    offset: 12,
                  })}
                >
                  {"<<"}
                </button>
                <button {...getBackProps({ calendars })}>Back</button>
                <button {...getForwardProps({ calendars })}>Next</button>
                <button
                  {...getForwardProps({
                    calendars,
                    offset: 12,
                  })}
                >
                  {">>"}
                </button>
              </div>
              {calendars.map(calendar => (
                <Month key={`${calendar.month}${calendar.year}`}>
                  <div>
                    {monthNamesFull[calendar.month]} {calendar.year}
                  </div>
                  {weekdayNamesShort.map(weekday => (
                    <DayOfMonthEmpty
                      key={`${calendar.month}${calendar.year}${weekday}`}
                    >
                      {weekday}
                    </DayOfMonthEmpty>
                  ))}
                  {calendar.weeks.map((week, windex) =>
                    week.map((dateObj, index) => {
                      const key = `${calendar.month}${calendar.year}${windex}${index}`
                      if (!dateObj) {
                        return <DayOfMonthEmpty key={key} />
                      }
                      const { date, selected, selectable, today } = dateObj
                      return (
                        <DayOfMonth
                          key={key}
                          {...getDateProps({
                            dateObj,
                            onMouseEnter: () => {
                              onMouseEnter(date)
                            },
                          })}
                          selected={selected}
                          unavailable={!selectable}
                          today={today}
                          isInRange={isInRange(date)}
                        >
                          {selectable ? date.getDate() : "X"}
                        </DayOfMonth>
                      )
                    })
                  )}
                </Month>
              ))}
            </Calendar>
          )
        }
        return null
      }}
    </Dayzed>
  )
}

export const DateRangePicker = () => {
  const [selectedDates, setSelectedDates] = useState([])

  function handleOnDateSelected({ selected, selectable, date }) {
    if (!selectable) {
      return
    }
    const dateTime = date.getTime()
    const newDates = [...selectedDates]
    if (selectedDates.length) {
      if (selectedDates.length === 1) {
        const firstTime = selectedDates[0].getTime()
        if (firstTime < dateTime) {
          newDates.push(date)
        } else {
          newDates.unshift(date)
        }
        setSelectedDates(newDates)
      } else if (newDates.length === 2) {
        setSelectedDates([date])
      }
    } else {
      newDates.push(date)
      setSelectedDates(newDates)
    }
  }

  return (
    <div>
      <DateRangePickerWrapper
        selected={selectedDates}
        onDateSelected={handleOnDateSelected}
        monthsToDisplay={2}
      />
      {selectedDates.length === 2 && (
        <div style={{ paddingTop: 20, textAlign: "center" }}>
          <p>Selected:</p>
          <p>{`${selectedDates[0].toLocaleDateString()} - ${selectedDates[1].toLocaleDateString()}`}</p>
        </div>
      )}
    </div>
  )
}
