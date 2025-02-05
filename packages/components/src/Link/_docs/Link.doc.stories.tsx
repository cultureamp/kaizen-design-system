import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { ExternalLinkIcon, FlagOffIcon } from '~components/Icon'
import { Text } from '~components/Text'
import { Icon } from '~components/__rc__/Icon'
import { Link } from '../Link'

const meta = {
  title: 'Components/Link',
  component: Link,
  args: {
    children: 'Link',
    href: 'https://www.google.com',
    variant: 'primary',
    isUnderlined: true,
    isReversed: false,
    size: 'body',
  },
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const LinkVariants: Story = {
  render: (props) => (
    <>
      <Link {...props} variant="primary" />
      <br />
      <Link {...props} variant="secondary" />
      <br />
    </>
  ),
}

export const LinkVariantsReversed: Story = {
  ...LinkVariants,
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
  render: (props) => <Link {...props} target="_blank" />,
}

export const WithText: Story = {
  render: (props) => (
    <>
      <Text variant="extra-small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque amet atque. Dolores
        repellendus eligendi <span style={{ textDecoration: 'underline' }}> totam.</span>{' '}
        <Link {...props} icon={<Icon name="add" isPresentational />} isInline /> Mollitia vero
        asperiores assumenda, odit ratione id perspiciatis suscipit molestias quas facere, commodi
        saepe! Quisquam, quidem quas a quos quae quia quidem, quod, voluptates, dolorum quibusdam.
        Quisquam, quidem quas a quos quae
      </Text>

      <Text variant="extra-small">
        <span className="isInline"> Test for inherting inline </span>{' '}
      </Text>
    </>
  ),
}

// Links of every different size
export const LinkSizes: Story = {
  render: ({ children: _, size: __, ...otherArgs }) => (
    <>
      <Link {...otherArgs} size="extra-small">
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
  render: (props) => (
    <Text variant="body">
      Learn more about{' '}
      <Link {...props} isInline>
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
      <Link {...props} isInline>
        pariatur cum itaque
      </Link>{' '}
      dicta veritatis inventore ea esse rem dolore natus! Architecto.
    </Text>
  ),
}

export const FiveLinksInSentence: Story = {
  render: (props) => (
    <Text variant="body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo{' '}
      <Link {...props} isInline>
        {' '}
        ad nobis
      </Link>
      , ut aspernatur{' '}
      <Link {...props} isInline>
        deserunt fuga expedita
      </Link>{' '}
      amet architecto{' '}
      <Link {...props} isInline>
        pariatur cum itaque
      </Link>{' '}
      dicta veritatis{' '}
      <Link {...props} isInline>
        inventore ea
      </Link>{' '}
      esse rem dolore{' '}
      <Link {...props} isInline>
        natus
      </Link>
      ! Architecto.
    </Text>
  ),
}

export const ExternalIconLink: Story = {
  render: (props) => <Link {...props} icon={<ExternalLinkIcon role="presentation" />} />,
}

export const RandomIconLink: Story = {
  render: (props) => <Link {...props} icon={<FlagOffIcon role="presentation" />} />,
}

export const DistinctNamedLink: Story = {
  render: (props) => <Link {...props}>View Q4 2024 dataset</Link>,
}

export const GenericNamedLink: Story = {
  render: (props) => <Link {...props}>Learn more</Link>,
}
