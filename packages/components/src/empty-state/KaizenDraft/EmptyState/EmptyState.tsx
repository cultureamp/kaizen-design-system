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
import { Paragraph, Heading, HeadingProps } from "@components/typography"
import styles from "./EmptyState.module.scss"

const ILLUSTRATIONS: Record<
  string,
  (props: AnimatedSceneProps) => JSX.Element
> = {
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
  bodyText: string | React.ReactNode
  straightCorners?: boolean
  headingProps?: HeadingProps
  /**
   * **Deprecated:** Use headingProps
   * @deprecated
   */
  headingText?: string | React.ReactNode
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
export const EmptyState = ({
  children,
  id,
  illustrationType = "informative",
  layoutContext = "sidebarAndContent",
  headingText,
  headingProps,
  bodyText,
  straightCorners,
  isAnimated = true,
  loop = false,
  automationId,
  classNameOverride,
  ...props
}: EmptyStateProps): JSX.Element => {
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
          {headingProps ? (
            <Heading classNameOverride={styles.heading} {...headingProps} />
          ) : (
            <Heading
              variant="heading-3"
              classNameOverride={styles.heading}
              tag="div"
            >
              {headingText}
            </Heading>
          )}
          <Paragraph variant="body" classNameOverride={styles.description}>
            {bodyText}
          </Paragraph>
          {children}
        </div>
      </div>
    </div>
  )
}
