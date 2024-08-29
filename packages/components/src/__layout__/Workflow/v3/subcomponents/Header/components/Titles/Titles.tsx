import React, { HTMLAttributes, ReactNode } from "react"
import { Heading } from "~components/Heading"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { OverrideClassName } from "~components/types/OverrideClassName"
import styles from "./Titles.module.scss"

export type WorkflowTitlesProps = {
  workflowName: string
  stepName: string
  status?: ReactNode
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const Titles = ({
  workflowName,
  stepName,
  status,
  ...restProps
}: WorkflowTitlesProps): JSX.Element => (
  <div className={styles.titles} {...restProps}>
    <Heading
      variant="composable-header-title"
      tag="h1"
      color="dark"
      classNameOverride={styles.pageTitle}
    >
      <Heading
        classNameOverride={styles.prefix}
        variant="heading-6"
        tag="span"
        color="dark-reduced-opacity"
      >
        {workflowName}
        <VisuallyHidden>:</VisuallyHidden>
      </Heading>
      <span>{stepName}</span>
    </Heading>
    {status && (
      // status may need to be update by a fetch
      <div className={styles.status}>{status}</div>
    )}
  </div>
)

Titles.displayName = "Workflow.Titles"
