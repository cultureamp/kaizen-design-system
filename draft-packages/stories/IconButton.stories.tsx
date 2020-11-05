import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"

import * as React from "react"
import { IconButton } from "../button"

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

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

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
      onClick={() => undefined}
    />
  </StoryWrapper>
)

HyperlinkWOnClick.storyName = "Hyperlink w/ onClick"

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

DestructiveDisabled.storyName = "Destructive, Disabled"

export const Reversed = () => (
  <StoryWrapper>
    <IconButton icon={configureIcon} label="Label" reversed />
  </StoryWrapper>
)
Reversed.parameters = {
  backgrounds: {
    default: "Wisteria 700",
  },
}

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

ReversedDisabled.storyName = "Reversed, Disabled"
ReversedDisabled.parameters = {
  backgrounds: {
    default: "Wisteria 700",
  },
}

export const FormDiscouraged = () => (
  <StoryWrapper>
    <IconButton icon={configureIcon} label="Label" form={true} />
  </StoryWrapper>
)

FormDiscouraged.storyName = "Form (discouraged)"
