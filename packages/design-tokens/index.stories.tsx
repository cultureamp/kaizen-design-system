import { Box } from "@kaizen/component-library"
import { Divider } from "@kaizen/draft-divider"
import { Meta } from "@storybook/react"
import React from "react"
import { useTheme } from "./react"

export default {
  title: "Design Tokens/Overview",
} as Meta
const Padding = () => <Box p={1}> </Box>
const ColorDemo = (props: { color: string; name: string }) => {
  const theme = useTheme()
  return (
    <>
      <h4
        style={{
          ...theme.typography.heading4,
        }}
      >
        {props.name}
      </h4>
      <div
        style={{
          width: "100%",
          height: "10rem",
          backgroundColor: props.color,
          ...theme.border.solid,
        }}
      ></div>
    </>
  )
}

export const ColorDemos = () => {
  const theme = useTheme()
  return (
    <>
      <ColorDemo name="Wisteria 100" color={theme.color.wisteria[100]} />
      <Padding />
      <ColorDemo name="Wisteria 200" color={theme.color.wisteria[200]} />
      <Padding />
      <ColorDemo name="Wisteria 300" color={theme.color.wisteria[300]} />
      <Padding />
      <ColorDemo name="Wisteria 400" color={theme.color.wisteria[400]} />
      <Padding />
      <ColorDemo name="Wisteria 500" color={theme.color.wisteria[500]} />
      <Padding />
      <ColorDemo name="Wisteria 600" color={theme.color.wisteria[600]} />
      <Padding />
      <ColorDemo name="Wisteria 700" color={theme.color.wisteria[700]} />
      <Padding />
    </>
  )
}

ColorDemos.storyName = "Colors"
