import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { Icon } from '~components/Icon'
import { assetUrl } from '~components/utils/hostedAssets'
import { StickerSheet } from '~storybook/components/StickerSheet'
import { NavigationTab, TitleBlock } from '../index'

const SECONDARY_ACTIONS = [
  {
    label: 'Secondary menu',
    menuItems: [
      {
        onClick: (): void => alert('test'),
        label: 'Secondary menu action 1',
      },
      {
        onClick: (): void => alert('test'),
        label: 'Secondary menu action 2',
        icon: <Icon name="star" isPresentational isFilled />,
      },
    ],
  },
  {
    onClick: (): void => alert('test'),
    label: 'Secondary action',
  },
]

const viewports = {
  viewports: {
    default: {
      name: 'desktop (above or equal to 1366)',
      styles: { width: '1366px', height: '800px' },
      type: 'desktop',
    },
    desktopSm: {
      name: 'desktop-sm (1024 - 1365)',
      styles: { width: '1365px', height: '800px' },
      type: 'desktop',
    },
    tablet: {
      name: 'tablet (672 - 1023)',
      styles: { width: '1023px', height: '800px' },
      type: 'desktop',
    },
    mobileResponsive: {
      name: 'mobile-responsive (512 - 671)',
      styles: { width: '671px', height: '800px' },
      type: 'desktop',
    },
    mobile: {
      name: 'mobile (361 - 512)',
      styles: { width: '511px', height: '800px' },
      type: 'desktop',
    },
    mobileXs: {
      name: 'mobile (under 360)',
      styles: { width: '360px', height: '800px' },
      type: 'desktop',
    },
  },
  defaultViewport: 'default',
}

const chromaticViewports = {
  disable: false,
  viewports: [1366, 1365, 1079, 360, 320],
}

const meta = {
  title: 'Components/TitleBlock',
  component: TitleBlock,
  parameters: {
    chromatic: { disable: false },
    layout: 'fullscreen',
  },
  args: {
    title: 'Page title',
    surveyStatus: { text: 'Due July 8, 2030', status: 'default' },
    avatar: {
      avatarSrc: assetUrl('site/empty-state.png'),
      fullName: 'Blanca Wheeler',
    },
    primaryAction: {
      // label: 'Primary link',
      label: 'Coach',
      // icon: <Icon name="add" isPresentational />,
      disabled: true,
      href: '#',
    },
    defaultAction: {
      label: 'Default link',
      href: '#',
    },
    secondaryActions: SECONDARY_ACTIONS,
    secondaryOverflowMenuItems: [
      {
        label: 'Overflow action 1',
        icon: <Icon name="star" isPresentational isFilled />,
      },
      {
        label: 'Overflow link 1',
        icon: <Icon name="star" isPresentational isFilled />,
      },
    ],
    handleHamburgerClick: (): void => alert('Hamburger clicked'),
    breadcrumb: {
      path: '#',
      text: 'Back to home',
      handleClick: (): void => alert('breadcrumb clicked!'),
    },
    navigationTabs: [
      <NavigationTab key="1" text="Label" href="#" active />,
      <NavigationTab key="2" text="Label" href="#" />,
      <NavigationTab key="3" text="Label" href="#" />,
      <NavigationTab key="4" text="Label" href="#" />,
      <NavigationTab key="5" text="Label" href="#" />,
      <NavigationTab key="6" text="Label" href="#" />,
    ],
  },
} satisfies Meta<typeof TitleBlock>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

export const Viewports: Story = {
  parameters: {
    viewport: viewports,
    chromatic: chromaticViewports,
  },
}
export const WithTabNavigation: Story = {
  parameters: {
    viewport: viewports,
    chromatic: chromaticViewports,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)

    const TabNavigation = await canvas.findByRole('navigation', {
      name: 'Page title',
    })

    await step('Navigation Tab is present', async () => {
      await waitFor(() => expect(TabNavigation).toBeInTheDocument())
    })

    await step('Navigation is focusable', async () => {
      const NavigationList = canvas.getByRole('list')
      const listItems = within(NavigationList).getAllByRole('listitem')

      const thirdNavigationLink = within(listItems[2]).getByRole('link')
      thirdNavigationLink.focus()
      expect(thirdNavigationLink).toHaveFocus()
    })
  },
}

