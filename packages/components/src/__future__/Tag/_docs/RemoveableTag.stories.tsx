import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AcademyIcon, ActionOffIcon, AddIcon, TagIcon } from "~components/Icon"
import { RemoveableTag } from "../RemoveableTag"
import { TagColorKeys } from "../types"

const meta = {
  title: "Components/Tag/RemoveableTag",
  component: RemoveableTag,
  args: {
    children: "My tag",
    removeButtonProps: {
      onClick: () => alert("Clicked"),
      "aria-label": "Remove tag icon",
    },
  },
} satisfies Meta<typeof RemoveableTag>

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

export const Children: Story = {
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
            onClick: () => alert("Clicked"),
          }}
        >
          {color}
        </RemoveableTag>
      ))}
    </>
  ),
}

export const Icon: Story = {
  render: () => (
    <>
      <RemoveableTag
        icon={<AcademyIcon role="presentation" />}
        removeButtonProps={{
          "aria-label": "close",
          onClick: () => alert("Clicked"),
        }}
      >
        AcademyIcon
      </RemoveableTag>
      <RemoveableTag
        color="yellow"
        icon={<ActionOffIcon role="presentation" />}
        removeButtonProps={{
          "aria-label": "close",
          onClick: () => alert("Clicked"),
        }}
      >
        ActionOffIcon
      </RemoveableTag>
      <RemoveableTag
        color="green"
        icon={<AddIcon role="presentation" />}
        removeButtonProps={{
          "aria-label": "close",
          onClick: () => alert("Clicked"),
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
