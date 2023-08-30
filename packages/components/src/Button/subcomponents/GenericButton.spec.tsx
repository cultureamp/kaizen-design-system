import React from "react"
import { render, screen } from "@testing-library/react"
import GenericButton, { ButtonFormAttributes } from "./GenericButton"

describe("<GenericButton />", () => {
  it("renders the custom component element when passed the component prop", () => {
    render(
      <GenericButton
        label="button label"
        component={(props): React.ReactElement => (
          <div>
            <div>I&apos;m custom</div>
            <div>{props.children}</div>
          </div>
        )}
      />
    )
    expect(screen.getByText("I'm custom")).toBeInTheDocument()
    expect(screen.getByText("button label")).toBeInTheDocument()
  })

  it("renders an anchor element when passed the href prop and a falsy disabled prop and a falsy working prop", () => {
    render(<GenericButton label="My link" href="/to-infinity" />)
    expect(screen.getByRole("link", { name: "My link" })).toBeInTheDocument()
  })

  it("does not render an anchor element when passed the href prop but has a truthy disabled prop or a truthy working prop", () => {
    const { rerender } = render(
      <GenericButton label="My link" href="/to-infinity" disabled={true} />
    )

    expect(
      screen.queryByRole("link", { name: "My link" })
    ).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: "My link" })).toBeInTheDocument()

    rerender(
      <GenericButton
        label="My link"
        href="/to-infinity"
        working={true}
        workingLabel="My link working"
      />
    )

    expect(
      screen.queryByRole("link", { name: "My link working" })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "My link working" })
    ).toBeInTheDocument()
  })

  it("renders a button element when not passed a component prop or when not passed an href and a falsy disabled prop and a falsy working prop", () => {
    render(<GenericButton label="My button" />)

    expect(
      screen.getByRole("button", { name: "My button" })
    ).toBeInTheDocument()
  })

  it("passes custom props to a custom component", () => {
    render(
      <GenericButton
        label="button label"
        data-testid="custom-prop"
        component={(props): React.ReactElement => <div {...props} />}
      />
    )
    expect(screen.getByTestId("custom-prop")).toBeInTheDocument()
  })

  it("passes custom props to a link", () => {
    render(
      <GenericButton
        label="button label"
        data-testid="custom-prop"
        href="/and-beyond"
      />
    )
    expect(screen.getByTestId("custom-prop")).toBeInTheDocument()
  })

  it("passes custom props to a button", () => {
    render(<GenericButton label="button label" data-testid="custom-prop" />)
    expect(screen.getByTestId("custom-prop")).toBeInTheDocument()
  })
})

describe("<GenericButton /> with native HTML `form` attributes", () => {
  const buttonFormAttributes = {
    form: "linked-form-id",
    formAction: "/",
    formMethod: "post",
    formEncType: "text/plain",
    formTarget: "_self",
    formNoValidate: false,
  } satisfies ButtonFormAttributes

  it("will pass form props into the button", () => {
    render(
      <GenericButton
        label="submit button"
        data-testid="custom-prop"
        {...buttonFormAttributes}
      />
    )

    expect(
      screen.getByRole("button", { name: "submit button" })
    ).toHaveAttribute("form", buttonFormAttributes.form)
  })
})
