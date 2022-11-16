import React from "react"
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { Box } from "../components/Box"
import styles from "./Box.stories.module.scss"

export default {
  title: `${CATEGORIES.components}/Box`,
  component: Box,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Documentation />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
}

const Documentation = ({ reversed }: { reversed?: boolean }) => (
  <Box mt={2}>
    <Paragraph variant="body" color={reversed ? "white" : "dark"}>
      <ul>
        <li>
          <code>Box</code> is a utility component that is for creating
          small-scale spacing without the need for CSS.
        </li>
        <li>
          <strong>
            Do not use <code>Box</code> to handle page layout
          </strong>
          . Use <code>PageLayout</code> instead.
        </li>
        <li>
          Below is a summary of the props that you can use to quickly achieve
          the spacing you want.
          <br />
          Each prop takes a <code>number</code> as the value that is a multiple
          of <code>$kz-spacing-md</code> (formerly <code>$ca-grid</code>).
          <br />
          For example, <code>ml=&#123;1.5&#125;</code> is equivalent to{" "}
          <code>margin-left: $kz-spacing-md * 1.5;</code>
        </li>
      </ul>
    </Paragraph>
  </Box>
)

export const BoxDefault = () => (
  <div className={styles.boxStoriesWrapper}>
    <Box>
      A box with no props has a default margin and padding of 0. The children of
      box are also unstyled.
    </Box>
  </div>
)
BoxDefault.storyName = "Default"

export const BoxWithMargin = () => (
  <div className={styles.boxStoriesWrapper}>
    <Box ml={1} mr={0.25} mt={0.5} mb={0.5}>
      This is an example Box with margin left, right, and top explicitly
      defined.
    </Box>
  </div>
)
BoxWithMargin.parameters = { chromatic: { disable: false } }

export const BoxWithPadding = () => (
  <div className={styles.boxStoriesWrapper}>
    <Box p={4}>
      <span>Box with 4 units of padding</span>
    </Box>
  </div>
)
BoxWithPadding.parameters = { chromatic: { disable: false } }

export const BoxWithXAndYPadding = () => (
  <div className={styles.boxStoriesWrapper}>
    <Box px={4} py={1}>
      <span>Box with 4 units of padding</span>
    </Box>
  </div>
)
BoxWithXAndYPadding.parameters = { chromatic: { disable: false } }

export const BoxWithRtlSupport = () => (
  <div className={styles.boxStoriesWrapper}>
    <Box rtl pr={4}>
      <span>
        Box with 4 units of padding on the <strong>left</strong> for RTL
        languages
      </span>
    </Box>
  </div>
)
BoxWithRtlSupport.parameters = { chromatic: { disable: false } }
