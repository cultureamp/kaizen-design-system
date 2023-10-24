import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { GenericTile } from "./GenericTile"

const user = userEvent.setup()

describe("<GenericTile />", () => {
  it("Flips", async () => {
    render(
      <GenericTile
        mood="positive"
        title="Title"
        metadata="metadata"
        information="Back info"
        footer={<>Footer</>}
      />
    )
    const innerButton = screen.getByRole("button", { name: "Information" })

    await user.click(innerButton)

    await waitFor(() => {
      expect(screen.getByText("Back info")).toBeVisible()
    })

    await user.click(innerButton)

    await waitFor(() => {
      expect(screen.getByText("Title")).toBeVisible()
    })
  })
})
