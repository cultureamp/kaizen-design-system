export const disabledDaysControls = {
  options: [
    "None",
    "bool",
    "Date",
    "DateMultiple",
    "Range",
    "DateBefore",
    "DateAfter",
    "DateInterval",
    "DayOfWeek",
  ],
  control: {
    type: "select",
    labels: {
      None: "undefined",
      bool: "true",
      Date: "new Date()",
      DateMultiple: '[new Date("2022-05-01"), new Date("2022-05-22")]',
      Range: '{ from: new Date("2022-05-01"), to: new Date("2022-05-12") }',
      DateBefore: '{ before: new Date("2022-05-16") }',
      DateAfter: '{ after: new Date("2022-05-21") }',
      DateInterval:
        '{ before: new Date("2022-05-30"), after: new Date("2022-05-15") }',
      DayOfWeek: "{ dayOfWeek: [6, 0] } (Saturday and Sunday)",
    },
  },
  mapping: {
    None: undefined,
    bool: true,
    Date: new Date(),
    DateMultiple: [new Date("2022-05-01"), new Date("2022-05-22")],
    Range: { from: new Date("2022-05-01"), to: new Date("2022-05-12") },
    DateBefore: { before: new Date("2022-05-16") },
    DateAfter: { after: new Date("2022-05-21") },
    DateInterval: {
      before: new Date("2022-05-30"),
      after: new Date("2022-05-15"),
    },
    DayOfWeek: { dayOfWeek: [6, 0] },
  },
}
