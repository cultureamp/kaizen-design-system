import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { ErrorPage } from "../ErrorPage"

export default {
  title: "Pages/Error Page",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof ErrorPage>

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StickerSheet heading="Error 400" isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          <ErrorPage code="400" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    <StickerSheet heading="Error 401" isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          <ErrorPage code="401" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    <StickerSheet heading="Error 403" isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          <ErrorPage code="403" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    <StickerSheet heading="Error 404" isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          <ErrorPage code="404" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    <StickerSheet heading="Error 422" isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          <ErrorPage code="422" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    <StickerSheet heading="Error 500" isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          <ErrorPage code="500" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    <StickerSheet heading="Error 502" isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          <ErrorPage code="502" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    <StickerSheet heading="Error 503" isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          <ErrorPage code="503" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    <StickerSheet heading="Error 504" isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          <ErrorPage code="504" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    <StickerSheet heading="Custom error" isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          <ErrorPage
            code="400"
            title="This is a 400 custom title"
            message="This is a custom 400 message"
            callToAction={{
              onContactSupport: () => alert("Custom handler"),
              homeHref: "/anewhome",
            }}
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
