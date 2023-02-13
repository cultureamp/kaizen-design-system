import React from "react"
import { render } from "@testing-library/react"
import { KaizenProvider, KaizenProviderProps } from "./KaizenProvider"

const KaizenProviderWrapper = ({
  children,
  ...restProps
}: KaizenProviderProps): JSX.Element => (
  <KaizenProvider {...restProps}>{children}</KaizenProvider>
)

describe("<KaizenProvider />", () => {
  it("renders it's children", () => {
    const ReactApp = (): JSX.Element => <div>Hello App</div>
    const screen = render(
      <KaizenProviderWrapper>
        <ReactApp />
      </KaizenProviderWrapper>
    )

    expect(screen.getByText("Hello App"))
  })
})
