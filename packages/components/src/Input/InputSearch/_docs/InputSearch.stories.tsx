import { Meta, StoryObj } from "@storybook/react"
import { InputSearch } from "../index"

const meta = {
  title: "KAIO-staging/Inputs/InputSearch",
  component: InputSearch,
  args: {
    id: "search",
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `TextField` where label is present
            id: "label",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof InputSearch>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Secondary: Story = {
  args: { secondary: true },
}

export const Loading: Story = {
  args: { loading: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Reversed: Story = {
  args: { reversed: true },
  parameters: { backgrounds: { default: "Purple 700" } },
}
