import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterBarButton, FilterBarButtonProps } from "./FilterBarButton"

const user = userEvent.setup()

const onRemove = jest.fn<
  void,
  [React.MouseEvent<HTMLButtonElement, MouseEvent>]
>()

const FilterBarButtonWrapper = (
  props: Partial<FilterBarButtonProps>
): JSX.Element => (
  <FilterBarButton
    label="Coffee"
    isRemovable={false}
    onRemove={onRemove}
    {...props}
  />
)

describe("<FilterBarButton />", () => {
  it("does not show a remove button when it is not removable", () => {
    const { getByRole, queryByRole } = render(<FilterBarButtonWrapper />)
    expect(getByRole("button", { name: "Coffee" })).toBeVisible()
    expect(
      queryByRole("button", { name: "Remove filter - Coffee" })
    ).not.toBeInTheDocument()
  })

  it("shows a remove button when it is removable", async () => {
    const { getByRole } = render(<FilterBarButtonWrapper isRemovable />)
    expect(getByRole("button", { name: "Coffee" })).toBeVisible()

    const removeButton = getByRole("button", { name: "Remove filter - Coffee" })
    expect(removeButton).toBeVisible()

    await user.click(removeButton)

    await waitFor(() => {
      expect(onRemove).toHaveBeenCalled()
    })
  })
})
