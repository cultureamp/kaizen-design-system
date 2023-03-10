// This file is used by storybook to register installed addons.
// See: https://storybook.js.org/docs/addons/using-addons/
import React from "react"
import { addons } from "@storybook/addons"
import { defaultTheme } from "@kaizen/design-tokens"
import KaizenTheme from "./theme"

const CATEGORIES_ICON = {
  Introduction: "👋",
  Components: "⚙️",
  Helpers: "🤝",
  "Design Tokens": "🎨",
  Deprecated: "💣",
  Systems: "🤖",
  AIO: "📦",
}

const colors = defaultTheme.color

addons.setConfig({
  theme: KaizenTheme,
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
