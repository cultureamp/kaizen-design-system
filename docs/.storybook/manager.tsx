// This file is used by storybook to register installed addons.
// See: https://storybook.js.org/docs/addons/using-addons/
import React from "react"
import { addons } from "@storybook/manager-api"
import { tokens } from "@kaizen/design-tokens/src/js"
import KaizenTheme from "../theme"

const CATEGORIES_ICON: Record<string, string> = {
  Introduction: "👋",
  Guides: "📚",
  Components: "⚙️",
  Pages: "📖",
  Helpers: "🤝",
  "Design Tokens": "🎨",
  Deprecated: "💣",
  Systems: "🤖",
  AIO: "📦",
}

const colors = tokens.color

const Tag = ({ color, children }) => (
  <span
    style={{
      backgroundColor: colors[color][100],
      color: colors[color][800],
      border: "1px solid",
      borderColor: colors[color][300],
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: "10px",
      fontWeight: 600,
      marginLeft: "4px",
    }}
  >
    {children}
  </span>
)

addons.setConfig({
  theme: KaizenTheme,
  sidebar: {
    renderLabel: (item): JSX.Element => {
      if (item.type === "root") {
        return (
          <span
            style={{
              color: colors.purple["800"],
              textTransform: "capitalize",
              fontSize: "13px",
              letterSpacing: "normal",
              fontWeight: 600,
            }}
          >
            <span aria-hidden style={{ marginRight: tokens.spacing[6] }}>
              {CATEGORIES_ICON[item.name]}
            </span>
            {item.name}
          </span>
        )
      }

      const isTier1 = item.name.includes("(Tier 1)")
      const isTier2 = item.name.includes("(Tier 2)")

      const name = item.name.replace(" (Tier 1)", "").replace(" (Tier 2)", "")

      return <span style={{ margin: "1px 0" }}>
        {name}
        {isTier1 && <Tag color="green">Tier 1</Tag>}
        {isTier2 && <Tag color="blue">Tier 2</Tag>}
      </span>
    },
  },
})
