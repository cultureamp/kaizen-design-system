import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TextArea } from "./TextArea"

const user = userEvent.setup()

describe("<TextArea />", () => {
  it("renders a value when component is controlled", () => {
    const { queryByText } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <TextArea value="Some field value" onChange={() => {}} />
    )
    expect(queryByText("Some field value")).toBeTruthy()
  })

  it("renders a default value when component is uncontrolled", () => {
    const { queryByText } = render(<TextArea defaultValue="default value" />)

    expect(queryByText("Some field value")).toBeFalsy()
    expect(queryByText("default value")).toBeTruthy()
  })

  it("calls the `onChange` event when the value is updated", async () => {
    const mockFn = jest.fn()
    const { getByRole } = render(<TextArea onChange={mockFn} />)

    await user.type(getByRole("textbox"), "Hello")

    await waitFor(() => {
      expect(mockFn).toBeCalledTimes(5)
    })
  })
})
