import chevronLeft from "@kaizen/component-library/icons/chevron-left.icon.svg"

import chevronRight from "@kaizen/component-library/icons/chevron-right.icon.svg"

import * as React from "react"

import { Button } from "@kaizen/draft-button"
import { withDesign } from "storybook-addon-designs"
import { EmptyState } from ".."
import { figmaEmbed } from "../../../storybook/helpers"

import styles from "./EmptyState.stories.scss"

const SidebarAndContentLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div className={styles.container}>
    <div className={styles.sidebar} />
    <div className={styles.content}>{children}</div>
  </div>
)

const ContentOnlyLayout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>
    <div className={styles.content}>{children}</div>
  </div>
)

export default {
  title: "EmptyState (React)",
  component: EmptyState,
  parameters: {
    info: {
      text: `
        import { EmptyState } from "@kaizen/draft-empty-state";
      `,
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A33123"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemo = () => (
  <EmptyState
    headingText="Empty state title"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
    useZenStyles
  />
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const Positive = () => (
  <EmptyState
    headingText="Positive empty state"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
    illustrationType="positive"
    useZenStyles
  >
    <div className={styles.buttonContainer}>
      <Button label="Label" icon={chevronRight} iconPosition="end" />
    </div>
  </EmptyState>
)

export const Informative = () => (
  <EmptyState
    headingText="Informative empty state"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
    illustrationType="informative"
    useZenStyles
  />
)

export const Action = () => (
  <EmptyState
    headingText="Action empty state"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
    illustrationType="action"
  >
    <div className={styles.buttonContainer}>
      <Button label="Label" icon={chevronRight} iconPosition="end" />
    </div>
  </EmptyState>
)

export const Neutral = () => (
  <EmptyState
    headingText="Neutral empty state"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
    illustrationType="neutral"
    useZenStyles
  />
)

export const Negative = () => (
  <EmptyState
    headingText="Negative empty state"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
    illustrationType="negative"
    useZenStyles
  >
    <div className={styles.buttonContainer}>
      <Button label="Label" icon={chevronRight} iconPosition="end" />
    </div>
  </EmptyState>
)

export const RtlAction = () => (
  <div dir="rtl">
    <EmptyState
      headingText="Empty state title"
      bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
      illustrationType="action"
      useZenStyles
    >
      <div className={styles.buttonContainer}>
        <Button label="Label" icon={chevronLeft} iconPosition="end" />
      </div>
    </EmptyState>
  </div>
)

RtlAction.storyName = "RTL, Action"

export const StraightCorners = () => (
  <EmptyState
    headingText="Empty state title"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
    illustrationType="action"
    straightCorners
    useZenStyles
  >
    <div className={styles.buttonContainer}>
      <Button label="Label" icon={chevronRight} iconPosition="end" />
    </div>
  </EmptyState>
)

StraightCorners.storyName = "Straight corners"
