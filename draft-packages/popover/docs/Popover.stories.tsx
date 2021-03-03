import {
  PopoverLegacy,
  usePopover,
  Popover as PopoverRaw,
} from "@kaizen/draft-popover"
import * as React from "react"
import guidanceIcon from "@kaizen/component-library/icons/guidance.icon.svg"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Popover (React)",
  component: PopoverRaw,
  parameters: {
    info: {
      text: `
      import { usePopover } from "@kaizen/draft-popover"
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
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover heading="Default">
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const DefaultWithoutHeading = () => {
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover>
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

DefaultWithoutHeading.storyName = "Default without heading"

export const Informative = () => {
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover heading="Informative" variant="informative">
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

export const InformativeWithSingleLine = () => {
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
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
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
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
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
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
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover
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
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover heading="Positive" variant="positive">
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

export const Negative = () => {
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover heading="Negative" variant="negative">
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

export const Cautionary = () => {
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover heading="Cautionary" variant="cautionary">
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

export const Dismissible = () => {
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <TargetElement referenceElementRef={referenceElementRef} />
      <Popover heading="Dismissible" dismissible>
        Popover body that explains something useful, is optional, and not
        critical to completing a task.
      </Popover>
    </Container>
  )
}

export const PlacementTop = () => {
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <div style={{ marginTop: "200px" }}>
        <TargetElement referenceElementRef={referenceElementRef} />
        <Popover heading="Placement top" placement="top">
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </div>
    </Container>
  )
}

PlacementTop.storyName = "Placement top"

export const PlacementStart = () => {
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <div style={{ marginTop: "1.5rem" }}>
        <TargetElement referenceElementRef={referenceElementRef} />
        <Popover heading="Placement start" placement="bottom-start">
          Popover body that explains something useful, is optional, and not
          critical to completing a task.
        </Popover>
      </div>
    </Container>
  )
}

PlacementStart.storyName = "Placement start"

export const PlacementEnd = () => {
  const [referenceElementRef, Popover] = usePopover()
  return (
    <Container>
      <div style={{ marginTop: "1.5rem" }}>
        <TargetElement referenceElementRef={referenceElementRef} />
        <Popover heading="Placement end" placement="bottom-end">
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
      <PopoverLegacy heading="Arrow top end" position="end" side="top">
        The legacy popover gets used when the referenceElement prop is not
        included.
      </PopoverLegacy>
    </div>

    <div
      style={{
        position: "relative",
        height: "200px",
      }}
    >
      <PopoverLegacy
        heading="Arrow bottom start"
        position="start"
        side="bottom"
      >
        The legacy popover gets used when the referenceElement prop is not
        included.
      </PopoverLegacy>
    </div>
  </Container>
)

LegacyPopover.storyName = "Legacy Popover"
