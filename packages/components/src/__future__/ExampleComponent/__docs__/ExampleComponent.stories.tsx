import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ExampleComponent } from ".."

export default {
  title: "AIO/future/ExampleComponent (Do Not Use)",
  component: ExampleComponent,
  parameters: {
    docs: {
      description: {
        component:
          'import { Button, IconButton } from "@kaizen/button". This Button supersedes "@kaizen/draft-button".',
      },
    },
  },
} as ComponentMeta<typeof ExampleComponent>

export const DefaultStory: ComponentStory<typeof ExampleComponent> = args => (
  <ExampleComponent />
)
DefaultStory.storyName = "ExampleComponent"
