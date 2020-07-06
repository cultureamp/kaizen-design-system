import "./matchMedia.mock"

import {
  cleanup,
  fireEvent,
  queryByAttribute,
  render,
} from "@testing-library/react"
import * as React from "react"
import { NavigationTab, TitleBlockZen } from "./index"

afterEach(() => cleanup())

describe("<TitleBlockZen />", () => {
  describe("when the primary action is a button with an href", () => {
    const primaryActionAsLink = {
      label: "primaryActionLabel",
      href: "primaryActionHref",
      primary: true,
    }

    it("renders the primary action button label and href", () => {
      const { container } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsLink}>
          Example
        </TitleBlockZen>
      )
      const btn = container.querySelector(
        "[data-automation-id=title-block-primary-action-button]"
      )
      expect(btn!.textContent).toEqual("primaryActionLabel")
      expect(btn!.getAttribute("href")).toEqual("primaryActionHref")
    })

    it("passes the href to the mobile action drawer button", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsLink}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-mobile-actions-primary-button")
      expect(btn.getAttribute("href")).toEqual("primaryActionHref")
    })
  })

  describe("when the primary action is a button with an onClick", () => {
    const testOnClickFn = jest.fn()
    const primaryActionAsButton = {
      label: "primaryActionLabel",
      onClick: testOnClickFn,
      primary: true,
    }

    it("renders the primary action button label and onClick", () => {
      const { container } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlockZen>
      )
      const btn = container.querySelector(
        "[data-automation-id=title-block-primary-action-button]"
      )
      expect(btn!.textContent).toEqual("primaryActionLabel")
      fireEvent.click(btn!)
      expect(testOnClickFn).toHaveBeenCalled()
    })

    it("creates a mobile actions primary button", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlockZen>
      )

      const btn = getByTestId("title-block-mobile-actions-primary-button")
      expect(btn.textContent).toEqual("primaryActionLabel")
      fireEvent.click(btn)
      expect(testOnClickFn).toHaveBeenCalled()
    })
  })

  describe("when the primary action is a menu", () => {
    const primaryActionAsMenu = {
      label: "primaryActionLabel",
      menuItems: [
        {
          label: "Menu item 1",
          action: "#",
        },
        {
          label: "Menu item 1",
          action: "#",
        },
      ],
    }

    it("renders the primary action menu button with label and menu items", () => {
      const { container } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsMenu}>
          Example
        </TitleBlockZen>
      )
      const btn = container.querySelector(
        "[data-automation-id=title-block-primary-action-button]"
      )
      expect(btn!.textContent).toEqual("primaryActionLabel")
      fireEvent.click(btn!)
      const menuItems = container.querySelectorAll(
        "[data-automation-id^=main-action-primary-menu-item-]"
      )
      expect(menuItems!.length).toEqual(2)
    })

    it("passes the primary menu items to the mobile actions drawer", () => {
      const { container } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsMenu}>
          Example
        </TitleBlockZen>
      )
      const menuItems = container.querySelectorAll(
        "[data-automation-id^=title-block-mobile-actions-primary-link-]"
      )
      expect(menuItems!.length).toEqual(2)
    })
  })

  describe("when the default action is a button with an href", () => {
    const defaultActionAsLink = {
      label: "defaultActionLabel",
      href: "defaultActionHref",
    }

    it("renders the default action button label and href", () => {
      const { container } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsLink}>
          Example
        </TitleBlockZen>
      )
      const btn = container.querySelector(
        "[data-automation-id=title-block-default-action-button]"
      )
      expect(btn!.textContent).toEqual("defaultActionLabel")
      expect(btn!.getAttribute("href")).toEqual("defaultActionHref")
    })

    it("creates a mobile actions default action menu item", () => {
      const { container } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsLink}>
          Example
        </TitleBlockZen>
      )

      const menuItem = container.querySelector(
        "[data-automation-id=title-block-mobile-actions-default-link]"
      )
      expect(menuItem!.getAttribute("href")).toEqual("defaultActionHref")
      expect(menuItem!.textContent).toEqual("defaultActionLabel")
    })
  })

  describe("when the default action is a button with an onClick", () => {
    const testOnClickFn = jest.fn()
    const defaultActionAsButton = {
      label: "defaultActionLabel",
      onClick: testOnClickFn,
    }

    it("renders the default action button label and onClick", () => {
      const { container } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlockZen>
      )
      const btn = container.querySelector(
        "[data-automation-id=title-block-default-action-button]"
      )
      expect(btn!.textContent).toEqual("defaultActionLabel")
      fireEvent.click(btn!)
      expect(testOnClickFn).toHaveBeenCalled()
    })

    it("creates a mobile actions default action menu item", () => {
      const { container } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlockZen>
      )

      const menuItem = container.querySelector(
        "[data-automation-id=title-block-mobile-actions-default-action]"
      )
      expect(menuItem!.textContent).toEqual("defaultActionLabel")
      fireEvent.click(menuItem!)
      expect(testOnClickFn).toHaveBeenCalled()
    })

    it("renders the mobile actions menu drawer handle even with no primary action", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlockZen>
      )

      expect(
        getByTestId("title-block-mobile-actions-drawer-handle")
      ).toBeTruthy()
    })
  })
})
