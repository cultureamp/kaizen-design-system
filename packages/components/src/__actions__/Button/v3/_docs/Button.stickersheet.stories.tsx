import React from "react"
import { Meta } from "@storybook/react"
import { within } from "@storybook/test"
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

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet
        title="Button"
        isReversed={isReversed}
        headers={[
          "Base",
          "Icon start",
          "Icon end",
          "isPending",
          "hasHiddenPendingLabel",
          "isDisabled",
        ]}
      >
        {variants.map(variant =>
          sizes.map(size => (
            <StickerSheet.Row
              key={size + variant}
              isReversed={isReversed}
              header={`${variant} (${size})`}
            >
              <Button variant={variant} size={size}>
                Label
              </Button>
              <Button
                icon={<Icon name="add" isPresentational />}
                variant={variant}
                size={size}
              >
                Label
              </Button>
              <Button
                icon={
                  <Icon
                    name="arrow_forward"
                    shouldMirrorInRTL
                    isPresentational
                  />
                }
                iconPosition="end"
                variant={variant}
                size={size}
              >
                Label
              </Button>
              <Button
                icon={
                  <Icon
                    name="arrow_forward"
                    shouldMirrorInRTL
                    isPresentational
                  />
                }
                iconPosition="end"
                variant={variant}
                isPending
                pendingLabel="Submitting"
                size={size}
              >
                Label
              </Button>
              <Button
                icon={
                  <Icon
                    name="arrow_forward"
                    shouldMirrorInRTL
                    isPresentational
                  />
                }
                iconPosition="end"
                variant={variant}
                isPending
                pendingLabel="Submitting"
                hasHiddenPendingLabel
                size={size}
              >
                Label
              </Button>
              <Button
                icon={
                  <Icon
                    name="arrow_forward"
                    shouldMirrorInRTL
                    isPresentational
                  />
                }
                iconPosition="end"
                variant={variant}
                size={size}
                isDisabled
              >
                Label
              </Button>
            </StickerSheet.Row>
          ))
        )}
      </StickerSheet>

      <StickerSheet
        title="Icon only button"
        isReversed={isReversed}
        headers={["primary", "secondary", "tertiary"]}
      >
        {sizes.map(size => (
          <StickerSheet.Row
            isReversed={isReversed}
            header={size}
            key={size}
          >
            {variants.map(variant => (
              <span className="flex gap-8" key={variant}>
                <Button
                  icon={<Icon name="delete" isPresentational />}
                  hasHiddenLabel
                  size={size}
                  variant={variant}
                >
                  Label
                </Button>
                <Button
                  icon={<Icon name="delete" isPresentational />}
                  size={size}
                  isPending
                  hasHiddenLabel
                  pendingLabel="Submitting"
                  variant={variant}
                >
                  Label
                </Button>
              </span>
            ))}
          </StickerSheet.Row>
        ))}
      </StickerSheet>

      <StickerSheet
        title="Pseudo states"
        isReversed={isReversed}
        headers={["isHovered", "isFocusVisible", "isPressed"]}
      >
        {variants.map(variant => (
          <StickerSheet.Row
            key={variant}
            isReversed={isReversed}
            header={variant}
          >
            <Button data-testid="testid__button-hover" variant={variant}>
              Label
            </Button>
            <Button data-testid="testid__button-focus" variant={variant}>
              Label
            </Button>
            <Button data-testid="testid__button-pressed" variant={variant}>
              Label
            </Button>
          </StickerSheet.Row>
        ))}
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
