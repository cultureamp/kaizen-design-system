import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MobileActions } from "./MobileActions"

const user = userEvent.setup()

const MENU_LINKS = [
  {
    label: "Primary menu link 1",
    href: "#",
  },
  {
    label: "Primary menu action 2",
    onClick: (): void => alert("test"),
  },
]

const SECONDARY_ACTIONS = [
  {
    label: "Secondary menu",
    menuItems: [
      {
        onClick: (): void => alert("test"),
        label: "Secondary menu action 1",
      },
      {
        onClick: (): void => alert("test"),
        label: "Secondary menu action 2",
      },
    ],
  },
  {
    onClick: (): void => alert("test"),
    label: "Secondary action",
  },
]

const SECONDARY_OVERFLOW_ACTIONS = [
  {
    onClick: (): void => alert("test"),
    label: "Secondary overflow action",
  },
]

describe("<MobileActions />", () => {
  describe("Case 1: Primary Action is a menu", () => {
    it("makes aria-expanded toggles between true and false when user toggles the menu", async () => {
      render(
        <MobileActions
          primaryAction={{
            label: "Primary menu",
            menuItems: MENU_LINKS,
          }}
          defaultAction={{
            label: "Default link",
            href: "#",
          }}
          secondaryActions={SECONDARY_ACTIONS}
        />
      )
      const mobileActionsButton = screen.getByRole("button", {
        name: "Primary menu",
      })
      expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual("false")

      await user.click(mobileActionsButton)
      await waitFor(() => {
        expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual(
          "true"
        )
      })
      await user.click(mobileActionsButton)
      await waitFor(() => {
        expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual(
          "false"
        )
      })
    })
  })

  describe("Primary Action does not have a menu list", () => {
    it("makes aria-expanded toggles between true and false when user toggles the menu", async () => {
      render(
        <MobileActions
          primaryAction={{
            label: "Primary menu",
          }}
          defaultAction={{
            label: "Default link",
            href: "#",
          }}
          secondaryActions={SECONDARY_ACTIONS}
        />
      )
      const mobileActionsButton = screen.getByRole("button", {
        name: "Other actions",
      })
      expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual("false")

      await user.click(mobileActionsButton)
      await waitFor(() => {
        expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual(
          "true"
        )
      })
      await user.click(mobileActionsButton)
      await waitFor(() => {
        expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual(
          "false"
        )
      })
    })
  })

  describe("No primary actions", () => {
    it("makes aria-expanded toggles between true and false when user toggles the menu", async () => {
      render(
        <MobileActions
          defaultAction={{
            label: "Default link",
            href: "#",
          }}
          secondaryActions={SECONDARY_ACTIONS}
        />
      )
      const mobileActionsButton = screen.getByRole("button", {
        name: "Other actions",
      })
      expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual("false")

      await user.click(mobileActionsButton)
      await waitFor(() => {
        expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual(
          "true"
        )
      })
      await user.click(mobileActionsButton)
      await waitFor(() => {
        expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual(
          "false"
        )
      })
    })
  })
})

describe("when autoHide is true", () => {
  beforeEach(() => {
    window.alert = jest.fn()
    render(
      <MobileActions
        primaryAction={{
          label: "Primary menu",
        }}
        defaultAction={{
          label: "Default link",
          href: "#",
        }}
        secondaryActions={SECONDARY_ACTIONS}
        secondaryOverflowMenuItems={SECONDARY_OVERFLOW_ACTIONS}
        autoHide
      />
    )
  })
  it("hides the menu when user clicks a default action item", async () => {
    const mobileActionsButton = screen.getByRole("button", {
      name: "Other actions",
    })
    expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual("false")

    await user.click(mobileActionsButton)
    await waitFor(() => {
      expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual("true")
    })
    const btn = screen.getAllByTestId(/title-block-mobile-actions-default-/)
    expect(btn.length).toEqual(1)
    await user.click(btn[0])

    await waitFor(() => {
      expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual("false")
    })
  })

  it("hides the menu when user clicks a secondary action item", async () => {
    const mobileActionsButton = screen.getByRole("button", {
      name: "Other actions",
    })
    expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual("false")

    await user.click(mobileActionsButton)
    await waitFor(() => {
      expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual("true")
    })
    const btn = screen.getAllByTestId(
      "title-block-mobile-actions-secondary-action"
    )
    expect(btn.length).toEqual(3)
    await user.click(btn[0])

    await waitFor(() => {
      expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual("false")
    })
  })

  it("hides the menu when user clicks a secondary overflow item", async () => {
    const mobileActionsButton = screen.getByRole("button", {
      name: "Other actions",
    })
    expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual("false")

    await user.click(mobileActionsButton)
    await waitFor(() => {
      expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual("true")
    })
    const btn = screen.getAllByTestId(
      "title-block-mobile-actions-overflow-menu-item"
    )
    expect(btn.length).toEqual(1)
    await user.click(btn[0])

    await waitFor(() => {
      expect(mobileActionsButton.getAttribute("aria-expanded")).toEqual("false")
    })
  })
})
