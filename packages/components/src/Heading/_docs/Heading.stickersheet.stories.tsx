import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Heading } from "../index"

export default {
  title: "Components/Heading",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const fontColour = isReversed ? "white" : "dark"
    return (
      <>
        <StickerSheet heading="Heading" isReversed={isReversed}>
          <StickerSheet.Body>
            <StickerSheet.Row rowTitle="Display 0">
              <Heading variant="display-0" color={fontColour}>
                Let&apos;s create a better world of work
              </Heading>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Composable header title">
              <Heading variant="composable-header-title" color={fontColour}>
                Use me in the composable header!
              </Heading>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Heading 1">
              <div>
                <Heading variant="heading-1" color={fontColour}>
                  Have the courage to be vulnerable.
                </Heading>
                <Heading variant="heading-1" color={fontColour}>
                  Be authentic, ask for help, be willing to fail, create open
                  environments.
                </Heading>
              </div>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Heading 2">
              <div>
                <Heading variant="heading-2" color={fontColour}>
                  Learn faster through feedback.
                </Heading>
                <Heading variant="heading-2" color={fontColour}>
                  Seek feedback, give feedback responsibly, respond
                  constructively, learn continuously.
                </Heading>
              </div>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Heading 3">
              <div>
                <Heading variant="heading-3" color={fontColour}>
                  Trust people to make decisions.
                </Heading>
                <Heading variant="heading-3" color={fontColour}>
                  Provide constructive feedback, support decisions, be
                  accountable, delegate decisions.
                </Heading>
              </div>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Heading 4">
              <div>
                <Heading variant="heading-4" color={fontColour}>
                  Amplify others.
                </Heading>
                <Heading variant="heading-4" color={fontColour}>
                  Recognise others, succeed together, grow others, create
                  opportunities.
                </Heading>
              </div>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Heading 5">
              <div>
                <Heading variant="heading-5" color={fontColour}>
                  An employee experience that people love.
                </Heading>
                <Heading variant="heading-5" color={fontColour}>
                  Get the employee engagement, performance and development tools
                  and insights you need to build a category-defining culture.
                </Heading>
              </div>
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Heading 6">
              <Heading variant="heading-6" color={fontColour}>
                Discover the power of humanity at work.
              </Heading>
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>
        {!isReversed ? (
          <StickerSheet isReversed={isReversed}>
            <StickerSheet.Header
              hasVerticalHeadings
              headings={[
                "Dark",
                "Dark Reduced Opacity",
                "Positive",
                "Negative",
              ]}
            />
            <StickerSheet.Body>
              <StickerSheet.Row rowTitle="Colours">
                <Heading variant="heading-6" color="dark">
                  Discover the power of humanity at work.
                </Heading>
                <Heading variant="heading-6" color="dark-reduced-opacity">
                  Discover the power of humanity at work.
                </Heading>
                <Heading variant="heading-6" color="positive">
                  Discover the power of humanity at work.
                </Heading>
                <Heading variant="heading-6" color="negative">
                  Discover the power of humanity at work.
                </Heading>
              </StickerSheet.Row>
            </StickerSheet.Body>
          </StickerSheet>
        ) : (
          <StickerSheet isReversed={isReversed}>
            <StickerSheet.Header
              hasVerticalHeadings
              headings={["White", "White Reduced Opacity"]}
            />
            <StickerSheet.Body>
              <StickerSheet.Row rowTitle="Colours">
                <Heading variant="heading-6" color="white">
                  Discover the power of humanity at work.
                </Heading>
                <Heading variant="heading-6" color="white-reduced-opacity">
                  Discover the power of humanity at work.
                </Heading>
              </StickerSheet.Row>
            </StickerSheet.Body>
          </StickerSheet>
        )}
      </>
    )
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
