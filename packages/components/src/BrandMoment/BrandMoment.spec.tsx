import * as React from "react"
import { render } from "@testing-library/react"
import { Box } from "@kaizen/component-library"
import { BrandMomentError } from "@kaizen/draft-illustration"
import { Paragraph } from "@kaizen/typography"
import { BrandMoment } from "./BrandMoment"

// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
window.matchMedia = jest.fn().mockImplementation(() => ({
  matches: false,
  media: "",
  onchange: null,
  addListener: jest.fn(),
  addEventListener: jest.fn(),
  removeListener: jest.fn(),
  removeEventListener: jest.fn(),
}))

const mockPlay = jest.fn().mockResolvedValue(undefined)
const mockLoad = jest.fn()
const mockPause = jest.fn()

describe("<BrandMoment />", () => {
  beforeEach(() => {
    window.HTMLMediaElement.prototype.load = mockLoad
    window.HTMLMediaElement.prototype.play = mockPlay
    window.HTMLMediaElement.prototype.pause = mockPause
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
      set: jest.fn(),
    })
  })

  it("matches the snapshot", () => {
    const { container } = render(
      <BrandMoment
        body={
          <>
            <Box mb={1.75}>
              <Paragraph variant="intro-lede">
                This page cannot be found
              </Paragraph>
            </Box>
            <Paragraph color="dark-reduced-opacity" variant="small">
              Error code 404
            </Paragraph>
          </>
        }
        header={<></>}
        illustration={<BrandMomentError isAnimated loop />}
        mood="negative"
        primaryAction={{
          href: "/app/home",
          iconPosition: "end",
          label: "Go to Home",
        }}
        secondaryAction={{
          href: "mailto:info@cultureamp.com",
          label: "Contact support",
        }}
        text={{
          title: "Sorry but we can’t find the page you’re looking for.",
        }}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
