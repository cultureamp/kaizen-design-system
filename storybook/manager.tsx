// This file is used by storybook to register installed addons.
// See: https://storybook.js.org/docs/addons/using-addons/
import React from "react"
import { addons } from "@storybook/manager-api"
import { tokens } from "../packages/design-tokens/src/js"
import KaizenTheme from "./theme"

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

addons.setConfig({
  theme: KaizenTheme,
  sidebar: {
    renderLabel: (item): JSX.Element =>
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
          <span aria-hidden style={{ marginRight: tokens.spacing[6] }}>
            {CATEGORIES_ICON[item.name]}
          </span>
          {item.name}
        </span>
      ) : (
        <span style={{ margin: "1px 0" }}>{item.name}</span>
      ),
  },
})
