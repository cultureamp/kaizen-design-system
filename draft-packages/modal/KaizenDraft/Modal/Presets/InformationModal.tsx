import { Box, Heading } from "@kaizen/component-library"
import { Divider } from "@kaizen/draft-divider"
import { ButtonProps } from "@kaizen/draft-button"
import classnames from "classnames"
import * as React from "react"
import { GenericModal, ModalAccessibleLabel, ModalFooter } from "../"
import ModalHeader from "../Primitives/ModalHeader"
import styles from "./InformationModal.scss"

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
    confirmWorking?: { label: string; labelHidden?: boolean }
    automationId?: string
    renderBackground?: () => React.ReactNode
    image?: React.ReactNode
    children: React.ReactNode
    contentHeader?: React.ReactNode
    isLandscape?: boolean
  } & InformationModalSecondaryActionProps
>

type InformationModal = React.FunctionComponent<InformationModalProps>

const InformationModal = ({
  isOpen,
  title,
  onConfirm,
  confirmLabel = "Confirm",
  confirmWorking,
  automationId,
  renderBackground,
  children,
  contentHeader,
  image,
  isLandscape = false,
  ...props
}: InformationModalProps) => {
  const onDismiss = confirmWorking ? undefined : props.onDismiss

  const footerActions: ButtonProps[] = []

  const workingProps = confirmWorking
    ? {
        working: true,
        workingLabel: confirmWorking.label,
        workingLabelHidden: confirmWorking.labelHidden,
      }
    : {}

  if (onConfirm) {
    const confirmAction = { label: confirmLabel, onClick: onConfirm }
    footerActions.push({ ...confirmAction, ...workingProps })
  }

  if (props.secondaryLabel) {
    footerActions.push({
      label: props.secondaryLabel,
      onClick: props.onSecondaryAction,
      disabled: !!confirmWorking,
    })
  }

  return (
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
        {contentHeader && (
          <div className={styles.contentHeader}>{contentHeader}</div>
        )}
        <div
          className={classnames(styles.contentLayout, {
            [styles.portraitContentlayout]: !isLandscape,
            [styles.landscapeContentlayout]: isLandscape,
          })}
        >
          <div className={styles.image}>{image}</div>
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
                  variant={image ? "information" : undefined}
                  actions={footerActions}
                  appearance={"primary"}
                  automationId={automationId}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </GenericModal>
  )
}

export default InformationModal
