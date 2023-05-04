import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { Brand } from "@kaizen/brand"
import { OverrideClassName } from "@kaizen/component-base"
import {
  WorkflowTitles,
  WorkflowTitlesProps,
  WorkflowActions,
  WorkflowActionsProps,
} from "./"
import styles from "./WorkflowHeader.module.scss"
/**
 * @todo: Replace `HTMLAttributes<HTMLDivElement>` with attributes/props you need to extend
 */

export interface WorkflowHeaderProps
  extends WorkflowTitlesProps,
    WorkflowActionsProps,
    OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  // what was this for?
  // renderChild?: JSX.Element
}

export const WorkflowHeader = ({
  classNameOverride,
  prefixTitle,
  prefixTitleTag,
  pageTitle,
  pageTitleTag,
  status,
  confirmationTriggerLabel,
  modalTitle,
  modalContent,
  modalConfirmLabel,
  modalDismissLabel,
  modalConfirmAction,
  mood,
  ...restProps
}: WorkflowHeaderProps): JSX.Element => (
  <div
    className={classnames(
      styles.header,
      "flex grow-1 w-100 items-start justify-center p-24 text-center shadow-sm",
      classNameOverride
    )}
    {...restProps}
  >
    <div className="flex items-start max-w-[120px] pt-3 ">
      <Brand variant="logo-horizontal" alt="Culture Amp logo" />
    </div>
    <WorkflowTitles
      prefixTitle={prefixTitle}
      prefixTitleTag={prefixTitleTag}
      pageTitle={pageTitle}
      pageTitleTag={pageTitleTag}
      status={status}
    />
    <WorkflowActions
      confirmationTriggerLabel={confirmationTriggerLabel}
      modalTitle={modalTitle}
      modalContent={modalContent}
      modalConfirmLabel={modalConfirmLabel}
      modalConfirmAction={modalConfirmAction}
      modalDismissLabel={modalDismissLabel}
      mood={mood}
    ></WorkflowActions>
  </div>
)

WorkflowHeader.displayName = "WorkflowHeader"
