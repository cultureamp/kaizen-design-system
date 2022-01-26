import React from "react"
import { render, screen } from "@testing-library/react"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import { CustomButtonProps, IconButton } from "../.."

it("renders an accessible label when it's a link", () => {
  render(
    <IconButton
      href="#"
      label="Accessible label on the link version"
      icon={configureIcon}
    />
  )
  screen.getByLabelText("Accessible label on the link version")
})

it("renders an accessible label when it's a button", () => {
  render(
    <IconButton
      onClick={() => null}
      label="Accessible label on the button version"
      icon={configureIcon}
    />
  )
  screen.getByLabelText("Accessible label on the button version")
})

it("renders an accessible label when it's a custom component", () => {
  const CustomComponent = (buttonProps: CustomButtonProps) => (
    <div {...buttonProps} />
  )

  render(
    <IconButton
      component={CustomComponent}
      label="Accessible label on the custom component version"
      icon={configureIcon}
    />
  )
  screen.getByLabelText("Accessible label on the custom component version")
})

describe("type safety for icon button", () => {
  it("generates a typescript error when passing an empty label", () => {
    // @ts-expect-error
    const NoLabel = () => <IconButton label="" icon={configureIcon} />
  })
})
