import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within, waitFor } from "@storybook/test"

import {
  GenericModal,
  ModalAccessibleLabel,
  ModalBody,
  ModalHeader,
} from "../index"

const meta: Meta<typeof GenericModal> = {
  title: "Overlays/Modal/GenericModal",
  component: GenericModal,
}

export default meta

type Story = StoryObj<typeof GenericModal>

export const TestBase: Story = {
  render: ({ isOpen: propsIsOpen, ...args }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(propsIsOpen)
    const handleDismiss = (): void => setIsOpen(false)

    return (
      <>
        <button
          type="button"
          className="border border-gray-500"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
        <GenericModal
          {...args}
          isOpen={isOpen}
          onOutsideModalClick={handleDismiss}
          onEscapeKeyup={handleDismiss}
          id="GenericModalTestId"
        >
          <ModalHeader>
            <ModalAccessibleLabel>Test Modal</ModalAccessibleLabel>
          </ModalHeader>
          <ModalBody>
            <form>
              <label htmlFor="modal-input-play-test">Add link</label>
              <input type="text" id="modal-input-play-test" />
            </form>
          </ModalBody>
        </GenericModal>
      </>
    )
  },
  play: async ({ canvasElement, step }) => {
    const { getByRole } = within(canvasElement)

    const openModalButton = getByRole("button", { name: "Open Modal" })

    await step("Open modal", async () => {
      await userEvent.click(openModalButton)
    })

    await step("Default focus is shifted to the Accessible title", async () => {
      await waitFor(() => {
        // document has to be use as Modal will append to document body
        expect(document.activeElement).toHaveTextContent("Test Modal")
      })
    })
  },
}

export const ModalAccessibleLabelRetainsFocus: Story = {
  ...TestBase,
  name: "ModalAccessibleLabel retains focus if onAfterEnter is called",
  args: {
    onAfterEnter: () => action("openCallBack"),
  },
  play: async ({ canvasElement, step }) => {
    const { getByRole } = within(canvasElement)

    const openModalButton = getByRole("button", { name: "Open Modal" })

    await step("Open modal", async () => {
      await userEvent.click(openModalButton)
    })

    await step("Accessible title still has focus", async () => {
      await waitFor(() => {
        expect(document.activeElement).toHaveTextContent("Test Modal")
      })
    })
  },
}

export const TriggerOnAfterEnterFocus: Story = {
  ...TestBase,
  args: {
    onAfterEnter: () =>
      document.getElementById("modal-input-play-test")?.focus(),
  },
  name: "onAfterEnter can shift focus to internal elements of the modal",
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const openModalButton = canvas.getByRole("button", { name: "Open Modal" })

    await step("Open modal", async () => {
      await userEvent.click(openModalButton)
    })

    await step("Expect activeElement to be the Input", async () => {
      await waitFor(() => {
        expect(document.activeElement).toHaveAccessibleName("Add link")
      })
    })

    await step("Expect to be able to type without shifting focus", async () => {
      await userEvent.keyboard(
        "All lorem and no ipsum make dolar a dull boy..."
      )
    })
  },
}
