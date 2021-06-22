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
  const { components } = useMediaQueries({})
  const { SmallOnly, MediumOnly, LargeOnly, MediumDown, MediumUp } = components

  return (
    <>
      <SmallOnly>
        <div>Small only</div>
      </SmallOnly>
      <MediumOnly>
        <div>Medium only</div>
      </MediumOnly>
      <LargeOnly>
        <div>Large only</div>
      </LargeOnly>
      <MediumDown>
        <div>Medium down</div>
      </MediumDown>
      <MediumUp>
        <div>Medium up</div>
      </MediumUp>
    </>
  )
}

export const Queries = () => {
  const { queries } = useMediaQueries({})
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

export const CustomQueries = () => {
  const { queries, components } = useMediaQueries({
    prefersReducedMotion: "(prefers-reduced-motion: reduce)",
  })
  const { prefersReducedMotion } = queries
  const { PrefersReducedMotion } = components

  return (
    <>
      <div>Prefers reduced motion? {prefersReducedMotion ? "Yes" : "No"}</div>
      <PrefersReducedMotion>Prefers reduced motion</PrefersReducedMotion>
    </>
  )
}
