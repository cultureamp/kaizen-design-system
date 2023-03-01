import React, { useState } from "react"
import { DecoratorFunction } from "@storybook/addons"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import isChromatic from "chromatic/isChromatic"
import { withDesign } from "storybook-addon-designs"
import { Button } from "@kaizen/button"
import { AddImage } from "@kaizen/draft-illustration"
import { ContextModal, ModalAccessibleDescription } from "@kaizen/draft-modal"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import styles from "./ContextModal.stories.module.scss"

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
  title: `${CATEGORIES.components}/Modal`,
  component: ContextModal,
  parameters: {
    chromatic: {
      disable: false,
      delay: 400, // match MODAL_TRANSITION_TIMEOUT in modals + 50ms
      pauseAnimationAtEnd: true,
    },
    docs: {
      description: {
        component:
          'import { ContextModal, ModalAccessibleDescription } from "@kaizen/draft-modal"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A35440"
    ),
    actions: {
      argTypesRegex: "^on.*",
    },
  },
  decorators: [withDesign, withMinHeight],
} as ComponentMeta<typeof ContextModal>

const ContextModalTemplate: ComponentStory<typeof ContextModal> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(IS_CHROMATIC)

  const handleOpen = (): void => setIsOpen(true)
  const handleClose = (): void => setIsOpen(false)

  return (
    <>
      <Button label="Open modal" onClick={handleOpen} />
      <ContextModal
        {...args}
        isOpen={args.isOpen === undefined ? isOpen : args.isOpen}
        onConfirm={handleClose}
        onDismiss={handleClose}
        secondaryLabel={args.secondaryLabel || "Cancel"}
        onSecondaryAction={handleClose}
        image={
          <AddImage
            classNameOverride={
              args.layout === "landscape" ? styles.landscape : undefined
            }
            alt="placeholder"
          />
        }
      >
        <ModalAccessibleDescription>
          <Paragraph variant="body">
            Intro defining what the modal is trying to explain or depict. Intro
            defining what the modal is trying to explain or depict.
          </Paragraph>
        </ModalAccessibleDescription>
        <ul>
          <li>
            <Paragraph variant="body">
              Key point to the benefits of the feature
            </Paragraph>
          </li>
          <li>
            <Paragraph variant="body">
              Key point to the benefits of the feature
            </Paragraph>
          </li>
          <li>
            <Paragraph variant="body">
              Key point to the benefits of the feature
            </Paragraph>
          </li>
        </ul>
        <Paragraph variant="body">
          More information to conclude can go here. More information to conclude
          can go here. More information to conclude can go here.
        </Paragraph>
      </ContextModal>
    </>
  )
}

export const ContextModalExample = ContextModalTemplate.bind({})
ContextModalExample.storyName = "Context Modal"
ContextModalExample.args = {
  title: "Context modal title",
  secondaryLabel: "Cancel",
  confirmLabel: "Label",
  layout: "portrait",
}
ContextModalExample.parameters = {
  docs: { source: { type: "code" } },
}
