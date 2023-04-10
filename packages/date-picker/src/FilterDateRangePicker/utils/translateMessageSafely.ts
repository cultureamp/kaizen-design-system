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
