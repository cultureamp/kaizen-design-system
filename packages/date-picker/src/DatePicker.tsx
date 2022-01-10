import React, { useState } from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DatePickerWrapper = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  )
}

export const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"))
  const [endDate, setEndDate] = useState(new Date("2014/02/10"))
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  )
}
