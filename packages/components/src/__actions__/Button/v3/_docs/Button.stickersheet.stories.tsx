import React from "react"
import { Meta } from "@storybook/react"
import { within } from "@storybook/test"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { Icon } from "~components/__future__/Icon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Button, ButtonSizes, ButtonVariants } from "../index"

export default {
  title: "Actions/Button/Button (v3)",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const variants = ["primary", "secondary", "tertiary"] satisfies ButtonVariants[]
const sizes = ["small", "medium", "large"] satisfies ButtonSizes[]

const RowTemplate = ({
  isReversed = false,
}: {
  isReversed?: boolean
}): JSX.Element => (
  <>
    {variants.map(buttonVariants =>
      sizes.map(size => (
        <StickerSheet.Row
          key={size + variants}
          isReversed={isReversed}
          rowTitle={`${buttonVariants} (${size})`}
        >
          <Button variant={buttonVariants} size={size}>
            Label
          </Button>
          <Button
            icon={<Icon name="add" isPresentational />}
            variant={buttonVariants}
            size={size}
          >
            Label
          </Button>
          <Button
            icon={
              <Icon name="arrow_forward" shouldMirrorInRTL isPresentational />
            }
            iconPosition="end"
            variant={buttonVariants}
            size={size}
          >
            Label
          </Button>
          <Button
            icon={
              <Icon name="arrow_forward" shouldMirrorInRTL isPresentational />
            }
            iconPosition="end"
            variant={buttonVariants}
            isPending
            pendingLabel="Submitting"
            size={size}
          >
            Label
          </Button>
          <Button
            icon={
              <Icon name="arrow_forward" shouldMirrorInRTL isPresentational />
            }
            iconPosition="end"
            variant={buttonVariants}
            size={size}
            isDisabled
          >
            Label
          </Button>
        </StickerSheet.Row>
      ))
    )}
  </>
)

const IconButtonRowTemplate = ({
  isReversed = false,
}: {
  isReversed?: boolean
}): JSX.Element => (
  <>
    {sizes.map(size => (
      <StickerSheet.Row
        isReversed={isReversed}
        rowTitle={`${size}`}
        key={size + variants}
      >
        {variants.map((buttonVariants, key) => (
          <span className="flex gap-8" key={key}>
            <Button
              icon={<Icon name="delete" isPresentational />}
              size={size}
              variant={buttonVariants}
            >
              <VisuallyHidden>Label</VisuallyHidden>
            </Button>
            <Button
              icon={<Icon name="delete" isPresentational />}
              size={size}
              isPending
              isPendingLabelHidden
              pendingLabel="Submitting"
              variant={buttonVariants}
            >
              <VisuallyHidden>Label</VisuallyHidden>
            </Button>
          </span>
        ))}
      </StickerSheet.Row>
    ))}
  </>
)

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
          <RowTemplate isReversed={isReversed} />
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
          <IconButtonRowTemplate isReversed={isReversed} />
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
