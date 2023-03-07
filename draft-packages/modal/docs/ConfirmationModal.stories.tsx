import React, { useState } from "react"
import { DecoratorFunction } from "@storybook/addons"
import { Meta, ComponentStory } from "@storybook/react"
import isChromatic from "chromatic/isChromatic"
import { Button } from "@kaizen/button"
import { ConfirmationModal } from "@kaizen/draft-modal"
import { Paragraph } from "@kaizen/typography"

const IS_CHROMATIC = isChromatic()

// Add additional height to the stories when running in Chromatic only.
// Modals have fixed position and would be cropped from snapshot tests.
// Setting height to 100vh ensures we capture as much content of the
// modal, as it's height responds to the content within it.
const withMinHeight: DecoratorFunction<JSX.Element> = Story => {
  if (IS_CHROMATIC) {
    return <div style={{ minHeight: "100vh" }}>{Story()}</div>
  }

  return Story()
}

export default {
  title: "Components/Modal",
  component: ConfirmationModal,
  args: {
    mood: "cautionary",
  },
  parameters: {
    chromatic: {
      disable: false,
      delay: 400, // match MODAL_TRANSITION_TIMEOUT in modals + 50ms
      pauseAnimationAtEnd: true,
    },
    docs: {
      description: {
        component: 'import { ConfirmationModal } from "@kaizen/draft-modal"',
      },
    },
    actions: {
      argTypesRegex: "^on.*",
    },
  },
  decorators: [withMinHeight],
} as Meta<typeof ConfirmationModal>

const ConfirmationModalTemplate: ComponentStory<
  typeof ConfirmationModal
> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(IS_CHROMATIC)

  const handleOpen = (): void => setIsOpen(true)
  const handleClose = (): void => setIsOpen(false)

  return (
    <>
      <Button label="Open modal" onClick={handleOpen} />
      <ConfirmationModal
        {...args}
        isOpen={args.isOpen === undefined ? isOpen : args.isOpen}
        onConfirm={handleClose}
        onDismiss={handleClose}
      >
        <Paragraph variant="body">
          Confirmation modals contain smaller pieces of content and can provide
          additional information to aide the user.
        </Paragraph>
      </ConfirmationModal>
    </>
  )
}

export const ConfirmationModalExample = ConfirmationModalTemplate.bind({})
ConfirmationModalExample.storyName = "Confirmation Modal"
ConfirmationModalExample.args = {
  mood: "cautionary",
  title: "Confirmation modal title",
  confirmLabel: "Confirm label",
}
ConfirmationModalExample.parameters = {
  docs: { source: { type: "code" } },
}
