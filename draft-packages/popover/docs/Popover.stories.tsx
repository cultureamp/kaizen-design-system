/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { Story } from "@storybook/react"
import { usePopover, Popover as PopoverRaw } from "@kaizen/draft-popover"
import { withDesign } from "storybook-addon-designs"
import { Button, IconButton } from "@kaizen/button"
import isChromatic from "chromatic/isChromatic"
import informationIcon from "@kaizen/component-library/icons/information.icon.svg"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import AppearanceAnim from "../KaizenDraft/Popover/AppearanceAnim"
import { PopoverProps } from "../KaizenDraft/Popover/index"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const DEFAULT_IS_OPEN: boolean = isChromatic()

export default {
  title: `${CATEGORIES.components}/Popover`,
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
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14473%3A63845"
    ),
  },
  decorators: [withDesign],
}

const Container = ({ children }: { children: React.ReactNode }) => (
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
  isReversed,
}: {
  openPopover?: () => void
  ElementRef: (element: HTMLElement | null) => void
  isReversed?: boolean
}) => (
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
      icon={informationIcon}
      onClick={openPopover}
      reversed={isReversed}
    />
  </div>
)

export const DefaultKaizenSiteDemo = props => {
  const [ElementRef, Popover] = usePopover()
  // set the popover open state to be true when testing on chromatic
  const [isOpen, setIsOpen] = useState(DEFAULT_IS_OPEN)
  const openPopover = () => setIsOpen(true)
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
      />
      <AppearanceAnim isVisible={isOpen}>
        <Popover
          {...props}
          dismissible
          heading="Heading"
          onClose={() => {
            setIsOpen(false)
          }}
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task. <a href="#">Optional link</a>
        </Popover>
      </AppearanceAnim>
    </div>
  )
}
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

type PopoverPropsWithoutRef = Omit<PopoverProps, "referenceElement">

const PopoverTemplate: React.VFC<
  PopoverPropsWithoutRef & { isOpen: boolean; isReversed: boolean }
> = ({ isOpen, isReversed, ...props }) => {
  const [ElementRef, Popover] = usePopover()

  return (
    <div>
      <InlineBlockTargetElement
        ElementRef={ElementRef}
        isReversed={isReversed}
      />
      <AppearanceAnim isVisible={isOpen}>
        <Popover {...props} dismissible heading="Heading" placement="right">
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </AppearanceAnim>
    </div>
  )
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const [isOpen, setIsOpen] = useState(DEFAULT_IS_OPEN)
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} label="Open all Popovers" />

      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.Row rowTitle="Default">
          <PopoverTemplate
            isOpen={isOpen}
            placement="top"
            children={undefined}
            isReversed={isReversed}
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Informative">
          <PopoverTemplate
            isOpen={isOpen}
            placement="top"
            variant="informative"
            children={undefined}
            isReversed={isReversed}
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Positive">
          <PopoverTemplate
            isOpen={isOpen}
            placement="top"
            variant="positive"
            children={undefined}
            isReversed={isReversed}
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Negative">
          <PopoverTemplate
            isOpen={isOpen}
            placement="top"
            variant="negative"
            children={undefined}
            isReversed={isReversed}
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Cautionary">
          <PopoverTemplate
            isOpen={isOpen}
            placement="top"
            variant="cautionary"
            children={undefined}
            isReversed={isReversed}
          />
        </StoryWrapper.Row>
      </StoryWrapper>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}

export const OverflowScroll = props => {
  const [ElementRef, Popover] = usePopover()
  const [isOpen, setIsOpen] = useState(DEFAULT_IS_OPEN)
  const openPopover = () => setIsOpen(true)

  return (
    <Container>
      <InlineBlockTargetElement
        openPopover={openPopover}
        ElementRef={ElementRef}
      />
      <AppearanceAnim isVisible={isOpen}>
        <Popover
          heading="Heading"
          dismissible
          onClose={() => {
            setIsOpen(false)
          }}
          {...props}
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </AppearanceAnim>
    </Container>
  )
}
