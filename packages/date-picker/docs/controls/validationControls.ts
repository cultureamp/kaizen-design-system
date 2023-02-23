export const validationControls = {
  status: {
    options: [
      "dateStartError",
      "dateStartCaution",
      "dateEndError",
      "dateEndCaution",
      "dateRangeError",
      "dateRangeCaution",
      "dateRangeCautionError",
    ],
    control: {
      type: "select",
      labels: {
        dateStartError: "dateStart has status error",
        dateStartCaution: "dateStart has status caution",
        dateEndError: "dateEnd has status error",
        dateEndCaution: "dateEnd has status caution",
        dateRangeError: "dateStart and dateEnd have status error",
        dateRangeCaution: "dateStart and dateEnd have status caution",
        dateRangeCautionError:
          "dateStart has status caution and dateEnd has status error",
      },
    },
    mapping: {
      dateStartError: {
        dateStart: "error",
      },
      dateStartCaution: {
        dateStart: "caution",
      },
      dateEndError: {
        dateEnd: "error",
      },
      dateEndCaution: {
        dateEnd: "caution",
      },
      dateRangeError: {
        dateEnd: "error",
        dateStart: "error",
      },
      dateRangeCaution: {
        dateEnd: "caution",
        dateStart: "caution",
      },
      dateRangeCautionError: {
        dateEnd: "error",
        dateStart: "caution",
      },
    },
  },
  validationMessage: {
    options: ["dateStart", "dateEnd", "dateStartDateEnd"],
    control: {
      type: "select",
      labels: {
        dateStart: "dateStart has validation message",
        dateEnd: "dateEnd has validation message",
        dateStartDateEnd: "dateStart and dateEnd have validation messages",
      },
    },
    mapping: {
      dateStart: {
        dateStart: '"Date from" cannot be after the "Date to" selection.',
      },
      dateEnd: {
        dateStart:
          '"Date to" cannot be earlier than the "Date from" selection.',
      },
      dateStartDateEnd: {
        dateStart: '"Date from" is not a valid date selection.',
        dateEnd: '"Date to" cannot be earlier than the "Date from" selection.',
      },
    },
  },
}
