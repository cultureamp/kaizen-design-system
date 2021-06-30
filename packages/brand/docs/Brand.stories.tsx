import React from "react"
import { figmaEmbed } from "../../../storybook/helpers/figmaEmbed"
import { Brand } from "../src/Brand/Brand"

export default {
  title: "Brand (React)",
  component: Brand,
  parameters: {
    docs: {
      description: {
        component: 'Import { Brand } from "@kaizen/brand"',
      },
    },
  },
}

const reversedBg = {
  backgrounds: {
    default: "Wisteria 700",
  },
}

export const DefaultSiteDemo = _ => (
  <Brand alt="Culture Amp" variant="logo-horizontal" reversed={false} />
)
DefaultSiteDemo.story = {
  name: "Logo horizontal",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=1929%3A13091"
    ),
  },
}

export const LogoHorizontalReversed = () => (
  <Brand alt="Culture Amp" variant="logo-horizontal" reversed={true} />
)
LogoHorizontalReversed.story = {
  name: "Logo horizontal (Reversed)",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=1929%3A13091"
    ),
  },
}

export const LogoVertical = () => (
  <Brand alt="Culture Amp" variant="logo-vertical" reversed={false} />
)
LogoVertical.story = {
  name: "Logo Vertical",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=1929%3A13091"
    ),
  },
}

export const LogoVerticalReversed = () => (
  <Brand alt="Culture Amp" variant="logo-vertical" reversed={true} />
)
LogoVerticalReversed.story = {
  name: "Logo Vertical (Reversed)",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=1929%3A13091"
    ),
  },
}

export const Enso = () => (
  <Brand alt="Culture Amp" variant="enso" reversed={false} />
)
Enso.story = {
  name: "Enso",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=1929%3A13091"
    ),
  },
}

export const EnsoReversed = () => (
  <Brand alt="Culture Amp" variant="enso" reversed={true} />
)
EnsoReversed.story = {
  name: "Enso (Reversed)",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=1929%3A13091"
    ),
  },
}

export const CollectiveIntelligence = () => (
  <Brand
    alt="Collective Intelligence"
    variant="collective-intelligence"
    reversed={false}
  />
)
CollectiveIntelligence.story = {
  name: "Collective Intelligence",
  parameters: {
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=1929%3A13091"
    ),
  },
}

export const CollectiveIntelligenceReversed = () => (
  <Brand
    alt="Collective Intelligence"
    variant="collective-intelligence"
    reversed={true}
  />
)
CollectiveIntelligenceReversed.story = {
  name: "Collective Intelligence (Reversed)",
  parameters: {
    ...reversedBg,
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit-Heart?node-id=1929%3A13091"
    ),
  },
}
