import { Box } from "@kaizen/component-library"
import { Paragraph } from "@kaizen/typography"
import { cleanup, render, waitFor } from "@testing-library/react"
import * as React from "react"
import { BrandMomentError } from "@kaizen/draft-illustration"
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

// Stub video elements for JS-Dom to prevent console errors
// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
window.HTMLMediaElement.prototype.load = () => jest.fn()
// @ts-ignore-next-line
// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
window.HTMLMediaElement.prototype.play = () => jest.fn()
// @ts-ignore-next-line
// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
window.HTMLMediaElement.prototype.pause = () => jest.fn()
// @ts-ignore-next-line
// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
window.HTMLMediaElement.prototype.mute = () => jest.fn()
// this will still throw unstable_flushDiscreteUpdates console error. This more a React issue than a testing issue

describe("<BrandMoment />", () => {
  afterEach(cleanup)
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
