import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Divider } from "@kaizen/draft-divider"
import { Heading, Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../../storybook/constants"
import { figmaEmbed } from "../../../../storybook/helpers"

export default {
  title: `${CATEGORIES.tailwind}/Classname References`,
  parameters: {
    docs: {
      description: {
        component:
          "Require @kaizen/tailwind and add it into your tailwind config",
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14473%3A63845"
    ),
  },
  decorators: [withDesign],
}

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
    <Paragraph variant="intro-lede">Psuedo selector: {selector}</Paragraph>
    <Paragraph variant="body">Breakpoint: {selectorValue}</Paragraph>
    <Paragraph variant="body">
      In this example: {selector}:bg-blue-500
    </Paragraph>
    {/* Passing in as children, as dynamically creating the media query with interpolation fails */}
    {children}
  </div>
)

export const TailwindMediaQueries: Story = () => (
  <div>
    <div className="mb-32">
      <Heading variant="heading-2" classNameOverride="text-center">
        Mobile first breakpoints
      </Heading>
      <Heading variant="heading-4" classNameOverride="text-center">
        These breakpoints activate <em>over</em> a certain screen width. Meaning
        that bg-blue-500 will be applied when the screen gets <em>wider</em>.
      </Heading>
      <QueryInfo selector="md" selectorValue="768px">
        <div className="h-[50px] w-100 rounded-default border-solid border-blue-500 md:bg-blue-500" />
      </QueryInfo>
      <QueryInfo selector="lg" selectorValue="1080px">
        <div className="h-[50px] w-100 rounded-default border-solid border-blue-500 lg:bg-blue-500" />
      </QueryInfo>
    </div>

    <Divider variant="content" />

    <div className="mt-32">
      <Heading variant="heading-2" classNameOverride="text-center">
        Non mobile first breakpoints
      </Heading>
      <Heading variant="heading-4" classNameOverride="text-center">
        These breakpoints activate <em>under</em> a certain screen width.
        Meaning that bg-blue-500 will be applied when the screen gets{" "}
        <em>slimmer</em>.
      </Heading>
      <QueryInfo selector="md-max" selectorValue="768px">
        <div className="h-[50px] w-100 rounded-default border-solid border-blue-500 md-max:bg-blue-500" />
      </QueryInfo>
      <QueryInfo selector="lg-max" selectorValue="1080px">
        <div className="h-[50px] w-100 rounded-default border-solid border-blue-500 lg-max:bg-blue-500" />
      </QueryInfo>
    </div>
  </div>
)

TailwindMediaQueries.storyName = "Media queries"
