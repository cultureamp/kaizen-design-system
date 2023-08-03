import React from "react"
import { waitFor } from "@testing-library/dom"
import { cleanup, render } from "@testing-library/react"
import { act } from "@testing-library/react-hooks"
import userEvent from "@testing-library/user-event"
import ReactTestUtils from "react-dom/test-utils"
import { Informative } from "@kaizen/draft-illustration"
import GuidanceBlock from "./GuidanceBlock"

const user = userEvent.setup()

// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
window.matchMedia = vi.fn().mockImplementation(() => ({
  matches: false,
  media: "",
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
}))

describe("GuidanceBlock", () => {
  afterEach(cleanup)

  it("is initially visible", () => {
    const { getByText } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
        actions={{
          primary: { label: "Action!", onClick: (): void => alert("tada: 🎉") },
          dismiss: { onClick: (): void => undefined },
        }}
      />
    )

    expect(getByText("This is the call to action title")).toBeVisible()
  })

  it("calls the action function when action button is clicked", async () => {
    const onAction = vi.fn()
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
    actionButton && (await user.click(actionButton))

    await waitFor(() => {
      expect(onAction).toHaveBeenCalledTimes(1)
    })
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
          primary: { label: "Action!", onClick: (): void => undefined },
        }}
      />
    )
    // After clicking, the element should fade out
    const cancelButton = container.querySelector(".cancel")
    cancelButton && (await user.click(cancelButton))

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
          primary: { label: "Action!", onClick: (): void => undefined },
        }}
        persistent
      />
    )

    const cancelButton = container.querySelector(".cancel")
    expect(cancelButton).not.toBeInTheDocument()
  })

  it("displays secondary action when secondary action is supplied", () => {
    const { getByRole } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
        actions={{
          primary: { label: "Action!", onClick: (): void => undefined },
          secondary: {
            label: "Secondary action",
            onClick: (): void => undefined,
          },
        }}
      />
    )

    const secondaryAction = getByRole("button", { name: "Secondary action" })
    expect(secondaryAction).toBeVisible()
  })

  it("has a default title tag of h3", () => {
    const { getByRole } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
        }}
      />
    )
    expect(
      getByRole("heading", {
        level: 3,
        name: "This is the call to action title",
      })
    ).toBeInTheDocument()
  })

  it("can allow the user to override the title tag", () => {
    const { getByRole } = render(
      <GuidanceBlock
        illustration={<Informative alt="" />}
        text={{
          title: "This is the call to action title",
          description:
            "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.",
          titleTag: "h2",
        }}
      />
    )
    expect(
      getByRole("heading", {
        level: 2,
        name: "This is the call to action title",
      })
    ).toBeInTheDocument()
  })
})
