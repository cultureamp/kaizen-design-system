import * as React from "react"

import { Heading } from "@kaizen/component-library"
import { Negative } from "@kaizen/draft-illustration"
import { withDeprecatedComponent } from "@kaizen/react-deprecate-warning"

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
  readonly automationId?: string
  readonly children: React.ReactNode
}

type RoadblockModal = React.FunctionComponent<RoadblockModalProps>

/**
 * @deprecated RoadblockModal is deprecated. Please use Confirmation Modal instead.
 */
const RoadblockModal = ({
  isOpen,
  title,
  onDismiss,
  dismissLabel = "Back",
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
      <ModalHeader unpadded onDismiss={onDismiss}>
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
        actions={[{ label: dismissLabel, onClick: onDismiss }]}
        appearance="primary"
        automationId={automationId}
      />
    </div>
  </GenericModal>
)

export default withDeprecatedComponent(RoadblockModal, {
  warning:
    "RoadblockModal is deprecated. Please use Confirmation Modal instead.",
})
