import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { IconButton } from "../button"
const configureIcon = require("@kaizen/component-library/icons/configure.icon.svg")
  .default
import { action } from "@storybook/addon-actions"
import * as React from "react"

export default {
  title: "IconButton (React)",
}

const StoryWrapper = ({ children }) => (
  <div style={{ color: colorTokens.kz.color.wisteria[800] }}>{children}</div>
)

export const DefaultKaizenSiteDemo = () => (
  <StoryWrapper>
    <IconButton
      icon={configureIcon}
      label="Label"
      data-automation-id="demo-button"
    />
  </StoryWrapper>
)

DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Site Demo)",
}

export const Hyperlink = () => (
  <StoryWrapper>
    <IconButton icon={configureIcon} label="Label" href="//example.com" />
  </StoryWrapper>
)

export const HyperlinkWOnClick = () => (
  <StoryWrapper>
    <IconButton
      icon={configureIcon}
      label="Label"
      href="//example.com"
      onClick={action("I am an onClick handler")}
    />
  </StoryWrapper>
)

HyperlinkWOnClick.story = {
  name: "Hyperlink w/ onClick",
}

export const Disabled = () => (
  <StoryWrapper>
    <IconButton icon={configureIcon} label="Label" disabled={true} />
  </StoryWrapper>
)

export const Destructive = () => (
  <StoryWrapper>
    <IconButton icon={configureIcon} label="Label" destructive={true} />
  </StoryWrapper>
)

export const DestructiveDisabled = () => (
  <StoryWrapper>
    <IconButton
      icon={configureIcon}
      label="Label"
      destructive={true}
      disabled={true}
    />
  </StoryWrapper>
)

DestructiveDisabled.story = {
  name: "Destructive, Disabled",
}

export const Reversed = () => (
  <StoryWrapper>
    <IconButton icon={configureIcon} label="Label" reversed />
  </StoryWrapper>
)

export const ReversedDisabled = () => (
  <StoryWrapper>
    <IconButton
      icon={configureIcon}
      label="Label"
      reversed={true}
      disabled={true}
    />
  </StoryWrapper>
)

ReversedDisabled.story = {
  name: "Reversed, Disabled",
}

export const FormDiscouraged = () => (
  <StoryWrapper>
    <IconButton icon={configureIcon} label="Label" form={true} />
  </StoryWrapper>
)

FormDiscouraged.story = {
  name: "Form (discouraged)",
}
