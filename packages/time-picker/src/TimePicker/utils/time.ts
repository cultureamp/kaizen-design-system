// import moment from "moment"

export type TIME_OPTION = {
  label: string
  value: string
}

export const getTimeOption = (hours: number, minutes: number) => ({
  //   value: moment({ hours, minutes }).format("HH:mm"),
  //   label: moment({ hours, minutes }).format("LT"),
})

export const getAllTimeOptions = () => [{ value: "", label: "" }]
//   const timeOptions: TIME_OPTION[] = []
//   const hours = [...Array(24).keys()]
//   hours.forEach(h =>
//     [0, 30].forEach(m => timeOptions.push(getTimeOption(h, m)))
//   )
//   return timeOptions
