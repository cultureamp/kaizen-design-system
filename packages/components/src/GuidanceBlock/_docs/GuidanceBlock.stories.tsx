import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from '~components/Button'
import { Heading } from '~components/Heading'
import { Icon } from '~components/Icon'
import {
  BrandMomentPositiveOutro,
  Informative,
  SkillsCoachEssentialFeedback,
} from '~components/Illustration'
import { LinkButton } from '~components/LinkButton'
import { Text } from '~components/Text'
import { Tooltip as TooltipNext, TooltipTrigger as TooltipTriggerNext } from '~components/Tooltip'
import { GuidanceBlock } from '../index'
import { variantsMap } from '../types'

const ContentComponent = (): JSX.Element => (
  <>
    <Heading tag="h3" variant="heading-3">
      This is the Guidance block title
    </Heading>
    <Text variant="body">
      Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis,
    </Text>
  </>
)

const defaultText = {
  description:
    'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.',
  title: 'This is the Guidance block title',
}

const meta = {
  title: 'Components/GuidanceBlock',
  component: GuidanceBlock,
  args: {
    layout: 'default',
    illustration: <Informative alt="" />,
  },
  argTypes: {
    actions: {
      control: false,
    },
    illustrationType: {
      description:
        'Sets the how the width and aspect ratio will respond to the Illustration passed in.',
    },
    illustration: {
      control: { type: 'radio' },
      options: ['spot', 'scene'],
      mapping: {
        spot: <Informative alt="" />,
        scene: <BrandMomentPositiveOutro alt="" />,
      },
      description:
        'This takes a scene scene or spot element, ie: `<Informative />`. This radio button implementation is a storybook only representation to toggle between the two illustration styles.',
    },
    actionsSlot: {
      control: {
        type: 'select',
      },

      options: [
        'Primary action',
        'Primary and Secondary action',
        'Action with Icon',
        'Action with Tooltip',
      ],
      mapping: {
        'Primary action': (
          <Button variant="secondary" onPress={() => alert('tada: 🎉')}>
            Label
          </Button>
        ),
        'Primary and Secondary action': (
          <>
            <Button variant="secondary" onPress={() => alert('tada: 🎉')}>
              Label
            </Button>
            <LinkButton variant="tertiary" href="#link">
              Secondary action
            </LinkButton>
          </>
        ),
        'Action with Icon': (
          <TooltipTriggerNext defaultOpen>
            <Button
              size="large"
              variant="secondary"
              onPress={() => alert('tada: 🎉')}
              iconPosition="end"
              icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational />}
            >
              Label
            </Button>
            <TooltipNext>Tooltip content</TooltipNext>
          </TooltipTriggerNext>
        ),
        'Action with Tooltip': (
          <TooltipTriggerNext defaultOpen>
            <LinkButton
              variant="secondary"
              href="#lorem"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              iconPosition="end"
            >
              Label
            </LinkButton>
            <TooltipNext>Tooltip content</TooltipNext>
          </TooltipTriggerNext>
        ),
      },
    },
    content: {
      description:
        'If you need to render custom content inside of the `GuidanceBlock` that is more than just a title and description use this prop instead of the default `text` option.',
    },
  },
} satisfies Meta<typeof GuidanceBlock>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    text: defaultText,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

export const Actions: Story = {
  args: {
    content: <ContentComponent />,
    actions: {
      primary: {
        label: 'Label',
        onClick: () => alert('tada: 🎉'),
      },
      secondary: {
        label: 'Label',
        href: '#',
      },
    },
  },
}

export const Tooltip: Story = {
  args: {
    content: <ContentComponent />,
    actions: {
      primary: {
        label: 'Label',
        onClick: () => alert('tada: 🎉'),
        tooltip: {
          text: 'Opens in a new tab',
          mood: 'cautionary',
        },
      },
      secondary: {
        label: 'Label',
        href: '#',
      },
    },
  },
}

export const CustomContent: Story = {
  args: {
    content: <ContentComponent />,
  },
}

export const Stacked: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '36px' }}>
      <GuidanceBlock {...args} />
      <GuidanceBlock {...args} />
    </div>
  ),
  args: {
    layout: 'stacked',
    content: <ContentComponent />,
  },
}

export const SceneExample: Story = {
  args: {
    illustration: <SkillsCoachEssentialFeedback alt="" />,
    illustrationType: 'scene',
    text: defaultText,
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-16">
      {variantsMap.map((variant) => (
        <GuidanceBlock key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
  args: {
    text: defaultText,
  },
}

export const ActionsVsActionsSlot: Story = {
  args: {
    layout: 'default',
    illustration: <Informative alt="" />,
    content: <ContentComponent />,
    actions: {
      dismiss: {
        onClick: () => {
          alert('Dismissed')
        },
      },
      primary: {
        label: 'Label',
        onClick: () => alert('tada: 🎉'),
      },
      secondary: {
        label: 'Label',
        href: '#',
      },
    },
    secondaryDismiss: true,
  },
  render: (args) => (
    <div className="flex flex-col gap-16">
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<ContentComponent />}
        actions={args.actions}
        secondaryDismiss
      />
      <GuidanceBlock
        layout="default"
        illustration={<Informative alt="" />}
        content={<ContentComponent />}
        secondaryDismiss={true}
        actionsSlot={
          <>
            <Button size="large" onPress={() => alert('tada: 🎉')} slot="primary">
              Label
            </Button>
            <Button variant="tertiary" size="large" onPress={() => alert('tada: 🎉')}>
              Label
            </Button>
          </>
        }
      />
    </div>
  ),
}

export const ActionsSlot: Story = {
  args: {
    layout: 'default',
    illustration: <Informative alt="" />,
    content: <ContentComponent />,
    actionsSlot: (
      <>
        <Button
          variant="secondary"
          size="large"
          onPress={() => alert('tada: 🎉')}
          iconPosition="end"
          slot="primary"
        >
          Label
        </Button>
      </>
    ),
  },
  render: (args) => (
    <div className="flex flex-col gap-16">
      <GuidanceBlock {...args} />
    </div>
  ),
}

export const MultipleActions: Story = {
  args: {
    layout: 'default',
    illustration: <Informative alt="" />,
    content: <ContentComponent />,
    actionsSlot: (
      <>
        <Button
          variant="secondary"
          size="large"
          onPress={() => alert('tada: 🎉')}
          iconPosition="end"
          slot="primary"
          icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational />}
        >
          Label
        </Button>
        <LinkButton slot="secondary" variant="tertiary" size="large" href="#">
          Label
        </LinkButton>
      </>
    ),
  },
  render: (args) => (
    <div className="flex flex-col gap-16">
      <GuidanceBlock {...args} />
    </div>
  ),
}

export const ActionsSlotWithTooltips: Story = {
  args: {
    layout: 'default',
    illustration: <Informative alt="" />,
    content: <ContentComponent />,
    actionsSlot: (
      <>
        <TooltipTriggerNext>
          <Button variant="secondary" size="large" onPress={() => alert('tada: 🎉')}>
            Label
          </Button>
          <TooltipNext>Tooltip Content</TooltipNext>
        </TooltipTriggerNext>
        <TooltipTriggerNext>
          <LinkButton variant="tertiary" size="large" href="#">
            Label
          </LinkButton>
          <TooltipNext>Tooltip secondary content</TooltipNext>
        </TooltipTriggerNext>
      </>
    ),
  },
  render: (args) => (
    <div className="flex flex-col gap-16">
      <GuidanceBlock {...args} />
    </div>
  ),
}
