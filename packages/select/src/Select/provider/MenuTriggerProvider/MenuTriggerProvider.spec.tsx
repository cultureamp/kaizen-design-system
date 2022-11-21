import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { singleItems } from "../../../../docs/MockData"
import { FloatingSelectWrapper } from "../../components/FloatingSelectWrapper"
import { TriggerButtonBase } from "../../components/Trigger/TriggerButtonBase"
import {
  MenuTriggerProvider,
  MenuTriggerProviderProps,
} from "./MenuTriggerProvider"

const MenuTriggerProviderWrapper = (
  props: Partial<MenuTriggerProviderProps>
) => (
  <MenuTriggerProvider {...props} items={singleItems}>
    <TriggerButtonBase>trigger-display-label-mock</TriggerButtonBase>
    <FloatingSelectWrapper>
      <span>menu-content-mock</span>
      <button>menu-content-button-mock</button>
    </FloatingSelectWrapper>
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

  it("makes sure the menu to be labelled by trigger", () => {
    render(<MenuTriggerProviderWrapper defaultOpen />)
    const menu = screen.getByLabelText("trigger-display-label-mock")

    expect(menu).toHaveTextContent("menu-content-mock")
  })

  describe("when uncontrolled", () => {
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
  })
  describe("when controlled", () => {
    it("shows the menu based on the isOpen prop", () => {
      const { rerender } = render(<MenuTriggerProviderWrapper isOpen />)

      const menu = screen.queryByText("menu-content-mock")
      expect(menu).toBeVisible()

      rerender(<MenuTriggerProviderWrapper isOpen={false} />)
      expect(screen.queryByText("menu-content-mock")).not.toBeInTheDocument()
    })

    it("fires the onOpenChange callback when the trigger is interacted", async () => {
      const onOpenChange = jest.fn<void, [boolean]>()
      render(<MenuTriggerProviderWrapper isOpen onOpenChange={onOpenChange} />)

      const trigger = screen.getByRole("button", {
        name: "trigger-display-label-mock",
      })
      userEvent.click(trigger)
      await waitFor(() => {
        expect(onOpenChange).toBeCalledTimes(1)
        expect(onOpenChange).toBeCalledWith(false)
      })
    })
  })
})

describe("<MenuTriggerProvider /> - Mouse interaction", () => {
  describe("Given the menu is closed", () => {
    it("is opened when user clicks on the trigger", async () => {
      render(<MenuTriggerProviderWrapper />)
      const trigger = screen.getByRole("button", {
        name: "trigger-display-label-mock",
      })
      userEvent.click(trigger)
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).toBeVisible()
      })
    })
  })

  describe("Given the menu is opened", () => {
    it("is closed when user clicks on the trigger", async () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      const trigger = screen.getByRole("button", {
        name: "trigger-display-label-mock",
      })
      userEvent.click(trigger)
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).not.toBeInTheDocument()
      })
    })

    it("is closed when user clicks outside of the menu", async () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      userEvent.click(document.body)
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).not.toBeInTheDocument()
      })
    })

    it("remains open when user clicks inside of the menu", async () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      const buttonInsideMenu = screen.getByRole("button", {
        name: "menu-content-button-mock",
      })
      userEvent.click(buttonInsideMenu)
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).toBeVisible()
      })
    })
  })
})

describe("<MenuTriggerProvider /> - Keyboard interaction", () => {
  describe("Given the menu is closed", () => {
    it("allows the user to tab to the trigger", async () => {
      render(<MenuTriggerProviderWrapper />)
      const trigger = screen.getByRole("button", {
        name: "trigger-display-label-mock",
      })
      await userEvent.tab()
      await userEvent.tab()
      await waitFor(() => {
        expect(trigger).toHaveFocus()
      })
    })

    it("opens the menu when hits enter key", async () => {
      render(<MenuTriggerProviderWrapper />)
      const trigger = screen.getByRole("button", {
        name: "trigger-display-label-mock",
      })
      trigger.focus()

      userEvent.keyboard("{Enter}")
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).toBeVisible()
      })
    })
  })

  describe("Given the menu is opened", () => {
    it("moves the focus to the first focusable element inside the menu initially", async () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      expect(screen.queryByText("menu-content-mock")).toBeVisible()
      await waitFor(() => {
        expect(
          screen.queryByRole("button", { name: "menu-content-button-mock" })
        ).toHaveFocus()
      })
    })

    it("is closed when hits the escape key", async () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      await waitFor(() => {
        expect(
          screen.queryByRole("button", { name: "menu-content-button-mock" })
        ).toHaveFocus()
      })

      userEvent.keyboard("{Escape}")
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).not.toBeInTheDocument()
      })
    })

    it("is closed when the focus is moved outside of the menu", async () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      await waitFor(() => {
        expect(
          screen.queryByRole("button", { name: "menu-content-button-mock" })
        ).toHaveFocus()
      })

      userEvent.click(document.body)
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).not.toBeInTheDocument()
      })
    })
  })
})
