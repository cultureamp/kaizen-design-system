import { MessageDescriptor } from "@cultureamp/i18n-react-intl"
import { vi } from "vitest"

const replaceInputValue = (str: string, value: string): string =>
  str.replace("{inputValue}", value)

export const reactIntlMock = (): any => {
  const mocks = vi.hoisted(() => ({
    useIntl: vi.fn(),
    FormattedMessage: vi.fn(),
  }))

  vi.mock("@cultureamp/i18n-react-intl", () => ({
    useIntl: () => ({
      formatMessage: (message: MessageDescriptor) => message.defaultMessage,
    }),
    FormattedMessage: (message: MessageDescriptor & { values: any }) =>
      message.values
        ? replaceInputValue(
            message.defaultMessage as string,
            message.values.inputValue
          )
        : message.defaultMessage,
  }))

  return mocks
}
