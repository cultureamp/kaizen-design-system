import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { OverrideClassName } from "~components/types/OverrideClassName"
import { SpinnerIcon } from "./subcomponents"
import styles from "./LoadingSpinner.module.css"

export type LoadingSpinnerProps = {
  accessibilityLabel: string
  /**
   * Generally use "md" unless spinner is inside a form field.  @default "md"
   */
  size?: "xs" | "sm" | "md"
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "children">>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093253/Loading+Spinner Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-loading-loadingspinner--docs Storybook}
 */
export const LoadingSpinner = ({
  accessibilityLabel = "Loading",
  size = "md",
  classNameOverride,
  ...props
}: LoadingSpinnerProps): JSX.Element => (
  <div
    className={classnames(styles.loadingSpinner, styles[size], classNameOverride)}
    role="status"
    {...props}
  >
    <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
    <SpinnerIcon size={size} />
  </div>
)

LoadingSpinner.displayName = "LoadingSpinner"
