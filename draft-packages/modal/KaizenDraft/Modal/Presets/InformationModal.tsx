import { Box, Heading } from "@kaizen/component-library"
import { Divider } from "@kaizen/draft-divider"
import { ButtonProps } from "@kaizen/draft-button"
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
        <Divider variant="content" />
        {contentHeader && (
          <div className={styles.contentHeader}>{contentHeader}</div>
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
                  variant={image ? "information" : undefined}
                  actions={[
                    {
                      label: confirmLabel,
                      onClick: onConfirm,
                      ...workingProps,
                    },
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
}

export default InformationModal
