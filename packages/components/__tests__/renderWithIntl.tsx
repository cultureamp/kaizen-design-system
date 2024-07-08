import React from "react"
import { StaticIntlProvider } from "@cultureamp/i18n-react-intl"
import { render } from "@testing-library/react"

/**
 * i18n is async, so ensure your test is `async` and you `await waitFor` your result
 */
export const renderWithIntl = (
  children: React.ReactNode
): ReturnType<typeof render> =>
  render(<StaticIntlProvider locale="en">{children}</StaticIntlProvider>)
