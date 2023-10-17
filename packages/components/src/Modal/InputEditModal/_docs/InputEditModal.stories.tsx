import React, { useState } from "react"
import { Decorator, Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { ModalDescription } from "~components/Modal/GenericModal/subcomponents/ModalDescription"
import { Text } from "~components/Text"
import { TextField } from "~components/TextField"
import { InputEditModal, InputEditModalProps } from "../index"

const IS_CHROMATIC = isChromatic()

// Add additional height to the stories when running in Chromatic only.
// Modals have fixed position and would be cropped from snapshot tests.
// Setting height to 100vh ensures we capture as much content of the
// modal, as it's height responds to the content within it.
const HeightDecorator: Decorator<InputEditModalProps> = Story => {
  if (IS_CHROMATIC) {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Story />
      </div>
    )
  }

  return <Story />
}

const chromaticModalSettings = {
  parameters: {
    chromatic: {
      disable: false,
      delay: 400, // match MODAL_TRANSITION_TIMEOUT in modals + 50ms
      pauseAnimationAtEnd: true,
    },
  },
  decorators: [HeightDecorator],
}

const InputModalTemplate: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(IS_CHROMATIC)

    const handleOpen = (): void => setIsOpen(true)
    const handleClose = (): void => setIsOpen(false)

    return (
      <>
        <button type="button" onClick={handleOpen}>
          Open Modal
        </button>
        <InputEditModal
          {...args}
          isOpen={isOpen}
          onSubmit={handleClose}
          onDismiss={handleClose}
        />
      </>
    )
  },
}

const ExampleForm = (): JSX.Element => (
  <>
    <ModalDescription>
      <Text variant="body">
        Instructive text to drive user selection goes here.
      </Text>
    </ModalDescription>
    <form>
      <TextField labelText="Opinion" />
    </form>
  </>
)

const meta = {
  title: "Components/Modals/Input Edit Modal",
  component: InputEditModal,
  args: {
    isOpen: false,
    title: "Your input is valuable",
    mood: "positive",
    children: <ExampleForm />,
    submitLabel: "Submit label",
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof InputEditModal>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  ...InputModalTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Positive: Story = {
  ...InputModalTemplate,
  args: { mood: "positive" },
  ...chromaticModalSettings,
}

export const Destructive: Story = {
  ...InputModalTemplate,
  args: { mood: "destructive" },
  ...chromaticModalSettings,
}
