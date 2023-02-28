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
          "{ status: { dateStart: 'error' }, validationMessage: { dateStart: '\"Date from\" cannot be after the \"Date to\" selection.' } }",
        dateEndError:
          "{ status: { dateEnd: 'error' }, validationMessage: { dateEnd: '\"Date to\" cannot be earlier than the \"Date from\" selection.' } }",
        dateRangeError:
          '{ status: { dateStart: \'error, dateEnd: \'error\' }, validationMessage: { dateStart: \'"Date from" cannot be after the "Date to" selection.\', dateEnd: \'"Date to" cannot be earlier than the "Date from" selection.\' } }',
        dateRangeCautionError:
          "{ status: { dateStart: 'caution, dateEnd: 'error' }, validationMessage: { dateStart: '\"Date from\" is close to the submission date.', dateEnd: '\"Date to\" cannot be earlier than the \"Date from\" selection.' } }",
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
          dateEnd:
            '"Date to" cannot be earlier than the "Date from" selection.',
        },
      },
      dateRangeError: {
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
