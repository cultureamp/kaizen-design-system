import React from "react"
import { Heading } from "@kaizen/typography"
import { Brand } from "~components/Brand"
import {
  CollapsibleProps,
  Collapsible,
} from "~components/Collapsible/Collapsible"
import styles from "./ExpertAdviceCollapsible.module.scss"

export type ExpertAdviceCollapsibleProps = Omit<
  CollapsibleProps,
  "renderHeader" | "variant" | "group" | "separated"
>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082094383/Collapsible Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-collapsible--docs Storybook}
 */
export const ExpertAdviceCollapsible = (
  props: ExpertAdviceCollapsibleProps
): JSX.Element => (
  <Collapsible
    {...props}
    noSectionPadding
    classNameOverride={styles.expertAdviceContainer}
    renderHeader={(): JSX.Element => (
      <>
        <div className={styles.expertAdviceHeader}>
          <Brand
            classNameOverride={styles.expertAdviceIcon}
            alt="Expert Advice"
            variant="collective-intelligence"
            reversed
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

ExpertAdviceCollapsible.displayName = "ExpertAdviceCollapsible"
