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
    const [hiddenState, setHiddenState] = useState<boolean>(false)

    return (
      <div>
        {hiddenState && <span data-testid="hidden">Hidden!</span>}
        <GenericNotification
          variant="success"
          style="inline"
          title="Success"
          data-testid="generic-notification"
          onHide={() => setHiddenState(true)}
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

    await waitFor(() => {
      expect(element).toBeInTheDocument()
    })

    const closeButton = canvas.getByTestId("close-button")
    await userEvent.click(closeButton)

    await waitFor(() => {
      expect(canvas.getByTestId("hidden")).toBeInTheDocument()
      expect(element).not.toBeInTheDocument()
    })
  },
}
