// import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { EditableRichTextContent } from "../index"
import dummyContent from "./dummyContent.json"

const meta = {
  title: "Components/EditableRichTextContent",
  component: EditableRichTextContent,
  args: {
    content: dummyContent,
    labelText: "Editable rich text content",
  },
  argTypes: {
    content: { control: "disabled" },
  },
} satisfies Meta<typeof EditableRichTextContent>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}
