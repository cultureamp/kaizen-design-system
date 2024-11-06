import { Meta, StoryObj } from "@storybook/react"
import { userEvent, waitFor, fn, expect } from "@storybook/test"
import { LinkModal } from "./LinkModal"

const meta = {
  title: "Components/RichTextEditor/Subcomponents/LinkModal/Tests",
  component: LinkModal,
  args: {
    onSubmit: fn(),
    onDismiss: fn(),
    onAfterLeave: fn(),
    isOpen: true,
  },
} satisfies Meta<typeof LinkModal>

export default meta

type Story = StoryObj<typeof meta>

export const InvalidLink: Story = {
  parameters: {
    chromatic: { disable: false },
  },
  args: {
    defaultHref: "google.com",
  },
  play: async () => {
    await new Promise(resolve => setTimeout(resolve, 500))
    await userEvent.keyboard("{Tab}{Enter}")

    await waitFor(() => {
      expect(document.activeElement).toHaveAccessibleDescription(
        /Empty or invalid link\. Links must start with http or https/,
      )
    })
  },
}
