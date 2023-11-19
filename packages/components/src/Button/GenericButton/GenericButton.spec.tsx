import React from "react"
import { render, screen } from "@testing-library/react"
import { GenericButton, ButtonFormAttributes } from "./GenericButton"

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

describe("<GenericButton /> `working` accessible states", () => {
  it("renders a button without aria-live by default", () => {
    const { getByTestId } = render(
      <GenericButton
        data-testid="id--generic-test"
        id="id--button"
        label="button label"
      />
    )

    const button = getByTestId("id--generic-test")
    // The id is passed to the element not the container so we have to get its parent
    const buttonContainer = button.parentElement

    expect(buttonContainer).not.toHaveAttribute("aria-live", "")
  })

  it("renders a button with aria-live if working label if provided", () => {
    const { getByTestId } = render(
      <GenericButton
        data-testid="id--generic-test"
        id="id--button"
        label="button label"
        workingLabel="Loading"
      />
    )
    const button = getByTestId("id--generic-test")
    const buttonContainer = button.parentElement

    expect(buttonContainer).toHaveAttribute("aria-live", "polite")
  })

  it("renders a link button with aria-live if working label if provided", () => {
    const { getByTestId } = render(
      <GenericButton
        data-testid="id--generic-test"
        id="id--button"
        label="button label"
        workingLabel="Loading"
        href="/"
      />
    )
    const button = getByTestId("id--generic-test")
    const buttonContainer = button.parentElement

    expect(buttonContainer).toHaveAttribute("aria-live", "polite")
  })

  it("renders a custom button with aria-live if working label if provided", () => {
    const { getByTestId } = render(
      <GenericButton
        data-testid="id--generic-test"
        id="id--button"
        label="button label"
        workingLabel="Loading"
        component={props => (
          <button type="button" {...props}>
            Custom button
          </button>
        )}
      />
    )
    const button = getByTestId("id--generic-test")
    const buttonContainer = button.parentElement

    expect(buttonContainer).toHaveAttribute("aria-live", "polite")
  })
})
