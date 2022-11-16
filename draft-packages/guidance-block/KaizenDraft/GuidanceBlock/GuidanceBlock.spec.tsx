import * as React from "react"
import { fireEvent, waitFor } from "@testing-library/dom"
import { cleanup, render } from "@testing-library/react"
import * as ReactTestUtils from "react-dom/test-utils"
import { act } from "react-test-renderer"
import { Informative } from "@kaizen/draft-illustration"
import GuidanceBlock from "./GuidanceBlock"

// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
window.matchMedia = jest.fn().mockImplementation(() => ({
  matches: false,
  media: "",
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

describe("GuidanceBlock", () => {
  afterEach(cleanup)

  it("is initially visible", () => {
    const { container } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
        actions={{
          primary: { label: "Action!", onClick: () => alert("tada: 🎉") },
          dismiss: { onClick: () => null },
        }}
      />
    )

    expect(container.querySelector(".hidden")).toBeFalsy()
  })

  it("hides the notification when the cancel button is clicked and calls the on dismiss function", () => {
    const onDismiss = jest.fn()
    const { container } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
        actions={{
          primary: { label: "Action!", onClick: () => alert("tada: 🎉") },
          dismiss: { onClick: onDismiss },
        }}
      />
    )

    // The element should start in a "hidden" state
    expect(container.querySelector(".hidden")).toBeFalsy()

    // After clicking, the element should fade out
    const cancelButton = container.querySelector(".cancel")
    cancelButton && fireEvent.click(cancelButton)

    expect(container.querySelector(".hidden")).toBeTruthy()
    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it("calls the action function when action button is clicked", async () => {
    const onAction = jest.fn()
    const { container } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
        actions={{
          primary: { label: "Action!", onClick: onAction },
        }}
      />
    )
    const actionButton = container.querySelector("button")
    actionButton && fireEvent.click(actionButton)
    expect(onAction).toHaveBeenCalledTimes(1)
  })

  it("removes the banner element when the animation ends", async () => {
    const { container } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
        actions={{
          primary: { label: "Action!", onClick: () => null },
        }}
      />
    )
    // After clicking, the element should fade out
    const cancelButton = container.querySelector(".cancel")
    cancelButton && fireEvent.click(cancelButton)
    const banner = container.querySelector(".banner")
    // Simulate fade out
    act(() => {
      banner &&
        ReactTestUtils.Simulate.transitionEnd(banner, {
          propertyName: "margin-top",
        } as any)
    })

    const bannerAfter = container.querySelector(".banner")
    await waitFor(() => expect(bannerAfter).not.toBeInTheDocument())
  })

  it("has no cancel button when guidance block is persistent", () => {
    const { container } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
        actions={{
          primary: { label: "Action!", onClick: () => null },
        }}
        persistent
      />
    )

    const cancelButton = container.querySelector(".cancel")
    expect(cancelButton).not.toBeInTheDocument()
  })

  it("displays secondary action when secondary action is supplied", () => {
    const { container } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
        actions={{
          primary: { label: "Action!", onClick: () => null },
          secondary: { label: "Secondary action", onClick: () => null },
        }}
      />
    )

    const secondaryAction = container.querySelector(".secondaryAction")
    expect(secondaryAction).not.toBeNull()
  })
})
