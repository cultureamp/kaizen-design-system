import React from "react"
import { Button } from "@kaizen/button"
import { Heading, Paragraph } from "@kaizen/typography"
import { Modal } from "../"

export interface ConfirmationModalProps {
  isOpen: boolean
  headingText: React.ReactNode
  bodyText: React.ReactNode
  confirmLabel: React.ReactNode
  cancelLabel: React.ReactNode
}

export const ConfirmationModal = ({
  isOpen,
}: ConfirmationModalProps): JSX.Element => (
  <Modal isOpen={isOpen}>
    <Modal.Header>
      <Heading variant="heading-3">asdasdasd</Heading>
    </Modal.Header>
    <Modal.Body>
      <Paragraph variant="body">Are you sure?</Paragraph>
    </Modal.Body>
    <Modal.Footer>
      <Modal.Actions>
        <Button label="Cancel" secondary />
        <Button label="Confirm" primary />
      </Modal.Actions>
    </Modal.Footer>
  </Modal>
)
