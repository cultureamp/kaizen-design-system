// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from "@storybook/addon-actions"

export const validationControls = {
  status: { control: "disabled" },
  validationMessage: { control: "disabled" },
  onValidate: { control: "disabled" },
  validation: {
    options: [
      "dateStartError",
      "dateEndError",
      "dateRangeError",
      "dateRangeCautionError",
    ],
    control: {
      type: "select",
      labels: {
        dateStartError: `
          onValidate: {
            dateStart: action("validate start date")
          },
          status: {
            dateStart: "error"
          },
          validationMessage: {
            dateStart: '"Date from" cannot be after the "Date to" selection.'
          }`,
        dateEndError: `
          onValidate: {
            dateEnd: action("validate end date")
          },
          status: {
            dateEnd: "error"
          },
          validationMessage: {
            dateEnd: '"Date to" cannot be earlier than the "Date from" selection.'
          }`,
        dateRangeError: `
          onValidate: {
            dateStart: action("validate start date"),
            dateEnd: action("validate end date")
          },
          status: {
            dateStart: "error",
            dateEnd: "error"
          },
          validationMessage: {
            dateStart: '"Date from" cannot be after the "Date to" selection.',
            dateEnd: '"Date to" cannot be earlier than the "Date from" selection.'
          }`,
        dateRangeCautionError: `
          onValidate: {
            dateStart: action("validate start date"),
            dateEnd: action("validate end date")
          },
          status: {
            dateStart: "caution",
            dateEnd: "error"
          },
          validationMessage: {
            dateStart: '"Date from" is close to the submission date.',
            dateEnd: '"Date to" cannot be earlier than the "Date from" selection.'
          }`,
      },
    },
    mapping: {
      dateStartError: {
        onValidate: {
          dateStart: action("validate start date"),
        },
        status: {
          dateStart: "error",
        },
        validationMessage: {
          dateStart: '"Date from" cannot be after the "Date to" selection.',
        },
      },
      dateEndError: {
        onValidate: {
          dateEnd: action("validate end date"),
        },
        status: {
          dateEnd: "error",
        },
        validationMessage: {
          dateEnd:
            '"Date to" cannot be earlier than the "Date from" selection.',
        },
      },
      dateRangeError: {
        onValidate: {
          dateStart: action("validate start date"),
          dateEnd: action("validate end date"),
        },
        status: {
          dateStart: "error",
          dateEnd: "error",
        },
        validationMessage: {
          dateStart: '"Date from" cannot be after the "Date to" selection.',
          dateEnd:
            '"Date to" cannot be earlier than the "Date from" selection.',
        },
      },
      dateRangeCautionError: {
        onValidate: {
          dateStart: action("validate start date"),
          dateEnd: action("validate end date"),
        },
        status: {
          dateStart: "caution",
          dateEnd: "error",
        },
        validationMessage: {
          dateStart: '"Date from" is close to the submission date.',
          dateEnd:
            '"Date to" cannot be earlier than the "Date from" selection.',
        },
      },
    },
  },
}
