import React, { useState } from "react"
import { StoryObj, Meta } from "@storybook/react"
import { AddIcon, ArrowRightIcon } from "~components/Icon"
import { LoadingInput } from "~components/Loading"
import { TextField } from "~components/TextField"
import { Button } from "../index"

const meta = {
  title: "Components/Buttons/Button",
  component: Button,
  args: {
    label: "Label",
  },
} satisfies Meta<typeof Button>

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

export const Variants: Story = {
  render: ({ reversed }) => (
    <>
      <Button label="Default" reversed={reversed} />
      <Button label="Primary" primary reversed={reversed} />
      <Button label="Destructive" destructive reversed={reversed} />
      <Button label="Secondary" secondary reversed={reversed} />
      {!reversed && (
        <Button label="Secondary Destructive" secondary destructive />
      )}
    </>
  ),
  decorators: [
    Story => (
      <div style={{ display: "flex", gap: "1rem" }}>
        <Story />
      </div>
    ),
  ],
  parameters: { controls: { disable: true } },
}

export const Reversed: Story = {
  ...Variants,
  args: { reversed: true },
  parameters: {
    ...Variants.parameters,
    backgrounds: { default: "Purple 700" },
  },
}

export const Disabled: Story = {
  args: { disabled: true },
}

const sourceCodeIcon = `
import { Button, AddIcon } from "@kaizen/components"

<Button label="Label" icon={<AddIcon role="presentation" />} />
`

export const Icon: Story = {
  args: {
    icon: <AddIcon role="presentation" />,
  },
  parameters: {
    docs: { source: { code: sourceCodeIcon } },
  },
}

export const IconPosition: Story = {
  args: {
    icon: <ArrowRightIcon role="presentation" />,
    iconPosition: "end",
  },
}

export const Badge: Story = {
  args: {
    badge: { text: "3", variant: "active" },
    secondary: true,
  },
}

export const FullWidth: Story = {
  args: { fullWidth: true },
}

export const Working: Story = {
  render: () => (
    <>
      <Button label="Label" working workingLabel="Submitting" />
      <Button
        label="Label"
        working
        workingLabel="Submitting"
        workingLabelHidden
      />
    </>
  ),
  decorators: [
    Story => (
      <div style={{ display: "flex", gap: "1rem" }}>
        <Story />
      </div>
    ),
  ],
  parameters: { controls: { disable: true } },
}

export const Loading: Story = {
  render: () => <LoadingInput isAnimated width={13} />,
  parameters: { controls: { disable: true } },
}

export const NativeFormButton: Story = {
  render: () => (
    <>
      <form className="mb-6" id="unique-form-id">
        <TextField labelText="Sample text field" defaultValue="content" />
      </form>
      <Button
        label="Submit"
        type="submit"
        form="unique-form-id"
        formTarget="_blank"
        formAction="/"
        formMethod="get"
        formEncType="text/plain"
        formNoValidate={false}
      />
    </>
  ),
  parameters: { controls: { disable: true } },
}

export const ResolveWorking: Story = {
  render: () => {
    const [state, setState] = useState<"Ready" | "Working" | "Completed">(
      "Ready"
    )
    const handleClick = (): void => {
      if (state === "Ready") {
        setState("Working")
        setTimeout(() => setState("Completed"), 3000)
      } else {
        setState("Ready")
      }
    }

    return (
      <Button
        label={state}
        working={state === "Working"}
        workingLabel="Button is doing some work"
        workingLabelHidden
        onClick={handleClick}
      />
    )
  },
}
