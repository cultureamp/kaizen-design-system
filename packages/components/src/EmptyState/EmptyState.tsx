import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import {
  AnimatedSceneProps,
  EmptyStatesAction,
  EmptyStatesInformative,
  EmptyStatesNegative,
  EmptyStatesNeutral,
  EmptyStatesPositive,
} from "@kaizen/draft-illustration"
import { Paragraph } from "@kaizen/typography"
import { HeadingProps, Heading } from "~components/Heading"
import { OverrideClassName } from "~types/OverrideClassName"
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

export type EmptyStateProps = {
  children?: React.ReactNode
  id?: string
  illustrationType?: IllustrationType
  layoutContext?: LayoutContextType
  bodyText: string | React.ReactNode
  straightCorners?: boolean
  headingProps?: HeadingProps
} & OverrideClassName<HTMLAttributes<HTMLDivElement>> &
  Pick<AnimatedSceneProps, "isAnimated" | "loop">

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082094098/Empty+State Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-empty-state--docs Storybook}
 */
export const EmptyState = ({
  children,
  id,
  illustrationType = "informative",
  layoutContext = "sidebarAndContent",
  headingProps,
  bodyText,
  straightCorners,
  isAnimated = true,
  loop = false,
  classNameOverride,
  ...props
}: EmptyStateProps): JSX.Element => {
  const IllustrationComponent = ILLUSTRATIONS[illustrationType]

  return (
    <div
      className={classnames(
        classNameOverride,
        styles[illustrationType],
        styles.container,
        styles.zen,
        styles[layoutContext],
        straightCorners && styles.straightCorners
      )}
      id={id}
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
          {headingProps && (
            <Heading classNameOverride={styles.heading} {...headingProps} />
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

EmptyState.displayName = "EmptyState"
