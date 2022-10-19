import React from "react"
import { Heading } from "@kaizen/typography"
import { Icon } from "@kaizen/component-library"
import { Collapsible, CollapsibleProps } from ".."
import styles from "./ExpertAdviceCollapsible.module.scss"
import ExpertAdviceIcon from "./ExpertAdvice.icon.svg"

export type ExpertAdviceCollapsibleProps = Omit<
  CollapsibleProps,
  "renderHeader"
>

/**
 * {@link https://cultureamp.design/components/collapsible/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-collapsible--single-collapsible-kaizen-site-demo Storybook}
 */

export const ExpertAdviceCollapsible: React.VFC<
  ExpertAdviceCollapsibleProps
> = props => (
  <Collapsible
    {...props}
    noSectionPadding
    classNameOverride={styles.expertAdviceContainer}
    renderHeader={() => (
      <>
        <div className={styles.expertAdviceHeader}>
          <Icon
            classNameOverride={styles.expertAdviceIcon}
            role="presentation"
            icon={ExpertAdviceIcon}
          />
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
  >
    <div className={styles.expertAdviceSection}>{props.children}</div>
  </Collapsible>
)
