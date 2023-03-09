import React from "react"
import { StoryFn } from "@storybook/react"
import { useMediaQueries } from "../"

export default {
  title: "Helpers/useMediaQueries",
  component: useMediaQueries,
  parameters: {
    docs: {
      description: {
        component: 'import { useMediaQueries } from "@kaizen/responsive"',
      },
    },
  },
}

export const Components: StoryFn = () => {
  const { components } = useMediaQueries()
  const { SmallOnly, MediumOnly, LargeOnly, MediumOrSmaller, MediumOrLarger } =
    components

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
      <MediumOrSmaller>
        <div>Medium or smaller</div>
      </MediumOrSmaller>
      <MediumOrLarger>
        <div>Medium or larger</div>
      </MediumOrLarger>
    </>
  )
}

export const Queries: StoryFn = () => {
  const { queries } = useMediaQueries()
  const { isSmall, isMedium, isLarge, isMediumOrLarger, isMediumOrSmaller } =
    queries

  return (
    <>
      <div>Small? {isSmall ? "Yes" : "No"}</div>
      <div>Medium? {isMedium ? "Yes" : "No"}</div>
      <div>Large? {isLarge ? "Yes" : "No"}</div>
      <div>Medium or smaller? {isMediumOrSmaller ? "Yes" : "No"}</div>
      <div>Medium or larger? {isMediumOrLarger ? "Yes" : "No"}</div>
    </>
  )
}

export const CustomQueries: StoryFn = () => {
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
