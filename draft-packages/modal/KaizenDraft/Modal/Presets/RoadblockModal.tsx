import * as React from "react"

import { Heading } from "@kaizen/component-library"
import { Negative } from "@kaizen/draft-illustration"

import { ButtonProps } from "@kaizen/draft-button"
import {
  GenericModal,
  ModalAccessibleDescription,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../"

import styles from "./RoadblockModal.scss"

export interface RoadblockModalProps {
  readonly isOpen: boolean
  readonly title: string
  readonly onDismiss: () => void
  readonly dismissLabel?: string
  readonly dismissButtonProps?: ButtonProps
  readonly automationId?: string
  readonly children: React.ReactNode
}

type RoadblockModal = React.FunctionComponent<RoadblockModalProps>

const RoadblockModal = ({
  isOpen,
  title,
  onDismiss,
  dismissLabel = "Back",
  dismissButtonProps,
  automationId,
  children,
}: RoadblockModalProps) => (
  <GenericModal
    isOpen={isOpen}
    onEscapeKeyup={onDismiss}
    onOutsideModalClick={onDismiss}
    automationId={automationId}
  >
    <div className={styles.modal}>
      <ModalHeader unpadded reversed onDismiss={onDismiss}>
        <div className={styles.header}>
          <div className={styles.headerBackground}></div>
          <div className={styles.iconContainer}>
            <div className={styles.spotIcon}>
              <Negative alt="" />
            </div>
          </div>
          <ModalAccessibleLabel>
            <Heading tag="h1" variant="heading-1">
              {title}
            </Heading>
          </ModalAccessibleLabel>
        </div>
      </ModalHeader>
      <ModalBody unpadded>
        <div className={styles.body}>
          <ModalAccessibleDescription>{children}</ModalAccessibleDescription>
        </div>
      </ModalBody>
      <ModalFooter
        actions={[
          { label: dismissLabel, onClick: onDismiss, ...dismissButtonProps },
        ]}
        appearance="primary"
        automationId={automationId}
      />
    </div>
  </GenericModal>
)

export default RoadblockModal
