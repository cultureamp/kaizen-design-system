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

export const Sticky = () => (
  <div style={stickyContainerStyle}>
    <TitleBlock title="Home" navigationButtons={navigationButtons} sticky>
      <Button label="Action" secondary />
      <Button label="Action 2" secondary />
    </TitleBlock>
  </div>
)

Sticky.story = {
  name: "sticky",
}
