import React from "react"
import { useMediaQueries } from "../index"

export default {
  title: "useMediaQueries (React)",
  component: useMediaQueries,
  parameters: {
    info: {
      text: `
        import { useMediaQueries } from "@kaizen/responsive";
      `,
    },
  },
}

export const Components = () => {
  const { components } = useMediaQueries()
  const { SmallOnly, MediumOnly, LargeOnly, MediumDown, MediumUp } = components

  return (
    <>
      <SmallOnly>Small only</SmallOnly>
      <MediumOnly>Medium only</MediumOnly>
      <LargeOnly>Large only</LargeOnly>
      <MediumDown>Medium down</MediumDown>
      <MediumUp>Medium up</MediumUp>
    </>
  )
}
Components.storyName = "Components"
