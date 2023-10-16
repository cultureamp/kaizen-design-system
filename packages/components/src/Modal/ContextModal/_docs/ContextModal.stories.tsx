import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AddImage } from "@kaizen/draft-illustration"
import { ModalDescription } from "~components/Modal/GenericModal/subcomponents/ModalDescription"
import { Text } from "~components/Text"
import { ContextModal, ContextModalProps } from "../index"

const ContextModalWithState = (args: ContextModalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = (): void => setIsOpen(true)
  const handleClose = (): void => setIsOpen(false)

  return (
    <>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <ContextModal
        {...args}
        isOpen={isOpen}
        onConfirm={handleClose}
        onDismiss={handleClose}
        image={
          <AddImage
            classNameOverride={
              args.layout === "landscape" ? "!w-auto h-200" : undefined
            }
            alt="placeholder"
          />
        }
      />
    </>
  )
}

const ExampleContent = (): JSX.Element => (
  <>
    <ModalDescription>
      <Text variant="body">
        Intro defining what the modal is trying to explain or depict. Intro
        defining what the modal is trying to explain or depict.
      </Text>
    </ModalDescription>
    <ul>
      <li>
        <Text variant="body">Key point to the benefits of the feature</Text>
      </li>
      <li>
        <Text variant="body">Key point to the benefits of the feature</Text>
      </li>
      <li>
        <Text variant="body">Key point to the benefits of the feature</Text>
      </li>
    </ul>
    <Text variant="body">
      More information to conclude can go here. More information to conclude can
      go here. More information to conclude can go here.
    </Text>
  </>
)

const meta = {
  title: "Components/Modals/Context Modal",
  component: ContextModal,
  args: {
    isOpen: false,
    title: "Context modal title",
    children: <ExampleContent />,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof ContextModal>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ContextModalWithState,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Potrait: Story = {
  render: ContextModalWithState,
  args: { layout: "portrait" },
}

export const Landscape: Story = {
  render: ContextModalWithState,
  args: { layout: "landscape" },
}
