import chevronLeft from "@kaizen/component-library/icons/chevron-left.icon.svg"

import chevronRight from "@kaizen/component-library/icons/chevron-right.icon.svg"

import * as React from "react"

import { Button } from "@kaizen/draft-button"
import { EmptyState } from "../empty-state"

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
  },
}

export const DefaultKaizenSiteDemo = () => (
  <SidebarAndContentLayout>
    <EmptyState
      headingText="Empty state title"
      bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
      useZenStyles
    />
  </SidebarAndContentLayout>
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const LayoutSidebarContent = () => (
  <SidebarAndContentLayout>
    <EmptyState
      headingText="Empty state title"
      bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
      layoutContext="sidebarAndContent"
      useZenStyles
    />
  </SidebarAndContentLayout>
)

LayoutSidebarContent.storyName = "Layout, Sidebar + Content"

export const LayoutContentOnly = () => (
  <ContentOnlyLayout>
    <EmptyState
      headingText="Empty state title"
      bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
      layoutContext="contentOnly"
      useZenStyles
    />
  </ContentOnlyLayout>
)

LayoutContentOnly.storyName = "Layout, Content-only"

export const Positive = () => (
  <SidebarAndContentLayout>
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
  </SidebarAndContentLayout>
)

export const Informative = () => (
  <SidebarAndContentLayout>
    <EmptyState
      headingText="Informative empty state"
      bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
      illustrationType="informative"
      useZenStyles
    />
  </SidebarAndContentLayout>
)

export const Action = () => (
  <SidebarAndContentLayout>
    <EmptyState
      headingText="Action empty state"
      bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
      illustrationType="action"
      useZenStyles
    >
      <div className={styles.buttonContainer}>
        <Button label="Label" icon={chevronRight} iconPosition="end" />
      </div>
    </EmptyState>
  </SidebarAndContentLayout>
)

export const ActionButNotZen = () => (
  <SidebarAndContentLayout>
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
  </SidebarAndContentLayout>
)

ActionButNotZen.storyName = "Action (pre-Zen legacy styles)"

export const ActionButton = () => (
  <SidebarAndContentLayout>
    <EmptyState
      headingText="Action empty state"
      bodyText={
        <p>
          If providing further actions, include a <a>link</a> to an action or
          use a Default or Primary action.
        </p>
      }
      illustrationType="action"
      useZenStyles
    >
      <div className={styles.buttonContainer}>
        <Button label="Label" icon={chevronRight} iconPosition="end" />
      </div>
    </EmptyState>
  </SidebarAndContentLayout>
)

ActionButton.storyName = "Action, Button"

export const Neutral = () => (
  <SidebarAndContentLayout>
    <EmptyState
      headingText="Neutral empty state"
      bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
      illustrationType="neutral"
      useZenStyles
    />
  </SidebarAndContentLayout>
)

export const Negative = () => (
  <SidebarAndContentLayout>
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
  </SidebarAndContentLayout>
)

export const RtlAction = () => (
  <div dir="rtl">
    <SidebarAndContentLayout>
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
    </SidebarAndContentLayout>
  </div>
)

RtlAction.storyName = "RTL, Action"

export const StraightCorners = () => (
  <SidebarAndContentLayout>
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
  </SidebarAndContentLayout>
)

StraightCorners.storyName = "Straight corners"
