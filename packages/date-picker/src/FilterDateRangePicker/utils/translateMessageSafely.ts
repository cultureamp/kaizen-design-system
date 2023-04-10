import { useIntl } from "react-intl"

export const translateMessageSafely = (id: string, defaultMessage: string) => {
  let message: string

  try {
    const intl = useIntl()
    message = intl.formatMessage({
      id,
      defaultMessage,
    })
  } catch {
    message = defaultMessage
  }
  return message
}

// TODO:
// - Implement this in FilterDRP for "Date from" and "Date to" DateInputs
// - Create En translation source file and pass in as "id". Eg. FilterDRP.fromLabel
