import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Meta, StoryObj } from "@storybook/react"
import { RemoveableTag } from "../RemoveableTag"
import { AcademyIcon, ActionOffIcon, AddIcon, TagIcon } from "~components/Icons"
import { TagColorKeys } from "../types"

const meta = {
  title: "Components/RemoveableTag",
  component: RemoveableTag,
  args: {
    children: "My tag",
    removeButtonProps: {
      onClick: () => console.log("Clicked"),
      "aria-label": "remove tag icon",
    },
  },
} satisfies Meta<typeof RemoveableTag>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  decorators: [
    (Story, ctx) => {
      const [tags, setTags] = useState([{ id: uuidv4(), label: "My tag 1" }])
      const [count, setCount] = useState(1)
      return (
        <div>
          <button
            onClick={() => {
              setCount(count + 1)
              setTags([...tags, { id: uuidv4(), label: `My tag ${count + 1}` }])
            }}
          >
            Add tag
          </button>
          {tags.map(tag => (
            <Story
              args={{
                ...ctx.args,
                children: tag.label,
                removeButtonProps: {
                  onClick: () =>
                    setTags(() => tags.filter(e => e.id !== tag.id)),
                  "aria-label": "remove tag icon",
                },
              }}
            />
          ))}
        </div>
      )
    },
  ],
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

export const Color: Story = {
  render: () => (
    <>
      {TagColorKeys.map(color => (
        <RemoveableTag
          color={color}
          icon={<TagIcon role="presentation" />}
          key={color}
          removeButtonProps={{
            "aria-label": "close",
            onClick: () => console.log("Clicked"),
          }}
        >
          {color}
        </RemoveableTag>
      ))}
    </>
  ),
}

export const Icon: StoryObj = {
  render: () => (
    <>
      <RemoveableTag
        icon={<AcademyIcon role="presentation" />}
        removeButtonProps={{
          "aria-label": "close",
          onClick: () => console.log("Clicked"),
        }}
      >
        AcademyIcon
      </RemoveableTag>
      <RemoveableTag
        color="yellow"
        icon={<ActionOffIcon role="presentation" />}
        removeButtonProps={{
          "aria-label": "close",
          onClick: () => console.log("Clicked"),
        }}
      >
        ActionOffIcon
      </RemoveableTag>
      <RemoveableTag
        color="green"
        icon={<AddIcon role="presentation" />}
        removeButtonProps={{
          "aria-label": "close",
          onClick: () => console.log("Clicked"),
        }}
      >
        AddIcon
      </RemoveableTag>
    </>
  ),
}

export const ClassNameOverride: Story = {
  args: {
    classNameOverride: "border-red-500 border-solid border-",
  },
}
