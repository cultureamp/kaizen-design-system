import { Button } from "@kaizen/component-library/components/Button"
import { TitleBlock } from "@kaizen/draft-title-block"
import * as React from "react"

require("./TitleBlock.stories.scss")

const navigationButtons = [
  {
    buttonText: "Dashboard",
    path: "#",
    active: true,
  },
  {
    buttonText: "Tasks",
    path: "#",
    active: false,
  },
]

const reversedContainerStyle = {
  width: "100%",
  height: "600px",
  background: "lightgrey",
}

const stickyContainerStyle = {
  width: "100%",
  height: "2000px",
  background: "lightgrey",
}

export default {
  title: "TitleBlock (React)",
}

export const WithTitle = () => <TitleBlock title="Reports" />

WithTitle.story = {
  name: "with Title",
}

export const WithSubtitle = () => (
  <TitleBlock title="Home" subtitle="Subtitle goes here" />
)

WithSubtitle.story = {
  name: "with subtitle",
}

export const WithBreadcrumb = () => (
  <TitleBlock
    title="Home"
    subtitle="Subtitle goes here"
    breadcrumb={{ path: "#", text: "Back to reports" }}
  />
)

WithBreadcrumb.story = {
  name: "with breadcrumb",
}

export const WithActionButtons = () => (
  <TitleBlock title="Home">
    <Button label="Action" secondary />
    <Button label="Action 2" secondary />
  </TitleBlock>
)

WithActionButtons.story = {
  name: "with action buttons",
}

export const WithNavigationButtons = () => (
  <TitleBlock title="Home" navigationButtons={navigationButtons} />
)

WithNavigationButtons.story = {
  name: "with navigation buttons",
}

export const WithTag = () => (
  <TitleBlock
    title="Home"
    subtitle="Subtitle goes here"
    surveyStatus={{ status: "live", text: "Live" }}
  />
)

WithTag.story = {
  name: "with tag",
}

export const Reversed = () => (
  <div style={reversedContainerStyle}>
    <TitleBlock
      title="Home"
      breadcrumb={{ path: "#", text: "Back to reports" }}
      navigationButtons={navigationButtons}
      reversed
      reverseColor="Wisteria"
    />
  </div>
)

Reversed.story = {
  name: "reversed",
}

export const Sticky = () => (
  <div style={stickyContainerStyle}>
    <TitleBlock title="Home" navigationButtons={navigationButtons} sticky>
      <Button label="Action" secondary reversed />
      <Button label="Action 2" secondary reversed />
    </TitleBlock>
  </div>
)

Sticky.story = {
  name: "sticky",
}

export const StickyReversed = () => (
  <div style={stickyContainerStyle}>
    <TitleBlock
      title="Home"
      navigationButtons={navigationButtons}
      reversed
      reverseColor="Wisteria"
      sticky
    >
      <Button label="Action" secondary reversed />
      <Button label="Action 2" secondary reversed />
    </TitleBlock>
  </div>
)

StickyReversed.story = {
  name: "sticky reversed",
}

export const StickyTransparent = () => (
  <div style={stickyContainerStyle}>
    <TitleBlock
      title="Home"
      navigationButtons={navigationButtons}
      reversed
      reverseColor="Transparent"
      sticky
    >
      <Button label="Action" secondary reversed />
      <Button label="Action 2" secondary reversed />
    </TitleBlock>
  </div>
)

StickyTransparent.story = {
  name: "sticky transparent",
}

export const StickyTransparentInitially = () => (
  <div style={stickyContainerStyle}>
    <TitleBlock
      title="Home"
      navigationButtons={navigationButtons}
      reversed
      reverseColor="Transparent"
      sticky
      stickyColor="Ocean"
    >
      <Button label="Action" secondary reversed />
      <Button label="Action 2" secondary reversed />
    </TitleBlock>
  </div>
)

StickyTransparentInitially.story = {
  name: "sticky transparent initially",
}
