// import { type Meta, type StoryObj } from "storybook"
import { DirectionalLink } from '../index'

const meta = {
  title: 'Components/Pagination/DirectionalLink',
  component: DirectionalLink,
  args: {
    label: 'Back',
    direction: 'prev',
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
