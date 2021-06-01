import { cleanup, render, screen, waitFor } from "@testing-library/react"
import * as React from "react"
import { AnimatedBase } from "./AnimatedBase"

afterEach(cleanup)

describe("<AnimatedBase />", () => {
  it("should render a fallback loading indicator", () => {
    render(<AnimatedBase name="" alt="" isAnimated/>)
    const loadingSvg = screen.getByTestId("loading")

    expect(loadingSvg).toMatchSnapshot()
    expect(loadingSvg).toBeTruthy()
  })

  // it("loads animation data into external lottie-plater", async () => {
  //   render(<AnimatedBase name="" alt="" isAnimated/>)
  //   await waitFor(() => screen.getByTestId("lottie-player"))
  // })
})
