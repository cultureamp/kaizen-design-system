import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import {
  EmptyStatesAction,
  EmptyStatesInformative,
  EmptyStatesNegative,
  EmptyStatesNeutral,
  EmptyStatesPositive,
  AnimatedSceneProps,
} from "@kaizen/draft-illustration"
import { Paragraph, Heading, HeadingVariants } from "@kaizen/typography"
import styles from "./EmptyState.module.scss"

const ILLUSTRATIONS: { [k: string]: React.VFC<AnimatedSceneProps> } = {
  positive: EmptyStatesPositive,
  neutral: EmptyStatesNeutral,
  negative: EmptyStatesNegative,
  informative: EmptyStatesInformative,
  action: EmptyStatesAction,
}

type IllustrationType =
  | "positive"
  | "neutral"
  | "negative"
  | "informative"
  | "action"

type LayoutContextType = "sidebarAndContent" | "contentOnly"

export interface EmptyStateProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>>,
    Pick<AnimatedSceneProps, "isAnimated" | "loop"> {
  children?: React.ReactNode
  id?: string
  illustrationType?: IllustrationType
  layoutContext?: LayoutContextType
  headingText: string | React.ReactNode
  bodyText: string | React.ReactNode
  straightCorners?: boolean
  headingVariant?: HeadingVariants
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

/**
 * {@link https://cultureamp.design/components/empty-state/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-empty-state--default-kaizen-site-demo Storybook}
 */
export const EmptyState: React.VFC<EmptyStateProps> = ({
  children,
  id,
  illustrationType = "informative",
  layoutContext = "sidebarAndContent",
  headingText,
  bodyText,
  straightCorners,
  isAnimated = true,
  loop = false,
  automationId,
  classNameOverride,
  headingVariant,
  ...props
}) => {
  const IllustrationComponent = ILLUSTRATIONS[illustrationType]

  return (
    <div
      className={classnames(classNameOverride, [
        styles[illustrationType],
        styles.container,
        styles.zen,
        styles[layoutContext],
        { [styles.straightCorners]: straightCorners },
      ])}
      id={id}
      data-automation-id={automationId}
      {...props}
    >
      <div className={styles.illustrationSide}>
        {isAnimated ? (
          <IllustrationComponent
            isAnimated
            loop={loop}
            classNameOverride={styles.illustration}
          />
        ) : (
          <IllustrationComponent
            alt={illustrationType}
            classNameOverride={styles.illustration}
          />
        )}
      </div>
      <div className={styles.textSide}>
        <div className={styles.textSideInner}>
          <Heading
            variant={headingVariant ? headingVariant : "heading-3"}
            tag={headingVariant ? undefined : "div"}
            classNameOverride={styles.heading}
          >
            {headingText}
          </Heading>
          <Paragraph variant="body" classNameOverride={styles.description}>
            {bodyText}
          </Paragraph>
          {children}
        </div>
      </div>
    </div>
  )
}
