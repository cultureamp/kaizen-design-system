import React from "react"
import { render, screen } from "@testing-library/react"
import { fireEvent } from "@storybook/testing-library"
import NavigationTab, { NavigationTabProps } from "./NavigationTabs"

/**
 *   text: string
  href: string
  active?: boolean
  handleClick?: (event: React.MouseEvent) => void
  variant?: Variant
  id?: string
  automationId?: string
  component?: (props: Omit<NavigationTabProps, "component">) => JSX.Element
 */

const CustomComponent = (props: Omit<NavigationTabProps, "component">) => (
  <button
    onClick={props.handleClick}
  >{`${props.href} - ${props.text} - ${props.active}`}</button>
)

describe("NavigationTabs", () => {
  it("renders a link", () => {
    const text = "I am navigation tabs"
    const href = "www.cultureamp.com"
    render(<NavigationTab text={text} href={href} />)

    expect(
      screen.getByRole("link", {
        name: text,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", {
        name: text,
      })
    ).toHaveAttribute("href", href)
  })
  describe("with a component prop", () => {
    it("renders the component passed with the navigation tab props", () => {
      const handleClick = jest.fn()
      const text = "I am also navigation tabs"
      const href = "www.cultureamp.com"
      render(
        <NavigationTab
          text={text}
          href={href}
          handleClick={handleClick}
          active
          component={CustomComponent}
        />
      )

      const button = screen.getByRole("button", {
        name: `${href} - ${text} - true`,
      })
      fireEvent.click(button)
      expect(handleClick).toBeCalledTimes(1)
    })
  })
})
