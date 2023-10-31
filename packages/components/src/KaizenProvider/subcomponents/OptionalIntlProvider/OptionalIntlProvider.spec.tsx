import React from "react"
import { render, screen } from "@testing-library/react"
import { IntlProvider } from "react-intl"
import { OptionalIntlProvider } from "."

jest.mock("@cultureamp/i18n-react-intl", () => ({
  StaticIntlProvider: ({ children }: { children: React.ReactElement }) => (
    <div data-testid="mockedIntlProvider">{children}</div>
  ),
}))

describe("<OptionalIntlProvider>", () => {
  it("wraps the children in a StaticIntlProvider when no other react-intl provider is present", async () => {
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
  it("does not wrap the children in a StaticIntlProvider when a react-intl provider is present", async () => {
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
