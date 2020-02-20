import * as React from "react"
import Box from "../components/Box"

export default { title: "layout/Box" }

export const BoxResponsive = () => (
  <Box m={{ mobile: 0.25, tablet: 1, desktop: 4 }}>
    Move the viewport this way to see the responsive margin 👈
  </Box>
)

export const BoxDefault = () => (
  <Box>
    A box with no props has a default margin and padding of 0. The children of
    box are also unstyled
  </Box>
)

export const BoxWithMargin = () => (
  <Box ml={1} mr={0.25} mt={0.5} mb={0.5}>
    This is an example Box with margin left, right, and top explicitly defined.
  </Box>
)

export const BoxWithPadding = () => (
  <Box p={4}>
    <span>Box with 4 units of padding</span>
  </Box>
)

export const BoxWithRtlSupport = () => (
  <Box rtl pr={4}>
    <span>
      Box with 4 units of padding on the <strong>left</strong> for RTL languages
    </span>
  </Box>
)
