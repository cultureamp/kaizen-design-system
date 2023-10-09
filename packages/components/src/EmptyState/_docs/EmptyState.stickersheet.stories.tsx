import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import isChromatic from "chromatic"
import { Button } from "~components/Button"
import { ChevronRightIcon } from "~components/Icon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { EmptyState, EmptyStateProps } from "../index"
import styles from "./EmptyState.stories.module.scss"

export default {
  title: "Components/EmptyState",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const IS_CHROMATIC = isChromatic()

const EmptyStateWrapper: StoryFn<typeof EmptyState> = ({
  isAnimated,
  ...args
}) => <EmptyState isAnimated={IS_CHROMATIC ? false : isAnimated} {...args} />

const ButtonWrapper = (
  <div className={styles.buttonContainer}>
    <Button
      label="Label"
      icon={<ChevronRightIcon role="presentation" />}
      iconPosition="end"
    />
  </div>
)

const POSTIVE_PROPS: EmptyStateProps = {
  children: ButtonWrapper,
  headingProps: {
    variant: "heading-3",
    children: "Positive empty state",
  },
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "positive",
}

const INFORMATIVE_PROPS: EmptyStateProps = {
  headingProps: {
    variant: "heading-3",
    children: "Informative empty state",
  },
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "informative",
}

const ACTION_PROPS: EmptyStateProps = {
  children: ButtonWrapper,
  headingProps: {
    variant: "heading-3",
    children: "Action empty state",
  },
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "action",
}

const NEUTRAL_PROPS: EmptyStateProps = {
  headingProps: {
    variant: "heading-3",
    children: "Neutral empty state",
  },
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "neutral",
}

const NEGATIVE_PROPS: EmptyStateProps = {
  children: ButtonWrapper,
  headingProps: {
    variant: "heading-3",
    children: "Negative empty state",
  },
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "negative",
}

const STRAIGHT_CORNERS_PROPS: EmptyStateProps = {
  children: ButtonWrapper,
  headingProps: {
    variant: "heading-3",
    children: "Straight corners empty state",
  },
  bodyText:
    "If providing further actions, include a link to an action or use a Default or Primary action.",
  illustrationType: "action",
  straightCorners: true,
}

const CUSTOM_HEADING_PROPS: EmptyStateProps = {
  children: ButtonWrapper,
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

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Positive">
          <EmptyStateWrapper {...POSTIVE_PROPS} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Informative">
          <EmptyStateWrapper {...INFORMATIVE_PROPS} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Action">
          <EmptyStateWrapper {...ACTION_PROPS} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Neutral">
          <EmptyStateWrapper {...NEUTRAL_PROPS} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Negative">
          <EmptyStateWrapper {...NEGATIVE_PROPS} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Straight Corners">
          <EmptyStateWrapper {...STRAIGHT_CORNERS_PROPS} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Custom heading">
          <EmptyStateWrapper {...CUSTOM_HEADING_PROPS} />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
