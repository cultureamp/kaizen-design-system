// import { type Meta, type StoryObj } from "storybook"
import { Pagination } from '../index'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    currentPage: 2,
    ariaLabelPage: 'Home',
    ariaLabelNextPage: 'Next page',
    ariaLabelPreviousPage: 'Previous page',
    pageCount: 10,
    onPageChange: () => {
      alert('Page changed')
    },
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
