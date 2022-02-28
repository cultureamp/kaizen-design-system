import React from "react"
import chevronLeft from "@kaizen/component-library/icons/chevron-left.icon.svg"
import chevronRight from "@kaizen/component-library/icons/chevron-right.icon.svg"
import { Button } from "@kaizen/draft-button"
import { withDesign } from "storybook-addon-designs"
import { EmptyState } from ".."
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import styles from "./EmptyState.stories.scss"

export default {
  title: `${CATEGORIES.components}/Empty State`,
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component: 'import { EmptyState } from "@kaizen/draft-empty-state";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A33123"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemo = () => (
  <EmptyState
    headingText="Empty state title"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
  />
)
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const Positive = () => (
  <EmptyState
    headingText="Positive empty state"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
    illustrationType="positive"
  >
    <div className={styles.buttonContainer}>
      <Button label="Label" icon={chevronRight} iconPosition="end" />
    </div>
  </EmptyState>
)
Positive.parameters = { chromatic: { disable: false } }

export const Informative = () => (
  <EmptyState
    headingText="Informative empty state"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
    illustrationType="informative"
  />
)
Informative.parameters = { chromatic: { disable: false } }

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
Action.parameters = { chromatic: { disable: false } }

export const Neutral = () => (
  <EmptyState
    headingText="Neutral empty state"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
    illustrationType="neutral"
  />
)
Neutral.parameters = { chromatic: { disable: false } }

export const Negative = () => (
  <EmptyState
    headingText="Negative empty state"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
    illustrationType="negative"
  >
    <div className={styles.buttonContainer}>
      <Button label="Label" icon={chevronRight} iconPosition="end" />
    </div>
  </EmptyState>
)
Negative.parameters = { chromatic: { disable: false } }

export const RtlAction = () => (
  <div dir="rtl">
    <EmptyState
      headingText="Empty state title"
      bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
      illustrationType="action"
    >
      <div className={styles.buttonContainer}>
        <Button label="Label" icon={chevronLeft} iconPosition="end" />
      </div>
    </EmptyState>
  </div>
)
RtlAction.storyName = "RTL, Action"
RtlAction.parameters = { chromatic: { disable: false } }

export const StraightCorners = () => (
  <EmptyState
    headingText="Empty state title"
    bodyText="If providing further actions, include a link to an action or use a
          Default or Primary action."
    illustrationType="action"
    straightCorners
  >
    <div className={styles.buttonContainer}>
      <Button label="Label" icon={chevronRight} iconPosition="end" />
    </div>
  </EmptyState>
)
StraightCorners.storyName = "Straight corners"
StraightCorners.parameters = { chromatic: { disable: false } }
