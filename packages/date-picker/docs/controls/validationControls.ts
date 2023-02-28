export const validationControls = {
  status: { control: "disabled" },
  validationMessage: { control: "disabled" },
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
        dateStartError:
          "{ status: { dateStart: 'error' }, validationMessage: { dateStart: 'Error message' } }",
        dateEndError:
          "{ status: { dateEnd: 'error' }, validationMessage: { dateEnd: 'Error message' } }",
        dateRangeError:
          "{ status: { dateStart: 'error, dateEnd: 'error' }, validationMessage: { dateStart: 'Error message', dateEnd: 'Error message' } }",
        dateRangeCautionError:
          "{ status: { dateStart: 'caution, dateEnd: 'error' }, validationMessage: { dateStart: 'Caution message', dateEnd: 'Error message' } }",
      },
    },
    mapping: {
      dateStartError: {
        status: {
          dateStart: "error",
        },
        validationMessage: {
          dateStart: '"Date from" cannot be after the "Date to" selection.',
        },
      },
      dateEndError: {
        status: {
          dateEnd: "error",
        },
        validationMessage: {
          dateEnd: '"Date from" cannot be after the "Date to" selection.',
        },
      },
      dateRangeError: {
        status: {
          dateStart: "error",
          dateEnd: "error",
        },
        validationMessage: {
          dateStart: '"Date from" cannot be after the "Date to" selection.',
          dateEnd: '"Date from" cannot be after the "Date to" selection.',
        },
      },
      dateRangeCautionError: {
        status: {
          dateStart: "caution",
          dateEnd: "error",
        },
        validationMessage: {
          dateStart: "Caution Message",
          dateEnd: '"Date from" cannot be after the "Date to" selection.',
        },
      },
    },
  },
}
