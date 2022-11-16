/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import isChromatic from "chromatic/isChromatic"
import { withDesign } from "storybook-addon-designs"
import { Button, IconButton } from "@kaizen/button"
import informationIcon from "@kaizen/component-library/icons/information-white.icon.svg"
import { usePopover, Popover as PopoverRaw } from "@kaizen/draft-popover"
import { Heading } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import AppearanceAnim from "../KaizenDraft/Popover/AppearanceAnim"

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
}: {
  openPopover?: () => void
  ElementRef: (element: HTMLElement | null) => void
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
    <IconButton label="Label" icon={informationIcon} onClick={openPopover} />
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

export const StickerSheet = () => {
  const [isOpen, setIsOpen] = useState(DEFAULT_IS_OPEN)

  const [ElementRefTopDefault, PopoverTopDefault] = usePopover()
  const [ElementRefTopInformative, PopoverTopInformative] = usePopover()
  const [ElementRefTopPositive, PopoverTopPositive] = usePopover()
  const [ElementRefTopNegative, PopoverTopNegative] = usePopover()
  const [ElementRefTopCautionary, PopoverTopCautionary] = usePopover()

  const [ElementRefBottomDefault, PopoverBottomDefault] = usePopover()
  const [ElementRefBottomInformative, PopoverBottomInformative] = usePopover()
  const [ElementRefBottomPositive, PopoverBottomPositive] = usePopover()
  const [ElementRefBottomNegative, PopoverBottomNegative] = usePopover()
  const [ElementRefBottomCautionary, PopoverBottomCautionary] = usePopover()

  const [ElementRefLeftDefault, PopoverLeftDefault] = usePopover()
  const [ElementRefLeftInformative, PopoverLeftInformative] = usePopover()
  const [ElementRefLeftPositive, PopoverLeftPositive] = usePopover()
  const [ElementRefLeftNegative, PopoverLeftNegative] = usePopover()
  const [ElementRefLeftCautionary, PopoverLeftCautionary] = usePopover()

  const [ElementRefRightDefault, PopoverRightDefault] = usePopover()
  const [ElementRefRightInformative, PopoverRightInformative] = usePopover()
  const [ElementRefRightPositive, PopoverRightPositive] = usePopover()
  const [ElementRefRightNegative, PopoverRightNegative] = usePopover()
  const [ElementRefRightCautionary, PopoverRightCautionary] = usePopover()

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} label="Open all Popovers" />
      <p>
        Note: We recommend viewing on full screen as the 'flip' and 'fallback'
        functionality for the Popover causes overlaying and random placement
        when viewing all Popovers on a small screen.
      </p>
      <div
        style={{
          marginTop: "50px",
          marginBottom: "200px",
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "0.25fr 0.8fr 0.8fr 1fr 1fr",
        }}
      >
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            flexDirection: "column",
            justifyItems: "center",
            rowGap: "5rem",
          }}
        >
          <Heading variant="heading-5" tag="h2">
            {" "}
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Default
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Informative
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Positive
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Negative
          </Heading>
          <Heading variant="heading-5" tag="h2">
            Cautionary
          </Heading>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            flexDirection: "column",
            justifyItems: "center",
            rowGap: "5rem",
          }}
        >
          <Heading variant="heading-3" tag="h1">
            Top
          </Heading>
          <InlineBlockTargetElement ElementRef={ElementRefTopDefault} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverTopDefault
              placement="top"
              variant="default"
              dismissible
              heading="Default Top"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverTopDefault>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefTopPositive} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverTopPositive
              placement="top"
              variant="positive"
              dismissible
              heading="Positive Top"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverTopPositive>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefTopInformative} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverTopInformative
              placement="top"
              variant="informative"
              dismissible
              heading="Informative Top"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverTopInformative>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefTopNegative} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverTopNegative
              placement="top"
              variant="negative"
              dismissible
              heading="Negative Top"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverTopNegative>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefTopCautionary} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverTopCautionary
              placement="top"
              variant="cautionary"
              dismissible
              heading="Cautionary Top"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverTopCautionary>
          </AppearanceAnim>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            flexDirection: "column",
            justifyItems: "center",
            rowGap: "5rem",
          }}
        >
          <Heading variant="heading-3" tag="h1">
            Bottom
          </Heading>
          <InlineBlockTargetElement ElementRef={ElementRefBottomDefault} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverBottomDefault
              placement="bottom"
              variant="default"
              dismissible
              heading="Default Bottom"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverBottomDefault>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefBottomPositive} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverBottomPositive
              placement="bottom"
              variant="positive"
              dismissible
              heading="Positive Bottom"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverBottomPositive>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefBottomInformative} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverBottomInformative
              placement="bottom"
              variant="informative"
              dismissible
              heading="Informative Bottom"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverBottomInformative>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefBottomNegative} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverBottomNegative
              placement="bottom"
              variant="negative"
              dismissible
              heading="Negative Bottom"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverBottomNegative>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefBottomCautionary} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverBottomCautionary
              placement="bottom"
              variant="cautionary"
              dismissible
              heading="Cautionary Bottom"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverBottomCautionary>
          </AppearanceAnim>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            flexDirection: "column",
            justifyItems: "center",
            rowGap: "5rem",
          }}
        >
          <Heading variant="heading-3" tag="h1">
            Left
          </Heading>
          <InlineBlockTargetElement ElementRef={ElementRefLeftDefault} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverLeftDefault
              placement="left"
              variant="default"
              dismissible
              heading="Default Left"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverLeftDefault>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefLeftPositive} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverLeftPositive
              placement="left"
              variant="positive"
              dismissible
              heading="Positive Left"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverLeftPositive>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefLeftInformative} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverLeftInformative
              placement="left"
              variant="informative"
              dismissible
              heading="Informative Left"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverLeftInformative>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefLeftNegative} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverLeftNegative
              placement="left"
              variant="negative"
              dismissible
              heading="Negative Left"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverLeftNegative>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefLeftCautionary} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverLeftCautionary
              placement="left"
              variant="cautionary"
              dismissible
              heading="Cautionary Left"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverLeftCautionary>
          </AppearanceAnim>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            flexDirection: "column",
            justifyItems: "center",
            rowGap: "5rem",
          }}
        >
          <Heading variant="heading-3" tag="h1">
            Right
          </Heading>
          <InlineBlockTargetElement ElementRef={ElementRefRightDefault} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverRightDefault
              placement="right"
              variant="default"
              dismissible
              heading="Default Right"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverRightDefault>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefRightPositive} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverRightPositive
              placement="right"
              variant="positive"
              dismissible
              heading="Positve Right"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverRightPositive>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefRightInformative} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverRightInformative
              placement="right"
              variant="informative"
              dismissible
              heading="Informative Right"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverRightInformative>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefRightNegative} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverRightNegative
              placement="right"
              variant="negative"
              dismissible
              heading="Negative Right"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverRightNegative>
          </AppearanceAnim>
          <InlineBlockTargetElement ElementRef={ElementRefRightCautionary} />
          <AppearanceAnim isVisible={isOpen}>
            <PopoverRightCautionary
              placement="right"
              variant="cautionary"
              dismissible
              heading="Cautionary Right"
            >
              Popover body that explains something useful, is optional, and not
              critical to completing a task.
            </PopoverRightCautionary>
          </AppearanceAnim>
        </div>
      </div>
    </>
  )
}
StickerSheet.parameters = { chromatic: { disable: false } }
