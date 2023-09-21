import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AcademyIcon, ActionOffIcon, AddIcon, TagIcon } from "~components/Icons"
import { Tag } from ".."
import { TagColorKeys } from "../types"
import styles from "./TagStories.module.scss"

const meta = {
  title: "Components/Tag",
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
    <>
      {TagColorKeys.map(color => (
        <Tag color={color} icon={<TagIcon role="presentation" />} key={color}>
          {color}
        </Tag>
      ))}
    </>
  ),
}

export const Icon: StoryObj = {
  render: () => (
    <>
      <Tag icon={<AcademyIcon role="presentation" />}>AcademyIcon</Tag>
      <Tag color="yellow" icon={<ActionOffIcon role="presentation" />}>
        ActionOffIcon
      </Tag>
      <Tag color="green" icon={<AddIcon role="presentation" />}>
        AddIcon
      </Tag>
    </>
  ),
}

export const ClassNameOverride: StoryObj = {
  args: {
    classNameOverride: "border-red-500 border-solid border-",
  },
}
