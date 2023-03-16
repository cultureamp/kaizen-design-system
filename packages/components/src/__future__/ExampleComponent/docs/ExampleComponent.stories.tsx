import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { ExampleComponent } from "../ExampleComponent"

export default {
  title: "AIO/future/ExampleComponent (Do Not Use)",
  component: ExampleComponent,
  parameters: {},
} satisfies Meta<typeof ExampleComponent>

export const DefaultStory: StoryFn<typeof ExampleComponent> = () => (
  <ExampleComponent />
)
DefaultStory.storyName = "ExampleComponent"
