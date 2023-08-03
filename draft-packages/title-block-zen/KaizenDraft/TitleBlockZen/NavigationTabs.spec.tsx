import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { NavigationTab, CustomNavigationTabProps } from "./NavigationTabs"

const user = userEvent.setup()

const CustomComponent = (props: CustomNavigationTabProps): JSX.Element => (
  <button
    type="button"
    onClick={props.handleClick}
    className={props.className}
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

  describe("with a render prop", () => {
    it("renders the component passed with the navigation tab props", async () => {
      const handleClick = vi.fn()
      const text = "I am also navigation tabs"
      const href = "www.cultureamp.com"
      render(
        <NavigationTab
          text={text}
          href={href}
          handleClick={handleClick}
          active
          render={CustomComponent}
          variant="education"
        />
      )

      const button = screen.getByRole("button", {
        name: `${href} - ${text} - true`,
      })
      await user.click(button)
      await waitFor(() => {
        expect(handleClick).toBeCalledTimes(1)
      })
    })
  })
})
