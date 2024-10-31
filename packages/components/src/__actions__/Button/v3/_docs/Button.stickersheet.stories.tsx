import React from "react"
import { Meta } from "@storybook/react"
import { within } from "@storybook/test"
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

const IconButtonRowTemplate = ({
  childContent,
  isReversed = false,
  sizes,
}: {
  childContent?: React.ReactNode
  isReversed?: boolean
  sizes: ButtonSize[]
}): JSX.Element => {
  const variants: ButtonVariant[] = ["primary", "secondary", "tertiary"]

  return (
    <>
      {sizes.map((size, sizesKey) => (
        <StickerSheet.Row
          isReversed={isReversed}
          rowTitle={`${capitalize(size)}`}
          key={sizesKey}
        >
          {variants.map((buttonVariant, key) => (
            <React.Fragment key={key}>
              <Button
                icon={<Icon name="delete" isPresentational />}
                size={size}
                variant={buttonVariant}
              >
                <VisuallyHidden>{childContent}</VisuallyHidden>
              </Button>
              <Button
                icon={<Icon name="delete" isPresentational />}
                size={size}
                className="ms-6"
                isPending
                isPendingLabelHidden
                pendingLabel="Submitting"
                variant={buttonVariant}
              >
                <VisuallyHidden>{childContent}</VisuallyHidden>
              </Button>
            </React.Fragment>
          ))}
        </StickerSheet.Row>
      ))}
    </>
  )
}

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet heading="Button" isReversed={isReversed}>
        <StickerSheet.Header
          headings={[
            "Base",
            "Icon start",
            "Icon end",
            "isPending",
            "isDisabled",
          ]}
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
          headings={["primary", "secondary", "tertiary"]}
          headingsWidth="10rem"
          hasVerticalHeadings
          verticalHeadingsWidth="12rem"
        />
        <StickerSheet.Body>
          <IconButtonRowTemplate
            isReversed={isReversed}
            sizes={["large", "medium", "small"]}
            childContent={<VisuallyHidden>Label</VisuallyHidden>}
          />
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet heading="Pseudo states" isReversed={isReversed}>
        <StickerSheet.Header
          headings={["isHovered", "isFocusVisible", "isPressed"]}
          headingsWidth="10rem"
          hasVerticalHeadings
          verticalHeadingsWidth="12rem"
        />
        <StickerSheet.Body>
          <StickerSheet.Row isReversed={isReversed} rowTitle="Primary">
            <Button data-testid="testid__button-hover">Label</Button>
            <Button data-testid="testid__button-focus">Label</Button>
            <Button data-testid="testid__button-pressed">Label</Button>
          </StickerSheet.Row>
          <StickerSheet.Row isReversed={isReversed} rowTitle="Secondary">
            <Button variant="secondary" data-testid="testid__button-hover">
              Label
            </Button>
            <Button variant="secondary" data-testid="testid__button-focus">
              Label
            </Button>
            <Button variant="secondary" data-testid="testid__button-pressed">
              Label
            </Button>
          </StickerSheet.Row>
          <StickerSheet.Row isReversed={isReversed} rowTitle="Tertiary">
            <Button variant="tertiary" data-testid="testid__button-hover">
              Label
            </Button>
            <Button variant="tertiary" data-testid="testid__button-focus">
              Label
            </Button>
            <Button variant="tertiary" data-testid="testid__button-pressed">
              Label
            </Button>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
    },
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const focusButtons = canvas.getAllByTestId("testid__button-focus")
    const hoverButtons = canvas.getAllByTestId("testid__button-hover")
    const pressedButton = canvas.getAllByTestId("testid__button-pressed")

    focusButtons.forEach(button => {
      button.setAttribute("data-focus-visible", "true")
    })
    hoverButtons.forEach(button => {
      button.setAttribute("data-hovered", "true")
    })
    pressedButton.forEach(button => {
      button.setAttribute("data-pressed", "true")
    })
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
