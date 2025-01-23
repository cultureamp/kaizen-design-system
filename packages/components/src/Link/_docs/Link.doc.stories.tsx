import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Text } from '~components/Text'
import { Icon } from '~components/__rc__/Icon'
import { Link } from '../Link'

const meta = {
  title: 'Components/Link',
  component: Link,
  args: {
    children: 'Label',
    href: 'https://www.google.com',
    variant: 'primary',
    icon: <Icon name="add" isPresentational />,
    underlined: true,
    isReversed: false,
    isInline: true,
  },
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const WithText: Story = {
  render: (props) => (
    <Text variant="extra-small">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque amet atque. Dolores
      repellendus eligendi <span style={{ textDecoration: 'underline' }}> totam.</span>{' '}
      <Link {...props} /> Mollitia vero asperiores assumenda, odit ratione id perspiciatis suscipit
      molestias quas facere, commodi saepe! Quisquam, quidem quas a quos quae quia quidem, quod,
      voluptates, dolorum quibusdam. Quisquam, quidem quas a quos quae
    </Text>
  ),
}

// Links of every different size
export const Sizes: Story = {
  render: ({ children: _, ...otherArgs }) => (
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
        Medium
      </Link>
      <br />
      <Link {...otherArgs} size="intro-lede">
        Large
      </Link>
    </>
  ),
}
