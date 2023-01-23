import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ExampleComponent } from ".."

export default {
  title: "AIO/ExampleComponent (Do Not Use)",
  component: ExampleComponent,
  parameters: {},
} as ComponentMeta<typeof ExampleComponent>

export const DefaultStory: ComponentStory<typeof ExampleComponent> = args => (
  <ExampleComponent />
)
DefaultStory.storyName = "ExampleComponent"
