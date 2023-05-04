import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { Brand } from "@kaizen/brand"
import { Button } from "@kaizen/button"
import { OverrideClassName } from "@kaizen/component-base"
import { WorkflowTitles } from "./"
import styles from "./WorkflowHeader.module.scss"
/**
 * @todo: Replace `HTMLAttributes<HTMLDivElement>` with attributes/props you need to extend
 */

type WorkflowActions = JSX.Element[]
export interface WorkflowHeaderProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  prefixTitle?: WorkflowTitleProps
  pageTitle?: WorkflowTitleProps
  actions?: WorkflowActions
  status?: WorkflowStatus
  // replace with callback
  // confirmAction: () => void
  // what is this for?
  // renderChild?: JSX.Element
}

export const WorkflowHeader = ({
  classNameOverride,
  prefixTitle,
  pageTitle,
  status,
  actions,
  ...restProps
}: WorkflowHeaderProps): JSX.Element => (
  <div
    className={classnames(
      "flex grow-1 w-100 items-start justify-center p-24 text-center shadow-sm",
      classNameOverride
    )}
    {...restProps}
  >
    <div className="flex items-start max-w-[120px] pt-3 ">
      <Brand variant="logo-horizontal" alt="Culture Amp logo" />
    </div>
    <WorkflowTitles
      prefixTitle="Create self reflection cycle"
      prefixTitleTag="h1"
      pageTitle="Settings"
      pageTitleTag="h2"
      status={{
        content: "draft",
        vairant: "default",
      }}
    />
    <div className="flex items-start">
      {actions?.map((action, key) => (
        // if is type of confirmation, output that else, output button
        <Button
          key={key}
          label={action.label}
          primary={action.primary}
          secondary={action.secondary}
          reversed={reversed}
          icon={chevronDownIcon}
          iconPosition="end"
        />
      ))}
    </div>
  </div>
)

WorkflowHeader.displayName = "WorkflowHeader"
