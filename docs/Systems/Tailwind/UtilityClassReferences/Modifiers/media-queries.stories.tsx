import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Heading, Paragraph } from "@kaizen/typography"

export default {
  title: "Systems/Tailwind/Utility Class References/Modifiers/Media Queries",
  parameters: {
    docsLayout: "fullPage",
    docs: {
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
    <Paragraph variant="intro-lede">Pseudo selector: {selector}</Paragraph>
    <Paragraph variant="body">Breakpoint: {selectorValue}</Paragraph>
    <Paragraph variant="body">
      In this example: {selector}:bg-blue-400
    </Paragraph>
    {/* Passing in as children, as dynamically creating the media query with interpolation fails */}
    {children}
  </div>
)

export const MobileFirstBreakpoints: StoryFn = () => (
  <div className="py-32">
    <Heading tag="p" variant="heading-4" classNameOverride="text-center">
      These breakpoints activate <em>over</em> a certain screen width. Meaning
      that bg-blue-400 will be applied when the screen gets <em>wider</em>.
    </Heading>
    <QueryInfo selector="md" selectorValue="768px">
      <div className="h-[50px] w-100 rounded-default border-solid  md:bg-blue-400" />
    </QueryInfo>
    <QueryInfo selector="lg" selectorValue="1080px">
      <div className="h-[50px] w-100 rounded-default border-solid  lg:bg-blue-400" />
    </QueryInfo>
  </div>
)

export const NonMobileFirstBreakpoints: StoryFn = () => (
  <div className="py-32">
    <Heading tag="p" variant="heading-4" classNameOverride="text-center">
      These breakpoints activate <em>under</em> a certain screen width. Meaning
      that bg-blue-400 will be applied when the screen gets <em>slimmer</em>.
    </Heading>
    <QueryInfo selector="md-max" selectorValue="768px">
      <div className="h-[50px] w-100 rounded-default border-solid  md-max:bg-blue-400" />
    </QueryInfo>
    <QueryInfo selector="lg-max" selectorValue="1080px">
      <div className="h-[50px] w-100 rounded-default border-solid  lg-max:bg-blue-400" />
    </QueryInfo>
  </div>
)
