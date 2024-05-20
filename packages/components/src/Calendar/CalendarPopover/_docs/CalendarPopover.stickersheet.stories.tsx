import React from "react"
import { offset, size } from "@floating-ui/react-dom"
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
    <>
      {/* This is the anchor */}
      <div className="bg-orange-300 inline-flex" ref={setReferenceElement}>
        Reference element
      </div>
      <CalendarPopover
        referenceElement={referenceElement}
        floatingOptions={{
          strategy: "absolute",
          placement: "bottom-start",
        }}
        {...otherProps}
      >
        {children}
      </CalendarPopover>
    </>
  )
}

export const StickerSheetResponsive: StickerSheetStory = {
  name: "Sticker Sheet (Responsive)",
  render: () => (
    <>
      <Text variant="intro-lede" classNameOverride="mb-12 ">
        Container has less height than CalendarPopover
      </Text>
      <div className="h-[250px] p-12 bg-purple-100 relative overflow-hidden">
        <ResponsivePopoverExample>
          <CalendarSingle selected={new Date("2022-02-19")} />
        </ResponsivePopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 mt-24">
        Container has less height than minimum CalendarPopover height
      </Text>
      <div className="h-[125px] p-12 bg-purple-200 relative overflow-auto">
        <ResponsivePopoverExample>
          <CalendarSingle selected={new Date("2022-03-19")} />
        </ResponsivePopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 mt-24">
        Container has less width than CalendarPopover
      </Text>
      <div className="h-[450px] w-[275px] p-12 bg-blue-100 relative overflow-hidden">
        <ResponsivePopoverExample>
          <CalendarSingle selected={new Date("2022-03-19")} />
        </ResponsivePopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 mt-24">
        Container has less width and height than CalendarPopover
      </Text>
      <div className="h-[275px] w-[275px] p-12 bg-blue-200 relative overflow-hidden mb-12">
        <ResponsivePopoverExample>
          <CalendarSingle selected={new Date("2022-03-19")} />
        </ResponsivePopoverExample>
      </div>
      <Text variant="intro-lede" classNameOverride="mb-12 mt-24">
        CalendarPopover will position in upper page content if lower content
        space is unavailable
      </Text>
      <div className="w-full overflow-hidden mb-12 p-12  bg-orange-100 relative">
        <div className="h-[375px]  p-12 bg-blue-100 ">Upper page content</div>
        <ResponsivePopoverExample>
          <CalendarSingle selected={new Date("2022-03-19")} />
        </ResponsivePopoverExample>
        <div className="h-[100px] p-12 bg-yellow-100 relative">
          Lower page content
        </div>
      </div>
    </>
  ),
}
