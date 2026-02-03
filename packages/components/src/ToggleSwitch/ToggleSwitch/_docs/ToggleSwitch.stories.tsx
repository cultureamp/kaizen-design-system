// import { type Meta, type StoryObj } from "storybook"
import { ToggleSwitch } from '../index'

const meta = {
  title: 'Components/ToggleSwitchField/ToggleSwitch (primitive)',
  component: ToggleSwitch,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `ToggleSwitchField` where label is present
            id: 'label',
            enabled: false,
          },
        ],
      },
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

export const Reversed: Story = {
  args: { reversed: true },
  globals: {
    backgrounds: {
      value: "purple_700"
    }
  },
}
