import * as React from "react"

import { Button } from "@kaizen/draft-button"
import styles from "../styles/ModalFooter.scss"
import GenericModalSection from "./GenericModalSection"

interface Props {
  readonly unpadded?: boolean
  readonly actions: Array<{
    label: string
    action: (event: React.MouseEvent) => any
    icon?: React.SVGAttributes<SVGSymbolElement>
    disabled?: boolean
  }>
  readonly appearance?: "primary" | "destructive"
  readonly automationId?: string
}

type ModalFooter = React.FunctionComponent<Props>

const ModalFooter: ModalFooter = props => {
  const { unpadded, actions, appearance = "primary", automationId } = props

  return (
    <GenericModalSection unpadded={unpadded}>
      <div className={styles.actions}>
        {actions.map((a, index) => (
          <div className={styles.actionButton} key={a.label}>
            <Button
              type="button"
              icon={a.icon}
              label={a.label}
              onClick={a.action}
              primary={index === 0 && appearance === "primary"}
              destructive={index === 0 && appearance === "destructive"}
              secondary={index > 0}
              disabled={a.disabled}
              data-automation-id={`${automationId}-action-${index}`}
            />
          </div>
        ))}
      </div>
    </GenericModalSection>
  )
}

export default ModalFooter
