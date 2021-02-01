import { Button, ButtonProps } from "@kaizen/draft-button"
import classNames from "classnames"
import * as React from "react"
import GenericModalSection from "./GenericModalSection"
import styles from "./ModalFooter.scss"

export type ModalFooterProps = Readonly<{
  unpadded?: boolean
  actions: ButtonProps[]
  appearance?: "primary" | "destructive"
  automationId?: string
  alignStart?: boolean
}>

type ModalFooter = React.FunctionComponent<ModalFooterProps>

const ModalFooter: ModalFooter = props => {
  const { unpadded, actions, appearance = "primary", automationId } = props

  return (
    <GenericModalSection unpadded={unpadded}>
      <div
        className={classNames(
          styles.actions,
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
              {...action}
            />
          </div>
        ))}
      </div>
    </GenericModalSection>
  )
}

export default ModalFooter
