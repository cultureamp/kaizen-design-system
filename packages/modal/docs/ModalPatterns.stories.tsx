import React, { useState } from "react"
import { ComponentStory } from "@storybook/react"
import { Button } from "@kaizen/button"
import { TextAreaField, TextField } from "@kaizen/draft-form"
import { InformationReportOwnerByRule } from "@kaizen/draft-illustration"
import { Modal } from "@kaizen/modal"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { modalControls } from "./controls/modalControls"

export default {
  title: `${CATEGORIES.components}/Modal/Patterns`,
  component: Modal,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: 'import { Modal } from "@kaizen/modal"',
      },
    },
  },
  argTypes: {
    ...modalControls,
  },
}

export const FormModal: ComponentStory<typeof Modal> = props => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  return (
    <>
      <Button label="Open modal" onClick={(): void => setModalOpen(true)} />

      <Modal
        {...props}
        isOpen={modalOpen}
        onDismiss={(): void => setModalOpen(false)}
        accessibleLabelId="my-modal-title"
      >
        <Modal.Header>
          <Modal.Title id="my-modal-title">Create Skill</Modal.Title>
        </Modal.Header>
        <Modal.Body hasFormControls>
          <TextField
            id="text-default"
            inputType="text"
            labelText="Name"
            placeholder="Placeholder Text"
          />
          <TextField id="text-email" inputType="email" labelText="Email" />
          <TextAreaField id="text-area-default" labelText="Description" />
        </Modal.Body>
        <Modal.Footer hasFormControls>
          <Modal.ActionButton
            primary
            label="Done"
            onClick={(): void => setModalOpen(false)}
          />
        </Modal.Footer>
      </Modal>
    </>
  )
}
FormModal.parameters = {
  docs: { source: { type: "code" } },
}
FormModal.args = {
  size: "md",
}

export const FeatureModal: ComponentStory<typeof Modal> = props => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  return (
    <>
      <Button label="Open modal" onClick={(): void => setModalOpen(true)} />

      <Modal
        {...props}
        isOpen={modalOpen}
        onDismiss={(): void => setModalOpen(false)}
        accessibleLabelId="my-modal-title"
      >
        <Modal.Header>
          <Modal.Title id="my-modal-title">
            Introducing a new feature
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              backgroundColor: "#dfc9ea",
              maxHeight: "355px",
              borderRadius: "7px",
              marginBottom: "24px",
            }}
          >
            <InformationReportOwnerByRule alt="" />
          </div>
          <Paragraph variant="body">
            Instructive text to drive user selection goes here.
          </Paragraph>
        </Modal.Body>
        <Modal.Footer>
          <Modal.ActionButton
            primary
            label="Done"
            onClick={(): void => setModalOpen(false)}
          />
        </Modal.Footer>
      </Modal>
    </>
  )
}
FeatureModal.parameters = {
  docs: { source: { type: "code" } },
}
FeatureModal.args = {
  size: "md",
}
