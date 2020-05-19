import * as React from "react"
import { EmptyStatesNeutral, InformationReportOwner } from "../illustration"
const styles = require("./illustration.module.scss")

export default {
  title: "Illustration, Spot (React)",
  component: InformationReportOwner,
}

export const SpotBase = () => <InformationReportOwner alt="" />

export const SpotWithOverrides = () => (
  <EmptyStatesNeutral classNameAndIHaveSpokenToDST={styles.wrapper} alt="" />
)
