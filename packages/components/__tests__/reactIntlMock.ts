import { type ReactNode } from 'react'
import { type MessageDescriptor } from '@cultureamp/i18n-react-intl'
import { vi } from 'vitest'

const replaceInputValue = (str: string, values: string[]): string => {
  const regex = /{([^}]+)}/g
  return str.replace(regex, (match, capturedValue) => {
    if (capturedValue) {
      return values[capturedValue]
    }
    // Handle other captured values here if needed
    return match
  })
}

const replaceTagsWithValues = (str: string, values: Record<string, unknown>): ReactNode => {
  const parts = str.split(/<([^<]+)>([\S\s]*)<\/(\1)>/)
  if (parts.length > 1) {
    const result = []
    for (let i = 0; i < parts.length; i++) {
      const value = values[parts[i]]
      const content = replaceTagsWithValues(parts[i + 1], values)

      if (typeof value === 'function') {
        result.push(value(content))
        i = i + 3
      }
      result.push(parts[i])
    }
    return result
  }
  return str
}

// Note: This mock does not exist to enable testing of internationalisation,
// but to silence the errors from components that requires `useIntl`
// and `FormattedMessage` from `@cultureamp/i18n-react-intl`
//
// If you need to test internationalisation, you should use Storybook stories
export const reactIntlMock = (): any => {
  const mocks = vi.hoisted(() => ({
    useIntl: vi.fn(),
    FormattedMessage: vi.fn(),
  }))

  vi.mock('@cultureamp/i18n-react-intl', () => ({
    StaticIntlProvider: ({ children }: { children: React.ReactNode }) => children,
    useIntl: () => ({
      formatMessage: (message: MessageDescriptor, values: any) =>
        values
          ? replaceTagsWithValues(
              replaceInputValue(message.defaultMessage as string, values) as string,
              values,
            )
          : message.defaultMessage,
      formatNumber: (number: number) => number,
    }),
    FormattedMessage: (message: MessageDescriptor & { values: any }) =>
      message.values
        ? replaceTagsWithValues(
            replaceInputValue(message.defaultMessage as string, message.values),
            message.values,
          )
        : message.defaultMessage,
  }))

  return mocks
}
