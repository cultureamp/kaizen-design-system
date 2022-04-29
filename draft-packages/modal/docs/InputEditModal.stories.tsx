import React, { useState } from "react"
import isChromatic from "chromatic/isChromatic"
import { ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Button } from "@kaizen/button"
import { InputEditModal, ModalAccessibleDescription } from "@kaizen/draft-modal"
import { Select } from "@kaizen/draft-select"
import { Paragraph } from "@kaizen/typography"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

const IS_CHROMATIC = isChromatic()

// Add additional height to the stories when running in Chromatic only.
// Modals have fixed position and would be cropped from snapshot tests.
// Setting height to 100vh ensures we capture as much content of the
// modal, as it's height responds to the content within it.
const withMinHeight = Story => {
  if (IS_CHROMATIC) {
    return <div style={{ minHeight: "100vh" }}>{Story()}</div>
  }

  return Story()
}

export default {
  title: `${CATEGORIES.components}/Modal/Input Edit Modal`,
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
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A35440"
    ),
  },
  decorators: [withDesign, withMinHeight],
}

const InputEditModalTemplate: ComponentStory<typeof InputEditModal> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(IS_CHROMATIC)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

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
        <ModalAccessibleDescription>
          <Paragraph variant="body">
            Instructive text to drive user selection goes here.
          </Paragraph>
        </ModalAccessibleDescription>
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
