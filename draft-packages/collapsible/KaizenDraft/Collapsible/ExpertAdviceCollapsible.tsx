import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { IconButton } from "@kaizen/button"
import { Heading, HeadingProps } from "@kaizen/typography"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import { Icon } from "@kaizen/component-library"
import { Sticky } from "./CollapsibleGroup"
import styles from "./ExpertAdviceCollapsible.module.scss"
import { Collapsible } from "./Collapsible"
import ExpertAdviceIcon from "./ExpertAdvice.icon.svg"

export interface ExpertAdviceCollapsibleProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  id: string
  children: JSX.Element | JSX.Element[] | string
  title: string
  renderHeader?: (title: string) => JSX.Element | JSX.Element[]
  open?: boolean
  group?: boolean
  separated?: boolean
  sticky?: Sticky
  noSectionPadding?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
  onToggle?: (open: boolean, id: string) => void
  /**
   * By default, the header will change background colour when open. When the variant
   * is set to 'clear', it will not have a background but a border-bottom will appear
   * to separate the heading from the content.
   */
  lazyLoad?: boolean
  /**
   * Disables internal `open` state, allowing it to be controlled in the usage.
   */
  controlled?: boolean
}

/**
 * {@link https://cultureamp.design/components/collapsible/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-collapsible--single-collapsible-kaizen-site-demo Storybook}
 */

export const ExpertAdviceCollapsible: React.VFC<
  ExpertAdviceCollapsibleProps
> = props => (
  <Collapsible
    {...props}
    renderHeader={() => (
      <>
        <Icon role="presentation" icon={ExpertAdviceIcon} />
        <div>
          <Heading
            variant="heading-4"
            tag="span"
            classNameOverride={styles.expertAdviceHeading}
          >
            {props.title}
          </Heading>
        </div>
      </>
    )}
  ></Collapsible>
)
