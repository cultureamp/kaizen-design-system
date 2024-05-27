import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Label } from "~components/Label"
import { RichTextContent } from "../index"
import dummyContent from "./dummyContent.json"

const meta = {
  title: "Components/RichTextEditor/RichTextContent",
  component: RichTextContent,
  args: {
    content: dummyContent,
  },
  argTypes: {
    content: { control: false },
  },
} satisfies Meta<typeof RichTextContent>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    chromatic: { disable: false },
  },
}

export const ReadOnly: Story = {
  parameters: {
    chromatic: { disable: false },
  },
  render: args => (
    <>
      <Label classNameOverride="block mb-6" id="sb--rich-text-content-label">
        Read only state
      </Label>
      <div className="p-12 bg-gray-200 rounded-default">
        <RichTextContent
          aria-labelledby="sb--rich-text-content-label"
          {...args}
        />
      </div>
    </>
  ),
}
