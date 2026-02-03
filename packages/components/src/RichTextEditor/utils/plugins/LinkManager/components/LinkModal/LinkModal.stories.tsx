// import { type Meta, type StoryObj } from "storybook"
import { fn } from 'storybook/test'
import { LinkModal } from './LinkModal'

const meta = {
  title: 'Components/RichTextEditor/Subcomponents/LinkModal',
  component: LinkModal,
  args: {
    onSubmit: fn(),
    onDismiss: fn(),
    onAfterLeave: fn(),
    isOpen: true,
  },
} satisfies any

export default meta

type Story = StoryObj<typeof meta>

export const AddLink: Story = {
  parameters: {
    chromatic: { disable: false },
  },
}

export const EditLink: Story = {
  parameters: {
    chromatic: { disable: false },
  },
  args: {
    defaultHref: 'http://google.com',
  },
}
