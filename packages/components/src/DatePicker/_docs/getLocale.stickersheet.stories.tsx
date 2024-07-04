import React from "react"
import { LOCALE_REGIONS } from "@cultureamp/i18n-react-intl"
import { Meta } from "@storybook/react"
import { CalendarSingle } from "~components/Calendar"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { getLocale } from "../utils/getLocale"

export default {
  title: "Components/Date controls/DatePicker/Tests",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

export const UtilGetLocale: StickerSheetStory = {
  tags: ["skip-test"],
  name: "Util - getLocale",
  render: () => {
    const locales = [
      ...Object.keys(LOCALE_REGIONS),
      // The following are for murmur
      "kr",
      "no",
      // Old API values
      "en-AU",
      "en-US",
    ]

    return (
      <StickerSheet heading="Util - getLocale">
        <StickerSheet.Body>
          {locales.map(locale => (
            <StickerSheet.Row key={locale} rowTitle={locale}>
              <CalendarSingle
                defaultMonth={new Date("2021-09-05")}
                locale={getLocale(locale)}
              />
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>
    )
  },
}
