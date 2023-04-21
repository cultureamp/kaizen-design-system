import { action } from "@storybook/addon-actions"

export const validationControls = {
  onValidate: {
    options: ["dateStart", "dateEnd", "dateRange"],
    control: {
      type: "select",
      labels: {
        dateStart: '{ dateStart: action("validate start date") }',
        dateEnd: '{ dateEnd: action("validate end date") }',
        dateRange:
          '{ dateStart: action("validate start date"), dateEnd: action("validate end date") }',
      },
    },
    mapping: {
      dateStart: { dateStart: action("validate start date") },
      dateEnd: { dateEnd: action("validate end date") },
      dateRange: {
        dateStart: action("validate start date"),
        dateEnd: action("validate end date"),
      },
    },
  },
  validationMessage: {
    options: [
      "dateStartError",
      "dateEndError",
      "dateRangeError",
      "dateRangeCautionError",
    ],
    control: {
      type: "select",
      labels: {
        dateStartError:
          '{ dateStart: { status: "error", message: \'"Date from" cannot be after the "Date to" selection.\' } }',
        dateEndError:
          '{ dateEnd: { status: "error", message: \'"Date to" cannot be earlier than the "Date from" selection.\' } }',
        dateRangeError:
          '{ dateStart: { status: "error", message: \'"Date from" cannot be after the "Date to" selection.\' }, dateEnd: { status: "error", message: \'"Date to" cannot be earlier than the "Date from" selection.\' } }',
        dateRangeCautionError:
          '{ dateStart: { status: "caution", message: \'"Date from" is close to the submission date.\' }, dateEnd: { status: "error", message: \'"Date to" cannot be earlier than the "Date from" selection.\' } }',
      },
    },
    mapping: {
      dateStartError: {
        dateStart: {
          status: "error",
          message: '"Date from" cannot be after the "Date to" selection.',
        },
      },
      dateEndError: {
        dateEnd: {
          status: "error",
          message:
            '"Date to" cannot be earlier than the "Date from" selection.',
        },
      },
      dateRangeError: {
        dateStart: {
          status: "error",
          message: '"Date from" cannot be after the "Date to" selection.',
        },
        dateEnd: {
          status: "error",
          message:
            '"Date to" cannot be earlier than the "Date from" selection.',
        },
      },
      dateRangeCautionError: {
        dateStart: {
          status: "caution",
          message: '"Date from" is close to the submission date.',
        },
        dateEnd: {
          status: "error",
          message:
            '"Date to" cannot be earlier than the "Date from" selection.',
        },
      },
    },
  },
}
