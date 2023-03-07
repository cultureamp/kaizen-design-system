import React from "react"
import { Meta, ComponentStory } from "@storybook/react"
import { ExampleComponent } from "../ExampleComponent"

export default {
  title: "AIO/future/ExampleComponent (Do Not Use)",
  component: ExampleComponent,
  parameters: {},
} as Meta<typeof ExampleComponent>

export const DefaultStory: ComponentStory<typeof ExampleComponent> = () => (
  <ExampleComponent />
)
DefaultStory.storyName = "ExampleComponent"
