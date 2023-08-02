import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterTriggerButton } from "~components/FilterMultiSelect/subcomponents/Trigger"
import { MenuPopup } from "../../subcomponents/MenuPopup"
import {
  MenuTriggerProvider,
  MenuTriggerProviderProps,
} from "./MenuTriggerProvider"

const user = userEvent.setup()

const MenuTriggerProviderWrapper = (
  props: Partial<MenuTriggerProviderProps>
): JSX.Element => (
  <MenuTriggerProvider {...props}>
    <FilterTriggerButton
      label="trigger-display-label-mock"
      selectedOptionLabels={[]} // This is irrelevant as we are not testing the button contents
    />
    <MenuPopup>
      <span>menu-content-mock</span>
      <button type="button">menu-content-button-mock</button>
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
      const onOpenChange = jest.fn<[boolean], void>()
      render(<MenuTriggerProviderWrapper isOpen onOpenChange={onOpenChange} />)

      const trigger = screen.getByRole("button", {
        name: "trigger-display-label-mock",
      })
      await user.click(trigger)

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
      await user.click(trigger)
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
      await user.click(trigger)
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).not.toBeInTheDocument()
      })
    })

    it("is closed when user clicks outside of the menu", async () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      await user.click(document.body)
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).not.toBeInTheDocument()
      })
    })

    it("remains open when user clicks inside of the menu", async () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      const buttonInsideMenu = screen.getByRole("button", {
        name: "menu-content-button-mock",
      })
      await user.click(buttonInsideMenu)
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
      await user.tab()
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

      await user.keyboard("{Enter}")
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).toBeVisible()
      })
    })
  })

  describe("Given the menu is opened", () => {
    // TBD
    it("moves the focus to the first focusable element inside the menu initially", () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)
      expect(screen.queryByText("menu-content-mock")).toBeVisible()

      expect(
        screen.queryByRole("button", { name: "menu-content-button-mock" })
      ).toHaveFocus()
    })

    it("is closed when hits the escape key", async () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)

      expect(
        screen.queryByRole("button", { name: "menu-content-button-mock" })
      ).toHaveFocus()

      await user.keyboard("{Escape}")
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).not.toBeInTheDocument()
      })
    })

    it("is closed when the focus is moved outside of the menu", async () => {
      render(<MenuTriggerProviderWrapper defaultOpen />)

      expect(
        screen.queryByRole("button", { name: "menu-content-button-mock" })
      ).toHaveFocus()

      await user.click(document.body)
      await waitFor(() => {
        expect(screen.queryByText("menu-content-mock")).not.toBeInTheDocument()
      })
    })
  })
})
