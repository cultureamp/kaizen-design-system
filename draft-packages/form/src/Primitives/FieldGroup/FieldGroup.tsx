import classnames from "classnames"
import * as React from "react"

import styles from "../../../styles/FieldGroup.module.scss"

export type FieldGroupProps = {
  id?: string
  automationId?: string
  className?: string
  inline?: boolean
}

type FormGroup = React.SFC<FieldGroupProps>

const FormGroup: FormGroup = ({
  id,
  automationId,
  className,
  inline = false,
  children,
}) => (
  <div
    id={id}
    data-automation-id={automationId}
    className={classnames(styles.group, className, { [styles.inline]: inline })}
  >
    {children}
  </div>
)

export default FormGroup
