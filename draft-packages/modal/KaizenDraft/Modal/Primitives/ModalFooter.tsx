import React from "react"
import classNames from "classnames"
import { Button, ButtonProps } from "@kaizen/button"
import { useMediaQueries } from "@kaizen/responsive"
import GenericModalSection from "./GenericModalSection"
import styles from "./ModalFooter.module.scss"

type ActionsVariantProps = "context" | "inputEdit"

export type ModalFooterProps = Readonly<{
  /**
   * We have a special case for the InformationModal when it has an image.
   * Since this modal may have an image on the right side the actions might look disconected from the content.
   * So for this instance we need to flip the order of the actions so that the primary
   * action is anchored to the left edge of the modal.
   * For this rare instance added the variant prop as optional to update the order of action buttons.
   */
  variant?: ActionsVariantProps
  unpadded?: boolean
  actions: ButtonProps[]
  appearance?: "primary" | "destructive"
  automationId?: string
  alignStart?: boolean
}>

const ModalFooter = (props: ModalFooterProps): JSX.Element => {
  const {
    unpadded,
    actions,
    appearance = "primary",
    automationId,
    variant,
  } = props
  const { queries } = useMediaQueries()

  return (
    <GenericModalSection inputEdit={variant === "inputEdit"}>
      <div
        className={classNames(
          styles.actions,
          !unpadded && styles.padded,
          variant === "context" && styles.informationPadded,
          props.alignStart && styles.actionsAlignStart
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
              fullWidth={queries.isSmall}
              {...action}
            />
          </div>
        ))}
      </div>
    </GenericModalSection>
  )
}

export default ModalFooter
