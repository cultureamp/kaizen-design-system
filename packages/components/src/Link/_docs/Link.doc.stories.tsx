import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Text } from '~components/Text'
import { Icon } from '~components/__rc__/Icon'
import { Link } from '../Link'

const meta = {
  title: 'Components/Link',
  component: Link,
  args: {
    children: 'Link',
    href: 'https://www.google.com',  
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'white'],
    },
    size: {
      options: ['intro-lede', 'body', 'small', 'extra-small'],
    },
    icon: {
      options: ['arrow_forward', 'open_in_new'],
      mapping: {
        // eslint-disable-next-line camelcase
        arrow_forward: <Icon isPresentational name="arrow_forward" />,
        // eslint-disable-next-line camelcase
        open_in_new: <Icon isPresentational name="open_in_new" />,
      },
      description:
        'Renders an icon at the specified `iconPosition`. For size scaling, use the `Icon` component from `"@kaizen/components/future"`. See [all available icons](https://cultureamp.design/?path=/docs/components-icon-icon-future-api-specification--docs)',
    },
  },
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (props) =>
    props.variant !== 'white' ? (
      <Link {...props} />
    ) : (
      <div className="flex p-12 bg-purple-600">
        {' '}
        <Link {...props} />
      </div>
    ),
}

export const LinkVariants: Story = {
  render: (props) => (
    <>
      <Link {...props} variant="primary" />
      <br />
      <Link {...props} variant="secondary" />
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-8">
        <Story />
      </div>
    ),
  ],
}

export const LinkVariantWhite: Story = {
  render: (props) => <Link {...props} variant="white" />,
  parameters: {
    reverseColors: true,
  },
}

export const LinkWithIconStart: Story = {
  render: (props) => (
    <Link {...props} icon={<Icon name="add" isPresentational />} iconPosition="start" />
  ),
}

export const LinkWithIconEnd: Story = {
  render: (props) => (
    <Link {...props} icon={<Icon name="add" isPresentational />} iconPosition="end" />
  ),
}

export const LinkOpensInNewTab: Story = {
  render: (props) => (
    <Link
      {...props}
      target="_blank"
      icon={<Icon name="open_in_new" isPresentational />}
      iconPosition="end"
    />
  ),
}

export const WithText: Story = {
  render: ({ size: _, ...otherArgs }) => (
    <>
      <Text variant="intro-lede">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque amet atque. Dolores
        repellendus eligendi <span style={{ textDecoration: 'underline' }}> totam.</span>{' '}
        <Link {...otherArgs} icon={<Icon name="add" isPresentational />} isInline /> Mollitia vero
        asperiores assumenda, odit ratione id perspiciatis suscipit molestias quas facere, commodi
        saepe! Quisquam, quidem quas a quos quae quia quidem, quod, voluptates, dolorum quibusdam.
        Quisquam, quidem quas a quos quae
      </Text>
      <br />
      <Text variant="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque amet atque. Dolores
        repellendus eligendi <span style={{ textDecoration: 'underline' }}> totam.</span>{' '}
        <Link
          {...otherArgs}
          icon={<Icon name="add" isPresentational />}
          isInline
          size={undefined}
        />
        Mollitia vero asperiores assumenda, odit ratione id perspiciatis suscipit molestias quas
        facere, commodi saepe! Quisquam, quidem quas a quos quae quia quidem, quod, voluptates,
        dolorum quibusdam. Quisquam, quidem quas a quos quae
      </Text>
      <br />
      <Text variant="small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque amet atque. Dolores
        repellendus eligendi <span style={{ textDecoration: 'underline' }}> totam.</span>{' '}
        <Link {...otherArgs} icon={<Icon name="add" isPresentational />} isInline /> Mollitia vero
        asperiores assumenda, odit ratione id perspiciatis suscipit molestias quas facere, commodi
        saepe! Quisquam, quidem quas a quos quae quia quidem, quod, voluptates, dolorum quibusdam.
        Quisquam, quidem quas a quos quae
      </Text>
      <br />
      <Text variant="extra-small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque amet atque. Dolores
        repellendus eligendi <span style={{ textDecoration: 'underline' }}> totam.</span>{' '}
        <Link {...otherArgs} icon={<Icon name="add" isPresentational />} isInline /> Mollitia vero
        asperiores assumenda, odit ratione id perspiciatis suscipit molestias quas facere, commodi
        saepe! Quisquam, quidem quas a quos quae quia quidem, quod, voluptates, dolorum quibusdam.
        Quisquam, quidem quas a quos quae
      </Text>
    </>
  ),
}

// Links of every different size
export const LinkSizes: Story = {
  render: ({ children: _, size: __, isInline: ___, ...otherArgs }) => (
    <>
      <Link size="extra-small" {...otherArgs}>
        Extra Small
      </Link>
      <br />
      <Link {...otherArgs} size="small">
        Small
      </Link>
      <br />
      <Link {...otherArgs} size="body">
        Body
      </Link>
      <br />
      <Link {...otherArgs} size="intro-lede">
        Intro Lede
      </Link>
    </>
  ),
}

export const StandaloneLinkDo: Story = {
  render: (props) => <Link {...props}>Learn more about demographics</Link>,
}

export const StandaloneLinkDont: Story = {
  render: ({ size: _, ...otherArgs }) => (
    <Text variant="body">
      Learn more about{' '}
      <Link {...otherArgs} isInline>
        demographics
      </Link>
    </Text>
  ),
}

export const OneLinkInSentence: Story = {
  render: (props) => (
    <Text variant="body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad nobis, ut aspernatur deserunt
      fuga expedita amet architecto{' '}
      <Link {...props} isInline size={undefined}>
        pariatur cum itaque
      </Link>{' '}
      dicta veritatis inventore ea esse rem dolore natus! Architecto.
    </Text>
  ),
}

export const FiveLinksInSentence: Story = {
  render: ({ size: _, ...otherArgs }) => (
    <Text variant="body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo{' '}
      <Link {...otherArgs} isInline>
        {' '}
        ad nobis
      </Link>
      , ut aspernatur{' '}
      <Link {...otherArgs} isInline>
        deserunt fuga expedita amet architecto
      </Link>{' '}
      <Link {...otherArgs} isInline>
        pariatur cum itaque
      </Link>{' '}
      dicta veritatis{' '}
      <Link {...otherArgs} isInline>
        inventore ea
      </Link>{' '}
      esse rem dolore{' '}
      <Link {...otherArgs} isInline>
        natus
      </Link>
      ! Architecto.
    </Text>
  ),
}

export const ExternalIconLink: Story = {
  render: (props) => <Link {...props} icon={<Icon name="open_in_new" isPresentational />} />,
}

export const RandomIconLink: Story = {
  render: (props) => <Link {...props} icon={<Icon name="flag" isPresentational />} />,
}

export const DistinctNamedLink: Story = {
  render: (props) => <Link {...props}>View Q4 2024 dataset</Link>,
}

export const GenericNamedLink: Story = {
  render: (props) => <Link {...props}>Learn more</Link>,
}
