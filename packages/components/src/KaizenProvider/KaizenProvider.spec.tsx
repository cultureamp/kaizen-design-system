import React from "react"
import { render } from "@testing-library/react"
import { KaizenProvider, KaizenProviderProps } from "./KaizenProvider"

const KaizenProviderWrapper = (props?: KaizenProviderProps): JSX.Element => (
  <KaizenProvider>{props?.children}</KaizenProvider>
)

describe("<KaizenProvider />", () => {
  it("renders it's children", () => {
    const ReactApp = (): JSX.Element => <div>Hello App</div>

    render(
      <KaizenProviderWrapper>
        <ReactApp />
      </KaizenProviderWrapper>
    )
  })
})
