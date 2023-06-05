import React from "react"
import {
  Title,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks"
import { Meta, StoryFn } from "@storybook/react"
import { Paragraph } from "@kaizen/typography"
import { SkipLink } from "../index"

export default {
  tags: ["autodocs"],
  title: "Components/A11y/Skip Link",
  component: SkipLink,
  parameters: {
    docs: {
      description: {
        component: 'import { SkipLink } from "@kaizen/a11y"',
      },
      page: (): JSX.Element => (
        <>
          <Title />
          <Description />
          <Paragraph variant="body">
            <a href="https://webaim.org/techniques/skipnav/">Skip links</a> are
            useful for screen reader and keyboard users to skip repeated
            navigation.
          </Paragraph>
          <Paragraph variant="body">
            This component is included out of the box when using Unified
            Navigation. In most scenarios you will not need to consume this
            component directly.
          </Paragraph>
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
    backgrounds: {
      default: "Purple 700",
    },
  },
} satisfies Meta<typeof SkipLink>

export const SkipLinkExample: StoryFn = () => {
  const renderPointers = (): JSX.Element[] =>
    Array.from(Array(10)).map((_, i) => (
      <div key={`pointer-${i}`} style={{ paddingTop: "10rem" }}>
        👇
      </div>
    ))

  return (
    <>
      <SkipLink label="Skip to content" skipTo="mainContent" />
      {renderPointers()}
      <div id="mainContent" style={{ color: "white" }}>
        The skip link should jump to this container
      </div>
    </>
  )
}
