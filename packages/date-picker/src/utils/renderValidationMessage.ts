import { InputStatus } from "@kaizen/draft-form/KaizenDraft/Form"
import { validationMessagesProps } from "../DatePicker/components/DateInput"

export const renderValidationMessage = (
  status: InputStatus,
  messages: validationMessagesProps
): string | React.ReactNode => {
  switch (status) {
    case "success":
      return messages.success
    case "caution":
      return messages.caution
    case "error":
      return messages.error
    default:
      return
  }
}
