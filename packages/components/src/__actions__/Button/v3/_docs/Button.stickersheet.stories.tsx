import React from "react"
import { Meta } from "@storybook/react"
import { Icon } from "~components/__future__/Icon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Button, ButtonSize, ButtonVariant, ButtonProps } from "../index"

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
  icon,
  iconPosition,
  sizes,
  isReversed = false,
}: {
  childContent?: React.ReactNode
  sizes: ButtonSize[]
  isReversed?: boolean
} & Pick<ButtonProps, "icon" | "iconPosition">): JSX.Element => {
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
            <Button
              icon={icon}
              iconPosition={iconPosition}
              variant={buttonVariant}
              size={size}
            >
              {childContent}
            </Button>
            <Button
              icon={icon}
              iconPosition={iconPosition}
              isPending={true}
              pendingLabel="Submitting"
              variant={buttonVariant}
              size={size}
            >
              {childContent}
            </Button>
            <Button
              icon={icon}
              iconPosition={iconPosition}
              isPending={true}
              pendingLabel="Submitting"
              isPendingLabelHidden
              variant={buttonVariant}
              size={size}
            >
              {childContent}
            </Button>
            <Button
              icon={icon}
              iconPosition={iconPosition}
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
          headings={["Base", "Pending", "Pending (hidden)", "Disabled"]}
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

      <StickerSheet heading="Button (icon end)" isReversed={isReversed}>
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
            iconPosition="end"
            icon={<Icon name="arrow_forward" isPresentational />}
            childContent={<>Label</>}
          />
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet heading="Button (icon start)" isReversed={isReversed}>
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
            icon={<Icon isPresentational name="add" />}
            childContent={<>Label</>}
          />
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet heading="Button (icon only)" isReversed={isReversed}>
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
            icon={<Icon name="delete" alt="Label" />}
            iconPosition="start"
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
