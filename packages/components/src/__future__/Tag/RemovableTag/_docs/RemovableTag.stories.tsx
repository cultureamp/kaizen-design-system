import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AcademyIcon, ActionOffIcon, AddIcon, TagIcon } from "~components/Icon"
// import { TagColorKeys } from "../../Tag/types"
import { RemovableTag } from "../RemovableTag"

const meta = {
  title: "Components/Tag/Future/RemovableTag",
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
  // This can be added when we add Icon support
  //argTypes: {
  //icon: {
  //options: ["AcademyIcon", "ActionOffIcon", "AddIcon", "TagIcon"],
  //control: { type: "radio" },
  //mapping: {
  //AcademyIcon: <AcademyIcon role="presentation" />,
  //ActionOffIcon: <ActionOffIcon role="presentation" />,
  //AddIcon: <AddIcon role="presentation" />,
  //TagIcon: <TagIcon role="presentation" />,
  //},
  //},
  //},
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

// Colors and Icons may be added in at a later time.
//
// export const Color: Story = {
// render: () => (
// <>
// {TagColorKeys.map(color => (
// <RemovableTag
// color={color}
// icon={<TagIcon role="presentation" />}
// key={color}
// removeButtonProps={{
// ariaLabel: "close",
// onClick: () => alert("Clicked"),
// }}
// >
// {color}
// </RemovableTag>
// ))}
// </>
// ),
// parameters: {
// docs: {
// source: { type: "dynamic" },
// },
// },
// }
//export const Icon: Story = {
//render: () => (
//<>
//<RemovableTag
//icon={<AcademyIcon role="presentation" />}
//removeButtonProps={{
//ariaLabel: "close",
//onClick: () => alert("Clicked"),
//}}
//>
//AcademyIcon
//</RemovableTag>
//<RemovableTag
//// color="yellow"
//icon={<ActionOffIcon role="presentation" />}
//removeButtonProps={{
//ariaLabel: "close",
//onClick: () => alert("Clicked"),
//}}
//>
//ActionOffIcon
//</RemovableTag>
//<RemovableTag
//// color="green"
//icon={<AddIcon role="presentation" />}
//removeButtonProps={{
//ariaLabel: "close",
//onClick: () => alert("Clicked"),
//}}
//>
//AddIcon
//</RemovableTag>
//</>
//),
//}

export const ClassNameOverride: Story = {
  args: {
    classNameOverride: "border-red-500 border-solid border-",
  },
}
