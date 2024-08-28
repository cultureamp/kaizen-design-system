import { MessageDescriptor } from "@cultureamp/i18n-react-intl"
import { vi } from "vitest"

const replaceInputValue = (str: string, value: string): string => {
  const regex = /{([^}]+)}/g
  return str.replace(regex, (match, capturedValue) => {
    if (capturedValue) {
      return value[capturedValue]
    }
    // Handle other captured values here if needed
    return match
  })
}

export const reactIntlMock = (): any => {
  const mocks = vi.hoisted(() => ({
    useIntl: vi.fn(),
    FormattedMessage: vi.fn(),
  }))

  vi.mock("@cultureamp/i18n-react-intl", () => ({
    useIntl: () => ({
      formatMessage: (message: MessageDescriptor, values: any) =>
        values
          ? replaceInputValue(message.defaultMessage as string, values)
          : message.defaultMessage,
    }),
    FormattedMessage: (message: MessageDescriptor & { values: any }) =>
      message.values
        ? replaceInputValue(message.defaultMessage as string, message.values)
        : message.defaultMessage,
  }))

  return mocks
}
