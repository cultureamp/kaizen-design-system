import React, { HTMLAttributes } from "react"
// import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Tag, DefaultTagProps } from "@kaizen/draft-tag"
import { Heading } from "@kaizen/typography"
import styles from "./Titles.module.scss"

export type WorkflowStatus = {
  /** @default: "statusDraft" */
  variant?: DefaultTagProps["variant"]
  content?: string
}

export interface WorkflowTitlesProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  workflowName: string
  stepName: string
  status?: WorkflowStatus
}

export const Titles = ({
  workflowName,
  stepName,
  status,
  ...restProps
}: WorkflowTitlesProps): JSX.Element => (
  <div
    className={styles.titles}
    // "flex flex-grow flex-col items-center justify-center"
    {...restProps}
  >
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
      </Heading>
      <span>{stepName}</span>
    </Heading>
    {status && (
      // status may need to be update by a fetch
      <div className={styles.status}>
        <Tag variant={status?.variant || "statusDraft"}>{status?.content}</Tag>
      </div>
    )}
  </div>
)

Titles.displayName = "Titles"
