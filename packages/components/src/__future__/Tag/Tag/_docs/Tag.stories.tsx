import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AcademyIcon, ActionOffIcon, AddIcon, TagIcon } from "~components/Icon"
import { TagColorKeys } from "../types"
import { Tag } from ".."

const meta = {
  title: "Components/Tag/Future",
  component: Tag,
  args: {
    children: "My tag",
  },
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Children: StoryObj = {
  args: { children: "This text is the children" },
}

export const Color: StoryObj = {
  render: () => (
    <div className="flex gap-16">
      {TagColorKeys.map(color => (
        <Tag color={color} icon={<TagIcon role="presentation" />} key={color}>
          {color}
        </Tag>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const Icon: StoryObj = {
  render: () => (
    <div className="flex gap-16">
      <Tag icon={<AcademyIcon role="presentation" />}>AcademyIcon</Tag>
      <Tag color="yellow" icon={<ActionOffIcon role="presentation" />}>
        ActionOffIcon
      </Tag>
      <Tag color="green" icon={<AddIcon role="presentation" />}>
        AddIcon
      </Tag>
    </div>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}

export const ClassNameOverride: StoryObj = {
  args: {
    classNameOverride: "border-red-500 border-solid border",
  },
}
