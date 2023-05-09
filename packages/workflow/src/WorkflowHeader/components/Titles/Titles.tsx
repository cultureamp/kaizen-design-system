import React, { HTMLAttributes } from "react"
// import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Tag, DefaultTagProps } from "@kaizen/draft-tag"
import { LoadingHeading } from "@kaizen/loading-skeleton"
import { Heading } from "@kaizen/typography"

export type WorkflowStatus = {
  /** @default: "statusDraft" */
  vairant?: DefaultTagProps["variant"]
  content?: string
}

export interface WorkflowTitlesProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  workflowName?: string
  stepName?: string
  status?: WorkflowStatus
}

export const Titles = ({
  workflowName,
  stepName,
  status,
  ...restProps
}: WorkflowTitlesProps): JSX.Element => {
  const isLoading = workflowName && stepName

  return (
    <div
      className="flex grow-2 flex-col items-center justify-center"
      {...restProps}
    >
      {isLoading ? (
        <Heading
          variant="heading-1"
          tag="h1"
          color="dark"
          classNameOverride=" flex flex-col"
        >
          <Heading variant="heading-6" tag="span" color="dark-reduced-opacity">
            {workflowName}
          </Heading>
          {stepName}
        </Heading>
      ) : (
        <>
          <LoadingHeading variant={"heading-6"} width={50} />
          <LoadingHeading variant={"heading-1"} width={50} />
        </>
      )}
      {status && (
        <Tag variant={status?.vairant || "statusDraft"}>{status?.content}</Tag>
      )}
    </div>
  )
}

Titles.displayName = "Titles"
