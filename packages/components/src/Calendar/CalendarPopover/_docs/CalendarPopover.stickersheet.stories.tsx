import React from "react"
import { offset, size, autoPlacement } from "@floating-ui/react-dom"
import { Meta } from "@storybook/react"
import { Text } from "~components/Text"
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
    chromatic: { disable: false },
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
  },
} satisfies Meta

const CalendarPopoverExample = ({
  children,
  rowHeight = 300,
}: Partial<CalendarPopoverProps & { rowHeight: number }>): JSX.Element => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null)

  return (
    <>
      <div
        ref={setReferenceElement}
        style={{ paddingBottom: "24px", marginTop: `${rowHeight}px` }}
      />
      <CalendarPopover
        referenceElement={referenceElement}
        floatingOptions={{
          middleware: [
            offset({
              crossAxis: 24,
            }),
          ],
          placement: "top-start",
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
          <CalendarPopoverExample>
            <CalendarSingle selected={new Date("2022-02-19")} />
          </CalendarPopoverExample>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="CalendarRange">
          <CalendarPopoverExample>
            <CalendarRange
              selected={{
                from: new Date("2022-02-19"),
                to: new Date("2022-03-04"),
              }}
            />
          </CalendarPopoverExample>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="CalendarRange with divider">
          <CalendarPopoverExample>
            <CalendarRange
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

const ResponsivePopoverExample = ({
  children,
  ...otherProps
}: Partial<CalendarPopoverProps>): JSX.Element => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null)

  return (
    <div className=" relative">
      {/* This is the anchor */}
      <div className="bg-orange-300 inline-flex" ref={setReferenceElement}>
        Reference element
      </div>
      <CalendarPopover
        referenceElement={referenceElement}
        floatingOptions={{
          strategy: "absolute",
          placement: "bottom-start",
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
              allowedPlacements: ["bottom-start"],
            }),
          ],
        }}
        {...otherProps}
      >
        {children}
      </CalendarPopover>
    </div>
  )
}

export const StickerSheetResponsive: StickerSheetStory = {
  name: "Sticker Sheet (Responsive)",
  render: () => (
    <>
      <Text variant="intro-lede" classNameOverride="mb-12 ">
        CalendarSingle scaled to availableHeight
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 overflow-hidden">
        <ResponsivePopoverExample>
          <CalendarSingle selected={new Date("2022-02-19")} />
        </ResponsivePopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 ">
        CalendarRange scaled to availableHeight
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 overflow-hidden">
        <ResponsivePopoverExample>
          <CalendarRange
            selected={{
              from: new Date("2022-02-19"),
              to: new Date("2022-03-04"),
            }}
            hasDivider
          />
        </ResponsivePopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 mt-24">
        CalendarSingle scaled to availableWidth
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 overflow-hidden w-[250px]">
        <ResponsivePopoverExample>
          <CalendarSingle selected={new Date("2022-03-19")} />
        </ResponsivePopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 mt-24">
        CalendarRanger scaled to availableWidth
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 overflow-hidden w-[250px]">
        <ResponsivePopoverExample>
          <CalendarRange
            selected={{
              from: new Date("2022-02-19"),
              to: new Date("2022-03-04"),
            }}
            hasDivider
          />
        </ResponsivePopoverExample>
      </div>
    </>
  ),
}
