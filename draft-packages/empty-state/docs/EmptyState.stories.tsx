import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import isChromatic from "chromatic"
import { Button } from "@kaizen/button"
import chevronRight from "@kaizen/component-library/icons/chevron-right.icon.svg"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { EmptyState, EmptyStateProps } from ".."
import styles from "./EmptyState.stories.module.scss"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Empty State",
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component: 'import { EmptyState } from "@kaizen/draft-empty-state";',
      },
    },
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
} as Meta<typeof EmptyState>

const BUTTON = (
  <div className={styles.buttonContainer}>
    <Button label="Label" icon={chevronRight} iconPosition="end" />
  </div>
)

const EmptyStateTemplate: StoryFn<typeof EmptyState> = ({
  isAnimated,
  ...args
}) => <EmptyState isAnimated={IS_CHROMATIC ? false : isAnimated} {...args} />

export const DefaultKaizenSiteDemo = EmptyStateTemplate.bind({})
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.args = {
  headingProps: {
    variant: "heading-3",
    children: "Empty state title",
  },
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
}

const Positive = EmptyStateTemplate.bind({})
const POSTIVE_PROPS: EmptyStateProps = {
  children: BUTTON,
  headingProps: {
    variant: "heading-3",
    children: "Positive empty state",
  },
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "positive",
}

const Informative = EmptyStateTemplate.bind({})
const INFORMATIVE_PROPS: EmptyStateProps = {
  headingText: "Informative empty state",
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "informative",
}

const Action = EmptyStateTemplate.bind({})
const ACTION_PROPS: EmptyStateProps = {
  children: BUTTON,
  headingProps: {
    variant: "heading-3",
    children: "Action empty state",
  },
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "action",
}

const Neutral = EmptyStateTemplate.bind({})
const NEUTRAL_PROPS: EmptyStateProps = {
  headingProps: {
    variant: "heading-3",
    children: "Neutral empty state",
  },
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "neutral",
}

const Negative = EmptyStateTemplate.bind({})
const NEGATIVE_PROPS: EmptyStateProps = {
  children: BUTTON,
  headingProps: {
    variant: "heading-3",
    children: "Negative empty state",
  },
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "negative",
}

const StraightCorners = EmptyStateTemplate.bind({})
const STRAIGHT_CORNERS_PROPS: EmptyStateProps = {
  children: BUTTON,
  headingProps: {
    variant: "heading-3",
    children: "Straight corners empty state",
  },
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "action",
  straightCorners: true,
}

const CustomHeading = EmptyStateTemplate.bind({})
const CUSTOM_HEADING_PROPS: EmptyStateProps = {
  children: BUTTON,
  bodyText:
    "Customise heading level so that the correct semantic heading level can be used for your page.",
  illustrationType: "neutral",
  headingProps: {
    variant: "heading-3",
    children: "Custom heading empty state",
    tag: "h2",
    color: "dark-reduced-opacity",
  },
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Empty State"]} />
    <StoryWrapper.Row rowTitle="Positive">
      <Positive {...POSTIVE_PROPS} />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Informative">
      <Informative {...INFORMATIVE_PROPS} />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Action">
      <Action {...ACTION_PROPS} />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Neutral">
      <Neutral {...NEUTRAL_PROPS} />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Negative">
      <Negative {...NEGATIVE_PROPS} />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Straight Corners">
      <StraightCorners {...STRAIGHT_CORNERS_PROPS} />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Custom Heading">
      <CustomHeading {...CUSTOM_HEADING_PROPS} />
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}