export const HasLongTitle: Story = {
  parameters: {
    viewport: viewports,
    chromatic: chromaticViewports,
  },
  args: { title: 'A long title with over thirty characters' },
}

export const LightVariant: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
    viewport: viewports,
    chromatic: chromaticViewports,
  },
  args: {
    variant: 'light',
    title:
      // 'Harper Jones somethi',
      'Harper Jones something very long s s something very long ssomething very long ssomething very long s',
    navigationTabs: [
      <NavigationTab key="1" variant="light" text="Label" href="#" active />,
      <NavigationTab key="2" variant="light" text="Label" href="#" />,
      <NavigationTab key="3" variant="light" text="Label" href="#" />,
      <NavigationTab key="4" variant="light" text="Label" href="#" />,
      <NavigationTab key="5" variant="light" text="Label" href="#" />,
      <NavigationTab key="6" variant="light" text="Label" href="#" />,
    ],
  },
}

export const AdminVariant: Story = {
  parameters: {
    viewport: viewports,
    chromatic: chromaticViewports,
  },
  args: {
    variant: 'admin',
    navigationTabs: [
      <NavigationTab key="1" variant="admin" text="Label" href="#" active />,
      <NavigationTab key="2" variant="admin" text="Label" href="#" />,
      <NavigationTab key="3" variant="admin" text="Label" href="#" />,
      <NavigationTab key="4" variant="admin" text="Label" href="#" />,
      <NavigationTab key="5" variant="admin" text="Label" href="#" />,
      <NavigationTab key="6" variant="admin" text="Label" href="#" />,
    ],
  },
}

export const EducationVariant: Story = {
  parameters: {
    viewport: viewports,
    chromatic: chromaticViewports,
  },
  args: {
    variant: 'education',
    navigationTabs: [
      <NavigationTab key="1" variant="education" text="Label" href="#" active />,
      <NavigationTab key="2" variant="education" text="Label" href="#" />,
      <NavigationTab key="3" variant="education" text="Label" href="#" />,
      <NavigationTab key="4" variant="education" text="Label" href="#" />,
      <NavigationTab key="5" variant="education" text="Label" href="#" />,
      <NavigationTab key="6" variant="education" text="Label" href="#" />,
    ],
  },
}

export const StickerSheetVariants: Story = {
  name: 'Sticker Sheet (Variants)',
  render: () => (
    <StickerSheet title="TitleBlock Variants">
      <StickerSheet.Row header="Default (Purple background)">
        <TitleBlock
          title="Default Variant"
          subtitle="This is the default purple variant with white text"
          breadcrumb={{
            path: '#',
            text: 'Back to home',
          }}
          navigationTabs={[
            <NavigationTab key="1" text="Overview" href="#" active />,
            <NavigationTab key="2" text="Settings" href="#" />,
          ]}
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Education (Purple background)">
        <TitleBlock
          variant="education"
          title="Education Variant"
          subtitle="This is the education variant with purple background"
          breadcrumb={{
            path: '#',
            text: 'Back to courses',
          }}
          navigationTabs={[
            <NavigationTab key="1" text="Lessons" href="#" active />,
            <NavigationTab key="2" text="Assignments" href="#" />,
          ]}
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Admin (White background)">
        <TitleBlock
          variant="admin"
          title="Admin Variant"
          subtitle="This is the admin variant with white background"
          breadcrumb={{
            path: '#',
            text: 'Back to dashboard',
          }}
          navigationTabs={[
            <NavigationTab key="1" text="Users" href="#" active />,
            <NavigationTab key="2" text="Settings" href="#" />,
          ]}
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Light (White background)">
        <TitleBlock
          variant="light"
          title="Light Variant"
          subtitle="This is the light variant with clean white background"
          breadcrumb={{
            path: '#',
            text: 'Back to overview',
          }}
          navigationTabs={[
            <NavigationTab key="1" text="Details" href="#" active />,
            <NavigationTab key="2" text="Analytics" href="#" />,
          ]}
        />
      </StickerSheet.Row>
    </StickerSheet>
  ),
}

