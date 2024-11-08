import React, { useRef, useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import isChromatic from "chromatic"
import { ModalAccessibleDescription } from "~components/Modal"
import { Text } from "~components/Text"
import { TextField } from "~components/TextField"
import { chromaticModalSettings } from "../../_docs/controls"
import { InputEditModal } from "../index"

const IS_CHROMATIC = isChromatic()

const ExampleForm = (): JSX.Element => (
  <>
    <ModalAccessibleDescription>
      <Text variant="body">Instructive text to drive user selection goes here.</Text>
    </ModalAccessibleDescription>
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
    children: <ExampleForm />,
    submitLabel: "Submit label",
    onSubmit: fn(),
    onDismiss: fn(),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    mood: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof InputEditModal>

export default meta

type Story = StoryObj<typeof meta>

const InputModalTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(IS_CHROMATIC)

    const handleOpen = (): void => setIsOpen(true)
    const handleClose = (): void => setIsOpen(false)

    return (
      <>
        <button type="button" className="border border-gray-500" onClick={handleOpen}>
          Open Modal
        </button>
        <InputEditModal {...args} isOpen={isOpen} onSubmit={handleClose} onDismiss={handleClose} />
      </>
    )
  },
}

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

export const Default: Story = {
  ...InputModalTemplate,
  ...chromaticModalSettings,
}

export const Unpadded: Story = {
  ...InputModalTemplate,
  args: { unpadded: true },
  ...chromaticModalSettings,
}

export const OnAfterEnter: Story = {
  ...chromaticModalSettings,
  args: {
    title: "Create new link",
    submitLabel: "Add link",
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(IS_CHROMATIC)
    const inputRef = useRef<HTMLInputElement>(null)
    const handleOpen = (): void => setIsOpen(true)
    const handleClose = (): void => setIsOpen(false)

    return (
      <>
        <button type="button" className="border border-gray-500" onClick={handleOpen}>
          Create a link
        </button>
        <InputEditModal
          {...args}
          isOpen={isOpen}
          onSubmit={handleClose}
          onDismiss={handleClose}
          onAfterEnter={() => inputRef.current?.focus()}
        >
          <form>
            <TextField inputRef={inputRef} labelText="Link URL" />
          </form>
        </InputEditModal>
      </>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
        // The label of the button and the input it is focused to may provide enough context.
        <button
          onClick={handleOpen}
        >
          Create a link
        </button>
        <InputEditModal
          {...args}
          isOpen={isOpen}
          onSubmit={handleClose}
          onDismiss={handleClose}
          onAfterEnter={() => inputRef.current?.focus()}
        >
          <form>
            <TextField inputRef={inputRef} labelText="Link URL" />
          </form>
        </InputEditModal>
        `,
      },
    },
  },
}
