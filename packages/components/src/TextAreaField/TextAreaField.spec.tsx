import React from "react"
import { render } from "@testing-library/react"
import { TextAreaField } from "./TextAreaField"

const defaultProps = {
  id: "text-area-field-test",
  labelText: "Label",
}

describe("<TextAreaField />", () => {
  it("renders empty aria-describedby when no description or validation message provided", () => {
    const { getByRole } = render(
      <TextAreaField
        {...defaultProps}
        description={undefined}
        validationMessage={undefined}
      />
    )
    const ariaDescribedBy = getByRole("textbox", {
      description: "",
    })

    expect(ariaDescribedBy).toBeInTheDocument()
  })
})
