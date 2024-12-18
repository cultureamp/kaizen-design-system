import { type Meta, type StoryObj } from '@storybook/react'
import { GlobalNotification } from '../GlobalNotification'

const meta = {
  title: 'Components/Notifications/GlobalNotification',
  component: GlobalNotification,
  args: {
    variant: 'success',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam natus doloremque',
  },
  argTypes: {
    type: {
      control: false,
    },
  },
} satisfies Meta<typeof GlobalNotification>

export default meta

export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
    a11y: {
      // Fade-in animation has colour contrast issues.
      timeout: 1000,
    },
  },
}

/**
 * `persistent` notification will remain on screen and cannot be removed by the user. This will also remove the fly in animation on page load
 */
export const Persistent: StoryObj<typeof meta> = {
  args: {
    persistent: true,
    variant: 'warning',
    children: 'Please fill in all required fields before submitting',
  },
}
