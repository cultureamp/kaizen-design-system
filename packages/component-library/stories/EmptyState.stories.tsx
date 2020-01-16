const chevronLeft = require("@cultureamp/kaizen-component-library/icons/chevron-left.icon.svg")
  .default
const chevronRight = require("@cultureamp/kaizen-component-library/icons/chevron-right.icon.svg")
  .default
import * as React from "react"

import { loadElmStories } from "@cultureamp/elm-storybook"
import { Button } from "@cultureamp/kaizen-component-library"
import { EmptyState } from "@cultureamp/kaizen-component-library/draft"

import { storiesOf } from "@storybook/react"

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

storiesOf("EmptyState (React)", module)
  .add("Default (Kaizen Site Demo)", () => (
    <SidebarAndContentLayout>
      <EmptyState
        headingText="Empty state title"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
      />
    </SidebarAndContentLayout>
  ))
  .add("Sidebar + Content layout", () => (
    <SidebarAndContentLayout>
      <EmptyState
        headingText="Empty state title"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
        layoutContext="sidebarAndContent"
      />
    </SidebarAndContentLayout>
  ))
  .add("Content-only layout", () => (
    <ContentOnlyLayout>
      <EmptyState
        headingText="Empty state title"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
        layoutContext="contentOnly"
      />
    </ContentOnlyLayout>
  ))
  .add("Positive", () => (
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
  ))
  .add("Neutral", () => (
    <SidebarAndContentLayout>
      <EmptyState
        headingText="Neutral empty state"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
        illustrationType="neutral"
      />
    </SidebarAndContentLayout>
  ))
  .add("Negative", () => (
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
  ))
  .add("Informative", () => (
    <SidebarAndContentLayout>
      <EmptyState
        headingText="Informative empty state"
        bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
        illustrationType="informative"
      />
    </SidebarAndContentLayout>
  ))
  .add("Action", () => (
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
  ))
  .add("Action + primary button", () => (
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
  ))
  .add("RTL", () => (
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
  ))
  .add("Straight corners", () => (
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
  ))

loadElmStories(
  "EmptyState (Elm)",
  module,
  require("./EmptyState.stories.elm"),
  [
    "Default",
    "Default (minimal props)",
    "Content-only layout",
    "Positive",
    "Neutral",
    "Negative",
    "Informative",
    "Action",
    "Action with button",
  ]
)
