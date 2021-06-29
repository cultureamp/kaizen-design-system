import React from "react"
import { Brand } from "../KaizenDraft/Brand/Brand"

export default {
  title: "Brand (React)",
  component: Brand,
  parameters: {
    docs: {
      description: {
        component: 'Import { Brand } from "@kaizen/draft-brand"',
      },
    },
  },
}

const reversedLogoStyles = {
  width: "200px",
  backgroundColor: "#e6e5e5",
  padding: "20px",
}

export const DefaultSiteDemo = () => (
  <div style={{ width: "200px" }}>
    <Brand variant="logo-horizontal" isReversed={false} />
  </div>
)
DefaultSiteDemo.storyName = "Logo horizontal"

export const LogoHorizontal = () => (
  <div style={reversedLogoStyles}>
    <Brand variant="logo-horizontal" isReversed={true} />
  </div>
)
LogoHorizontal.storyName = "Logo horizontal (Reversed)"

export const LogoVertical = () => (
  <div style={{ width: "200px" }}>
    <Brand variant="logo-vertical" isReversed={false} />
  </div>
)
LogoVertical.storyName = "Logo Vertical"

export const LogoVerticalReversed = () => (
  <div style={reversedLogoStyles}>
    <Brand variant="logo-vertical" isReversed={true} />
  </div>
)
LogoVertical.storyName = "Logo Vertical (Reversed)"

export const Enso = () => (
  <div style={{ width: "200px" }}>
    <Brand variant="enso" isReversed={false} />
  </div>
)
Enso.storyName = "Enso"

export const EnsoReversed = () => (
  <div style={reversedLogoStyles}>
    <Brand variant="enso" isReversed={true} />
  </div>
)
EnsoReversed.storyName = "Enso (Reversed)"

export const CollectiveIntelligence = () => (
  <div style={{ width: "200px" }}>
    <Brand variant="collective-intelligence" isReversed={false} />
  </div>
)
CollectiveIntelligence.storyName = "Collective Intelligence"

export const CollectiveIntelligenceReversed = () => (
  <div style={reversedLogoStyles}>
    <Brand variant="collective-intelligence" isReversed={true} />
  </div>
)
CollectiveIntelligenceReversed.storyName = "Collective Intelligence (Reversed)"
