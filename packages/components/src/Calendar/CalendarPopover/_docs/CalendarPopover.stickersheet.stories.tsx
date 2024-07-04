import React from "react"
import { offset, size, autoPlacement } from "@floating-ui/react-dom"
import { Meta } from "@storybook/react"
import { Text } from "~components/__content__/v2"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { CalendarRange } from "../../CalendarRange"
import { CalendarSingle } from "../../CalendarSingle"
import { CalendarPopover, CalendarPopoverProps } from "../index"

export default {
  title: "Components/Date controls/Calendars/CalendarPopover",
  parameters: {
    chromatic: {
      disable: false,
    },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within Date(Range)Picker where label is present
            id: "aria-dialog-name",
            enabled: false,
          },
        ],
      },
    },
    viewport: {
      viewports: {
        ViewportFull: {
          name: "Viewport full size",
          styles: {
            width: "1024px",
            height: "1500px",
          },
        },
      },
      defaultViewport: "ViewportFull",
    },
  },
} satisfies Meta

const CalendarPopoverExample = ({
  children,
  rowHeight = 300,
  /** this is here as a convenient way to test overlap */
  strategy = "fixed",
}: Partial<
  CalendarPopoverProps & {
    rowHeight: number
    /** this is here as a convenient way to test overlap */
    strategy?: "absolute" | "fixed"
  }
>): JSX.Element => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null)

  return (
    <>
      <div
        className="bg-orange-300 inline-block"
        ref={setReferenceElement}
        style={{ marginBottom: `${rowHeight}px` }}
      >
        Reference element
      </div>
      <CalendarPopover
        referenceElement={referenceElement}
        floatingOptions={{
          strategy,
          middleware: [
            offset(15),
            size({
              apply({ availableHeight, availableWidth, elements }) {
                Object.assign(elements.floating.style, {
                  maxHeight: `${Math.max(availableHeight - 25, 155)}px`,
                  maxWidth: `${availableWidth}px`,
                })
              },
            }),
            autoPlacement({
              // This needs to be here for testing purposes as the default behaviour
              // will cause overlapping calendars in the table
              allowedPlacements: ["bottom-start"],
            }),
          ],
        }}
      >
        {children}
      </CalendarPopover>
    </>
  )
}

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet isReversed={isReversed}>
        <StickerSheet.Row rowTitle="Default">
          <CalendarPopoverExample rowHeight={102}>
            CalendarPopover
            <br />
            Content goes in here.
          </CalendarPopoverExample>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="CalendarSingle">
          <CalendarPopoverExample rowHeight={350}>
            <CalendarSingle selected={new Date("2022-02-19")} />
          </CalendarPopoverExample>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="CalendarRange">
          <CalendarPopoverExample rowHeight={350}>
            <CalendarRange
              selected={{
                from: new Date("2022-02-19"),
                to: new Date("2022-03-04"),
              }}
            />
          </CalendarPopoverExample>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="CalendarRange with divider">
          <CalendarPopoverExample rowHeight={350}>
            <CalendarRange
              data-testid="sb-final-calendar"
              selected={{
                from: new Date("2022-02-19"),
                to: new Date("2022-03-04"),
              }}
              hasDivider
            />
          </CalendarPopoverExample>
        </StickerSheet.Row>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}

export const StickerSheetResponsive: StickerSheetStory = {
  name: "Sticker Sheet (Responsive)",
  render: () => (
    <>
      <Text variant="intro-lede" classNameOverride="mb-12 ">
        CalendarSingle scaled to availableHeight
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 overflow-hidden relative">
        <CalendarPopoverExample strategy="absolute">
          <CalendarSingle selected={new Date("2022-02-19")} />
        </CalendarPopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 ">
        CalendarRange scaled to availableHeight
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 overflow-hidden relative">
        <CalendarPopoverExample strategy="absolute">
          <CalendarRange
            selected={{
              from: new Date("2022-02-19"),
              to: new Date("2022-03-04"),
            }}
            hasDivider
          />
        </CalendarPopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 mt-24">
        CalendarSingle scaled to availableWidth
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 overflow-hidden relative w-[250px]">
        <CalendarPopoverExample strategy="absolute">
          <CalendarSingle selected={new Date("2022-03-19")} />
        </CalendarPopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 mt-24">
        CalendarRanger scaled to availableWidth
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 overflow-hidden relative w-[250px]">
        <CalendarPopoverExample strategy="absolute">
          <CalendarRange
            data-testid="sb-final-calendar"
            selected={{
              from: new Date("2022-02-19"),
              to: new Date("2022-03-04"),
            }}
            hasDivider
          />
        </CalendarPopoverExample>
      </div>
    </>
  ),
}
