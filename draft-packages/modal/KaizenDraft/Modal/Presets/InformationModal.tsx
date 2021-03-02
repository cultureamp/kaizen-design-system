import { Box, Heading, InlineNotification } from "@kaizen/component-library"
import { NotificationType } from "@kaizen/component-library/components/Notification/components/GenericNotification"
import { Divider } from "@kaizen/draft-divider"
import * as React from "react"
import { GenericModal, ModalAccessibleLabel, ModalFooter } from "../"
import ModalHeader from "../Primitives/ModalHeader"
import styles from "./InformationModal.scss"

export type InlineNotificationProps = {
  title: string
  type: NotificationType
  body: string
}

export type InformationModalSecondaryActionProps =
  | {
      secondaryLabel: string
      onSecondaryAction: () => void
    }
  | {
      secondaryLabel?: undefined
    }

export type InformationModalProps = Readonly<
  {
    isOpen: boolean
    title: string
    onConfirm?: () => void
    onDismiss: () => void
    confirmLabel?: string
    automationId?: string
    renderBackground?: () => React.ReactNode
    image?: React.ReactNode
    children: React.ReactNode
    notification?: InlineNotificationProps
  } & InformationModalSecondaryActionProps
>

type InformationModal = React.FunctionComponent<InformationModalProps>

const InformationModal = ({
  isOpen,
  title,
  onDismiss,
  onConfirm,
  confirmLabel = "Confirm",
  automationId,
  renderBackground,
  children,
  notification,
  image,
  ...props
}: InformationModalProps) => (
  <GenericModal
    isOpen={isOpen}
    onEscapeKeyup={onDismiss}
    onOutsideModalClick={onDismiss}
    automationId={automationId}
  >
    <div className={styles.modal}>
      {renderBackground && renderBackground()}
      <ModalHeader unpadded onDismiss={onDismiss}>
        <div className={styles.header}>
          <ModalAccessibleLabel>
            <Heading variant="heading-2" tag="h1">
              <Box pb={0.5}>{title}</Box>
            </Heading>
          </ModalAccessibleLabel>
        </div>
      </ModalHeader>
      <Divider variant="content" />
      {notification && (
        <Box mt={0.5} mx={1} mb={1}>
          <InlineNotification
            type={notification.type}
            title={notification.title}
            autohide={false}
            hideCloseIcon={true}
            noBottomMargin={true}
          >
            {notification.body}
          </InlineNotification>
        </Box>
      )}
      <div className={styles.contentLayout}>
        <div className={styles.content}>
          {children}
          {onConfirm != null && (
            <div
              className={
                props.secondaryLabel
                  ? styles.footerWithSecondaryAction
                  : styles.footer
              }
            >
              <ModalFooter
                unpadded
                alignStart
                actions={[
                  { label: confirmLabel, onClick: onConfirm },
                  ...(props.secondaryLabel
                    ? [
                        {
                          label: props.secondaryLabel,
                          onClick: props.onSecondaryAction,
                        },
                      ]
                    : []),
                ]}
                appearance={"primary"}
                automationId={automationId}
              />
            </div>
          )}
        </div>
        <div className={styles.image}>{image}</div>
      </div>
    </div>
  </GenericModal>
)

export default InformationModal
