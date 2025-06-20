import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Heading } from '~components/Heading'
import { Link } from '~components/Link'
import { Text } from '~components/Text'
import { Button, Icon } from '~components/__next__'
import { BrandMomentCaptureIntro } from '../index'

const meta = {
  title: 'Components/Illustrations/Scene/BrandMomentCaptureIntro',
  component: BrandMomentCaptureIntro,
} satisfies Meta<typeof BrandMomentCaptureIntro>

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

export const Animated: Story = {
  args: {
    loop: false,
    isAnimated: true,
  },
}

export const Looped: Story = {
  args: {
    isAnimated: true,
    loop: true,
  },
}

export const Autoplay: Story = {
  args: {
    isAnimated: true,
    loop: true,
    autoplay: false,
  },
}

// This is an example that provides a closer representation of how the component is used in the product.
export const CaptureExample: Story = {
  args: {
    isAnimated: true,
    loop: true,
    autoplay: true,
  },
  render: (args) => (
    <div className="bg-blue-100 flex justify-center gap-24 p-16">
      <div className="flex justify-center items-center w-[50%]">
        <BrandMomentCaptureIntro {...args} />
      </div>
      <div className="flex flex-col justify-center w-[50%]">
        <Heading classNameOverride="mb-64" variant="display-0">
          Survey Title
        </Heading>
        <Text classNameOverride="mb-32" variant="body">
          You have been asked to provide feedback for Demonstration Employee.
        </Text>
        <Text classNameOverride="mb-32" variant="body">
          The setting for this survey control how your responses can be used by Hooli.
        </Text>
        <Text classNameOverride="mb-32" variant="body">
          Your information will be stored and processed in accordance with Culture Amp’s{' '}
          <Link href="#">Privacy Policy</Link>. <Link href="#">More on managing information</Link>.
        </Text>
        <div>
          <Button icon={<Icon name={'arrow_forward'} isPresentational />} iconPosition="end">
            Take survey
          </Button>
        </div>
      </div>
    </div>
  ),
}
