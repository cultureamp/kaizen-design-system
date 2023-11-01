import { Meta, StoryObj } from "@storybook/react"
import { RichTextContent } from "../index"
import dummyContent from "./dummyContent.json"

const meta = {
  title: "Components/RichTextEditor/RichTextContent",
  component: RichTextContent,
  args: {
    content: dummyContent,
  },
  argTypes: {
    content: { control: "disable" },
  },
} satisfies Meta<typeof RichTextContent>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    chromatic: { disable: false },
  },
}
