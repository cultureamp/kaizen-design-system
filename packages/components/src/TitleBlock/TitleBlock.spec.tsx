import React from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { type CustomBreadcrumbProps, type SectionTitleRenderProps } from './types'
import { TitleBlock } from './index'

const user = userEvent.setup()

const mockMatchMedia = (matches: boolean = false): void => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

describe('<TitleBlock />', () => {
  beforeEach(() => {
    mockMatchMedia()
  })
  describe('when the primary action is a button with only an href', () => {
    const primaryActionAsLink = {
      label: 'primaryActionLabel',
      href: '#primaryActionHref',
      primary: true,
    }

    it('renders the primary action button label and href', () => {
      const { getByRole } = render(
        <TitleBlock title="Test Title" primaryAction={primaryActionAsLink}>
          Example
        </TitleBlock>,
      )
      const btn = getByRole('link', { name: primaryActionAsLink.label })
      expect(btn.textContent).toEqual(primaryActionAsLink.label)
      expect(btn.getAttribute('href')).toEqual(primaryActionAsLink.href)
    })
  })

  describe('when the primary action is a button with only an onClick', () => {
    const testOnClickFn = vi.fn()
    const primaryActionAsButton = {
      label: 'primaryActionLabel',
      onClick: testOnClickFn,
      primary: true,
    }

    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it('renders the primary action button label and onClick', async () => {
      const { getByRole } = render(
        <TitleBlock title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlock>,
      )
      const btn = getByRole('button', { name: primaryActionAsButton.label })
      expect(btn.textContent).toEqual(primaryActionAsButton.label)
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
    })
  })

  describe('when the primary action is disabled', () => {
    const testOnClickFn = vi.fn()
    const primaryActionAsButton = {
      label: 'primaryActionLabel',
      onClick: testOnClickFn,
      disabled: true,
      primary: true,
    }
    const primaryActionAsLink = {
      label: 'primaryActionLabel',
      href: '#primaryActionHref',
      disabled: true,
      primary: true,
    }
    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it('renders a disabled primary action button', async () => {
      const { getByRole } = render(
        <TitleBlock title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlock>,
      )
      const btn = getByRole('button', { name: primaryActionAsButton.label }) as HTMLButtonElement
      expect(btn.textContent).toEqual(primaryActionAsButton.label)
      expect(btn.disabled).toBeTruthy()
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).not.toHaveBeenCalled()
      })
    })

    it('renders a disabled primary action link button', () => {
      const { getByRole } = render(
        <TitleBlock title="Test Title" primaryAction={primaryActionAsLink}>
          Example
        </TitleBlock>,
      )
      const btn = getByRole('button', { name: primaryActionAsButton.label }) as HTMLButtonElement
      expect(btn.textContent).toEqual(primaryActionAsLink.label)
      expect(btn.getAttribute('href')).not.toEqual(primaryActionAsLink.href)
    })
  })

  describe('when the primary action is a button with both an href and an onClick', () => {
    const testOnClickFn = vi.fn()
    const primaryActionAsLinkAndOnClick = {
      label: 'primaryActionLabel',
      href: '#primaryActionHref',
      onClick: testOnClickFn,
      primary: true,
    }

    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it('renders the primary action button label, href and onClick', async () => {
      const { getByRole } = render(
        <TitleBlock title="Test Title" primaryAction={primaryActionAsLinkAndOnClick}>
          Example
        </TitleBlock>,
      )
      const btn = getByRole('link', { name: primaryActionAsLinkAndOnClick.label })
      expect(btn.textContent).toEqual(primaryActionAsLinkAndOnClick.label)
      expect(btn.getAttribute('href')).toEqual(primaryActionAsLinkAndOnClick.href)
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
    })
  })

  describe('when the primary action is a menu', () => {
    const primaryActionAsMenu = {
      label: 'primaryActionLabel',
      menuItems: [
        {
          label: 'Menu item 1',
          href: '#',
        },
        {
          label: 'Menu item 1',
          href: '#',
        },
      ],
    }

    it('renders the primary action menu button with label and menu items', async () => {
      const { getByRole, getAllByRole } = render(
        <TitleBlock title="Test Title" primaryAction={primaryActionAsMenu}>
          Example
        </TitleBlock>,
      )
      const btn = getByRole('button', { name: primaryActionAsMenu.label })
      expect(btn).toHaveAccessibleName(primaryActionAsMenu.label)
      await user.click(btn)

      await waitFor(() => {
        const menuItems = getAllByRole('listitem')
        expect(menuItems.length).toEqual(2)
      })
    })
  })

  describe('when the default action is a button with only an href', () => {
    const defaultActionAsLink = {
      label: 'defaultActionLabel',
      href: '#defaultActionHref',
    }

    it('renders the default action button label and href', () => {
      const { getByRole } = render(
        <TitleBlock title="Test Title" defaultAction={defaultActionAsLink}>
          Example
        </TitleBlock>,
      )
      const btn = getByRole('link', { name: defaultActionAsLink.label })
      expect(btn.textContent).toEqual(defaultActionAsLink.label)
      expect(btn.getAttribute('href')).toEqual(defaultActionAsLink.href)
    })
  })

  describe('when the default action is a button with only an onClick', () => {
    const testOnClickFn = vi.fn()
    const defaultActionAsButton = {
      label: 'defaultActionLabel',
      onClick: testOnClickFn,
    }

    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it('renders the default action button label and onClick', async () => {
      const { getByRole } = render(
        <TitleBlock title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlock>,
      )
      const btn = getByRole('button', { name: defaultActionAsButton.label })
      expect(btn.textContent).toEqual(defaultActionAsButton.label)
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
    })
  })

  describe('when the default action is a button with both an href and an onClick', () => {
    const testOnClickFn = vi.fn()
    const defaultActionAsLinkAndOnClick = {
      label: 'defaultActionLabel',
      href: '#defaultActionHref',
      onClick: testOnClickFn,
    }

    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it('renders the default action button label, href and onClick', async () => {
      const { getByRole } = render(
        <TitleBlock title="Test Title" defaultAction={defaultActionAsLinkAndOnClick}>
          Example
        </TitleBlock>,
      )
      const btn = getByRole('link', { name: defaultActionAsLinkAndOnClick.label })
      expect(btn.textContent).toEqual(defaultActionAsLinkAndOnClick.label)
      expect(btn.getAttribute('href')).toEqual(defaultActionAsLinkAndOnClick.href)
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
    })
  })

  describe('when the default action is disabled', () => {
    const testOnClickFn = vi.fn()
    const defaultActionAsButton = {
      label: 'defaultActionLabel',
      onClick: testOnClickFn,
      disabled: true,
    }
    const defaultActionAsLink = {
      label: 'defaultActionLabel',
      href: '#defaultActionHref',
      disabled: true,
    }

    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it('renders a disabled default action button', async () => {
      const { getByRole } = render(
        <TitleBlock title="Test Title" defaultAction={defaultActionAsButton}>
          Example
        </TitleBlock>,
      )
      const btn = getByRole('button', { name: defaultActionAsButton.label }) as HTMLButtonElement
      expect(btn.textContent).toEqual(defaultActionAsButton.label)
      expect(btn.disabled).toBeTruthy()
      await user.click(btn)

      await waitFor(() => {
        expect(testOnClickFn).not.toHaveBeenCalled()
      })
    })

    it('renders a disabled default action link button', () => {
      const { getByRole } = render(
        <TitleBlock title="Test Title" defaultAction={defaultActionAsLink}>
          Example
        </TitleBlock>,
      )
      const btn = getByRole('button', { name: defaultActionAsLink.label }) as HTMLButtonElement
      expect(btn.textContent).toEqual(defaultActionAsLink.label)
      expect(btn.getAttribute('href')).not.toEqual(defaultActionAsLink.href)
    })
  })

  describe('when a secondary action is passed with both an href and an onClick', () => {
    const testOnClickFn = vi.fn()
    const secondaryActionWithLinkAndOnClick = {
      label: 'secondaryActionLabel',
      href: '#secondaryActionHref',
      onClick: testOnClickFn,
    }

    beforeEach(() => {
      testOnClickFn.mockClear()
    })

    it('renders the secondary action with both the href and onClick', async () => {
      const mockWarnFn = vi.fn()
      const spy = vi.spyOn(global.console, 'warn').mockImplementation(mockWarnFn)
      const { getByRole } = render(
        <TitleBlock title="Test Title" secondaryActions={[secondaryActionWithLinkAndOnClick]}>
          Example
        </TitleBlock>,
      )
      const btn = getByRole('link', {
        name: secondaryActionWithLinkAndOnClick.label,
      })
      expect(btn).toBeTruthy()
      expect(mockWarnFn).toBeCalled()
      expect(btn.textContent).toEqual(secondaryActionWithLinkAndOnClick.label)
      expect(btn.getAttribute('href')).toEqual(secondaryActionWithLinkAndOnClick.href)
      await user.click(btn)
      await waitFor(() => {
        expect(testOnClickFn).toHaveBeenCalled()
      })
      spy.mockRestore()
    })
  })

  describe('when a custom component is provided for section title', () => {
    it('renders a custom element in section title', async () => {
      const expectedText = 'This is a button'
      const CustomComponent = (props: SectionTitleRenderProps): JSX.Element => (
        <button type="button">{props.sectionTitle}</button>
      )
      render(
        <TitleBlock
          title="Test title"
          sectionTitle={expectedText}
          renderSectionTitle={CustomComponent}
        />,
      )
      const el = await screen.findByRole('button')
      expect(el.textContent).toBe(expectedText)
    })

    it('renders a heading when no render prop is provided', async () => {
      const expectedText = 'My expected text'
      render(<TitleBlock title="Test title" sectionTitle={expectedText} />)
      const el = await screen.findByRole('heading', { level: 2 })
      expect(el.textContent).toBe(expectedText)
    })
  })

  describe('automation ID behaviour', () => {
    describe('when default automation IDs are not provided alongside required conditional renders', () => {
      it('renders the default automation IDs', () => {
        const automationdIds = {
          titleAutomationId: 'TitleBlock__Title',
          avatarAutomationId: 'TitleBlock__Avatar',
          subtitleAutomationId: 'TitleBlock__Subtitle',
          sectionTitleAutomationId: 'TitleBlock__SectionTitle',
          sectionTitleDescriptionAutomationId: 'TitleBlock__SectionTitleDescription',
          breadcrumbAutomationId: 'TitleBlock__Breadcrumb',
          breadcrumbTextAutomationId: 'TitleBlock__BreadcrumbText',
        }

        const { container } = render(
          <TitleBlock
            title="Test Title"
            subtitle="Test Subtitle"
            avatar={<div>Test JSX Avatar Component</div>}
            breadcrumb={{
              text: 'Test Breadcrumb',
              path: '/',
              handleClick: vi.fn(),
            }}
            sectionTitle="Test Section Title"
            sectionTitleDescription="Test Section Title Description"
          >
            Example
          </TitleBlock>,
        )

        for (const automationId of Object.values(automationdIds)) {
          expect(container.querySelector(`[data-automation-id="${automationId}"]`)).toBeTruthy()
        }
      })
    })

    describe('when default automation IDs are provided alongside required conditional renders', () => {
      it('renders the provided automation IDs', () => {
        const automationdIds = {
          titleAutomationId: 'titleBlockTitle',
          avatarAutomationId: 'titleBlockAvatar',
          subtitleAutomationId: 'titleBlockSubtitle',
          sectionTitleAutomationId: 'titleBlockSectionTitle',
          sectionTitleDescriptionAutomationId: 'titleBlockSectionTitleDescription',
          breadcrumbAutomationId: 'breadcrumbAutomationId',
          breadcrumbTextAutomationId: 'breadcrumbTextAutomationId',
        }

        const { container } = render(
          <TitleBlock
            title="Test Title"
            subtitle="Test Subtitle"
            avatar={<div>Test JSX Avatar Component</div>}
            breadcrumb={{
              text: 'Test Breadcrumb',
              path: '/',
              handleClick: vi.fn(),
            }}
            sectionTitle="Test Section Title"
            sectionTitleDescription="Test Section Title Description"
            titleAutomationId={automationdIds.titleAutomationId}
            avatarAutomationId={automationdIds.avatarAutomationId}
            subtitleAutomationId={automationdIds.subtitleAutomationId}
            sectionTitleAutomationId={automationdIds.sectionTitleAutomationId}
            sectionTitleDescriptionAutomationId={automationdIds.sectionTitleDescriptionAutomationId}
            breadcrumbAutomationId={automationdIds.breadcrumbAutomationId}
            breadcrumbTextAutomationId={automationdIds.breadcrumbTextAutomationId}
          >
            Example
          </TitleBlock>,
        )

        for (const automationId of Object.values(automationdIds)) {
          expect(container.querySelector(`[data-automation-id="${automationId}"]`)).toBeTruthy()
        }
      })
    })
  })

  describe('breadcrumb', () => {
    it('renders a link when you pass a path prop', () => {
      render(
        <TitleBlock
          title="Test Title"
          breadcrumb={{
            text: 'Back',
            path: '/path/to/somewhere',
            handleClick: (): void => undefined,
          }}
        >
          Example
        </TitleBlock>,
      )

      expect(screen.getByRole('link', { name: 'Back' })).toBeInTheDocument()
    })

    it("renders a button when you don't pass a path prop", () => {
      render(
        <TitleBlock
          title="Test Title"
          breadcrumb={{
            text: 'Back',
            handleClick: (): void => undefined,
          }}
        >
          Example
        </TitleBlock>,
      )

      expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument()
    })

    it("renders a custom component when you pass a 'render' prop", async () => {
      const mockFn = vi.fn()

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
        <TitleBlock
          title="Test Title"
          breadcrumb={{
            text: 'Back',
            handleClick: mockFn,
            render: CustomComponent,
          }}
        >
          Example
        </TitleBlock>,
      )

      const customElement = screen.getByTestId('custom-component')
      expect(customElement).toHaveTextContent('Back')
      await user.click(customElement)

      await waitFor(() => {
        expect(mockFn).toBeCalled()
      })
    })
  })

  describe("renders a custom component when you pass a 'component' prop to a action", () => {
    const MockLinkComponent = (props: any): JSX.Element => (
      <a className={props.className} href={props.href} data-testid={props['data-testid']}>
        {props.children}
      </a>
    )
    const MockButtonComponent = (props: any): JSX.Element => (
      <button
        type="button"
        className={props.className}
        onClick={props.onClick}
        data-testid={props['data-testid']}
      >
        {props.children}
      </button>
    )

    describe('primaryAction', () => {
      it('will render a custom anchor component in the main action toolbar', () => {
        render(
          <TitleBlock
            title="Test Title"
            primaryAction={{
              label: 'Primary action',
              href: '#test-primary',
              component: MockLinkComponent,
            }}
          >
            Example
          </TitleBlock>,
        )
        const toolbar = screen.getByTestId('title-block-main-actions-toolbar')
        within(toolbar).getByRole('link', {
          name: 'Primary action',
        })
        expect(
          within(toolbar).getByRole('link', {
            name: 'Primary action',
          }),
        ).toHaveAttribute('href', '#test-primary')
      })

      it('will render custom button with children and not label', () => {
        const testClickFunc = vi.fn()
        render(
          <TitleBlock
            title="Test Title"
            primaryAction={{
              label: 'Primary action',
              onClick: testClickFunc,
              component: (props): JSX.Element => (
                <MockButtonComponent {...props}>This will replace label</MockButtonComponent>
              ),
            }}
          >
            Example
          </TitleBlock>,
        )
        const toolbar = screen.getByTestId('title-block-main-actions-toolbar')
        within(toolbar).getByRole('button', {
          name: 'This will replace label',
        })
        expect(
          within(toolbar).queryByRole('button', {
            name: 'Primary action',
          }),
        ).toBeFalsy()
      })
    })

    describe('secondaryActions', () => {
      it('will render multiple custom anchor components in the secondary actions toolbar', () => {
        render(
          <TitleBlock
            title="Test Title"
            secondaryActions={[
              {
                label: 'Secondary action 1',
                href: '#test-secondary',
                component: MockLinkComponent,
              },
              {
                label: 'Secondary action 2',
                href: '#test-secondary-2',
                component: MockLinkComponent,
              },
            ]}
          >
            Example
          </TitleBlock>,
        )
        const toolbar = screen.getByTestId('title-block-secondary-actions-toolbar')
        const links = within(toolbar).getAllByRole('link')
        expect(links.length).toBe(2)
        expect(links[0]).toHaveAttribute('href', '#test-secondary')
        expect(links[1]).toHaveAttribute('href', '#test-secondary-2')
      })
    })

    describe('defaultAction', () => {
      it('will render a custom anchor components in the main action toolbar', () => {
        render(
          <TitleBlock
            title="Test Title"
            defaultAction={{
              label: 'Default action',
              href: '#test-default',
              component: MockLinkComponent,
            }}
          >
            Example
          </TitleBlock>,
        )
        const toolbar = screen.getByTestId('title-block-main-actions-toolbar')
        const defaultActionAnchor = within(toolbar).getByRole('link', {
          name: 'Default action',
        })
        expect(defaultActionAnchor).toHaveAttribute('href', '#test-default')
      })
    })
  })
})
