import React from "react"
import { Brand } from "@kaizen/brand"
import { Heading } from "@kaizen/typography"
import { Collapsible, CollapsibleProps } from ".."
import styles from "./ExpertAdviceCollapsible.module.scss"

export type ExpertAdviceCollapsibleProps = Omit<
  CollapsibleProps,
  "renderHeader" | "variant" | "group" | "separated"
>

/**
 * {@link https://cultureamp.design/components/collapsible/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-collapsible-expert-advice-collapsible--default-story Storybook}
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
            alt="Collective Intelligence"
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
