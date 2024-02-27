/* eslint-disable no-console */
/* eslint-disable react/display-name */
import React, { Ref, forwardRef } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "~components/Button"
import { Menu } from "../index"

const meta = {
  title: "Components/Menu/Future",
  component: Menu,
  args: {
    /**
     * @note: Put consistent default values here.
     * If your value differs between stories, add the arg to the story instead.
     */
    triggerButton: forwardRef(
      (props, ref: Ref<HTMLAnchorElement | HTMLButtonElement | undefined>) => (
        <div>
          <Button type="button" ref={ref} label="Open menu" {...props} />
        </div>
      )
    ),
    items: [
      {
        id: "one",
        label: "One",
        onClick: () => console.log("one"),
      },
      {
        id: "two",
        label: "Two",
        onClick: () => console.log("two"),
      },
      {
        id: "three",
        label: "Three",
        onClick: () => console.log("three"),
      },
    ],
  },
} satisfies Meta<typeof Menu>

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

// export const Reversed: Story = {
//   parameters: { backgrounds: { default: "Purple 700" } },
//   args: { isReversed: true },
// }
