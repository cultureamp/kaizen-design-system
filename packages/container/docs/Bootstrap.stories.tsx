import * as React from "react"
import { Heading, Paragraph, Box } from "@kaizen/component-library"
import KaizenContainer from "../index"

export default {
  title: "KaizenContainer (React)",
  parameters: {},
  component: KaizenContainer,
  decorators: null
}

export const DefaultKaizenContainer = () => (
  <KaizenContainer>
    <Heading variant='display-0'>Important</Heading>
    <Box py={0.5}>
      <Paragraph variant="body">
        To ensure the necessary assets are loaded (fonts, CSS polyfills, etc) are added
        to your App, wrap it in KaizenContainer
      </Paragraph>
    </Box>
    <Box py={0.5}>
      <div data-kz-component-defaults>
        Kaizen components are wrapped in a data attribute and set component-specific style defaults, such as box-sizing.
      </div>
    </Box>
  </KaizenContainer>
)

DefaultKaizenContainer.storyName = "KaizenContainer"
