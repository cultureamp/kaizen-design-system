import { DismissiblePositiveAutohide } from "@kaizen/component-library/stories/InlineNotification.stories"
import { Popover, usePopoverReferenceElementRef } from "@kaizen/draft-popover"
import * as React from "react"
import guidanceIcon from "@kaizen/component-library/icons/guidance.icon.svg"
import { Avatar } from "@kaizen/draft-avatar"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Popover (React)",
  component: Popover,
  parameters: {
    info: {
      text: `
      import { Popover } from "@kaizen/draft-popover"
      `,
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14473%3A63845"
    ),
  },
  decorators: [withDesign],
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ minHeight: "150px" }}>{children}</div>
)

const TargetElement = ({
  referenceElementRef,
}: {
  referenceElementRef: (element: HTMLElement | null) => void
}) => (
  <div style={{ textAlign: "center" }}>
    <div
      ref={referenceElementRef}
      style={{
        display: "inline-block",
        background: "#888",
        padding: "8px",
      }}
    >
      Target element
    </div>
  </div>
)

export const DefaultKaizenSiteDemo = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover referenceElement={referenceElement} heading="Default">
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const DefaultWithoutHeading = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover referenceElement={referenceElement}>
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

DefaultWithoutHeading.storyName = "Default without heading"

export const Informative = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
        referenceElement={referenceElement}
        heading="Informative"
        variant="informative"
      >
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

export const InformativeWithSingleLine = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
        referenceElement={referenceElement}
        heading="Informative-default-with-single-line"
        variant="informative"
        singleLine
      >
        {"http://employee-data.integrations.eu.cultureamp.com/iamaverylongurl/" +
          "iamaverylongurl/iamaverylongurl/iamaverylongurl"}
      </Popover>
    </Container>
  )
}

InformativeWithSingleLine.storyName = "Informative with singleLine"

export const InformativeLarge = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
        referenceElement={referenceElement}
        heading="Informative-large-with-multi-line"
        variant="informative"
        size="large"
      >
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

export const InformativeLargeWithSingleLine = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
        referenceElement={referenceElement}
        heading="Informative-large-with-single-line"
        variant="informative"
        size="large"
        singleLine
      >
        {"http://employee-data.integrations.eu.cultureamp.com/iamaverylongurl/" +
          "iamaverylongurl/iamaverylongurl/iamaverylongurl"}
      </Popover>
    </Container>
  )
}

InformativeLargeWithSingleLine.storyName = "Informative Large with singleLine"

export const InformativeWithCustomIcon = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
        referenceElement={referenceElement}
        heading="Informative"
        variant="informative"
        customIcon={guidanceIcon}
      >
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

InformativeWithCustomIcon.storyName = "Informative with a custom icon"

export const Positive = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
        referenceElement={referenceElement}
        heading="Positive"
        variant="positive"
      >
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

export const Negative = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
        referenceElement={referenceElement}
        heading="Negative"
        variant="negative"
      >
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

export const Cautionary = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
        referenceElement={referenceElement}
        heading="Cautionary"
        variant="cautionary"
      >
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

export const Dismissible = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
        referenceElement={referenceElement}
        heading="Dismissible"
        dismissible
      >
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

export const PlacementTop = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <div style={{ marginTop: "200px" }}>
        <TargetElement referenceElementRef={referenceElementRef} />
        <Popover
          referenceElement={referenceElement}
          heading="Placement top"
          placement="top"
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </div>
    </Container>
  )
}

PlacementTop.storyName = "Placement top"

export const PlacementStart = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <div style={{ marginTop: "1.5rem" }}>
        <TargetElement referenceElementRef={referenceElementRef} />
        <Popover
          referenceElement={referenceElement}
          heading="Placement start"
          placement="bottom-start"
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </div>
    </Container>
  )
}

PlacementStart.storyName = "Placement start"

export const PlacementEnd = () => {
  const [
    referenceElement,
    referenceElementRef,
  ] = usePopoverReferenceElementRef()
  return (
    <Container>
      <div style={{ marginTop: "1.5rem" }}>
        <TargetElement referenceElementRef={referenceElementRef} />
        <Popover
          referenceElement={referenceElement}
          heading="Placement end"
          placement="bottom-end"
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </div>
    </Container>
  )
}

PlacementEnd.storyName = "Placement end"

export const LegacyPopover = () => (
  <Container>
    <div
      style={{
        position: "relative",
        height: "200px",
      }}
    >
      <Popover heading="Arrow top end" position="end" side="top">
        The legacy popover gets used when the referenceElement prop is not
        included.
      </Popover>
    </div>

    <div
      style={{
        position: "relative",
        height: "200px",
      }}
    >
      <Popover heading="Arrow bottom start" position="start" side="bottom">
        The legacy popover gets used when the referenceElement prop is not
        included.
      </Popover>
    </div>
  </Container>
)

LegacyPopover.storyName = "Legacy Popover"
