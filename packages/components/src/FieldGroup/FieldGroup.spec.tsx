import React from "react"
import { render } from "@testing-library/react"
import { FieldGroup } from "./FieldGroup"

const defaultFieldGroupProps = {
  id: "someFieldGroupId",
}

describe("<FieldGroup />", () => {
  it("renders an `id` attribute", () => {
    const { getByTestId } = render(
      <FieldGroup data-testid="id--field-group" id={defaultFieldGroupProps.id}>
        <label htmlFor="id--test-field">Label</label>
        <input type="text" id="id--test-field" />
      </FieldGroup>
    )

    expect(getByTestId("id--field-group")).toHaveAttribute(
      "id",
      defaultFieldGroupProps.id
    )
  })
})
