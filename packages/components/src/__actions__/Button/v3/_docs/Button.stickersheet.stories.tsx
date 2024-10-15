import React from "react"
import { Meta } from "@storybook/react"
import { ArrowForwardIcon, TrashIcon } from "~components/Icon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Button, ButtonSize, ButtonVariant } from "../index"

export default {
  title: "Actions/Button/Button (v3)/Tests",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

function capitalize(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const RowTemplate = ({
  variant,
  sizes,
  isReversed = false,
}: {
  variant: ButtonVariant
  sizes: ButtonSize[]
  isReversed?: boolean
}): JSX.Element => (
  <>
    {sizes.map((size, key) => (
      <StickerSheet.Row
        key={key}
        isReversed={isReversed}
        rowTitle={`${capitalize(variant)} (${size})`}
      >
        <Button variant={variant} size={size}>
          Label
        </Button>
        <Button
          isPending={true}
          pendingLabel="Submitting"
          variant={variant}
          size={size}
        />
        <Button
          isPending={true}
          pendingLabel="Submitting"
          isPendingLabelHidden
          variant={variant}
          size={size}
        />
        <Button variant={variant} size={size} isDisabled>
          Label
        </Button>
      </StickerSheet.Row>
    ))}
    {/* {sizes.map((size, key) => (
      <StickerSheet.Row
        key={key}
        isReversed={isReversed}
        rowTitle={`${capitalize(variant)} (${size}) icon start `}
      >
        <Button variant={variant} size={size}>
          <TrashIcon role="presentation" /> Label
        </Button>
        <Button
          isPending={true}
          pendingLabel="Submitting"
          variant={variant}
          size={size}
        />
        <Button variant={variant} size={size} isDisabled>
          <TrashIcon role="presentation" /> Label
        </Button>
      </StickerSheet.Row>
    ))}
    {sizes.map((size, key) => (
      <StickerSheet.Row
        key={key}
        isReversed={isReversed}
        rowTitle={`${capitalize(variant)} (${size}) icon end `}
      >
        <Button variant={variant} size={size}>
          Label <ArrowForwardIcon role="presentation" />
        </Button>
        <Button
          isPending={true}
          pendingLabel="Submitting"
          variant={variant}
          size={size}
        />
        <Button variant={variant} size={size} isDisabled>
          Label <ArrowForwardIcon role="presentation" />
        </Button>
      </StickerSheet.Row>
    ))}
    {sizes.map((size, key) => (
      <StickerSheet.Row
        key={key}
        isReversed={isReversed}
        rowTitle={`${capitalize(variant)} (${size}) icon only `}
      >
        <Button variant={variant} size={size}>
          <TrashIcon role="img" aria-label="Label" />
        </Button>
        <Button
          isPending={true}
          pendingLabel="Submitting"
          variant={variant}
          size={size}
        />
        <Button variant={variant} size={size} isDisabled>
          <TrashIcon role="img" aria-label="Label" />
        </Button>
      </StickerSheet.Row>
    ))} */}
  </>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet heading="Button" isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Base", "Pending", "Pending (hidden)", "Disabled"]}
          headingsWidth="10rem"
          hasVerticalHeadings
          verticalHeadingsWidth="12rem"
        />
        <StickerSheet.Body>
          <RowTemplate
            isReversed={isReversed}
            sizes={["large", "medium", "small"]}
            variant="primary"
          />
          <RowTemplate
            isReversed={isReversed}
            sizes={["large", "medium", "small"]}
            variant="secondary"
          />
          <RowTemplate
            isReversed={isReversed}
            sizes={["large", "medium", "small"]}
            variant="tertiary"
          />
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      hover: '[data-hovered="true"]',
      active: '[data-pressed="true"]',
      focus: '[data-focused="true"]',
      focusVisible: '[data-focus-visible="true"]',
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl",
  },
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    reverseColors: true,
  },
  args: {
    isReversed: true,
  },
}
