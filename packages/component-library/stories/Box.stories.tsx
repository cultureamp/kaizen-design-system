import * as React from "react"
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs/blocks"
import { Box } from "../components/Box"

export default {
  title: "Box (React)",
  component: Box,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <code>{'import { Box } from "@kaizen/component-library";'}</code>
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
}

export const BoxDefault = () => (
  <Box>
    A box with no props has a default margin and padding of 0. The children of
    box are also unstyled
  </Box>
)
BoxDefault.storyName = "Default"

export const BoxWithMargin = () => (
  <Box ml={1} mr={0.25} mt={0.5} mb={0.5}>
    This is an example Box with margin left, right, and top explicitly defined.
  </Box>
)
BoxWithMargin.storyName = "Box With Margin"

export const BoxWithPadding = () => (
  <Box p={4}>
    <span>Box with 4 units of padding</span>
  </Box>
)
BoxWithPadding.storyName = "Box With Padding"

export const BoxWithXAndYPadding = () => (
  <Box px={4} py={1}>
    <span>Box with 4 units of padding</span>
  </Box>
)
BoxWithXAndYPadding.storyName = "Box With X And Y Padding"

export const BoxWithRtlSupport = () => (
  <Box rtl pr={4}>
    <span>
      Box with 4 units of padding on the <strong>left</strong> for RTL languages
    </span>
  </Box>
)
BoxWithRtlSupport.storyName = "Box With Rtl Support"
