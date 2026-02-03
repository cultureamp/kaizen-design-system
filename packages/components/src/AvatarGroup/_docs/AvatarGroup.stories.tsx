// import { type Meta, type StoryObj } from "storybook"
import { AvatarGroup } from '../index'
import { AVATARS } from './example-data'

const meta = {
  title: 'Components/Avatar/Avatar Group',
  component: AvatarGroup,
  args: {
    maxVisible: 2,
    size: 'medium',
    avatars: AVATARS,
  },
} satisfies any

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
