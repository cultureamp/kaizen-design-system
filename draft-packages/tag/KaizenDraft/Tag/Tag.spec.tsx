import React from "react"
import { render } from "@testing-library/react"
import { Avatar } from "@kaizen/draft-avatar"

import { TagProps } from "./Tag"
import { Tag } from "."

const renderTag = (props: TagProps): ReturnType<typeof render> => {
  const mergedTagProps = { ...props }

  return render(<Tag {...mergedTagProps}>Default</Tag>)
}

describe("<Tag />", () => {
  describe("default", () => {
    it("renders a default Tag variant with default styles", () => {
      const { container } = renderTag({
        children: "Label",
      })
      expect(container.querySelector(".default")).toBeTruthy()
      expect(container.querySelector(".medium")).toBeTruthy()
    })
  })

  describe("with different variants", () => {
    it("renders a sentimentPositive Tag", () => {
      const { container } = renderTag({
        variant: "sentimentPositive",
        children: "Label",
      })

      expect(container.querySelector(".sentimentPositive")).toBeTruthy()
    })
    it("renders a sentimentNeutral Tag", () => {
      const { container } = renderTag({
        variant: "sentimentNeutral",
        children: "Label",
      })
      expect(container.querySelector(".sentimentNeutral")).toBeTruthy()
    })

    it("renders a sentimentNegative tag", () => {
      const { container } = renderTag({
        variant: "sentimentNegative",
        children: "Label",
      })
      expect(container.querySelector(".sentimentNegative")).toBeTruthy()
    })
    it("renders a sentimentNone Tag", () => {
      const { container } = renderTag({
        variant: "sentimentNone",
        children: "Label",
      })
      expect(container.querySelector(".sentimentNone")).toBeTruthy()
    })

    it("renders a validationPositive Tag", () => {
      const { container } = renderTag({
        variant: "validationPositive",
        children: "Label",
      })

      expect(container.querySelector(".validationPositive")).toBeTruthy()
    })

    it("renders a validationInformative Tag", () => {
      const { container } = renderTag({
        variant: "validationInformative",
        children: "Label",
      })

      expect(container.querySelector(".validationInformative")).toBeTruthy()
    })

    it("renders a validationNegative Tag", () => {
      const { container } = renderTag({
        variant: "validationNegative",
        children: "Label",
      })

      expect(container.querySelector(".validationNegative")).toBeTruthy()
    })

    it("renders a validationCautionary Tag", () => {
      const { container } = renderTag({
        variant: "validationCautionary",
        children: "Label",
      })

      expect(container.querySelector(".validationCautionary")).toBeTruthy()
    })

    it("renders a statusLive Tag", () => {
      const { container } = renderTag({
        variant: "statusLive",
        children: "Label",
      })

      expect(container.querySelector(".statusLive")).toBeTruthy()
    })

    it("renders a statusDraft Tag", () => {
      const { container } = renderTag({
        variant: "statusDraft",
        children: "Label",
      })

      expect(container.querySelector(".statusDraft")).toBeTruthy()
    })

    it("renders a statusClosed Tag", () => {
      const { container } = renderTag({
        variant: "statusClosed",
        children: "Label",
      })

      expect(container.querySelector(".statusClosed")).toBeTruthy()
    })

    it("renders a statusAction Tag", () => {
      const { container } = renderTag({
        variant: "statusAction",
        children: "Label",
      })

      expect(container.querySelector(".statusAction")).toBeTruthy()
    })

    it("renders a Tag with a custom icon", () => {
      const { container } = renderTag({
        variant: "customIcon",
        children: "Label",
        customIcon: "newIcon",
      })

      expect(container.querySelector(".customIcon")).toBeTruthy()
      expect(container.querySelector(".newIcon")).toBeTruthy()
    })

    it("renders a profile Tag with a Avatar component provided", () => {
      const { container } = render(
        <Tag
          variant="profile"
          avatar={
            <Avatar
              size="small"
              avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
              fullName="Jane Doe"
            />
          }
          size="medium"
        >
          Label
        </Tag>
      )

      expect(container.querySelector(".avatarImage")).toBeTruthy()
    })

    it("renders a profile Tag and default image when empty avatar not provided", () => {
      const { container } = render(
        <Tag variant="profile" avatar={{}} size="medium">
          Label
        </Tag>
      )

      expect(container.querySelector(".fallbackIcon")).toBeTruthy()
    })
  })
})
