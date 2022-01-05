import React, { useEffect, useRef } from "react"
import { defineCustomElements } from "@duetds/date-picker/dist/loader"

defineCustomElements(window)

function useListener(ref, eventName, handler) {
  useEffect(() => {
    if (ref.current) {
      const element = ref.current
      element.addEventListener(eventName, handler)
      return () => element.removeEventListener(eventName, handler)
    }
  }, [eventName, handler, ref])
}

export const DatePickerWrapper = ({
  onChange,
  onFocus,
  onBlur,
  onOpen,
  onClose,
  dateAdapter,
  localization,
  ...props
}) => {
  const ref = useRef(null)

  useListener(ref, "duetChange", onChange)
  useListener(ref, "duetFocus", onFocus)
  useListener(ref, "duetBlur", onBlur)
  useListener(ref, "duetOpen", onOpen)
  useListener(ref, "duetClose", onClose)

  useEffect(() => {
    ref.current.localization = localization
    ref.current.dateAdapter = dateAdapter
  }, [localization, dateAdapter])

  return <duet-date-picker ref={ref} {...props}></duet-date-picker>
}

export const DatePicker = () => (
  <DatePickerWrapper value="2020-08-24" onChange={e => console.log(e.detail)} />
)
