import React, { useState } from "react"
import { ComponentStory } from "@storybook/react"
import { Button } from "@kaizen/button"
import { ConfirmationModal } from "@kaizen/modal"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: `${CATEGORIES.components}/Modal/Confirmation Modal`,
  component: ConfirmationModal,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: 'import { Modal } from "@kaizen/modal"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=10458%3A45652"
    ),
  },
  argTypes: {},
}

export const DefaultStory: ComponentStory<typeof Modal> = props => {
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  return (
    <>
      <Button label="Open modal" onClick={() => setModalOpen(true)} />
      <ConfirmationModal
        {...props}
        isOpen={modalOpen}
        headingText="What are you doing"
        bodyText="Are you sure?"
      />
    </>
  )
}
DefaultStory.storyName = "Confirmation Modal"
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}
DefaultStory.args = {
  size: "md",
}
