import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "~components/Button"
import { ChevronRightIcon } from "~components/Icons"
import { EmptyState } from "../index"
import styles from "./EmptyState.stories.module.scss"

const meta = {
  title: "Components/EmptyState",
  component: EmptyState,
  argTypes: {
    children: {
      table: { type: { summary: "React.ReactNode" } },
      control: { type: "radio" },
      options: ["Default (no children)", "Button (chevron right)"],
      mapping: {
        "Default (no children)": undefined,
        "Button (chevron right)": (
          <div className={styles.buttonContainer}>
            <Button
              label="Label"
              icon={<ChevronRightIcon role="presentation" />}
              iconPosition="end"
            />
          </div>
        ),
      },
    },
  },
  args: {
    headingProps: {
      variant: "heading-3",
      children: "Empty state title",
    },
    bodyText:
      "If providing further actions, include a link to an action or use a Default or Primary action.",
  },
} satisfies Meta<typeof EmptyState>

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
