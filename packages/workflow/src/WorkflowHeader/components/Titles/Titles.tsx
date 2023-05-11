import React, { HTMLAttributes } from "react"
// import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Tag, DefaultTagProps } from "@kaizen/draft-tag"
import { Heading } from "@kaizen/typography"

export type WorkflowStatus = {
  /** @default: "statusDraft" */
  vairant?: DefaultTagProps["variant"]
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
    className="flex flex-grow flex-col items-center justify-center"
    {...restProps}
  >
    <Heading
      variant="heading-1"
      tag="h1"
      color="dark"
      classNameOverride=" flex flex-col"
    >
      <Heading
        classNameOverride="mb-4"
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
      <div className="mt-8">
        <Tag variant={status?.vairant || "statusDraft"}>{status?.content}</Tag>
      </div>
    )}
  </div>
)

Titles.displayName = "Titles"
