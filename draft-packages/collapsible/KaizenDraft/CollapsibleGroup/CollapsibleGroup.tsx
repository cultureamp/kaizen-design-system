import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { CollapsibleProps } from ".."
import styles from "./CollapsibleGroup.module.scss"

export type Sticky = {
  top: string
}

export interface CollapsibleGroupProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: Array<React.ReactElement<CollapsibleProps>>
  separated?: boolean
  sticky?: Sticky
  noSectionPadding?: boolean
  lazyLoad?: boolean
  onToggle?: (open: boolean, id: string) => void
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

/**
 * {@link https://cultureamp.design/components/collapsible/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-collapsible--collapsible-group-default Storybook}
 */
export const CollapsibleGroup = ({
  children,
  separated = false,
  sticky,
  noSectionPadding = false,
  lazyLoad = false,
  onToggle,
  automationId,
  classNameOverride,
  ...props
}: CollapsibleGroupProps): JSX.Element => (
  <div
    className={classnames(classNameOverride, !separated && styles.container)}
    data-automation-id={automationId}
    {...props}
  >
    {React.Children.map(children, collapsible =>
      React.cloneElement(collapsible, {
        group: true,
        separated,
        sticky,
        noSectionPadding,
        lazyLoad,
        onToggle,
      })
    )}
  </div>
)
