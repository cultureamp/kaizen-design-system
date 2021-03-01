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
  referenceElementRef: HTMLElement | null
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

export const ArrowAbove = () => {
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
          heading="Arrow above"
          side="top"
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </div>
    </Container>
  )
}

ArrowAbove.storyName = "Arrow above"

export const ArrowStart = () => {
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
          heading="Arrow start"
          position="start"
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </div>
    </Container>
  )
}

ArrowStart.storyName = "Arrow start"

export const ArrowEnd = () => {
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
          heading="Arrow end"
          position="end"
          side="top"
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </div>
    </Container>
  )
}

ArrowEnd.storyName = "Arrow end"
