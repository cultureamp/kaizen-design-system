import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import * as ICONS from "~components/Icon"
import { Text } from "~components/Text"
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

export const ApplyColour: Story = {
  render: args => (
    <div className="text-blue-500">
      <AddIcon {...args} />
    </div>
  ),
}

const ReferenceButton = ({
  icon,
  iconName,
}: {
  icon: JSX.Element
  iconName: string
}): JSX.Element => {
  const [copied, setCopied] = useState(false)

  const handleCopy = (): void => {
    navigator.clipboard.writeText(`<${iconName} role="presentation" />`)

    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <li key={iconName}>
      <button type="button" className={styles.button} onClick={handleCopy}>
        {copied ? (
          <span className={styles.copiedTag}>
            <Tag color="green" classNameOverride={styles.tag}>
              Copied!
            </Tag>
          </span>
        ) : (
          <>
            <span className={styles.icon}>{icon}</span>
            <Text variant="small" tag="span">
              {iconName}
            </Text>
          </>
        )}
      </button>
    </li>
  )
}

/**
 * Deprecated icons will still exist in as a React component but have been removed from the assets folder
 * This will remove them from the documentation but give us time to remove them in the next major
 */
const deprecatedList: string[] = ["ThumbsUpIcon", "ThumbsDownIcon"]

export const Reference: Story = {
  render: () => (
    <div className="flex flex-col gap-16">
      <ul className={styles.grid}>
        {Object.keys(ICONS)
          .filter(iconName => !deprecatedList.includes(iconName))
          .map(iconName => {
            const icon = ICONS[iconName as keyof typeof ICONS]({
              role: "presentation",
            })

            return (
              <ReferenceButton key={iconName} icon={icon} iconName={iconName} />
            )
          })}
      </ul>
    </div>
  ),
}
