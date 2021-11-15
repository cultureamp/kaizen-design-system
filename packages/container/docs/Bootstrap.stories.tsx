import * as React from "react"
import { Heading, Paragraph, Box } from "@kaizen/component-library"
import { CATEGORIES } from "../../../storybook/constants"
import { Container } from "../lib/index"

export default {
  title: `${CATEGORIES.helpers}/Container`,
  component: Container,
  parameters: {
    docs: {
      description: {
        component: 'import { Container } from "@kaizen/container"',
      },
    },
  },
}

export const DefaultKaizenContainer = () => (
  <Container>
    <Heading variant="display-0">Important</Heading>
    <Box py={0.5}>
      <Paragraph variant="body">
        To ensure the necessary assets are loaded (fonts, CSS polyfills, etc)
        are added to your App, wrap it in Container
      </Paragraph>
    </Box>
  </Container>
)

DefaultKaizenContainer.storyName = "KaizenContainer"
