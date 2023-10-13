import { Meta, StoryObj } from "@storybook/react"
import { Radio } from "../index"

const meta = {
  title: "Components/Radio controls/Radio",
  component: Radio,
  args: {
    id: "radio",
    name: "name",
    value: "value",
  },
  argTypes: {
    name: {
      description:
        "Unique identifier for the group this Radio belongs to. Required for keyboard navigation of the group. See also [Defining a radio group](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#defining_a_radio_group) on MDN. E.g. the question ID for which this is one possible answer to.",
      table: { type: { summary: "string" } },
    },
    value: {
      description:
        "The value for this form field when this radio button is selected.",
      table: { type: { summary: "string" } },
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `RadioField` where label is present
            id: "label",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof Radio>

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
