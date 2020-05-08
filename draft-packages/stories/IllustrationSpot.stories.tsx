import * as React from "react"
import { Spot } from "../illustration"
import { SpotName } from "../illustration/types"

export default { title: "Illustration, Spot (React)", component: Spot }

export const SpotBase = () => <Spot alt="" name={SpotName.Action} />
