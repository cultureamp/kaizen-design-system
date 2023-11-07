import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import * as ICONS from "~components/Icon"
import { Tag } from "~components/__future__/Tag"
import { AddIcon } from "../index"
import styles from "./icon.stories.scss"

const meta = {
  title: "Components/Icons",
  component: AddIcon,
  args: {
    role: "presentation",
  },
  argTypes: {
    role: {
      options: ["presentation", "img"],
      control: { type: "radio" },
    },
    "aria-label": { control: "text", if: { arg: "role", eq: "img" } },
  },
} satisfies Meta<typeof AddIcon>

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

export const Reference: Story = {
  render: () => (
    <ul className={styles.grid}>
      {Object.keys(ICONS).map(iconName => {
        const icon = ICONS[iconName as keyof typeof ICONS]({
          role: "presentation",
        })

        const [copied, setCopied] = useState(false)

        const handleCopy = (): void => {
          navigator.clipboard.writeText(`<${iconName} role="presentation" />`)

          setCopied(true)
          setTimeout(() => setCopied(false), 1000)
        }

        return (
          <li key={iconName}>
            <button
              type="button"
              className={styles.button}
              onClick={handleCopy}
            >
              {copied ? (
                <Tag color="green" classNameOverride={styles.tag}>
                  Copied!
                </Tag>
              ) : (
                <>
                  {icon} {iconName}
                </>
              )}
            </button>
          </li>
        )
      })}
    </ul>
  ),
}
