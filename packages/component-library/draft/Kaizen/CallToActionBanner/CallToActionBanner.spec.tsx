import {
  cleanup,
  fireEvent,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import * as React from "react"
import * as ReactTestUtils from "react-dom/test-utils"
import CallToActionBanner from "./CallToActionBanner"

describe("CallToActionBanner", () => {
  afterEach(cleanup)

  test("starts visible", () => {
    const { container } = render(
      <CallToActionBanner
        img={{ src: "image/path.png", alt: "Call to action banner" }}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
        button={{
          label: "Action!",
          onClick: () => {
            alert("tada: 🎉")
          },
        }}
        onDismiss={() => {
          /* do nothing */
        }}
      />
    )

    expect(container.querySelector(".hidden")).toBeFalsy()
  })

  test("The cancel button hides the notification and calls the on dismiss function", () => {
    const onDismiss = jest.fn()
    const { container } = render(
      <CallToActionBanner
        img={{ src: "image/path.png", alt: "Call to action banner" }}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
        button={{
          label: "Action!",
          onClick: () => {
            /* do nothing */
          },
        }}
        onDismiss={onDismiss}
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
      <CallToActionBanner
        img={{ src: "image/path.png", alt: "Call to action banner" }}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
        button={{
          label: "Action!",
          onClick: onAction,
        }}
        onDismiss={() => {
          /* do nothing */
        }}
      />
    )
    const actionButton = container.querySelector(".primary")
    actionButton && fireEvent.click(actionButton)
    expect(onAction).toHaveBeenCalledTimes(1)
  })

  test("when animation ends the element is removed", () => {
    const { container } = render(
      <CallToActionBanner
        img={{ src: "image/path.png", alt: "Call to action banner" }}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
        button={{
          label: "Action!",
          onClick: () => {
            /* do nothing */
          },
        }}
        onDismiss={() => {
          /* do nothing */
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
})
