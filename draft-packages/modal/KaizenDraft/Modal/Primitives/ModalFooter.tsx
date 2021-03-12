import { Button, ButtonProps } from "@kaizen/draft-button"
import classNames from "classnames"
import * as React from "react"
import GenericModalSection from "./GenericModalSection"
import styles from "./ModalFooter.scss"

type ActionsVarianProps = "information"

export type ModalFooterProps = Readonly<{
  /**
   * We have a special case for the InformationModal when it has an image.
   * Since this modal may have an image on the right side the actions might look disconected from the content.
   * So for this instance we need to flip the order of the actions so that the primary
   * action is anchored to the left edge of the modal.
   * For this rare instance added the variant prop as optional to update the order of action buttons.
   */
  variant?: ActionsVarianProps
  unpadded?: boolean
  actions: ButtonProps[]
  appearance?: "primary" | "destructive"
  automationId?: string
  alignStart?: boolean
}>

type ModalFooter = React.FunctionComponent<ModalFooterProps>

const ModalFooter: ModalFooter = props => {
  const {
    unpadded,
    actions,
    appearance = "primary",
    automationId,
    variant,
  } = props

  return (
    <GenericModalSection unpadded={unpadded}>
      <div
        className={classNames(
          styles.actions,
          props.alignStart && styles.actionsAlignStart,
          variant === "information" && styles.informationAlign
        )}
      >
        {actions.map((action, index) => (
          <div className={styles.actionButton} key={action.label}>
            <Button
              type="button"
              primary={index === 0 && appearance === "primary"}
              destructive={index === 0 && appearance === "destructive"}
              secondary={index > 0}
              data-automation-id={`${automationId}-action-${index}`}
              {...action}
            />
          </div>
        ))}
      </div>
    </GenericModalSection>
  )
}

export default ModalFooter
