import React from "react"
import { Decorator } from "@storybook/react"
import isChromatic from "chromatic"

const IS_CHROMATIC = isChromatic()

// Add additional height to the stories when running in Chromatic only.
// Modals have fixed position and would be cropped from snapshot tests.
// Setting height to 100vh ensures we capture as much content of the
// modal, as it's height responds to the content within it.
const heightDecorator: Decorator = Story => {
  if (IS_CHROMATIC) {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Story />
      </div>
    )
  }

  return <Story />
}

export const chromaticModalSettings = {
  parameters: {
    chromatic: {
      disable: false,
      delay: 400, // match MODAL_TRANSITION_TIMEOUT in modals + 50ms
      pauseAnimationAtEnd: true,
    },
  },
  decorators: [heightDecorator],
}
