const chevronLeft = require("@kaizen/component-library/icons/chevron-left.icon.svg")
  .default
const chevronRight = require("@kaizen/component-library/icons/chevron-right.icon.svg")
  .default
import * as React from "react"

import { loadElmStories } from "@cultureamp/elm-storybook"
import { Button } from "@kaizen/component-library"
import { EmptyState } from "@kaizen/component-library/draft"

const styles = require("./EmptyState.stories.scss")

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
  title: 'EmptyState (React)',
};

export const DefaultKaizenSiteDemo = () => (
    <SidebarAndContentLayout>
      <EmptyState
        headingText="Empty state title"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
      />
    </SidebarAndContentLayout>
  );

DefaultKaizenSiteDemo.story = {
  name: 'Default (Kaizen Site Demo)',
};

export const LayoutSidebarContent = () => (
    <SidebarAndContentLayout>
      <EmptyState
        headingText="Empty state title"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
        layoutContext="sidebarAndContent"
      />
    </SidebarAndContentLayout>
  );

LayoutSidebarContent.story = {
  name: 'Layout, Sidebar + Content',
};

export const LayoutContentOnly = () => (
    <ContentOnlyLayout>
      <EmptyState
        headingText="Empty state title"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
        layoutContext="contentOnly"
      />
    </ContentOnlyLayout>
  );

LayoutContentOnly.story = {
  name: 'Layout, Content-only',
};

export const Positive = () => (
    <SidebarAndContentLayout>
      <EmptyState
        headingText="Positive empty state"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
        illustrationType="positive"
      >
        <div className={styles.buttonContainer}>
          <Button
            label="Label"
            icon={chevronRight}
            iconPosition="end"
            fullWidth
          />
        </div>
      </EmptyState>
    </SidebarAndContentLayout>
  );

export const Informative = () => (
    <SidebarAndContentLayout>
      <EmptyState
        headingText="Informative empty state"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
        illustrationType="informative"
      />
    </SidebarAndContentLayout>
  );

export const Action = () => (
    <SidebarAndContentLayout>
      <EmptyState
        headingText="Action empty state"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
        illustrationType="action"
      >
        <div className={styles.buttonContainer}>
          <Button
            label="Label"
            icon={chevronRight}
            iconPosition="end"
            fullWidth
          />
        </div>
      </EmptyState>
    </SidebarAndContentLayout>
  );

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
      >
        <div className={styles.buttonContainer}>
          <Button
            label="Label"
            icon={chevronRight}
            iconPosition="end"
            primary
            fullWidth
          />
        </div>
      </EmptyState>
    </SidebarAndContentLayout>
  );

ActionButton.story = {
  name: 'Action, Button',
};

export const Neutral = () => (
    <SidebarAndContentLayout>
      <EmptyState
        headingText="Neutral empty state"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
        illustrationType="neutral"
      />
    </SidebarAndContentLayout>
  );

export const Negative = () => (
    <SidebarAndContentLayout>
      <EmptyState
        headingText="Negative empty state"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
        illustrationType="negative"
      >
        <div className={styles.buttonContainer}>
          <Button
            label="Label"
            icon={chevronRight}
            iconPosition="end"
            fullWidth
          />
        </div>
      </EmptyState>
    </SidebarAndContentLayout>
  );

export const RtlAction = () => (
    <div dir="rtl">
      <SidebarAndContentLayout>
        <EmptyState
          headingText="Empty state title"
          bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
          illustrationType="action"
        >
          <div className={styles.buttonContainer}>
            <Button
              label="Label"
              icon={chevronLeft}
              iconPosition="end"
              fullWidth
            />
          </div>
        </EmptyState>
      </SidebarAndContentLayout>
    </div>
  );

RtlAction.story = {
  name: 'RTL, Action',
};

export const StraightCorners = () => (
    <SidebarAndContentLayout>
      <EmptyState
        headingText="Empty state title"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
        illustrationType="action"
        straightCorners
      >
        <div className={styles.buttonContainer}>
          <Button
            label="Label"
            icon={chevronLeft}
            iconPosition="end"
            fullWidth
          />
        </div>
      </EmptyState>
    </SidebarAndContentLayout>
  );

StraightCorners.story = {
  name: 'Straight corners',
};

loadElmStories(
  "EmptyState (Elm)",
  module,
  require("./EmptyState.stories.elm"),
  [
    "Default",
    "Default (minimal props)",
    "Layout, Content-only",
    "Positive",
    "Informative",
    "Action",
    "Action, button",
    "Neutral",
    "Negative",
    "RTL, Action",
  ]
)
