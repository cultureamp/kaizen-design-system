import { DatePicker } from "@cultureamp/kaizen-component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"

storiesOf("DatePicker", module)
  .add("Single date", () => <DatePicker id="single-date" />)
  .add("Date range", () => <DatePicker id="date-range" allowDateRange={true} />)
