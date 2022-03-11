import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import {
  EmptyStatesAction,
  EmptyStatesInformative,
  EmptyStatesNegative,
  EmptyStatesNeutral,
  EmptyStatesPositive,
  AnimatedProps,
} from "@kaizen/draft-illustration"
import styles from "./styles.scss"

const ILLUSTRATIONS = {
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
    Pick<AnimatedProps, "isAnimated" | "loop"> {
  children?: React.ReactNode
  id?: string
  illustrationType?: IllustrationType
  layoutContext?: LayoutContextType
  headingText: string | React.ReactNode
  bodyText: string | React.ReactNode
  straightCorners?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

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
  ...props
}) => {
  const IllustrationComponent = ILLUSTRATIONS[illustrationType]
  const animationProps = isAnimated ? { isAnimated, loop } : {}

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
        <IllustrationComponent
          alt={illustrationType}
          classNameOverride={styles.illustration}
          {...animationProps}
        />
      </div>
      <div className={styles.textSide}>
        <div className={styles.textSideInner}>
          <div className={styles.heading}>{headingText}</div>
          <div className={styles.description}>{bodyText}</div>
          {children}
        </div>
      </div>
    </div>
  )
}
