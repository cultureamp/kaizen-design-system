import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import {
  WorkflowTitles,
  WorkflowTitlesProps,
  WorkflowActions,
  WorkflowActionsProps,
  WorkflowBranding,
  WorflowBrandingProps,
} from "./"
import styles from "./WorkflowHeader.module.scss"

export interface WorkflowHeaderProps
  extends WorkflowTitlesProps,
    WorkflowActionsProps,
    WorflowBrandingProps,
    OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  // TODO: Check with Dale what the renderChild props was meant for (it didn't get used / called anywhere)
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
  modalMood,
  brandingAlt,
  brandingVariant,
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
    <WorkflowBranding
      brandingAlt={brandingAlt || "CA"}
      brandingVariant={brandingVariant}
    />
    <WorkflowTitles
      prefixTitle={prefixTitle}
      // Tags are provided options for more accessible layouts / future proofixing the heading hirarchy
      prefixTitleTag={prefixTitleTag}
      pageTitle={pageTitle}
      pageTitleTag={pageTitleTag}
      // This is now changed to a object instead of two seperate props
      status={status}
    />
    <WorkflowActions
      confirmationTriggerLabel={confirmationTriggerLabel}
      modalTitle={modalTitle}
      modalContent={modalContent}
      modalConfirmLabel={modalConfirmLabel}
      modalConfirmAction={modalConfirmAction}
      modalDismissLabel={modalDismissLabel}
      modalMood={modalMood}
    >
      {/* can now take children to be used as a diplsay for multiple items. We could lock this down to "actions" and type the compatible components? */}
    </WorkflowActions>
  </div>
)

WorkflowHeader.displayName = "WorkflowHeader"
