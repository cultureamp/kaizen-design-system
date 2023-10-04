import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CheckboxProps } from "./Checkbox"
import { Checkbox } from "."

const user = userEvent.setup()

const defaultProps = {
  id: "someCheckboxId",
  checkedStatus: "off",
  disabled: false,
  name: "someCheckboxName",
  onCheck: jest.fn(),
} satisfies CheckboxProps

describe("<Checkbox />", () => {
  it("calls the `onCheck` event when clicked", async () => {
    const { getByTestId } = render(
      <Checkbox {...defaultProps} data-testid="checkbox" />
    )
    const checkbox = getByTestId("checkbox")

    await user.click(checkbox)
    await waitFor(() => {
      expect(defaultProps.onCheck).toBeCalledTimes(1)
    })
  })
})
