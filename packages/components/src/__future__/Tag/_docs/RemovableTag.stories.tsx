import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AcademyIcon, ActionOffIcon, AddIcon, TagIcon } from "~components/Icon"
import { RemovableTag } from "../RemovableTag"
import { TagColorKeys } from "../types"

const meta = {
  title: "Components/Tag/RemovableTag",
  component: RemovableTag,
  args: {
    children: "My tag",
    removeButtonProps: {
      onClick: () => alert("Clicked"),
      ariaLabel: "Remove tag icon",
    },
  },
} satisfies Meta<typeof RemovableTag>

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
        <RemovableTag
          color={color}
          icon={<TagIcon role="presentation" />}
          key={color}
          removeButtonProps={{
            ariaLabel: "close",
            onClick: () => alert("Clicked"),
          }}
        >
          {color}
        </RemovableTag>
      ))}
    </>
  ),
}

export const Icon: Story = {
  render: () => (
    <>
      <RemovableTag
        icon={<AcademyIcon role="presentation" />}
        removeButtonProps={{
          ariaLabel: "close",
          onClick: () => alert("Clicked"),
        }}
      >
        AcademyIcon
      </RemovableTag>
      <RemovableTag
        color="yellow"
        icon={<ActionOffIcon role="presentation" />}
        removeButtonProps={{
          ariaLabel: "close",
          onClick: () => alert("Clicked"),
        }}
      >
        ActionOffIcon
      </RemovableTag>
      <RemovableTag
        color="green"
        icon={<AddIcon role="presentation" />}
        removeButtonProps={{
          ariaLabel: "close",
          onClick: () => alert("Clicked"),
        }}
      >
        AddIcon
      </RemovableTag>
    </>
  ),
}

export const ClassNameOverride: Story = {
  args: {
    classNameOverride: "border-red-500 border-solid border-",
  },
}
