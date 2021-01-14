import * as React from "react"

import { Button, ButtonProps } from "@kaizen/draft-button"
import GenericModalSection from "./GenericModalSection"

import styles from "./ModalFooter.scss"

export interface ModalFooterProps {
  readonly unpadded?: boolean
  readonly actions: ButtonProps[]
  readonly appearance?: "primary" | "destructive"
  readonly automationId?: string
}

type ModalFooter = React.FunctionComponent<ModalFooterProps>

const ModalFooter: ModalFooter = props => {
  const { unpadded, actions, appearance = "primary", automationId } = props

  return (
    <GenericModalSection unpadded={unpadded}>
      <div className={styles.actions}>
        {actions.map((a, index) => (
          <div className={styles.actionButton} key={a.label}>
            <Button
              type="button"
              onClick={a.onClick}
              primary={index === 0 && appearance === "primary"}
              destructive={index === 0 && appearance === "destructive"}
              secondary={index > 0}
              disabled={a.disabled}
              data-automation-id={`${automationId}-action-${index}`}
              {...a}
            />
          </div>
        ))}
      </div>
    </GenericModalSection>
  )
}

export default ModalFooter
