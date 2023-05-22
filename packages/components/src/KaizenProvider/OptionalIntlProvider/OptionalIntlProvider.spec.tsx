import React from "react"
import { render, screen } from "@testing-library/react"
import { OptionalIntlProvider } from "../OptionalIntlProvider"
import { IntlProvider } from "react-intl"

jest.mock("@cultureamp/i18n-react-intl", () => ({
  StaticIntlProvider: ({ children }: { children: React.ReactElement }) => (
    <div data-testid="mockedIntlProvider">{children}</div>
  ),
}))

describe("<OptionalIntlProvider>", () => {
  it("adds an intl provider to the app's context when IntlContext is not present", async () => {
    render(
      <OptionalIntlProvider locale="en">
        <div>children</div>
      </OptionalIntlProvider>
    )
    const result = await screen.findByTestId("mockedIntlProvider")
    expect(result).toBeInTheDocument()
    const childrenResult = await screen.findByText("children")
    expect(childrenResult).toBeInTheDocument()
  })
  it("does not render a new provider", async () => {
    render(
      <IntlProvider locale="en">
        <OptionalIntlProvider locale="en">
          <div>children</div>
        </OptionalIntlProvider>
      </IntlProvider>
    )
    const result = screen.queryByTestId("mockedIntlProvider")
    expect(result).not.toBeInTheDocument()
    const childrenResult = await screen.findByText("children")
    expect(childrenResult).toBeInTheDocument()
  })
})

/* eslint-enable jest/expect-expect */
