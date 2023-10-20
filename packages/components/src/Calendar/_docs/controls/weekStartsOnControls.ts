import { DayOfWeek } from "~components/Calendar"

export const weekStartsOnControls = {
  weekStartsOn: {
    options: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    control: {
      type: "radio",
      labels: {
        Sun: "DayOfWeek.Sun",
        Mon: "DayOfWeek.Mon",
        Tue: "DayOfWeek.Tue",
        Wed: "DayOfWeek.Wed",
        Thu: "DayOfWeek.Thu",
        Fri: "DayOfWeek.Fri",
        Sat: "DayOfWeek.Sat",
      },
    },
    mapping: {
      Sun: DayOfWeek.Sun,
      Mon: DayOfWeek.Mon,
      Tue: DayOfWeek.Tue,
      Wed: DayOfWeek.Wed,
      Thu: DayOfWeek.Thu,
      Fri: DayOfWeek.Fri,
      Sat: DayOfWeek.Sat,
    },
  },
}
