import React from "react"
import { render, screen } from "@testing-library/react"
import GenericButton, { CustomButtonProps } from "./GenericButton"

it("renders a custom component when the 'component' prop is provided", () => {
  render(<ExampleComponent />)
  expect(
    screen.getByRole("button", { name: "A custom button" })
  ).toBeInTheDocument()
})

function ExampleComponent() {
  const someRef = React.useRef()

  return (
    <GenericButton
      label="A custom button"
      ref={someRef}
      href="https://cultureamp.design"
      component={CustomComponent}
    />
  )
}

function CustomComponent(props: CustomButtonProps) {
  return <button ref={props.forwardRef}>{props.children}</button>
}
