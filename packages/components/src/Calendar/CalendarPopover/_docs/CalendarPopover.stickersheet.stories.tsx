import React from 'react'
import { autoPlacement, offset, size } from '@floating-ui/react-dom'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { CalendarRange } from '../../CalendarRange'
import { CalendarSingle } from '../../CalendarSingle'
import { CalendarPopover, type CalendarPopoverProps } from '../index'

export default {
  title: 'Components/Date controls/Calendars/CalendarPopover',
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
            id: 'aria-dialog-name',
            enabled: false,
          },
        ],
      },
    },
    viewport: {
      viewports: {
        ViewportFull: {
          name: 'Viewport full size',
          styles: {
            width: '1024px',
            height: '1500px',
          },
        },
      },
      defaultViewport: 'ViewportFull',
    },
  },
} satisfies Meta

const CalendarPopoverExample = ({
  children,
  rowHeight = 300,
  /** this is here as a convenient way to test overlap */
  strategy = 'fixed',
}: Partial<
  CalendarPopoverProps & {
    rowHeight: number
    /** this is here as a convenient way to test overlap */
    strategy?: 'absolute' | 'fixed'
  }
>): JSX.Element => {
  const [referenceElement, setReferenceElement] = React.useState<HTMLDivElement | null>(null)

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
              allowedPlacements: ['bottom-start'],
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
        <StickerSheet.Row header="Default">
          <CalendarPopoverExample rowHeight={102}>
            CalendarPopover
            <br />
            Content goes in here.
          </CalendarPopoverExample>
        </StickerSheet.Row>

        <StickerSheet.Row header="CalendarSingle">
          <CalendarPopoverExample rowHeight={350}>
            <CalendarSingle selected={new Date('2022-02-19')} />
          </CalendarPopoverExample>
        </StickerSheet.Row>

        <StickerSheet.Row header="CalendarRange">
          <CalendarPopoverExample rowHeight={350}>
            <CalendarRange
              selected={{
                from: new Date('2022-02-19'),
                to: new Date('2022-03-04'),
              }}
            />
          </CalendarPopoverExample>
        </StickerSheet.Row>

        <StickerSheet.Row header="CalendarRange with divider">
          <CalendarPopoverExample rowHeight={350}>
            <CalendarRange
              data-testid="sb-final-calendar"
              selected={{
                from: new Date('2022-02-19'),
                to: new Date('2022-03-04'),
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
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}
