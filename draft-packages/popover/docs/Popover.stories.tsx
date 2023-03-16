/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import isChromatic from "chromatic/isChromatic"
import { IconButton } from "@kaizen/button"
import informationWhiteIcon from "@kaizen/component-library/icons/information-white.icon.svg"
import informationIcon from "@kaizen/component-library/icons/information.icon.svg"
import { usePopover, Popover as PopoverRaw } from "@kaizen/draft-popover"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import AppearanceAnim from "../KaizenDraft/Popover/AppearanceAnim"

const DEFAULT_IS_OPEN: boolean = isChromatic()

export default {
  title: "Components/Popover",
  component: PopoverRaw,
  parameters: {
    /**
     * To cater for false positives when the popover renders
     * with a different alignment (controlled by react-popper).
     */
    chromatic: { diffThreshold: 1 },
    docs: {
      description: {
        component: 'import { usePopover } from "@kaizen/draft-popover"',
      },
    },
  },
} satisfies Meta<typeof PopoverRaw>

const Container = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => (
  <>
    <p>
      Default Placement is 'above'. Scroll horizontally or vertically to view
      the Popover "flip" and move according to the space of the viewport.
      Ensuring the Popover does not get cut off.
    </p>
    <div
      style={{
        display: "flex",
        width: "300px",
        maxHeight: "700px",
        overflow: "scroll",
        border: "solid black 2px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "500px",
          marginLeft: "200px",
          marginTop: "400px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "200px",
            textAlign: "center",
            position: "relative",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  </>
)

const InlineBlockTargetElement = ({
  ElementRef,
  openPopover,
  isReversed = false,
}: {
  openPopover?: () => void
  ElementRef: (element: HTMLElement | null) => void
  isReversed?: boolean
}): JSX.Element => (
  <div
    ref={ElementRef}
    style={{
      display: "inline-block",
      marginTop: "100px",
    }}
    onMouseEnter={openPopover}
    onFocusCapture={openPopover}
  >
    <IconButton
      label="Label"
      icon={isReversed ? informationIcon : informationWhiteIcon}
      onClick={openPopover}
      reversed={isReversed}
    />
  </div>
)

export const DefaultKaizenSiteDemo: StoryFn<typeof PopoverRaw> = props => {
  const [ElementRef, Popover] = usePopover()
  // set the popover open state to be true when testing on chromatic
  const [isOpen, setIsOpen] = useState(DEFAULT_IS_OPEN)
  const openPopover = (): void => setIsOpen(true)

  return (
    <div
      style={{
        paddingTop: "300px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <InlineBlockTargetElement
        openPopover={openPopover}
        ElementRef={ElementRef}
        isReversed={false}
      />
      <AppearanceAnim isVisible={isOpen}>
        <Popover
          {...props}
          dismissible
          heading="Heading"
          onClose={(): void => setIsOpen(false)}
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task. <a href="#">Optional link</a>
        </Popover>
      </AppearanceAnim>
    </div>
  )
}
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const OverflowScroll: StoryFn<typeof PopoverRaw> = props => {
  const [ElementRef, Popover] = usePopover()
  const [isOpen, setIsOpen] = useState(DEFAULT_IS_OPEN)
  const openPopover = (): void => setIsOpen(true)

  return (
    <Container>
      <InlineBlockTargetElement
        openPopover={openPopover}
        ElementRef={ElementRef}
        isReversed={false}
      />
      <AppearanceAnim isVisible={isOpen}>
        <Popover
          heading="Heading"
          dismissible
          onClose={(): void => setIsOpen(false)}
          {...props}
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </AppearanceAnim>
    </Container>
  )
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const [ElementRefDefault, PopoverDefault] = usePopover()
  const [ElementRefInformative, PopoverInformative] = usePopover()
  const [ElementRefPositive, PopoverPositive] = usePopover()
  const [ElementRefNegative, PopoverNegative] = usePopover()
  const [ElementRefCautionary, PopoverCautionary] = usePopover()
  return (
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader
        headings={[
          "Default",
          "Positive",
          "Informative",
          "Negative",
          "Cautionary",
        ]}
      />
      <StoryWrapper.Row rowTitle="Bottom Placement">
        <InlineBlockTargetElement
          ElementRef={ElementRefDefault}
          isReversed={isReversed}
        />
        <AppearanceAnim isVisible={true}>
          <PopoverDefault
            placement="bottom"
            variant="default"
            dismissible
            heading="Default Top"
          >
            Popover body that explains something useful, is optional, and not
            critical to completing a task.
          </PopoverDefault>
        </AppearanceAnim>
        <InlineBlockTargetElement
          ElementRef={ElementRefPositive}
          isReversed={isReversed}
        />
        <AppearanceAnim isVisible={true}>
          <PopoverPositive
            placement="bottom"
            variant="positive"
            dismissible
            heading="Positive Top"
          >
            Popover body that explains something useful, is optional, and not
            critical to completing a task.
          </PopoverPositive>
        </AppearanceAnim>
        <InlineBlockTargetElement
          ElementRef={ElementRefInformative}
          isReversed={isReversed}
        />
        <AppearanceAnim isVisible={true}>
          <PopoverInformative
            placement="bottom"
            variant="informative"
            dismissible
            heading="Informative Top"
          >
            Popover body that explains something useful, is optional, and not
            critical to completing a task.
          </PopoverInformative>
        </AppearanceAnim>
        <InlineBlockTargetElement
          ElementRef={ElementRefNegative}
          isReversed={isReversed}
        />
        <AppearanceAnim isVisible={true}>
          <PopoverNegative
            placement="bottom"
            variant="negative"
            dismissible
            heading="Negative Top"
          >
            Popover body that explains something useful, is optional, and not
            critical to completing a task.
          </PopoverNegative>
        </AppearanceAnim>
        <InlineBlockTargetElement
          ElementRef={ElementRefCautionary}
          isReversed={isReversed}
        />
        <AppearanceAnim isVisible={true}>
          <PopoverCautionary
            placement="bottom"
            variant="cautionary"
            dismissible
            heading="Cautionary Top"
          >
            Popover body that explains something useful, is optional, and not
            critical to completing a task.
          </PopoverCautionary>
        </AppearanceAnim>
      </StoryWrapper.Row>
    </StoryWrapper>
  )
}

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
