import * as React from "react"
import { Paragraph, Box } from "@kaizen/component-library"
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs"
import { CATEGORIES } from "../../../storybook/constants"
import { SkipLink } from "../index"

export default {
  title: `${CATEGORIES.components}/Skip Link`,
  component: SkipLink,
  parameters: {
    docs: {
      description: {
        component: 'import { SkipLink } from "@kaizen/a11y"',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <>
            <Box py={0.5}>
              <Paragraph variant="body">
                <a href="https://webaim.org/techniques/skipnav/">Skip links</a>{" "}
                are useful for screen reader and keyboard users to skip repeated
                naviagation.
              </Paragraph>
            </Box>
            <Box py={0.5}>
              <Paragraph variant="body">
                This component is included out of the box when using Unified
                Navigation. In most scenarios you will not need to consume this
                component directly.
              </Paragraph>
            </Box>
          </>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
    backgrounds: {
      default: "Purple 700",
    },
  },
}

export const SkipLinkExample = () => {
  const renderPointers = () =>
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
