import { cleanup, render } from "@testing-library/react"
import { fireEvent } from "@testing-library/dom"
import * as React from "react"
import * as ReactTestUtils from "react-dom/test-utils"
import { Informative } from "@kaizen/draft-illustration"
import GuidanceBlock from "./GuidanceBlock"

window.matchMedia = jest.fn().mockImplementation(() => ({
  matches: false,
  media: "",
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

describe("GuidanceBlock", () => {
  afterEach(cleanup)

  test("starts visible", () => {
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

  test("The cancel button hides the notification and calls the on dismiss function", () => {
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

  test("The action button calls the action function", () => {
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

  test("when animation ends the element is removed", () => {
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
    banner &&
      ReactTestUtils.Simulate.transitionEnd(banner, {
        propertyName: "margin-top",
      } as any)

    const bannerAfter = container.querySelector(".banner")
    expect(bannerAfter).toBeNull()
  })

  test("when guidance block is persistent", () => {
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
    expect(cancelButton).toBeNull()
  })

  test("when secondary action is supplied", () => {
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
