import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { TextAreaField } from "../index"

const meta = {
  title: "Components/Text Input controls/Text Area Field",
  component: TextAreaField,
  args: {
    labelText: "Label",
  },
} satisfies Meta<typeof TextAreaField>

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

export const Variant: Story = {
  render: () => (
    <div className="kz-flex kz-gap-16">
      <TextAreaField labelText="Default" variant="default" />
      <TextAreaField labelText="Prominent" variant="prominent" />
    </div>
  ),
}

export const Description: Story = {
  args: { description: "A short description" },
}

export const Validation: Story = {
  render: () => (
    <div className="kz-flex kz-gap-16">
      <TextAreaField labelText="Label" value="Default" />
      <TextAreaField
        labelText="Label"
        value="Caution"
        status="caution"
        validationMessage="Just a little bit incorrect"
      />
      <TextAreaField
        labelText="Label"
        value="Error"
        status="error"
        validationMessage="Absolutely wrong"
      />
    </div>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Autogrow: Story = {
  args: {
    autogrow: true,
    defaultValue:
      "Bacon ipsum dolor amet tenderloin buffalo kevin salami flank cupim. Leberkas rump ham tri-tip hamburger. Hamburger ball tip cupim meatball. Short loin tenderloin pork belly, short ribs prosciutto alcatra meatloaf chislic boudin buffalo pig jerky. Frankfurter meatloaf flank bacon, porchetta prosciutto swine. Jerky ham ball tip, venison hamburger meatball pancetta drumstick prosciutto shank boudin beef pork chop chicken t-bone.",
  },
}

// Inline should be documented but currently the styles for <FieldGroup inline /> don't match expectations
// ie. it appears block level no matter what you do.
// export const Inline: Story = {
//   args: { inline: true },
// }

export const Reversed: Story = {
  args: { reversed: true },
  decorators: [
    Story => (
      <div className="kz-bg-purple-700 kz-p-16">
        <Story />
      </div>
    ),
  ],
}
