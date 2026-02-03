// import { type Meta, type StoryObj } from "storybook"
import { ToggleSwitchField } from '../ToggleSwitchField'

const meta = {
  title: 'Components/ToggleSwitchField',
  component: ToggleSwitchField,
  args: {
    labelText: 'Toggle me',
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

export const Reversed: Story = {
  args: { reversed: true },
  globals: {
    backgrounds: {
      value: "purple_700"
    }
  },
}
