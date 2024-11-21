import React from "react"
import { Meta } from "@storybook/react"
import { within } from "@storybook/test"
import { Icon } from "~components/__future__/Icon"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { LinkButton, LinkButtonProps } from "../index"

export default {
  title: "Actions/LinkButton/LinkButton (v3)",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const variants = ["primary", "secondary", "tertiary"] satisfies Array<
  LinkButtonProps["variant"]
>
const sizes = ["small", "medium", "large"] satisfies Array<
  LinkButtonProps["size"]
>

const RowTemplate = ({
  isReversed = false,
}: {
  isReversed?: boolean
}): JSX.Element => (
  <>
    {variants.map(variant =>
      sizes.map(size => (
        <StickerSheet.Row
          key={size + variant}
          isReversed={isReversed}
          rowTitle={`${variant} (${size})`}
        >
          <LinkButton variant={variant} size={size}>
            Label
          </LinkButton>
          <LinkButton
            icon={<Icon name="add" isPresentational />}
            variant={variant}
            size={size}
          >
            Label
          </LinkButton>
          <LinkButton
            icon={
              <Icon name="arrow_forward" shouldMirrorInRTL isPresentational />
            }
            iconPosition="end"
            variant={variant}
            size={size}
          >
            Label
          </LinkButton>
          <LinkButton
            icon={<Icon name="delete" isPresentational />}
            variant={variant}
            hasHiddenLabel
            size={size}
          >
            Label
          </LinkButton>
          <LinkButton
            icon={
              <Icon name="arrow_forward" shouldMirrorInRTL isPresentational />
            }
            iconPosition="end"
            variant={variant}
            size={size}
            isDisabled
          >
            Label
          </LinkButton>
        </StickerSheet.Row>
      ))
    )}
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
            "hasHiddenLabel",
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
      <StickerSheet heading="Pseudo states" isReversed={isReversed}>
        <StickerSheet.Header
          headings={["isHovered", "isFocusVisible", "isPressed"]}
          headingsWidth="10rem"
          hasVerticalHeadings
          verticalHeadingsWidth="12rem"
        />
        <StickerSheet.Body>
          {variants.map(variant => (
            <StickerSheet.Row
              key={variant}
              isReversed={isReversed}
              rowTitle={variant}
            >
              <LinkButton data-testid="testid__button-hover" variant={variant}>
                Label
              </LinkButton>
              <LinkButton data-testid="testid__button-focus" variant={variant}>
                Label
              </LinkButton>
              <LinkButton
                data-testid="testid__button-pressed"
                variant={variant}
              >
                Label
              </LinkButton>
            </StickerSheet.Row>
          ))}
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