export const StickerSheetBreadcrumbs: Story = {
  name: 'Sticker Sheet (Breadcrumb)',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
    pseudo: {
      hover: [
        '#tab-hover-example [class^="TitleBlock-TitleBlock-module__navigationTabsList"] li:nth-child(2) a',
        '#Breadcrumbs-hover-example [class^="TitleBlock-TitleBlock-module__breadcrumb"]',
      ],
      focus: [
        '#tab-focus-example [class^="TitleBlock-TitleBlock-module__navigationTabsList"] li:nth-child(2) a',
        '#Breadcrumbs-focus-example [class^="TitleBlock-TitleBlock-module__breadcrumb"]',
      ],
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast', // false positive from animate in on the breadcrumbs
            enabled: false,
          },
          {
            id: 'landmark-unique', // false positive from having multiple TitleBlocks on a page
            enabled: false,
          },
        ],
      },
    },
  },
  render: (args) => (
    <StickerSheet>
      <StickerSheet.Row header="Tab hover">
        <div className="px-12 bg-purple-600">
          <TitleBlock {...args} id="tab-hover-example" />
        </div>
      </StickerSheet.Row>
      <StickerSheet.Row header="Tab focus">
        <div className="px-12 bg-purple-600">
          <TitleBlock {...args} id="tab-focus-example" />
        </div>
      </StickerSheet.Row>
      <StickerSheet.Row header="Breadcrumbs hover">
        <div className="px-12 bg-purple-600">
          <TitleBlock {...args} id="Breadcrumbs-hover-example" />
        </div>
      </StickerSheet.Row>
      <StickerSheet.Row header="Breadcrumbs focus">
        <div className="px-12 bg-purple-600">
          <TitleBlock {...args} id="Breadcrumbs-focus-example" />
        </div>
      </StickerSheet.Row>
    </StickerSheet>
  ),
}

export const StickerSheetSurveyStatus: Story = {
  name: 'Sticker Sheet (Survey Status)',
  render: () => (
    <StickerSheet title="Survey Status">
      <StickerSheet.Row header="Draft">
        <TitleBlock
          title="Draft Title"
          surveyStatus={{
            text: 'draft text',
            status: 'draft',
          }}
        >
          Draft
        </TitleBlock>
      </StickerSheet.Row>
      <StickerSheet.Row header="Default">
        <TitleBlock
          title="Default Title"
          surveyStatus={{
            text: 'default text',
            status: 'default',
          }}
        >
          Default
        </TitleBlock>
      </StickerSheet.Row>
      <StickerSheet.Row header="Scheduled">
        <TitleBlock
          title="Scheduled Title"
          surveyStatus={{
            text: 'scheduled text',
            status: 'scheduled',
          }}
        >
          Due
        </TitleBlock>
      </StickerSheet.Row>
      <StickerSheet.Row header="Live">
        <TitleBlock
          title="Live Title"
          surveyStatus={{
            text: 'live text',
            status: 'live',
          }}
        >
          Overdue
        </TitleBlock>
      </StickerSheet.Row>
      <StickerSheet.Row header="Closed">
        <TitleBlock
          title="Closed Title"
          surveyStatus={{
            text: 'closed text',
            status: 'closed',
          }}
        >
          Completed
        </TitleBlock>
      </StickerSheet.Row>
      <StickerSheet.Row header="Sentiment Positive">
        <TitleBlock
          title="Sentiment Positive Title"
          surveyStatus={{
            text: 'sentimentPositive text',
            status: 'sentimentPositive',
          }}
        >
          Completed
        </TitleBlock>
      </StickerSheet.Row>
    </StickerSheet>
  ),
}
