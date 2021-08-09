import { useTheme } from "@kaizen/design-tokens"
import React from "react"

export const App = () => {
  const theme = useTheme()
  return (
    <div
      style={{
        backgroundColor:
          theme.themeKey === "heart"
            ? theme.color.yellow["600"]
            : theme.color.purple["800"],
        color: "white",
      }}
    >
      <h1>Current theme: {theme.themeKey}</h1>
      {theme.themeKey === "heart" && <h3> I only show on heart theme! </h3>}
    </div>
  )
}
