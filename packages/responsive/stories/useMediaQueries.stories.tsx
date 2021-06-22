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

export const Queries = () => {
  const { queries } = useMediaQueries()
  const { isSmall, isMedium, isLarge, isMediumUp, isMediumDown } = queries

  return (
    <>
      <div>Small? {isSmall ? "Yes" : "No"}</div>
      <div>Medium? {isMedium ? "Yes" : "No"}</div>
      <div>Large? {isLarge ? "Yes" : "No"}</div>
      <div>Medium Up? {isMediumUp ? "Yes" : "No"}</div>
      <div>Medium Down? {isMediumDown ? "Yes" : "No"}</div>
    </>
  )
}
