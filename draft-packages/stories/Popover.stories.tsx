import { DismissiblePositiveAutohide } from "@kaizen/component-library/stories/InlineNotification.stories"
import { Popover } from "@kaizen/draft-popover"
import * as React from "react"
import { Avatar } from "../avatar"
import guidanceIcon from "@kaizen/component-library/icons/guidance.icon.svg"

export default {
  title: "Popover (React)",
  component: Popover,
  parameters: {
    info: {
      text: `
      import { Popover } from "@kaizen/draft-popover"
      `,
    },
  },
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ minHeight: "150px" }}>{children}</div>
)

export const DefaultKaizenSiteDemo = () => (
  <Container>
    <Popover heading="Default">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  </Container>
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const DefaultWithoutHeading = () => (
  <Container>
    <Popover>
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  </Container>
)

DefaultWithoutHeading.storyName = "Default without heading"

export const Informative = () => (
  <Container>
    <Popover heading="Informative" variant="informative">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  </Container>
)

export const InformativeWithSingleLine = () => (
  <Container>
    <Popover
      heading="Informative-default-with-single-line"
      variant="informative"
      singleLine
    >
      http://employee-data.integrations.eu.cultureamp.com/iamaverylongurl/iamaverylongurl/iamaverylongurl/iamaverylongurl
    </Popover>
  </Container>
)

InformativeWithSingleLine.storyName = "Informative with singleLine"

export const InformativeLarge = () => (
  <Container>
    <Popover
      heading="Informative-large-with-multi-line"
      variant="informative"
      size="large"
    >
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  </Container>
)

export const InformativeLargeWithSingleLine = () => (
  <Container>
    <Popover
      heading="Informative-large-with-single-line"
      variant="informative"
      size="large"
      singleLine
    >
      http://employee-data.integrations.eu.cultureamp.com/iamaverylongurl/iamaverylongurl/iamaverylongurl/iamaverylongurl
    </Popover>
  </Container>
)

InformativeLargeWithSingleLine.storyName = "Informative Large with singleLine"

export const InformativeWithCustomIcon = () => (
  <Container>
    <Popover
      heading="Informative"
      variant="informative"
      customIcon={guidanceIcon}
    >
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  </Container>
)

InformativeWithCustomIcon.storyName = "Informative with a custom icon"

export const Positive = () => (
  <Container>
    <Popover heading="Positive" variant="positive">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  </Container>
)

export const Negative = () => (
  <Container>
    <Popover heading="Negative" variant="negative">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  </Container>
)

export const Cautionary = () => (
  <Container>
    <Popover heading="Cautionary" variant="cautionary">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  </Container>
)

export const Dismissible = () => (
  <Container>
    <Popover heading="Dismissible" dismissible>
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  </Container>
)

export const ArrowAbove = () => (
  <Container>
    <div style={{ marginTop: "1.5rem" }}>
      <Popover heading="Arrow above" side="top">
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </div>
  </Container>
)

ArrowAbove.storyName = "Arrow above"

export const ArrowStart = () => (
  <Container>
    <div style={{ marginTop: "1.5rem" }}>
      <Popover heading="Arrow start" position="start">
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </div>
  </Container>
)

ArrowStart.storyName = "Arrow start"

export const ArrowEnd = () => (
  <Container>
    <div style={{ marginTop: "1.5rem" }}>
      <Popover heading="Arrow end" position="end" side="top">
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </div>
  </Container>
)

ArrowEnd.storyName = "Arrow end"

export const BoxOffset = () => (
  <Container>
    <>
      <div style={{ marginTop: "1.5rem", height: 200 }}>
        <Popover
          heading="Box offset"
          position="center"
          side="top"
          boxOffset={-50}
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </div>
      <div style={{ marginTop: "1.5rem", height: 200 }}>
        <Popover
          heading="Box offset"
          position="center"
          side="bottom"
          boxOffset={50}
        >
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </div>
    </>
  </Container>
)

BoxOffset.storyName = "Box offset"

export const BoxWithYOffset = () => (
  <Container>
    <Popover heading="Default" boxOffset={{ yOffset: "calc(-100% + -12px)" }}>
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
    <div style={{ margin: "200px auto auto", width: "fit-content" }}>
      <Avatar fullName="Test user"></Avatar>
    </div>
  </Container>
)

BoxWithYOffset.storyName = "Popover with Y offset positioning"
