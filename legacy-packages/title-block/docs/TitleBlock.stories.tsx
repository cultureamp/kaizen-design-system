import { Button } from "@kaizen/draft-button"
import { TitleBlock } from "@kaizen/draft-title-block"
import * as React from "react"
import { CATEGORIES } from "../../../storybook/constants"

require("./TitleBlock.stories.scss")

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "-1rem", minHeight: "150px" }}>{children}</div>
)

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
  title: `${CATEGORIES.deprecated}/Title Block`,
  component: TitleBlock,
  parameters: {
    info: {
      text: `
      # Deprecated
      This component is now deprecated. Please use @kaizen/draft-zen-title-block instead.
      `,
    },
  },
}

export const WithTitle = () => (
  <Container>
    <TitleBlock title="Reports" />
  </Container>
)

WithTitle.storyName = "with Title"

export const WithSubtitle = () => (
  <Container>
    <TitleBlock title="Home" subtitle="Subtitle goes here" />
  </Container>
)

WithSubtitle.storyName = "with subtitle"

export const WithBreadcrumb = () => (
  <Container>
    <TitleBlock
      title="Home"
      subtitle="Subtitle goes here"
      breadcrumb={{ path: "#", text: "Back to reports" }}
    />
  </Container>
)

WithBreadcrumb.storyName = "with breadcrumb"

export const WithActionButtons = () => (
  <Container>
    <TitleBlock title="Home">
      <Button label="Action" secondary />
      <Button label="Action 2" secondary />
    </TitleBlock>
  </Container>
)

WithActionButtons.storyName = "with action buttons"

export const WithNavigationButtons = () => (
  <Container>
    <TitleBlock title="Home" navigationButtons={navigationButtons} />
  </Container>
)

WithNavigationButtons.storyName = "with navigation buttons"

export const WithTag = () => (
  <Container>
    <TitleBlock
      title="Home"
      subtitle="Subtitle goes here"
      surveyStatus={{ status: "live", text: "Live" }}
    />
  </Container>
)

WithTag.storyName = "with tag"

export const Reversed = () => (
  <Container>
    <div style={reversedContainerStyle}>
      <TitleBlock
        title="Home"
        breadcrumb={{ path: "#", text: "Back to reports" }}
        navigationButtons={navigationButtons}
        reversed
        reverseColor="Wisteria"
      />
    </div>
  </Container>
)

Reversed.storyName = "reversed"

export const Sticky = () => (
  <Container>
    <div style={stickyContainerStyle}>
      <TitleBlock title="Home" navigationButtons={navigationButtons} sticky>
        <Button label="Action" secondary reversed />
        <Button label="Action 2" secondary reversed />
      </TitleBlock>
    </div>
  </Container>
)

Sticky.storyName = "sticky"

export const StickyReversed = () => (
  <Container>
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
  </Container>
)

StickyReversed.storyName = "sticky reversed"

export const StickyTransparent = () => (
  <Container>
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
  </Container>
)

StickyTransparent.storyName = "sticky transparent"

export const StickyTransparentInitially = () => (
  <Container>
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
  </Container>
)

StickyTransparentInitially.storyName = "sticky transparent initially"
