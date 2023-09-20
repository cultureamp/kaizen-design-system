import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Tag, TagColorKeys } from ".."
import { AcademyIcon, ActionOffIcon, AddIcon, TagIcon } from "~components/Icons"
import styles from "./TagStories.module.scss"

export default {
  title: "Components/Tag",
  component: Tag,
} satisfies Meta<typeof Tag>

export const Playground: StoryObj = {
  render: args => <Tag {...args}>My tag</Tag>,
}

export const SimpleTag: StoryObj = {
  render: args => <Tag {...args}>My Tag</Tag>,
}

export const Children: StoryObj = {
  render: args => <Tag {...args}>This text is the children</Tag>,
}

export const Color: StoryObj = {
  render: _args => {
    return (
      <>
        {TagColorKeys.map(color => (
          <Tag color={color} icon={<TagIcon role="presentation" />}>
            {color}
          </Tag>
        ))}
      </>
    )
  },
}

export const Icon: StoryObj = {
  render: _args => {
    return (
      <>
        <Tag icon={<AcademyIcon role="presentation" />}>AcademyIcon</Tag>
        <Tag color="yellow" icon={<ActionOffIcon role="presentation" />}>
          ActionOffIcon
        </Tag>
        <Tag color="green" icon={<AddIcon role="presentation" />}>
          AddIcon
        </Tag>
      </>
    )
  },
}

export const ClassNameOverride: StoryObj = {
  render: _args => <Tag classNameOverride={styles.myCustomClass}>Hello</Tag>,
}
