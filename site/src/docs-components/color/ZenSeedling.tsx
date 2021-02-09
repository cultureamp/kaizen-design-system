import { defaultTheme } from "@kaizen/design-tokens"
import * as React from "react"
import ZenColorGroup from "./ZenColorGroup"

// TODO: Resolve design token properly rather than use default
const ZenSeedling = () => <ZenColorGroup colors={defaultTheme.color.seedling} />

export default ZenSeedling
