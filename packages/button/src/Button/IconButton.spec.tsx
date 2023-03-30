import React from "react"
import { render, screen } from "@testing-library/react"
import { CustomButtonProps, IconButton } from "../.."

describe("<IconButton />", () => {
  it("renders an accessible label when it's a link", () => {
    render(<IconButton href="#" label="Accessible label on the link version" />)

    expect(
      screen.getByLabelText("Accessible label on the link version")
    ).toBeInTheDocument()
  })

  it("renders an accessible label when it's a button", () => {
    render(
      <IconButton
        onClick={(): void => undefined}
        label="Accessible label on the button version"
      />
    )
    expect(
      screen.getByLabelText("Accessible label on the button version")
    ).toBeInTheDocument()
  })

  it("renders an accessible label when it's a custom component", () => {
    const CustomComponent = (buttonProps: CustomButtonProps): JSX.Element => (
      <div {...buttonProps} />
    )

    render(
      <IconButton
        component={CustomComponent}
        label="Accessible label on the custom component version"
      />
    )

    expect(
      screen.getByLabelText("Accessible label on the custom component version")
    ).toBeInTheDocument()
  })
})
