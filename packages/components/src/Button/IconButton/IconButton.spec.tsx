import React from "react"
import { render } from "@testing-library/react"
import { CustomButtonProps } from ".."
import { IconButton } from "./IconButton"

describe("<IconButton />", () => {
  it("renders an accessible label when it's a link", () => {
    const { getByLabelText } = render(
      <IconButton href="#" label="Accessible label on the link version" />
    )

    expect(
      getByLabelText("Accessible label on the link version")
    ).toBeInTheDocument()
  })

  it("renders an accessible label when it's a button", () => {
    const { getByLabelText } = render(
      <IconButton
        onClick={(): void => undefined}
        label="Accessible label on the button version"
      />
    )
    expect(
      getByLabelText("Accessible label on the button version")
    ).toBeInTheDocument()
  })

  it("renders an accessible label when it's a custom component", () => {
    const CustomComponent = (buttonProps: CustomButtonProps): JSX.Element => (
      <div {...buttonProps} />
    )

    const { getByLabelText } = render(
      <IconButton
        component={CustomComponent}
        label="Accessible label on the custom component version"
      />
    )

    expect(
      getByLabelText("Accessible label on the custom component version")
    ).toBeInTheDocument()
  })
})
