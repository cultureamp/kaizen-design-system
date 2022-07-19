import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TriggerButtonBase } from "../../components/TriggerButton/TriggerButtonBase"
import { MenuPopup } from "../../components/MenuPopup"
import {
  MenuTriggerProvider,
  MenuTriggerProviderProps,
} from "./MenuTriggerProvider"

const MenuTriggerProviderWrapper = ({
  defaultOpen,
}: Partial<MenuTriggerProviderProps>) => (
  <MenuTriggerProvider defaultOpen={defaultOpen}>
    <TriggerButtonBase label="label-mock">
      trigger-display-label-mock
    </TriggerButtonBase>
    <MenuPopup>
      <span>menu-content-mock</span>
      <button>menu-content-button-mock</button>
    </MenuPopup>
  </MenuTriggerProvider>
)

describe("<MenuTriggerProvider /> - Visual content", () => {
  it("shows the trigger initially", () => {
    render(<MenuTriggerProviderWrapper />)
    const trigger = screen.getByRole("button", {
      name: "trigger-display-label-mock",
    })
    expect(trigger).toBeVisible()
  })

  it("does not show the menu initially", () => {
    render(<MenuTriggerProviderWrapper />)
    const menu = screen.queryByText("menu-content-mock")
    expect(menu).not.toBeInTheDocument()
  })

  it("shows the menu when defaultOpen is set to true", () => {
    render(<MenuTriggerProviderWrapper defaultOpen />)
    const menu = screen.queryByText("menu-content-mock")
    expect(menu).toBeVisible()
  })

  it("makes sure the menu to be labelled by trigger", () => {
    render(<MenuTriggerProviderWrapper defaultOpen />)
    const menu = screen.getByLabelText("trigger-display-label-mock")

    expect(menu).toHaveTextContent("menu-content-mock")
  })
})

describe("<MenuTriggerProvider /> - Mouse interaction", () => {
  describe("Given the menu is closed", () => {
    it("is opened when user clicks on the trigger", () => {
      render(<MenuTriggerProviderWrapper />)
      const trigger = screen.getByRole("button", {
        name: "trigger-display-label-mock",
      })
      userEvent.click(trigger)

      waitFor(() => {
        const menu = screen.queryByText("menu-content-mock")
        expect(menu).toBeVisible()
      })
    })
  })

  describe("Given the menu is opened", () => {
    it("is closed when user clicks on the trigger", () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      const trigger = screen.getByRole("button", {
        name: "trigger-display-label-mock",
      })
      userEvent.click(trigger)

      waitFor(() => {
        const menu = screen.queryByText("menu-content-mock")
        expect(menu).not.toBeVisible()
      })
    })

    it("is closed when user clicks outside of the menu", () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      userEvent.click(document.body)

      waitFor(() => {
        const menu = screen.queryByText("menu-content-mock")
        expect(menu).not.toBeVisible()
      })
    })

    it("remains open when user clicks inside of the menu", () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      const buttonInsideMenu = screen.getByRole("button", {
        name: "menu-content-button-mock",
      })
      userEvent.click(buttonInsideMenu)

      waitFor(() => {
        const menu = screen.queryByText("menu-content-mock")
        expect(menu).toBeVisible()
      })
    })
  })
})

describe("<MenuTriggerProvider /> - Keyboard interaction", () => {
  describe("Given the menu is closed", () => {
    it("allows you to tab to the trigger", () => {
      render(<MenuTriggerProviderWrapper />)
      const trigger = screen.getByRole("button", {
        name: "trigger-display-label-mock",
      })
      userEvent.tab()

      waitFor(() => {
        expect(trigger).toHaveFocus()
      })
    })

    it("opens the menu when hits enter key", () => {
      render(<MenuTriggerProviderWrapper />)
      const trigger = screen.getByRole("button", {
        name: "trigger-display-label-mock",
      })
      userEvent.tab()

      waitFor(() => {
        expect(trigger).toHaveFocus()
      })

      userEvent.keyboard("{Enter}")

      waitFor(() => {
        const menu = screen.queryByText("menu-content-mock")
        expect(menu).toBeVisible()
      })
    })
  })

  describe("Given the menu is opened", () => {
    // TBD
    it("moves the focus to the first focusable element inside the menu initially", () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      const menu = screen.queryByText("menu-content-mock")
      expect(menu).toBeVisible()

      waitFor(() => {
        expect(
          screen.queryByRole("button", { name: "menu-content-button-mock" })
        ).toHaveFocus()
      })
    })

    it("is closed when hits the escape key", () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)

      waitFor(() => {
        expect(
          screen.queryByRole("button", { name: "menu-content-button-mock" })
        ).toHaveFocus()
      })

      userEvent.keyboard("{Escape}")

      waitFor(() => {
        const menu = screen.queryByText("menu-content-mock")
        expect(menu).not.toBeVisible()
      })
    })

    it("is closed when the focus is moved outside of the menu", () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)

      waitFor(() => {
        expect(
          screen.queryByRole("button", { name: "menu-content-button-mock" })
        ).toHaveFocus()
      })

      userEvent.click(document.body)

      waitFor(() => {
        const menu = screen.queryByText("menu-content-mock")
        expect(menu).not.toBeVisible()
      })
    })
  })
})
