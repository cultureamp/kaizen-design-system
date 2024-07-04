import React, { HTMLAttributes } from "react"
import { Heading } from "~components/__content__/v2"
import { Tag, DefaultTagProps } from "~components/Tag"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Titles.module.scss"

export type WorkflowStatus = {
  /** @default: "statusDraft" */
  variant?: DefaultTagProps["variant"]
  content?: string
}

export type WorkflowTitlesProps = {
  workflowName: string
  stepName: string
  status?: WorkflowStatus
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const Titles = ({
  workflowName,
  stepName,
  status,
  ...restProps
}: WorkflowTitlesProps): JSX.Element => (
  <div className={styles.titles} {...restProps}>
    <Heading
      variant="heading-1"
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
      <div className={styles.status}>
        <Tag inline variant={status?.variant || "statusDraft"}>
          {status?.content}
        </Tag>
      </div>
    )}
  </div>
)

Titles.displayName = "Workflow.Titles"
