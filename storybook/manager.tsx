// This file is used by storybook to register installed addons.
// See: https://storybook.js.org/docs/addons/using-addons/
import React from "react"
import { addons } from "@storybook/addons"
import { defaultTheme } from "@kaizen/design-tokens"
import KaizenTheme from "./theme"

export const CATEGORIES = {
  introduction: "Introduction",
  components: "Components",
  helpers: "Helpers",
  designTokens: "Design Tokens",
  deprecated: "Deprecated",
  tailwind: "Systems/Tailwind",
  systems: "Systems",
  aio: "AIO",
}

export const CATEGORIES_ICON = {
  [CATEGORIES.introduction]: "👋",
  [CATEGORIES.components]: "⚙️",
  [CATEGORIES.helpers]: "🤝",
  [CATEGORIES.designTokens]: "🎨",
  [CATEGORIES.deprecated]: "💣",
  [CATEGORIES.systems]: "🤖",
  [CATEGORIES.aio]: "📦",
}

const colors = defaultTheme.color

addons.setConfig({
  theme: KaizenTheme,
  analyticsGTM: {
    gtmId: "GTM-KS4VWLT",
  },
  sidebar: {
    renderLabel: item =>
      item.type === "root" ? (
        <span
          style={{
            color: colors.purple["800"],
            textTransform: "capitalize",
            fontSize: "13px",
            letterSpacing: "normal",
            fontWeight: 600,
          }}
        >
          <span aria-hidden style={{ marginRight: defaultTheme.spacing[6] }}>
            {CATEGORIES_ICON[item.name]}
          </span>
          {item.name}
        </span>
      ) : (
        item.name
      ),
  },
})
