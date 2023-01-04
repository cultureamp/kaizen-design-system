import React, { useState } from "react"
import { Decorator, Meta, StoryFn } from "@storybook/react"
import isChromatic from "chromatic/isChromatic"
import { Button } from "@kaizen/button"
import { Box } from "@kaizen/component-library"
import {
  InputEditModal,
  InputEditModalProps,
  ModalAccessibleDescription,
} from "@kaizen/draft-modal"
import { Select } from "@kaizen/draft-select"
import { Paragraph } from "@kaizen/typography"

const IS_CHROMATIC = isChromatic()

// Add additional height to the stories when running in Chromatic only.
// Modals have fixed position and would be cropped from snapshot tests.
// Setting height to 100vh ensures we capture as much content of the
// modal, as it's height responds to the content within it.
const withMinHeight: Decorator<InputEditModalProps> = Story => {
  if (IS_CHROMATIC) {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Story />
      </div>
    )
  }

  return <Story />
}

export default {
  tags: ["autodocs"],
  title: "Components/Modal/Modal Legacy",
  component: InputEditModal,
  parameters: {
    chromatic: {
      disable: false,
      delay: 400, // match MODAL_TRANSITION_TIMEOUT in modals + 50ms
      pauseAnimationAtEnd: true,
    },
    docs: {
      description: {
        component:
          'import { InputEditModal, ModalAccessibleDescription } from "@kaizen/draft-modal"',
      },
    },
  },
  decorators: [withMinHeight],
} satisfies Meta<typeof InputEditModal>

const InputEditModalTemplate: StoryFn<typeof InputEditModal> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(IS_CHROMATIC)

  const handleOpen = (): void => setIsOpen(true)
  const handleClose = (): void => setIsOpen(false)

  const SELECT_OPTIONS = [
    { value: "Mindy", label: "Mindy" },
    { value: "Jaime", label: "Jaime", isDisabled: true },
    { value: "Rafa", label: "Rafa" },
    { value: "Elaine", label: "Elaine" },
    { value: "Julio", label: "Julio" },
    { value: "Priyanka", label: "Priyanka" },
    { value: "Prince", label: "Prince" },
    { value: "Charith", label: "Charith" },
    { value: "Nick", label: "Nick" },
  ]

  return (
    <>
      <Button label="Open modal" onClick={handleOpen} />

      <InputEditModal
        {...args}
        isOpen={args.isOpen === undefined ? isOpen : args.isOpen}
        onSubmit={handleClose}
        onDismiss={handleClose}
      >
        <Box mb={1}>
          <ModalAccessibleDescription>
            <Paragraph variant="body">
              Instructive text to drive user selection goes here.
            </Paragraph>
          </ModalAccessibleDescription>
        </Box>
        <Select
          options={SELECT_OPTIONS}
          placeholder="Placeholder"
          isSearchable={false}
          isDisabled={false}
          defaultValue={SELECT_OPTIONS[0]}
        />
      </InputEditModal>
    </>
  )
}

export const InputEditModalExample = InputEditModalTemplate.bind({})
InputEditModalExample.storyName = "Input Edit Modal"
InputEditModalExample.args = {
  mood: "positive",
  title: "Input-edit modal title",
  submitLabel: "Submit label",
}
InputEditModalExample.parameters = {
  docs: { source: { type: "code" } },
}
