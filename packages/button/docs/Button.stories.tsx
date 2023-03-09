import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import isChromatic from "chromatic"
import addIcon from "@kaizen/component-library/icons/add.icon.svg"
import arrowRight from "@kaizen/component-library/icons/arrow-right.icon.svg"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { Button, ButtonProps } from ".."

const IS_CHROMATIC = isChromatic()

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
