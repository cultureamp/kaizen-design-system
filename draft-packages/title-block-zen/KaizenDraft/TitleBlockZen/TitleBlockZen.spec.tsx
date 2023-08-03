import React from "react"
import { render, waitFor, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  TitleBlockZen,
  CustomBreadcrumbProps,
  SectionTitleRenderProps,
} from "./index"
import "./matchMedia.mock"

const user = userEvent.setup()

describe("<TitleBlockZen />", () => {
  describe("when the primary action is a button with only an href", () => {
    const primaryActionAsLink = {
      label: "primaryActionLabel",
      href: "#primaryActionHref",
      primary: true,
    }

    it("renders the primary action button label and href", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsLink}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-primary-action-button")
      expect(btn.textContent).toEqual(primaryActionAsLink.label)
      expect(btn.getAttribute("href")).toEqual(primaryActionAsLink.href)
    })

    it("passes the href to the mobile action drawer button", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsLink}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-mobile-actions-primary-button")
      expect(btn.getAttribute("href")).toEqual(primaryActionAsLink.href)
    })
  })

  describe("when the primary action is a button with only an onClick", () => {
    const testOnClickFn = jest.fn()
    const primaryActionAsButton = {
      label: "primaryActionLabel",
      onClick: testOnClickFn,
      primary: true,
    }

    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it("renders the primary action button label and onClick", async () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-primary-action-button")
      expect(btn.textContent).toEqual(primaryActionAsButton.label)
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
    })

    it("creates a mobile actions primary button", async () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlockZen>
      )

      const btn = getByTestId("title-block-mobile-actions-primary-button")
      expect(btn.textContent).toEqual(primaryActionAsButton.label)
      await user.click(btn)
      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
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
      href: "#primaryActionHref",
      disabled: true,
      primary: true,
    }
    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it("renders a disabled primary action button", async () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId(
        "title-block-primary-action-button"
      ) as HTMLButtonElement
      expect(btn.textContent).toEqual(primaryActionAsButton.label)
      expect(btn.disabled).toBeTruthy()
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).not.toHaveBeenCalled()
      })
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
      expect(btn.textContent).toEqual(primaryActionAsLink.label)
      expect(btn.getAttribute("href")).not.toEqual(primaryActionAsLink.href)
    })

    it("creates a mobile actions primary button with disabled styles and no onClick", async () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlockZen>
      )

      const btn = getByTestId(
        "title-block-mobile-actions-primary-button"
      ) as HTMLButtonElement
      expect(btn.textContent).toEqual(primaryActionAsButton.label)
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).not.toHaveBeenCalled()
      })
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
      expect(btn.textContent).toEqual(primaryActionAsLink.label)
      expect(btn.getAttribute("href")).not.toEqual(primaryActionAsLink.href)
    })
  })

  describe("when the primary action is a button with both an href and an onClick", () => {
    const testOnClickFn = jest.fn()
    const primaryActionAsLinkAndOnClick = {
      label: "primaryActionLabel",
      href: "#primaryActionHref",
      onClick: testOnClickFn,
      primary: true,
    }

    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it("renders the primary action button label, href and onClick", async () => {
      const { getByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          primaryAction={primaryActionAsLinkAndOnClick}
        >
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-primary-action-button")
      expect(btn.textContent).toEqual(primaryActionAsLinkAndOnClick.label)
      expect(btn.getAttribute("href")).toEqual(
        primaryActionAsLinkAndOnClick.href
      )
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
    })

    it("passes both the href and onClick to the mobile action drawer button", async () => {
      const { getByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          primaryAction={primaryActionAsLinkAndOnClick}
        >
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-mobile-actions-primary-button")
      expect(btn.getAttribute("href")).toEqual(
        primaryActionAsLinkAndOnClick.href
      )
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
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

    it("renders the primary action menu button with label and menu items", async () => {
      const { getByTestId, getAllByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsMenu}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-primary-action-button")
      expect(btn.textContent).toEqual(primaryActionAsMenu.label)
      await user.click(btn)

      await waitFor(() => {
        const menuItems = getAllByTestId(/^main-action-primary-menu-item-/)
        expect(menuItems.length).toEqual(2)
      })
    })

    it("passes the primary menu items to the mobile actions drawer", () => {
      const { getAllByTestId } = render(
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
      href: "#defaultActionHref",
    }

    it("renders the default action button label and href", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsLink}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-default-action-button")
      expect(btn.textContent).toEqual(defaultActionAsLink.label)
      expect(btn.getAttribute("href")).toEqual(defaultActionAsLink.href)
    })

    it("creates a mobile actions default action menu item", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsLink}>
          Example
        </TitleBlockZen>
      )

      const menuItem = getByTestId("title-block-mobile-actions-default-link")
      expect(menuItem.getAttribute("href")).toEqual(defaultActionAsLink.href)
      expect(menuItem.textContent).toEqual(defaultActionAsLink.label)
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

    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it("renders the default action button label and onClick", async () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-default-action-button")
      expect(btn.textContent).toEqual(defaultActionAsButton.label)
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
    })

    it("creates a mobile actions default action menu item", async () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlockZen>
      )

      const menuItem = getByTestId("title-block-mobile-actions-default-action")
      expect(menuItem.textContent).toEqual(defaultActionAsButton.label)
      await user.click(menuItem)

      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
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
      href: "#defaultActionHref",
      onClick: testOnClickFn,
    }

    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it("renders the default action button label, href and onClick", async () => {
      const { getByTestId } = render(
        <TitleBlockZen
          title="Test Title"
          defaultAction={defaultActionAsLinkAndOnClick}
        >
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId("title-block-default-action-button")
      expect(btn.textContent).toEqual(defaultActionAsLinkAndOnClick.label)
      expect(btn.getAttribute("href")).toEqual(
        defaultActionAsLinkAndOnClick.href
      )
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
    })

    it("creates a single mobile actions default link menu item with both href and onClick", async () => {
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
      expect(menuItem.getAttribute("href")).toEqual(
        defaultActionAsLinkAndOnClick.href
      )
      expect(menuItem.textContent).toEqual(defaultActionAsLinkAndOnClick.label)
      await user.click(menuItem)

      await waitFor(() => {
        expect(testOnClickFn).not.toHaveBeenCalled()
      })
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
      href: "#defaultActionHref",
      disabled: true,
    }

    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it("renders a disabled default action button", async () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlockZen>
      )
      const btn = getByTestId(
        "title-block-default-action-button"
      ) as HTMLButtonElement
      expect(btn.textContent).toEqual(defaultActionAsButton.label)
      expect(btn.disabled).toBeTruthy()
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).not.toHaveBeenCalled()
      })
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
      expect(btn.textContent).toEqual(defaultActionAsLink.label)
      expect(btn.getAttribute("href")).not.toEqual(defaultActionAsLink.href)
    })

    it("creates a mobile actions default action menu item with disabled styles and no onClick", async () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlockZen>
      )

      const btn = getByTestId(
        "title-block-mobile-actions-default-action"
      ) as HTMLButtonElement
      expect(btn.textContent).toEqual(defaultActionAsButton.label)
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).not.toHaveBeenCalled()
      })
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
      expect(btn.textContent).toEqual(defaultActionAsLink.label)
      expect(btn.getAttribute("href")).not.toEqual(defaultActionAsLink.href)
    })
  })

  describe("when a secondary action is passed with both an href and an onClick", () => {
    const testOnClickFn = jest.fn()
    const secondaryActionWithLinkAndOnClick = {
      label: "secondaryActionLabel",
      href: "#secondaryActionHref",
      onClick: testOnClickFn,
    }

    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it("renders the secondary action with both the href and onClick", async () => {
      const mockWarnFn = jest.fn()
      const spy = jest
        .spyOn(global.console, "warn")
        .mockImplementation(mockWarnFn)
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
      expect(mockWarnFn).toBeCalled()
      expect(btn.textContent).toEqual(secondaryActionWithLinkAndOnClick.label)
      expect(btn.getAttribute("href")).toEqual(
        secondaryActionWithLinkAndOnClick.href
      )
      await user.click(btn)
      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
      spy.mockRestore()
    })

    it("renders the action as a single mobile actions drawer item with an onClick", async () => {
      const mockWarnFn = jest.fn()
      const spy = jest
        .spyOn(global.console, "warn")
        .mockImplementation(mockWarnFn)
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
      expect(btn[0].getAttribute("href")).not.toEqual(
        secondaryActionWithLinkAndOnClick.href
      )
      await user.click(btn[0])

      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
      spy.mockRestore()
    })
  })

  describe("when a custom compent is provided for section title", () => {
    it("renders a custom element in section title", async () => {
      const expectedText = "This is a button"
      const CustomComponent = (props: SectionTitleRenderProps): JSX.Element => (
        <button type="button">{props.sectionTitle}</button>
      )
      render(
        <TitleBlockZen
          title="Test title"
          sectionTitle={expectedText}
          renderSectionTitle={CustomComponent}
        />
      )
      const el = await screen.findByRole("button")
      expect(el.textContent).toBe(expectedText)
    })

    it("renders a heading when no render prop is provided", async () => {
      const expectedText = "My expected text"
      render(<TitleBlockZen title="Test title" sectionTitle={expectedText} />)
      const el = await screen.findByRole("heading", { level: 2 })
      expect(el.textContent).toBe(expectedText)
    })
  })

  describe("when a secondary action is passed with only an href", () => {
    const secondaryActionWithLinkAndOnClick = {
      label: "secondaryActionLabel",
      href: "#secondaryActionHref",
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
      expect(btn[0].getAttribute("href")).toEqual(
        secondaryActionWithLinkAndOnClick.href
      )
    })
  })

  describe("when a disabled secondary action is passed with only an href", () => {
    const secondaryActionWithLink = {
      label: "secondaryActionLabel",
      href: "#secondaryActionHref",
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
      expect(btn[0].getAttribute("href")).not.toEqual(
        secondaryActionWithLink.href
      )
    })
  })

  describe("when a disabled secondary action is passed with only an onClick", () => {
    const testOnClickFn = jest.fn()
    const secondaryActionWithOnClick = {
      label: "secondaryActionLabel",
      onClick: testOnClickFn,
      disabled: true,
    }

    it("renders the action as a single disabled mobile actions drawer item with no onClick", async () => {
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
      await user.click(btn[0])

      await waitFor(() => {
        expect(testOnClickFn).not.toHaveBeenCalled()
      })
    })
  })

  describe("when a disabled secondary overflow menu item is passed with only an onClick for the action", () => {
    const testOnClickFn = jest.fn()
    const secondaryOverflowMenuItemWithOnClick = {
      label: "secondaryActionOverflowMenuItemLabel",
      action: testOnClickFn,
      disabled: true,
    }

    it("renders the action as a single disabled mobile actions drawer item with no onClick", async () => {
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
      await user.click(btn[0])

      await waitFor(() => {
        expect(testOnClickFn).not.toHaveBeenCalled()
      })
    })
  })

  describe("survey status", () => {
    it("doesn't render tag when field is omitted", async () => {
      render(<TitleBlockZen title="Test Title">Example</TitleBlockZen>)

      await waitFor(() => {
        expect(
          screen.queryByTestId("survey-status-tag")
        ).not.toBeInTheDocument()
      })
    })

    it.each([["draft"], ["live"], ["closed"], ["scheduled"]] as const)(
      "renders tag with correct text when %s status",
      async status => {
        const { getByTestId } = render(
          <TitleBlockZen
            title="Test Title"
            surveyStatus={{
              text: `${status} text`,
              status,
            }}
          >
            Example
          </TitleBlockZen>
        )

        const tagElement = getByTestId("survey-status-tag")
        expect(tagElement).toHaveTextContent(`${status} text`)
      }
    )
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
              handleClick: jest.fn(),
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
          ).toBeTruthy()
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
              handleClick: jest.fn(),
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

  describe("breadcrumb", () => {
    it("renders a link when you pass a path prop", () => {
      render(
        <TitleBlockZen
          title="Test Title"
          breadcrumb={{
            text: "Back",
            path: "/path/to/somewhere",
            handleClick: (): void => undefined,
          }}
        >
          Example
        </TitleBlockZen>
      )

      expect(screen.getByRole("link", { name: "Back" })).toBeInTheDocument()
    })

    it("renders a button when you don't pass a path prop", () => {
      render(
        <TitleBlockZen
          title="Test Title"
          breadcrumb={{
            text: "Back",
            handleClick: (): void => undefined,
          }}
        >
          Example
        </TitleBlockZen>
      )

      expect(screen.getByRole("button", { name: "Back" })).toBeInTheDocument()
    })

    it("renders a custom component when you pass a 'render' prop", async () => {
      const mockFn = jest.fn()

      const CustomComponent = (props: CustomBreadcrumbProps): JSX.Element => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          data-automation-id="custom-component"
          data-testid="custom-component"
          onClick={props.breadcrumb.handleClick}
        >
          {props.children}
        </div>
      )

      render(
        <TitleBlockZen
          title="Test Title"
          breadcrumb={{
            text: "Back",
            handleClick: mockFn,
            render: CustomComponent,
          }}
        >
          Example
        </TitleBlockZen>
      )

      const customElement = screen.getByTestId("custom-component")
      expect(customElement).toHaveTextContent("Back")
      await user.click(customElement)

      await waitFor(() => {
        expect(mockFn).toBeCalled()
      })
    })
  })

  describe("renders a custom component when you pass a 'component' prop to a action", () => {
    const MockLinkComponent = (props: any): JSX.Element => (
      <a
        className={props.className}
        href={props.href}
        data-automation-id={props.automationId}
        data-testid={props.automationId}
      >
        {props.children}
      </a>
    )
    const MockButtonComponent = (props: any): JSX.Element => (
      <button
        type="button"
        className={props.className}
        onClick={props.onClick}
        data-automation-id={props.automationId}
        data-testid={props.automationId}
      >
        {props.children}
      </button>
    )

    describe("primaryAction", () => {
      it("will render a custom anchor component in the main action toolbar", () => {
        render(
          <TitleBlockZen
            title="Test Title"
            primaryAction={{
              label: "Primary action",
              href: "#test-primary",
              component: MockLinkComponent,
            }}
          >
            Example
          </TitleBlockZen>
        )
        const toolbar = screen.getByTestId("title-block-main-actions-toolbar")
        within(toolbar).getByRole("link", {
          name: "Primary action",
        })
        expect(
          within(toolbar).getByRole("link", {
            name: "Primary action",
          })
        ).toHaveAttribute("href", "#test-primary")
      })

      it("will render a custom anchor component in the mobile drawer", () => {
        render(
          <TitleBlockZen
            title="Test Title"
            primaryAction={{
              label: "Primary action",
              href: "#test-primary",
              component: MockLinkComponent,
            }}
          >
            Example
          </TitleBlockZen>
        )
        const drawer = screen.getByTestId(
          "title-block-mobile-actions-drawer-handle"
        )
        within(drawer).getByRole("link", {
          name: "Primary action",
        })
        expect(
          within(drawer).getByRole("link", {
            name: "Primary action",
          })
        ).toHaveAttribute("href", "#test-primary")
      })

      it("will render custom button with functional onClick", async () => {
        const testClickFunc = jest.fn()
        render(
          <TitleBlockZen
            title="Test Title"
            primaryAction={{
              label: "Primary action",
              onClick: testClickFunc,
              component: MockButtonComponent,
            }}
          >
            Example
          </TitleBlockZen>
        )
        const drawer = screen.getByTestId(
          "title-block-mobile-actions-drawer-handle"
        )
        const drawerBtn = within(drawer).getByRole("button", {
          name: "Primary action",
        })
        await user.click(drawerBtn)

        await waitFor(() => {
          expect(testClickFunc).toBeCalledTimes(1)
        })
      })

      it("will render custom button with children and not label", () => {
        const testClickFunc = jest.fn()
        render(
          <TitleBlockZen
            title="Test Title"
            primaryAction={{
              label: "Primary action",
              onClick: testClickFunc,
              component: (props): JSX.Element => (
                <MockButtonComponent {...props}>
                  This will replace label
                </MockButtonComponent>
              ),
            }}
          >
            Example
          </TitleBlockZen>
        )
        const drawer = screen.getByTestId(
          "title-block-mobile-actions-drawer-handle"
        )
        within(drawer).getByRole("button", {
          name: "This will replace label",
        })
        expect(
          within(drawer).queryByRole("button", {
            name: "Primary action",
          })
        ).toBeFalsy()
      })
    })

    describe("secondaryActions", () => {
      it("will render multiple custom anchor components in the secondary actions toolbar", () => {
        render(
          <TitleBlockZen
            title="Test Title"
            secondaryActions={[
              {
                label: "Secondary action 1",
                href: "#test-secondary",
                component: MockLinkComponent,
              },
              {
                label: "Secondary action 2",
                href: "#test-secondary-2",
                component: MockLinkComponent,
              },
            ]}
          >
            Example
          </TitleBlockZen>
        )
        const toolbar = screen.getByTestId(
          "title-block-secondary-actions-toolbar"
        )
        const links = within(toolbar).getAllByRole("link")
        expect(links.length).toBe(2)
        expect(links[0]).toHaveAttribute("href", "#test-secondary")
        expect(links[1]).toHaveAttribute("href", "#test-secondary-2")
      })

      it("will render multiple custom anchor components in the secondary actions mobile Drawer", () => {
        render(
          <TitleBlockZen
            title="Test Title"
            secondaryActions={[
              {
                label: "Secondary action 1",
                href: "#test-secondary",
                component: MockLinkComponent,
              },
              {
                label: "Secondary action 2",
                href: "#test-secondary-2",
                component: MockLinkComponent,
              },
            ]}
          >
            Example
          </TitleBlockZen>
        )
        const links = screen.getAllByTestId(
          "title-block-mobile-actions-secondary-action"
        )
        expect(links.length).toBe(2)
        expect(links[0]).toHaveAttribute("href", "#test-secondary")
        expect(links[1]).toHaveAttribute("href", "#test-secondary-2")
      })
    })

    describe("defaultAction", () => {
      it("will render a custom anchor components in the main action toolbar", () => {
        render(
          <TitleBlockZen
            title="Test Title"
            defaultAction={{
              label: "Default action",
              href: "#test-default",
              component: MockLinkComponent,
            }}
          >
            Example
          </TitleBlockZen>
        )
        const toolbar = screen.getByTestId("title-block-main-actions-toolbar")
        const defaultActionAnchor = within(toolbar).getByRole("link", {
          name: "Default action",
        })
        expect(defaultActionAnchor).toHaveAttribute("href", "#test-default")
      })

      it("will render the component above primary action in the Drawer content if it is a link", () => {
        render(
          <TitleBlockZen
            title="Test Title"
            defaultAction={{
              label: "Default action",
              href: "#test-default",
              component: MockLinkComponent,
            }}
          >
            Example
          </TitleBlockZen>
        )
        const mobileActionLink = screen.getByTestId(
          "title-block-mobile-actions-default-link"
        )

        expect(mobileActionLink).toBeInTheDocument()
      })

      it("will render the component in the top list of the Drawer content if it is a clickable button", () => {
        const testClickFunc = jest.fn()
        render(
          <TitleBlockZen
            title="Test Title"
            defaultAction={{
              label: "Default action",
              onClick: testClickFunc,
              component: MockButtonComponent,
            }}
          >
            Example
          </TitleBlockZen>
        )
        expect(
          screen.queryByTestId("title-block-mobile-actions-default-link")
        ).toBeFalsy()
        expect(
          screen.getByTestId("title-block-mobile-actions-default-action")
        ).toBeInTheDocument()
      })
    })
  })
})
