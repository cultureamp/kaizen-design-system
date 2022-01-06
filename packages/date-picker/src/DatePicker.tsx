import React, { useEffect, useRef } from "react"
import { defineCustomElements } from "@duetds/date-picker/dist/loader"
import { DuetDateAdapter } from "@duetds/date-picker/dist/types/components/duet-date-picker/date-adapter"
import styles from "./DatePicker.scss"

defineCustomElements(window)

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "duet-date-picker": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

export type DatePickerProps = {
  onBlur: CustomEvent<{ component: "duet-date-picker" }>
  onChange: CustomEvent<{
    component: "duet-date-picker"
    valueAsDate: Date
    value: string
  }>
  onFocus: CustomEvent<{ component: "duet-date-picker" }>
  onOpen: CustomEvent<{ component: "duet-date-picker" }>
  onClose: CustomEvent<{ component: "duet-date-picker" }>
  dateAdapter: DuetDateAdapter

  // TODO: type this
  localization: Record<string, unknown>
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
}: DatePickerProps) => {
  function useListener(ref, eventName, handler) {
    useEffect(() => {
      if (ref.current) {
        const element = ref.current
        element.addEventListener(eventName, handler)
        return () => element.removeEventListener(eventName, handler)
      }
    }, [eventName, handler, ref])
  }

  const ref = useRef(null)

  useListener(ref, "duetChange", onChange)
  useListener(ref, "duetFocus", onFocus)
  useListener(ref, "duetBlur", onBlur)
  useListener(ref, "duetOpen", onOpen)
  useListener(ref, "duetClose", onClose)

  useEffect(() => {
    if (ref.current) {
      ref.current.localization = localization
      ref.current.dateAdapter = dateAdapter
    }
  }, [localization, dateAdapter])

  return <duet-date-picker ref={ref} {...props}></duet-date-picker>
}

export const DatePicker = () => (
  <div className={styles.wrapper}>
    <DatePickerWrapper
      value="2020-08-24"
      onChange={e => console.log(e.detail)}
    />
  </div>
)
