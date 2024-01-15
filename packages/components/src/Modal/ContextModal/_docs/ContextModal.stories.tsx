import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { AddImage } from "~components/Illustration"
import { ModalAccessibleDescription } from "~components/Modal/GenericModal/subcomponents/ModalAccessibleDescription"
import { Text } from "~components/Text"
import { chromaticModalSettings } from "../../_docs/decorators"
import { ContextModal } from "../index"

const IS_CHROMATIC = isChromatic()

const ContextModalTemplate: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(IS_CHROMATIC)

    const handleOpen = (): void => setIsOpen(true)
    const handleClose = (): void => setIsOpen(false)

    return (
      <>
        <button
          type="button"
          className="border border-gray-500"
          onClick={handleOpen}
        >
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
        >
          <ModalAccessibleDescription>
            <Text variant="body">
              Intro defining what the modal is trying to explain or depict.
              Intro defining what the modal is trying to explain or depict.
            </Text>
          </ModalAccessibleDescription>
          <ul>
            <li>
              <Text variant="body">
                Key point to the benefits of the feature
              </Text>
            </li>
            <li>
              <Text variant="body">
                Key point to the benefits of the feature
              </Text>
            </li>
            <li>
              <Text variant="body">
                Key point to the benefits of the feature
              </Text>
            </li>
          </ul>
          <Text variant="body">
            More information to conclude can go here. More information to
            conclude can go here. More information to conclude can go here.
          </Text>
        </ContextModal>
      </>
    )
  },
}

const meta = {
  title: "Components/Modals/Context Modal",
  component: ContextModal,
  args: {
    isOpen: false,
    title: "Context modal title",
    children: undefined,
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
  ...ContextModalTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Portrait: Story = {
  ...ContextModalTemplate,
  args: { layout: "portrait" },
  ...chromaticModalSettings,
}

export const Landscape: Story = {
  ...ContextModalTemplate,
  args: { layout: "landscape" },
  ...chromaticModalSettings,
}

export const Unpadded: Story = {
  ...ContextModalTemplate,
  args: { unpadded: true },
  ...chromaticModalSettings,
}
