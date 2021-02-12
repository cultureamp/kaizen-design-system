import { Box } from "@kaizen/component-library"
import { Meta } from "@storybook/react"
import React, { CSSProperties } from "react"
import { useTheme } from "./react"
import borderVars from "./tokens/border-vars.json"
import colorVars from "./tokens/color-vars.json"
import spacingVars from "./tokens/spacing-vars.json"
import typographyVars from "./tokens/typography-vars.json"

export default {
  title: "Design Tokens/Overview",
} as Meta
const Padding = () => <Box p={1}> </Box>
const ColorDemo = (props: { color: string; name: string }) => (
  <div
    style={{
      width: "100%",
      height: "10rem",
      backgroundColor: props.color,
      ...borderVars["kz-var"].border.solid,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        padding: `0 ${spacingVars["kz-var"].spacing.md}`,
      }}
    >
      <h2
        style={{
          ...(typographyVars["kz-var"].typography.heading2 as CSSProperties),
          color: "white",
          mixBlendMode: "difference",
        }}
      >
        {props.name}
      </h2>
    </div>
  </div>
)

export const ColorDemos = () => {
  const theme = useTheme()
  return (
    <>
      <ColorDemo name="Wisteria 100" color={theme.color.wisteria["100"]} />
      <Padding />
      <ColorDemo
        name="Wisteria 200"
        color={colorVars["kz-var"].color.wisteria[200]}
      />
      <Padding />
      <ColorDemo
        name="Wisteria 300"
        color={colorVars["kz-var"].color.wisteria[300]}
      />
      <Padding />
      <ColorDemo
        name="Wisteria 400"
        color={colorVars["kz-var"].color.wisteria[400]}
      />
      <Padding />
      <ColorDemo
        name="Wisteria 500"
        color={colorVars["kz-var"].color.wisteria[500]}
      />
      <Padding />
      <ColorDemo
        name="Wisteria 600"
        color={colorVars["kz-var"].color.wisteria[600]}
      />
      <Padding />
      <ColorDemo name="Wisteria 700" color={theme.color.wisteria["700"]} />
      <Padding />
    </>
  )
}

ColorDemos.storyName = "Colors"
