import React, { useState } from "react"
import { Meta } from "@storybook/react"
import { userEvent, within, expect, waitFor } from "@storybook/test"
import { StickerSheetStory } from "~storybook/components/StickerSheet"
import { GenericNotification } from "./index"

export default {
  title: "Components/Notifications/Tests",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const [isHidden, setIsHidden] = useState<boolean>(false)

    return (
      <div>
        <span data-testid="hidden-state">{isHidden ? "Hidden" : "Shown"}</span>
        <GenericNotification
          variant="success"
          style="inline"
          title="Success"
          data-testid="generic-notification"
          onHide={() => setIsHidden(true)}
        >
          This is my positive notification
        </GenericNotification>
      </div>
    )
  },
}

export const GenericNotificationTest: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "GenericNotification: closes when close button is clicked and onHide is called",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const element = canvas.getByTestId("generic-notification")
    const hiddenState = canvas.getByTestId("hidden-state")

    await waitFor(() => {
      expect(element).toBeInTheDocument()
      expect(hiddenState).toHaveTextContent("Shown")
    })

    await userEvent.click(canvas.getByTestId("close-button"))

    await waitFor(() => {
      setTimeout(() => {
        expect(hiddenState).toHaveTextContent("Hidden")
        expect(element).not.toBeInTheDocument()
      }, 1000)
    })
  },
}
