import { DayOfWeek } from "~components/Calendar"

export const disabledDayMatchersControls = {
  disabledDates: {
    options: ["None", "Today", "May2022"],
    control: {
      type: "select",
      labels: {
        None: "undefined",
        Today: "[new Date()]",
        May2022: '[new Date("2022-05-01"), new Date("2022-05-22")]',
      },
    },
    mapping: {
      None: undefined,
      Today: [new Date()],
      May2022: [new Date("2022-05-01"), new Date("2022-05-22")],
    },
  },
  disabledRange: {
    options: ["None", "May2022"],
    control: {
      type: "select",
      labels: {
        None: "undefined",
        May2022: '{ from: new Date("2022-05-01"), to: new Date("2022-05-12") }',
      },
    },
    mapping: {
      None: undefined,
      May2022: { from: new Date("2022-05-01"), to: new Date("2022-05-12") },
    },
  },
  disabledBeforeAfter: {
    options: ["None", "May2022"],
    control: {
      type: "select",
      labels: {
        None: "undefined",
        May2022:
          '{ before: new Date("2022-05-30"), after: new Date("2022-05-15") }',
      },
    },
    mapping: {
      None: undefined,
      May2022: {
        before: new Date("2022-05-30"),
        after: new Date("2022-05-15"),
      },
    },
  },
  disabledBefore: {
    options: ["None", "May2022"],
    control: {
      type: "select",
      labels: {
        None: "undefined",
        May2022: 'new Date("2022-05-16")',
      },
    },
    mapping: {
      None: undefined,
      May2022: new Date("2022-05-16"),
    },
  },
  disabledAfter: {
    options: ["None", "May2022"],
    control: {
      type: "select",
      labels: {
        None: "undefined",
        May2022: 'new Date("2022-05-21")',
      },
    },
    mapping: {
      None: undefined,
      May2022: new Date("2022-05-21"),
    },
  },
  disabledDaysOfWeek: {
    options: ["None", "Fridays", "Weekends"],
    control: {
      type: "select",
      labels: {
        None: "undefined",
        Fridays: "[DayOfWeek.Fri]",
        Weekends: "[DayOfWeek.Sat, DayOfWeek.Sun]",
      },
    },
    mapping: {
      None: undefined,
      Fridays: [DayOfWeek.Fri],
      Weekends: [DayOfWeek.Sat, DayOfWeek.Sun],
    },
  },
}
