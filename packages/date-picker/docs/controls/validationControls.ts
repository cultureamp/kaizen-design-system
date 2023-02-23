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
        dateStartError: '{ dateStart: "error" }',
        dateStartCaution: '{ dateStart: "caution" }',
        dateEndError: '{ dateEnd: "error" }',
        dateEndCaution: '{ dateEnd: "caution" }',
        dateRangeError: '{ dateStart: "error", dateEnd: "error" }',
        dateRangeCaution: '{ dateStart: "caution", dateEnd: "caution" }',
        dateRangeCautionError: '{ dateStart: "caution", dateEnd: "error" }',
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
    table: {
      type: {
        summary: "DateRangeValidationStatus",
        detail: `{
          dateStart?: undefined;
          dateEnd?: undefined;
      } | {
          dateStart: FieldMessageStatus;
          dateEnd?: undefined;
      } | {
          dateStart?: undefined;
          dateEnd: FieldMessageStatus;
      } | {
          dateStart: FieldMessageStatus;
          dateEnd: FieldMessageStatus;
      } | undefined`,
      },
    },
  },
  validationMessage: {
    options: ["dateStart", "dateEnd", "dateStartDateEnd"],
    control: {
      type: "select",
      labels: {
        dateStart:
          '{ dateStart: "Date from cannot be after the Date to selection." }',
        dateEnd:
          '{ dateEnd: "Date to cannot be earlier than the Date from selection." }',
        dateStartDateEnd:
          '{ dateStart: "Date from is not valid", dateEnd: "Date to cannot be earlier than the Date from selection" }',
      },
    },
    mapping: {
      dateStart: {
        dateStart: '"Date from" cannot be after the "Date to" selection.',
      },
      dateEnd: {
        dateEnd: '"Date to" cannot be earlier than the "Date from" selection.',
      },
      dateStartDateEnd: {
        dateStart: '"Date from" is not valid.',
        dateEnd: '"Date to" cannot be earlier than the "Date from" selection.',
      },
    },
    table: {
      type: {
        summary: "DateRangeValidationMessage",
        detail: `{
          dateStart?: undefined;
          dateEnd?: undefined;
      } | {
          dateStart: React.ReactNode;
          dateEnd?: undefined;
      } | {
          dateStart?: undefined;
          dateEnd: React.ReactNode;
      } | {
          dateStart: React.ReactNode;
          dateEnd: React.ReactNode;
      } | undefined`,
      },
    },
  },
}
