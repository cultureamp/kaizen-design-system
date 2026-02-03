// import { type Meta, type StoryObj } from "storybook"
import { PaginationLink } from '../index'

const meta = {
  title: 'Components/Pagination/PaginationLink',
  component: PaginationLink,
  args: {
    'pageNumber': 1,
    'aria-label': 'Page 1',
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
