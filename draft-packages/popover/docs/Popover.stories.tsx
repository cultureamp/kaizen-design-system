import { usePopover, Popover as PopoverRaw } from "@kaizen/draft-popover"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { Icon, Heading } from "@kaizen/component-library"
import { useState } from "react"
import { Button, IconButton } from "@kaizen/draft-button"
import informationIcon from "@kaizen/component-library/icons/information-white.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import AppearanceAnim from "../KaizenDraft/Popover/AppearanceAnim"

export default {
  title: `${CATEGORIES.components}/Popover`,
  component: PopoverRaw,
  parameters: {
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
  onClick,
}: {
  onClick?: () => void
  ElementRef: (element: HTMLElement | null) => void
}) => (
  <div
    ref={ElementRef}
    style={{
      display: "inline-block",
      marginTop: "100px",
    }}
  >
    <IconButton onClick={onClick} label="Label" icon={informationIcon} />
  </div>
)

export const DefaultKaizenSiteDemo = props => {
  const [ElementRef, Popover] = usePopover()
  const [isOpen, setIsOpen] = useState(true)
  const onClick = () => setIsOpen(true)

  return (
    <Container>
      <InlineBlockTargetElement onClick={onClick} ElementRef={ElementRef} />
      <AppearanceAnim isVisible={isOpen}>
        <Popover
          heading="Clickable Popover"
          {...props}
          dismissible
          onClose={() => {
            setIsOpen(false)
          }}
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </AppearanceAnim>
    </Container>
  )
}

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const HoverablePopover = props => {
  const [ElementRef, Popover] = usePopover()
  const [isHover, setIsHover] = useState(false)
  const [isFocus, setIsFocus] = useState(false)

  return (
    <Container>
      <div
        onMouseEnter={() => {
          setIsHover(true)
        }}
        onMouseLeave={() => {
          setIsHover(false)
        }}
        onFocusCapture={() => {
          setIsFocus(true)
        }}
        onBlurCapture={() => {
          setIsFocus(false)
        }}
      >
        <InlineBlockTargetElement ElementRef={ElementRef} />
      </div>
      <AppearanceAnim isVisible={isHover || isFocus}>
        <Popover heading="Hoverable Popover" {...props}>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </AppearanceAnim>
    </Container>
  )
}

export const StickerSheet = () => {
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
        <PopoverTopDefault placement="top" variant="default" dismissible>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverTopDefault>
        <InlineBlockTargetElement ElementRef={ElementRefTopPositive} />
        <PopoverTopPositive placement="top" variant="positive" dismissible>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverTopPositive>
        <InlineBlockTargetElement ElementRef={ElementRefTopInformative} />
        <PopoverTopInformative
          placement="top"
          variant="informative"
          dismissible
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverTopInformative>
        <InlineBlockTargetElement ElementRef={ElementRefTopNegative} />
        <PopoverTopNegative placement="top" variant="negative" dismissible>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverTopNegative>
        <InlineBlockTargetElement ElementRef={ElementRefTopCautionary} />
        <PopoverTopCautionary placement="top" variant="cautionary" dismissible>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverTopCautionary>
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
        <PopoverBottomDefault placement="bottom" variant="default" dismissible>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverBottomDefault>
        <InlineBlockTargetElement ElementRef={ElementRefBottomPositive} />
        <PopoverBottomPositive
          placement="bottom"
          variant="positive"
          dismissible
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverBottomPositive>
        <InlineBlockTargetElement ElementRef={ElementRefBottomInformative} />
        <PopoverBottomInformative
          placement="bottom"
          variant="informative"
          dismissible
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverBottomInformative>
        <InlineBlockTargetElement ElementRef={ElementRefBottomNegative} />
        <PopoverBottomNegative
          placement="bottom"
          variant="negative"
          dismissible
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverBottomNegative>
        <InlineBlockTargetElement ElementRef={ElementRefBottomCautionary} />
        <PopoverBottomCautionary
          placement="bottom"
          variant="cautionary"
          dismissible
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverBottomCautionary>
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
        <PopoverLeftDefault placement="left" variant="default" dismissible>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverLeftDefault>
        <InlineBlockTargetElement ElementRef={ElementRefLeftPositive} />
        <PopoverLeftPositive placement="left" variant="positive" dismissible>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverLeftPositive>
        <InlineBlockTargetElement ElementRef={ElementRefLeftInformative} />
        <PopoverLeftInformative
          placement="left"
          variant="informative"
          dismissible
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverLeftInformative>
        <InlineBlockTargetElement ElementRef={ElementRefLeftNegative} />
        <PopoverLeftNegative placement="left" variant="negative" dismissible>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverLeftNegative>
        <InlineBlockTargetElement ElementRef={ElementRefLeftCautionary} />
        <PopoverLeftCautionary
          placement="left"
          variant="cautionary"
          dismissible
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverLeftCautionary>
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
        <PopoverRightDefault placement="right" variant="default" dismissible>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverRightDefault>
        <InlineBlockTargetElement ElementRef={ElementRefRightPositive} />
        <PopoverRightPositive placement="right" variant="positive" dismissible>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverRightPositive>
        <InlineBlockTargetElement ElementRef={ElementRefRightInformative} />
        <PopoverRightInformative
          placement="right"
          variant="informative"
          dismissible
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverRightInformative>
        <InlineBlockTargetElement ElementRef={ElementRefRightNegative} />
        <PopoverRightNegative placement="right" variant="negative" dismissible>
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverRightNegative>
        <InlineBlockTargetElement ElementRef={ElementRefRightCautionary} />
        <PopoverRightCautionary
          placement="right"
          variant="cautionary"
          dismissible
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </PopoverRightCautionary>
      </div>
    </div>
  )
}
