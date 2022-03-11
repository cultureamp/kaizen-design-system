import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import chevronLeft from "@kaizen/component-library/icons/chevron-left.icon.svg"
import chevronRight from "@kaizen/component-library/icons/chevron-right.icon.svg"
import { Button } from "@kaizen/button"
import { EmptyState } from ".."
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import styles from "./EmptyState.stories.scss"

const IS_CHROMATIC = isChromatic()

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
  argTypes: {
    children: {
      table: { type: { summary: "React.ReactNode" } },
      control: { type: "select" },
      options: ["Default (no children)", "Button (chevron right)"],
      mapping: {
        "Default (no children)": undefined,
        "Button (chevron right)": (
          <div className={styles.buttonContainer}>
            <Button label="Label" icon={chevronRight} iconPosition="end" />
          </div>
        ),
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof EmptyState>

const EmptyStateTemplate: ComponentStory<typeof EmptyState> = args => (
  <EmptyState {...args} />
)

export const DefaultKaizenSiteDemo = EmptyStateTemplate.bind({})
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.args = {
  headingText: "Empty state title",
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
}

export const Positive = EmptyStateTemplate.bind({})
Positive.args = {
  children: "Button (chevron right)",
  headingText: "Positive empty state",
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "positive",
}
Positive.parameters = { chromatic: { disable: false } }

export const Informative = EmptyStateTemplate.bind({})
Informative.args = {
  headingText: "Informative empty state",
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "informative",
}
Informative.parameters = { chromatic: { disable: false } }

export const Action = EmptyStateTemplate.bind({})
Action.args = {
  children: "Button (chevron right)",
  headingText: "Action empty state",
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "action",
}
Action.parameters = { chromatic: { disable: false } }

export const Neutral = EmptyStateTemplate.bind({})
Neutral.args = {
  headingText: "Neutral empty state",
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "neutral",
}
Neutral.parameters = { chromatic: { disable: false } }

export const Negative = EmptyStateTemplate.bind({})
Negative.args = {
  children: "Button (chevron right)",
  headingText: "Negative empty state",
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "negative",
}
Negative.parameters = { chromatic: { disable: false } }

export const RtlAction = EmptyStateTemplate.bind({})
RtlAction.storyName = "RTL, Action"
RtlAction.decorators = [Story => <div dir="rtl">{Story()}</div>]
RtlAction.argTypes = {
  children: {
    table: { type: { summary: "React.ReactNode" } },
    control: { type: "select" },
    options: ["Default (no children)", "Button (chevron left)"],
    mapping: {
      "Default (no children)": undefined,
      "Button (chevron left)": (
        <div className={styles.buttonContainer}>
          <Button label="Label" icon={chevronLeft} iconPosition="end" />
        </div>
      ),
    },
  },
}
RtlAction.args = {
  children: "Button (chevron left)",
  headingText: "Empty state title",
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "action",
}
RtlAction.parameters = { chromatic: { disable: false } }

export const StraightCorners = EmptyStateTemplate.bind({})
StraightCorners.storyName = "Straight corners"
StraightCorners.args = {
  children: "Button (chevron right)",
  headingText: "Empty state title",
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "action",
  straightCorners: true,
}
StraightCorners.parameters = { chromatic: { disable: false } }
