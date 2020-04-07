import * as React from "react"
import { Data } from "../components/Data"

export default { title: "Data", component: Data }

export const DataLarge = () => (
  <>
    <Data variant="large" before="$">
      10,000
    </Data>
    <Data variant="large">+1.3</Data>
    <Data variant="large" after="%">
      75
    </Data>
  </>
)

export const DataMedium = () => (
  <>
    <Data variant="medium" before="$">
      10,000
    </Data>
    <Data variant="medium">+1.3</Data>
    <Data variant="medium" after="%">
      75
    </Data>
  </>
)

export const DataSmall = () => (
  <>
    <Data variant="small" before="$">
      10,000
    </Data>
    <Data variant="small">+1.3</Data>
    <Data variant="small" after="%">
      75
    </Data>
  </>
)
