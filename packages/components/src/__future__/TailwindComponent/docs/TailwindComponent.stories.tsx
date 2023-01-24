import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { TailwindComponent } from ".."

export default {
  title: "AIO/TailwindComponent (Do Not Use)",
  component: TailwindComponent,
  parameters: {},
} as ComponentMeta<typeof TailwindComponent>

export const DefaultStory: ComponentStory<typeof TailwindComponent> = args => (
  <TailwindComponent />
)
DefaultStory.storyName = "TailwindComponent"
