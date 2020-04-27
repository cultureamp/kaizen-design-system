import { Popover } from "@kaizen/component-library/draft"
import * as React from "react"

export default {
  title: "Popover (React)",
}

export const DefaultKaizenSiteDemo = () => (
  <Popover heading="Default">
    Popover body that explains something useful, is optional, and not critical
    to completing a task.
  </Popover>
)

DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Site Demo)",
}

export const DefaultWithoutHeading = () => (
  <Popover>
    Popover body that explains something useful, is optional, and not critical
    to completing a task.
  </Popover>
)

DefaultWithoutHeading.story = {
  name: "Default without heading",
}

export const Informative = () => (
  <Popover heading="Informative" variant="informative">
    Popover body that explains something useful, is optional, and not critical
    to completing a task.
  </Popover>
)

export const InformativeWithSingleLine = () => (
  <Popover
    heading="Informative-default-with-single-line"
    variant="informative"
    singleLine
  >
    http://employee-data.integrations.eu.cultureamp.com/iamaverylongurl/iamaverylongurl/iamaverylongurl/iamaverylongurl
  </Popover>
)

InformativeWithSingleLine.story = {
  name: "Informative with singleLine",
}

export const InformativeLarge = () => (
  <Popover
    heading="Informative-large-with-multi-line"
    variant="informative"
    size="large"
  >
    Popover body that explains something useful, is optional, and not critical
    to completing a task.
  </Popover>
)

export const InformativeLargeWithSingleLine = () => (
  <Popover
    heading="Informative-large-with-single-line"
    variant="informative"
    size="large"
    singleLine
  >
    http://employee-data.integrations.eu.cultureamp.com/iamaverylongurl/iamaverylongurl/iamaverylongurl/iamaverylongurl
  </Popover>
)

InformativeLargeWithSingleLine.story = {
  name: "Informative Large with singleLine",
}

export const Positive = () => (
  <Popover heading="Positive" variant="positive">
    Popover body that explains something useful, is optional, and not critical
    to completing a task.
  </Popover>
)

export const Negative = () => (
  <Popover heading="Negative" variant="negative">
    Popover body that explains something useful, is optional, and not critical
    to completing a task.
  </Popover>
)

export const Cautionary = () => (
  <Popover heading="Cautionary" variant="cautionary">
    Popover body that explains something useful, is optional, and not critical
    to completing a task.
  </Popover>
)

export const Dismissible = () => (
  <Popover heading="Dismissible" dismissible>
    Popover body that explains something useful, is optional, and not critical
    to completing a task.
  </Popover>
)

export const ArrowAbove = () => (
  <div style={{ marginTop: "1.5rem" }}>
    <Popover heading="Arrow above" side="top">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  </div>
)

ArrowAbove.story = {
  name: "Arrow above",
}

export const ArrowStart = () => (
  <div style={{ marginTop: "1.5rem" }}>
    <Popover heading="Arrow start" position="start">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  </div>
)

ArrowStart.story = {
  name: "Arrow start",
}

export const ArrowEnd = () => (
  <div style={{ marginTop: "1.5rem" }}>
    <Popover heading="Arrow end" position="end" side="top">
      Popover body that explains something useful, is optional, and not critical
      to completing a task.
    </Popover>
  </div>
)

ArrowEnd.story = {
  name: "Arrow end",
}

export const BoxOffset = () => (
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
)

BoxOffset.story = {
  name: "Box offset",
}
