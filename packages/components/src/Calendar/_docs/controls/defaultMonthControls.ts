export const defaultMonthControls = {
  defaultMonth: {
    options: ["Default", "May2022"],
    control: {
      type: "select",
      labels: {
        Default: "Default (undefined)",
        May2022: "May 2022",
      },
    },
    mapping: {
      Default: undefined,
      May2022: new Date("2022-05-01"),
    },
  },
}
