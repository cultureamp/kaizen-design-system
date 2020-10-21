import "./matchMedia.mock"

import { configure, fireEvent } from "@testing-library/dom"
import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import { NavigationTab, TitleBlockZen } from "./index"

configure({
  testIdAttribute: "data-automation-id",
})

afterEach(() => cleanup())

describe("<TitleBlockZen />", () => {
  describe("when the primary action is a button with only an href", () => {
    const primaryActionAsLink = {
      label: "primaryActionLabel",
      href: "primaryActionHref",
      primary: true,
    }

    it("renders the primary action button label and href", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsLink}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-primary-action-button")
      expect(btn.textContent).toEqual("primaryActionLabel")
      expect(btn.getAttribute("href")).toEqual("primaryActionHref")
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

  describe("when the primary action is a button with only an onClick", () => {
    const testOnClickFn = jest.fn()
    const primaryActionAsButton = {
      label: "primaryActionLabel",
      onClick: testOnClickFn,
      primary: true,
    }

    it("renders the primary action button label and onClick", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-primary-action-button")
      expect(btn.textContent).toEqual("primaryActionLabel")
      fireEvent.click(btn)
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

  describe("when the primary action is disabled", () => {
    const testOnClickFn = jest.fn()
    const primaryActionAsButton = {
      label: "primaryActionLabel",
      onClick: testOnClickFn,
      disabled: true,
      primary: true,
    }
    const primaryActionAsLink = {
      label: "primaryActionLabel",
      href: "primaryActionHref",
      disabled: true,
      primary: true,
    }

    it("renders a disabled primary action button", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId(
        "title-block-primary-action-button"
      ) as HTMLButtonElement
      expect(btn.textContent).toEqual("primaryActionLabel")
      expect(btn.disabled).toBeTruthy()
      fireEvent.click(btn)
      expect(testOnClickFn).not.toHaveBeenCalled()
    })

    it("renders a disabled primary action link button", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsLink}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId(
        "title-block-primary-action-button"
      ) as HTMLButtonElement
      expect(btn.textContent).toEqual("primaryActionLabel")
      expect(btn.getAttribute("href")).not.toEqual("primaryActionHref")
    })

    it("creates a mobile actions primary button with disabled styles and no onClick", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlockZen>
      )

      const btn = getByTestId(
        "title-block-mobile-actions-primary-button"
      ) as HTMLButtonElement
      expect(btn.textContent).toEqual("primaryActionLabel")
      fireEvent.click(btn)
      expect(testOnClickFn).not.toHaveBeenCalled()
    })

    it("creates a mobile actions primary button with disabled styles and no href", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsLink}>
          Example
        </TitleBlockZen>
      )

      const btn = getByTestId(
        "title-block-mobile-actions-primary-button"
      ) as HTMLButtonElement
      expect(btn.textContent).toEqual("primaryActionLabel")
      expect(btn.getAttribute("href")).not.toEqual("primaryActionHref")
    })
  })

  describe("when the primary action is a button with both an href and an onClick", () => {
    const testOnClickFn = jest.fn()
    const primaryActionAsLinkAndOnClick = {
      label: "primaryActionLabel",
      href: "primaryActionHref",
      onClick: testOnClickFn,
      primary: true,
    }

    it("renders the primary action button label, href and onClick", () => {
      const { getByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          primaryAction={primaryActionAsLinkAndOnClick}
        >
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-primary-action-button")
      expect(btn.textContent).toEqual("primaryActionLabel")
      expect(btn.getAttribute("href")).toEqual("primaryActionHref")
      fireEvent.click(btn)
      expect(testOnClickFn).toHaveBeenCalled()
    })

    it("passes both the href and onClick to the mobile action drawer button", () => {
      const { getByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          primaryAction={primaryActionAsLinkAndOnClick}
        >
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-mobile-actions-primary-button")
      expect(btn.getAttribute("href")).toEqual("primaryActionHref")
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
      const { getByTestId, getAllByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsMenu}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-primary-action-button")
      expect(btn.textContent).toEqual("primaryActionLabel")
      fireEvent.click(btn)
      const menuItems = getAllByTestId(/^main-action-primary-menu-item-/)
      expect(menuItems.length).toEqual(2)
    })

    it("passes the primary menu items to the mobile actions drawer", () => {
      const { getByTestId, getAllByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsMenu}>
          Example
        </TitleBlockZen>
      )
      const menuItems = getAllByTestId(
        /^title-block-mobile-actions-primary-link-/
      )
      expect(menuItems.length).toEqual(2)
    })
  })

  describe("when the default action is a button with only an href", () => {
    const defaultActionAsLink = {
      label: "defaultActionLabel",
      href: "defaultActionHref",
    }

    it("renders the default action button label and href", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsLink}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-default-action-button")
      expect(btn.textContent).toEqual("defaultActionLabel")
      expect(btn.getAttribute("href")).toEqual("defaultActionHref")
    })

    it("creates a mobile actions default action menu item", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsLink}>
          Example
        </TitleBlockZen>
      )

      const menuItem = getByTestId("title-block-mobile-actions-default-link")
      expect(menuItem.getAttribute("href")).toEqual("defaultActionHref")
      expect(menuItem.textContent).toEqual("defaultActionLabel")
    })

    it("renders the mobile actions menu drawer handle even with no primary action", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsLink}>
          Example
        </TitleBlockZen>
      )

      expect(
        getByTestId("title-block-mobile-actions-drawer-handle")
      ).toBeTruthy()
    })
  })

  describe("when the default action is a button with only an onClick", () => {
    const testOnClickFn = jest.fn()
    const defaultActionAsButton = {
      label: "defaultActionLabel",
      onClick: testOnClickFn,
    }

    it("renders the default action button label and onClick", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-default-action-button")
      expect(btn.textContent).toEqual("defaultActionLabel")
      fireEvent.click(btn)
      expect(testOnClickFn).toHaveBeenCalled()
    })

    it("creates a mobile actions default action menu item", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlockZen>
      )

      const menuItem = getByTestId("title-block-mobile-actions-default-action")
      expect(menuItem.textContent).toEqual("defaultActionLabel")
      fireEvent.click(menuItem)
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

  describe("when the default action is a button with both an href and an onClick", () => {
    const testOnClickFn = jest.fn()

    const defaultActionAsLinkAndOnClick = {
      label: "defaultActionLabel",
      href: "defaultActionHref",
      onClick: testOnClickFn,
    }

    it("renders the default action button label, href and onClick", () => {
      const { getByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          defaultAction={defaultActionAsLinkAndOnClick}
        >
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-default-action-button")
      expect(btn.textContent).toEqual("defaultActionLabel")
      expect(btn.getAttribute("href")).toEqual("defaultActionHref")
      fireEvent.click(btn)
      expect(testOnClickFn).toHaveBeenCalled()
    })

    it("creates a single mobile actions default link menu item with both href and onClick", () => {
      const { getByTestId, queryByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          defaultAction={defaultActionAsLinkAndOnClick}
        >
          Example
        </TitleBlockZen>
      )

      const menuItem = getByTestId("title-block-mobile-actions-default-link")
      const defaultAction = queryByTestId(
        "title-block-mobile-actions-default-action"
      )
      expect(defaultAction).toBeFalsy()
      expect(menuItem.getAttribute("href")).toEqual("defaultActionHref")
      expect(menuItem.textContent).toEqual("defaultActionLabel")
      fireEvent.click(menuItem)
      expect(testOnClickFn).toHaveBeenCalled()
    })
  })

  describe("when the default action is disabled", () => {
    const testOnClickFn = jest.fn()
    const defaultActionAsButton = {
      label: "defaultActionLabel",
      onClick: testOnClickFn,
      disabled: true,
    }
    const defaultActionAsLink = {
      label: "defaultActionLabel",
      href: "defaultActionHref",
      disabled: true,
    }

    it("renders a disabled default action button", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId(
        "title-block-default-action-button"
      ) as HTMLButtonElement
      expect(btn.textContent).toEqual("defaultActionLabel")
      expect(btn.disabled).toBeTruthy()
      fireEvent.click(btn)
      expect(testOnClickFn).not.toHaveBeenCalled()
    })

    it("renders a disabled default action link button", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsLink}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId(
        "title-block-default-action-button"
      ) as HTMLButtonElement
      expect(btn.textContent).toEqual("defaultActionLabel")
      expect(btn.getAttribute("href")).not.toEqual("defaultActionHref")
    })

    it("creates a mobile actions default action menu item with disabled styles and no onClick", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlockZen>
      )

      const btn = getByTestId(
        "title-block-mobile-actions-default-action"
      ) as HTMLButtonElement
      expect(btn.textContent).toEqual("defaultActionLabel")
      fireEvent.click(btn)
      expect(testOnClickFn).not.toHaveBeenCalled()
    })

    it("creates a mobile actions default link menu item with disabled styles and no href", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsLink}>
          Example
        </TitleBlockZen>
      )

      const btn = getByTestId(
        "title-block-mobile-actions-default-link"
      ) as HTMLButtonElement
      expect(btn.textContent).toEqual("defaultActionLabel")
      expect(btn.getAttribute("href")).not.toEqual("defaultActionHref")
    })
  })

  describe("when a secondary action is passed with both an href and an onClick", () => {
    const testOnClickFn = jest.fn()

    const secondaryActionWithLinkAndOnClick = {
      label: "secondaryActionLabel",
      href: "secondaryActionHref",
      onClick: testOnClickFn,
    }
    jest.spyOn(global.console, "warn")

    it("renders the secondary action with both the href and onClick", () => {
      const { getByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          secondaryActions={[secondaryActionWithLinkAndOnClick]}
        >
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-secondary-actions-button")
      expect(btn).toBeTruthy()
      // eslint-disable-next-line no-console
      expect(console.warn).toBeCalled()
      expect(btn.textContent).toEqual("secondaryActionLabel")
      expect(btn.getAttribute("href")).toEqual("secondaryActionHref")
      fireEvent.click(btn)
      expect(testOnClickFn).toHaveBeenCalled()
    })

    it("renders the action as a single mobile actions drawer item with an onClick", () => {
      const { getAllByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          secondaryActions={[secondaryActionWithLinkAndOnClick]}
        >
          Example
        </TitleBlockZen>
      )
      const btn = getAllByTestId("title-block-mobile-actions-secondary-action")
      expect(btn.length).toEqual(1)
      expect(btn[0].getAttribute("href")).not.toEqual("secondaryActionHref")
      fireEvent.click(btn[0])
      expect(testOnClickFn).toHaveBeenCalled()
    })
  })

  describe("when a secondary action is passed with only an href", () => {
    const secondaryActionWithLinkAndOnClick = {
      label: "secondaryActionLabel",
      href: "secondaryActionHref",
    }

    it("renders the action as a single mobile actions drawer item with the correct href", () => {
      const { getAllByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          secondaryActions={[secondaryActionWithLinkAndOnClick]}
        >
          Example
        </TitleBlockZen>
      )
      const btn = getAllByTestId("title-block-mobile-actions-secondary-action")
      expect(btn.length).toEqual(1)
      expect(btn[0].getAttribute("href")).toEqual("secondaryActionHref")
    })
  })

  describe("when a disabled secondary action is passed with only an href", () => {
    const secondaryActionWithLink = {
      label: "secondaryActionLabel",
      href: "secondaryActionHref",
      disabled: true,
    }

    it("renders the action as a single disabled mobile actions drawer item with no href", () => {
      const { getAllByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          secondaryActions={[secondaryActionWithLink]}
        >
          Example
        </TitleBlockZen>
      )
      const btn = getAllByTestId("title-block-mobile-actions-secondary-action")
      expect(btn.length).toEqual(1)
      expect(btn[0].getAttribute("href")).not.toEqual("secondaryActionHref")
    })
  })

  describe("when a disabled secondary action is passed with only an onClick", () => {
    const testOnClickFn = jest.fn()

    const secondaryActionWithOnClick = {
      label: "secondaryActionLabel",
      onClick: "secondaryActionHref",
      disabled: true,
    }

    it("renders the action as a single disabled mobile actions drawer item with no onClick", () => {
      const { getAllByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          secondaryActions={[secondaryActionWithOnClick]}
        >
          Example
        </TitleBlockZen>
      )
      const btn = getAllByTestId("title-block-mobile-actions-secondary-action")
      expect(btn.length).toEqual(1)
      fireEvent.click(btn[0])
      expect(testOnClickFn).not.toHaveBeenCalled()
    })
  })

  describe("when a disabled secondary overflow menu item is passed with only an onClick for the action", () => {
    const testOnClickFn = jest.fn()

    const secondaryOverflowMenuItemWithOnClick = {
      label: "secondaryActionOverflowMenuItemLabel",
      action: testOnClickFn,
      disabled: true,
    }

    it("renders the action as a single disabled mobile actions drawer item with no onClick", () => {
      const { getAllByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          secondaryActions={[]}
          secondaryOverflowMenuItems={[secondaryOverflowMenuItemWithOnClick]}
        >
          Example
        </TitleBlockZen>
      )
      const btn = getAllByTestId(
        "title-block-mobile-actions-overflow-menu-item"
      )
      expect(btn.length).toEqual(1)
      fireEvent.click(btn[0])
      expect(testOnClickFn).not.toHaveBeenCalled()
    })
  })

  describe("automation ID behaviour", () => {
    describe("when default automation IDs are not provided alongside required conditional renders", () => {
      it("renders the default automation IDs", () => {
        const automationdIds = {
          titleAutomationId: "TitleBlock__Title",
          avatarAutomationId: "TitleBlock__Avatar",
          subtitleAutomationId: "TitleBlock__Subtitle",
          sectionTitleAutomationId: "TitleBlock__SectionTitle",
          sectionTitleDescriptionAutomationId:
            "TitleBlock__SectionTitleDescription",
          breadcrumbAutomationId: "TitleBlock__Breadcrumb",
          breadcrumbTextAutomationId: "TitleBlock__BreadcrumbText",
        }

        const { container } = render(
          <TitleBlockZen
            title="Test Title"
            subtitle="Test Subtitle"
            avatar={<div>Test JSX Avatar Component</div>}
            breadcrumb={{
              text: "Test Breadcrumb",
              path: "/",
              handleClick: () => jest.fn(),
            }}
            sectionTitle="Test Section Title"
            sectionTitleDescription="Test Section Title Description"
          >
            Example
          </TitleBlockZen>
        )

        for (const automationId of Object.values(automationdIds)) {
          expect(
            container.querySelector(`[data-automation-id="${automationId}"]`)
          ).toBeTruthy
        }
      })
    })

    describe("when default automation IDs are provided alongside required conditional renders", () => {
      it("renders the provided automation IDs", () => {
        const automationdIds = {
          titleAutomationId: "titleBlockTitle",
          avatarAutomationId: "titleBlockAvatar",
          subtitleAutomationId: "titleBlockSubtitle",
          sectionTitleAutomationId: "titleBlockSectionTitle",
          sectionTitleDescriptionAutomationId:
            "titleBlockSectionTitleDescription",
          breadcrumbAutomationId: "breadcrumbAutomationId",
          breadcrumbTextAutomationId: "breadcrumbTextAutomationId",
        }

        const { container } = render(
          <TitleBlockZen
            title="Test Title"
            subtitle="Test Subtitle"
            avatar={<div>Test JSX Avatar Component</div>}
            breadcrumb={{
              text: "Test Breadcrumb",
              path: "/",
              handleClick: () => jest.fn(),
            }}
            sectionTitle="Test Section Title"
            sectionTitleDescription="Test Section Title Description"
            titleAutomationId={automationdIds.titleAutomationId}
            avatarAutomationId={automationdIds.avatarAutomationId}
            subtitleAutomationId={automationdIds.subtitleAutomationId}
            sectionTitleAutomationId={automationdIds.sectionTitleAutomationId}
            sectionTitleDescriptionAutomationId={
              automationdIds.sectionTitleDescriptionAutomationId
            }
            breadcrumbAutomationId={automationdIds.breadcrumbAutomationId}
            breadcrumbTextAutomationId={
              automationdIds.breadcrumbTextAutomationId
            }
          >
            Example
          </TitleBlockZen>
        )

        for (const automationId of Object.values(automationdIds)) {
          expect(
            container.querySelector(`[data-automation-id="${automationId}"]`)
          ).toBeTruthy()
        }
      })
    })
  })
})
