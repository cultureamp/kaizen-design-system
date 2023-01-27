import React from "react"
import { render } from "@testing-library/react"
import { KaizenProvider, KaizenProviderProps } from "./KaizenProvider"

const KaizenProviderWrapper = (
  props?: Partial<KaizenProviderProps>
): JSX.Element => <KaizenProvider>{props?.children}</KaizenProvider>

describe("<KaizenProvider />", () => {
  it("does something", () => {
    render(<KaizenProviderWrapper />)
  })
})
