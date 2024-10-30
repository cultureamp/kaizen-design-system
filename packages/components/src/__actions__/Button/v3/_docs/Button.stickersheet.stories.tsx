import React from "react"
import { Meta } from "@storybook/react"
import { VisuallyHidden } from "react-aria"
import { Icon } from "~components/__future__/Icon"
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
  childContent,
  sizes,
  isReversed = false,
}: {
  childContent?: React.ReactNode
  sizes: ButtonSize[]
  isReversed?: boolean
}): JSX.Element => {
  const variants: ButtonVariant[] = ["primary", "secondary", "tertiary"]
  return (
    <>
      {variants.map(buttonVariant =>
        sizes.map((size, key) => (
          <StickerSheet.Row
            key={key}
            isReversed={isReversed}
            rowTitle={`${capitalize(buttonVariant)} (${size})`}
          >
            <Button variant={buttonVariant} size={size}>
              {childContent}
            </Button>
            <Button
              icon={<Icon name="add" isPresentational />}
              variant={buttonVariant}
              size={size}
            >
              {childContent}
            </Button>
            <Button
              icon={
                <Icon name="arrow_forward" shouldMirrorInRTL isPresentational />
              }
              iconPosition="end"
              variant={buttonVariant}
              size={size}
            >
              {childContent}
            </Button>
            <Button
              icon={
                <Icon name="arrow_forward" shouldMirrorInRTL isPresentational />
              }
              iconPosition="end"
              variant={buttonVariant}
              isPending
              pendingLabel="Submitting"
              size={size}
            >
              {childContent}
            </Button>
            <Button
              icon={
                <Icon name="arrow_forward" shouldMirrorInRTL isPresentational />
              }
              iconPosition="end"
              variant={buttonVariant}
              size={size}
              isDisabled
            >
              {childContent}
            </Button>
          </StickerSheet.Row>
        ))
      )}
    </>
  )
}

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet heading="Button" isReversed={isReversed}>
        <StickerSheet.Header
          headings={["Base", "Icon start", "Icon end", "Pending", "Disabled"]}
          headingsWidth="10rem"
          hasVerticalHeadings
          verticalHeadingsWidth="12rem"
        />
        <StickerSheet.Body>
          <RowTemplate
            isReversed={isReversed}
            sizes={["large", "medium", "small"]}
            childContent="Label"
          />
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="Icon only button" isReversed={isReversed}>
        <StickerSheet.Header
          headings={["primary", "secondary", "tertiary", "pending"]}
          headingsWidth="10rem"
          hasVerticalHeadings
          verticalHeadingsWidth="12rem"
        />
        <StickerSheet.Body>
          <StickerSheet.Row isReversed={isReversed} rowTitle="Large">
            <Button icon={<Icon name="delete" isPresentational />} size="large">
              <VisuallyHidden>label</VisuallyHidden>
            </Button>
            <Button
              icon={<Icon name="delete" isPresentational />}
              variant="secondary"
              size="large"
            >
              <VisuallyHidden>label</VisuallyHidden>
            </Button>
            <Button
              icon={<Icon name="delete" isPresentational />}
              variant="tertiary"
              size="large"
            >
              <VisuallyHidden>label</VisuallyHidden>
            </Button>
            <Button
              icon={<Icon name="delete" isPresentational />}
              size="large"
              isPending
              isPendingLabelHidden
              pendingLabel="Submitting"
            >
              <VisuallyHidden>label</VisuallyHidden>
            </Button>
          </StickerSheet.Row>
          <StickerSheet.Row isReversed={isReversed} rowTitle="Medium">
            <Button icon={<Icon name="delete" isPresentational />}>
              <VisuallyHidden>label</VisuallyHidden>
            </Button>
            <Button
              icon={<Icon name="delete" isPresentational />}
              variant="secondary"
            >
              <VisuallyHidden>label</VisuallyHidden>
            </Button>
            <Button
              icon={<Icon name="delete" isPresentational />}
              variant="tertiary"
            >
              <VisuallyHidden>label</VisuallyHidden>
            </Button>
            <Button
              icon={<Icon name="delete" isPresentational />}
              isPending
              isPendingLabelHidden
              pendingLabel="Submitting"
            >
              <VisuallyHidden>label</VisuallyHidden>
            </Button>
          </StickerSheet.Row>
          <StickerSheet.Row isReversed={isReversed} rowTitle="Small">
            <Button icon={<Icon name="delete" isPresentational />} size="small">
              <VisuallyHidden>label</VisuallyHidden>
            </Button>
            <Button
              icon={<Icon name="delete" isPresentational />}
              variant="secondary"
              size="small"
            >
              <VisuallyHidden>label</VisuallyHidden>
            </Button>
            <Button
              icon={<Icon name="delete" isPresentational />}
              variant="tertiary"
              size="small"
            >
              <VisuallyHidden>label</VisuallyHidden>
            </Button>
            <Button
              icon={<Icon name="delete" isPresentational />}
              size="small"
              isPending
              isPendingLabelHidden
              pendingLabel="Submitting"
            >
              <VisuallyHidden>label</VisuallyHidden>
            </Button>
          </StickerSheet.Row>
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
