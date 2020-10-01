import classnames from "classnames"
import * as React from "react"

import { Heading, Icon } from "@kaizen/component-library"
import roadblock from "../illustrations/roadblock.icon.svg"

import {
  GenericModal,
  ModalAccessibleDescription,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../"

import styles from "./RoadblockModal.scss"

interface Props {
  readonly isOpen: boolean
  readonly title: string
  readonly onDismiss: () => void
  readonly dismissLabel?: string
  readonly automationId?: string
  readonly children: React.ReactNode
}

type RoadblockModal = React.FunctionComponent<Props>

const RoadblockModal = ({
  isOpen,
  title,
  onDismiss,
  dismissLabel = "Back",
  automationId,
  children,
}: Props) => (
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
            <div className={styles.icon}>
              <Icon icon={roadblock} role="presentation" />
            </div>
          </div>
          <ModalAccessibleLabel>
            <Heading tag="h1" variant="heading-1">
              {title}
            </Heading>
          </ModalAccessibleLabel>
        </div>
      </ModalHeader>
      <ModalBody>
        <ModalAccessibleDescription>{children}</ModalAccessibleDescription>
      </ModalBody>
      <ModalFooter
        actions={[{ label: dismissLabel, action: onDismiss }]}
        appearance="primary"
        automationId={automationId}
      />
    </div>
  </GenericModal>
)

export default RoadblockModal
