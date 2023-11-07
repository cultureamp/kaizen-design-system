import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import * as ICONS from "~components/Icon"
import { SearchField } from "~components/SearchField"
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
  )
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
}

export const Reference: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState<string>("")

    return (
      <div className="flex flex-col gap-16">
        <SearchField
          labelText="Find icon by name"
          onChange={event => {
            setSearchTerm(event.target.value)
          }}
        />
        <ul className={styles.grid}>
          {Object.keys(ICONS)
            .filter(iconName => {
              const term = new RegExp(searchTerm, "i")
              return iconName.match(term)
            })
            .map(iconName => {
              const icon = ICONS[iconName as keyof typeof ICONS]({
                role: "presentation",
              })

              return (
                <ReferenceButton
                  key={iconName}
                  icon={icon}
                  iconName={iconName}
                />
              )
            })}
        </ul>
      </div>
    )
  },
}
