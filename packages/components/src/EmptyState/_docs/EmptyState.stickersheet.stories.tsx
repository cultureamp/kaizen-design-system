import React from "react"
import { Meta } from "@storybook/react"
import isChromatic from "chromatic"
import { ChevronRightIcon } from "~components/Icon"
import { Button } from "~components/__actions__/v2"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { EmptyState, EmptyStateProps } from "../index"

export default {
  title: "Components/EmptyState",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const IS_CHROMATIC = isChromatic()

const EmptyStateWrapper = ({
  isAnimated,
  ...args
}: EmptyStateProps): JSX.Element => (
  <EmptyState isAnimated={IS_CHROMATIC ? false : isAnimated} {...args} />
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const defaultProps = {
      headingProps: {
        variant: "heading-3",
        children: "Empty state",
      },
      bodyText:
        "If providing further actions, include a link to an action or use a Default or Primary action.",
    } satisfies EmptyStateProps

    const variants = [
      "success",
      "warning",
      "informative",
      "expert-advice",
    ] satisfies Array<EmptyStateProps["variant"]>

    const illustrationTypes = [
      "positive",
      "neutral",
      "negative",
      "informative",
      "action",
    ] satisfies Array<EmptyStateProps["illustrationType"]>

    return (
      <>
        <StickerSheet isReversed={isReversed} heading="EmptyState">
          <StickerSheet.Body>
            {variants.map(variant => (
              <StickerSheet.Row key={variant} rowTitle={variant}>
                <EmptyStateWrapper {...defaultProps} variant={variant} />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
          <StickerSheet.Body>
            <StickerSheet.Row rowTitle="straightCorners">
              <EmptyStateWrapper {...defaultProps} straightCorners />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet
          isReversed={isReversed}
          heading="Illustration type (deprecated)"
        >
          <StickerSheet.Body>
            {illustrationTypes.map(illustrationType => (
              <StickerSheet.Row
                key={illustrationType}
                rowTitle={illustrationType}
              >
                <EmptyStateWrapper
                  {...defaultProps}
                  illustrationType={illustrationType}
                >
                  <Button
                    label="Label"
                    icon={<ChevronRightIcon role="presentation" />}
                    iconPosition="end"
                  />
                </EmptyStateWrapper>
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>
      </>
    )
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
