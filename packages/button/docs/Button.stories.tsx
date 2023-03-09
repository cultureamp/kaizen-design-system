import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Button } from ".."

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Label",
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component:
          'import { Button, IconButton } from "@kaizen/button". This Button supersedes "@kaizen/draft-button".',
      },
    },
  },
} as Meta<typeof Button>

export const DefaultStory: StoryFn<typeof Button> = args => <Button {...args} />
DefaultStory.storyName = "Button"
