// TODO: Resolve design token properly rather than use default
import { defaultTheme } from "@kaizen/design-tokens"
import * as React from "react"
import ZenColorGroup from "./ZenColorGroup"

const ZenYuzu = () => <ZenColorGroup colors={defaultTheme.color.yuzu} />

export default ZenYuzu
