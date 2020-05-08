import * as React from "react"
import { Spot } from "../illustration"
const styles = require("./illustration.module.scss")

export default { title: "Illustration, Spot (React)", component: Spot }

export const SpotBase = () => <Spot alt="" name="BlankSurvey" />

export const SpotWithOverrides = () => (
  <Spot
    classNameAndIHaveSpokenToDST={styles.wrapper}
    alt=""
    name="BlankSurvey"
  />
)
