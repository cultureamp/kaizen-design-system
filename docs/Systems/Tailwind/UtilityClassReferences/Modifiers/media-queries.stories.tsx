import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Heading } from "~components/Heading"
import { Text } from "~components/Text"

export default {
  title: "Systems/Tailwind/Utility Class References/Modifiers/Media Queries",
  parameters: {
    docsLayout: "fullPage",
    docs: {
      a11y: { disable: true },
      description: {
        component:
          "Require @kaizen/tailwind and add it into your tailwind config",
      },
    },
  },
} satisfies Meta

type QueryInfoProps = {
  selector: string
  selectorValue: string
  children: React.ReactElement
}
const QueryInfo = ({
  selector,
  selectorValue,
  children,
}: QueryInfoProps): React.ReactElement => (
  <div className="my-12">
    <Text variant="intro-lede">Pseudo selector: {selector}</Text>
    <Text variant="body">Breakpoint: {selectorValue}</Text>
    <Text variant="body">In this example: {selector}:bg-blue-400</Text>
    {/* Passing in as children, as dynamically creating the media query with interpolation fails */}
    {children}
  </div>
)

export const MediaQueries: StoryFn = () => (
  <div className="py-32">
    <Heading tag="p" variant="heading-4" classNameOverride="text-center">
      These breakpoints activate <em>over</em> a certain screen width. Meaning
      that bg-blue-400 will be applied when the screen gets <em>wider</em>.
    </Heading>
    <QueryInfo selector="md" selectorValue="768px">
      <div className="border-solid md:bg-blue-400 h-[50px] w-full rounded-default" />
    </QueryInfo>
    <QueryInfo selector="lg" selectorValue="1080px">
      <div className="border-solid lg:bg-blue-400 h-[50px] w-full rounded-default" />
    </QueryInfo>
  </div>
)

export const ArbitraryMediaQueries: StoryFn = () => (
  <div className="py-32">
    <Heading tag="p" variant="heading-4" classNameOverride="text-center">
      Bespoke, one-off media queries can be created with arbitrary values. See
      the{" "}
      <a href="https://tailwindcss.com/docs/responsive-design#arbitrary-values">
        Tailwind docs
      </a>{" "}
      for more info.
    </Heading>

    <div className="py-32">
      <Text variant="body">
        <strong>Min-width breakpoint</strong> (applied when the screen gets{" "}
        <em>wider</em>)
      </Text>
      <Text variant="body">In this example: min-[500px]:bg-blue-400</Text>
      <div className="border-solid min-[500px]:bg-blue-400 h-[50px] w-full rounded-default" />
    </div>

    <Text variant="body">
      <strong>Max-width breakpoint</strong> (applied when the screen gets{" "}
      <em>slimmer</em>)
    </Text>
    <Text variant="body">In this example: max-[500px]:bg-blue-400</Text>
    <div className="border-solid max-[500px]:bg-blue-400 h-[50px] w-full rounded-default" />
  </div>
)
