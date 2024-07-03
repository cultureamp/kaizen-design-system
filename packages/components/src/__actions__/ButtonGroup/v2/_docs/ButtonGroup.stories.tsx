import { Meta, StoryObj } from "@storybook/react"
import * as ButtonGroupV1Stories from "../../v1/_docs/ButtonGroup.stories"
import { ButtonGroup } from ".."

const meta = {
  // Not to be nested until full KAIO migration
  // title: "Components/Button/Button Group",
  title: "Actions/ButtonGroup/v2",
  component: ButtonGroup,
  args: { children: undefined },
} satisfies Meta<typeof ButtonGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = ButtonGroupV1Stories.Playground
