import * as React from "react"
import Container from "../index"

export default {
  title: "KaizenApp Container (React)",
  parameters: {},
  component: Container,
}

export const DefaultContainer = () => (
  <Container>
    <div>Wrap your app in container to ensure it is consistent</div>
  </Container>
)

DefaultContainer.storyName = "Container"
