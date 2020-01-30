import { Button } from "@kaizen/component-library/components/Button"
import { TitleBlock } from "@kaizen/component-library/draft"
import { storiesOf } from "@storybook/react"
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

storiesOf("TitleBlock (React)", module)
  .add("with Title", () => <TitleBlock title="Reports" />)
  .add("with subtitle", () => (
    <TitleBlock title="Home" subtitle="Subtitle goes here" />
  ))
  .add("with breadcrumb", () => (
    <TitleBlock
      title="Home"
      subtitle="Subtitle goes here"
      breadcrumb={{ path: "#", text: "Back to reports" }}
    />
  ))
  .add("with action buttons", () => (
    <TitleBlock title="Home">
      <Button label="Action" secondary />
      <Button label="Action 2" secondary />
    </TitleBlock>
  ))
  .add("with navigation buttons", () => (
    <TitleBlock title="Home" navigationButtons={navigationButtons} />
  ))
  .add("with tag", () => (
    <TitleBlock
      title="Home"
      subtitle="Subtitle goes here"
      surveyStatus={{ status: "live", text: "Live" }}
    />
  ))
  .add("reversed", () => (
    <div style={reversedContainerStyle}>
      <TitleBlock
        title="Home"
        breadcrumb={{ path: "#", text: "Back to reports" }}
        navigationButtons={navigationButtons}
        reversed
        reverseColor="Wisteria"
      />
    </div>
  ))
  .add("sticky", () => (
    <div style={stickyContainerStyle}>
      <TitleBlock title="Home" navigationButtons={navigationButtons} sticky>
        <Button label="Action" secondary reversed />
        <Button label="Action 2" secondary reversed />
      </TitleBlock>
    </div>
  ))
  .add("sticky reversed", () => (
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
  ))
  .add("sticky transparent", () => (
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
  ))
  .add("sticky transparent initially", () => (
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
  ))
