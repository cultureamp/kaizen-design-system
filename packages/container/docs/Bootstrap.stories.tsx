import * as React from "react"
import KaizenContainer from "../index"

export default {
  title: "KaizenContainer (React)",
  parameters: {},
  component: KaizenContainer,
  decorators: null
}

export const DefaultKaizenContainer = () => (
  <KaizenContainer>
    <div data-kz-component-defaults>Wrap your app in container to ensure it is consistent</div>
  </KaizenContainer>
)

DefaultKaizenContainer.storyName = "KaizenContainer"
