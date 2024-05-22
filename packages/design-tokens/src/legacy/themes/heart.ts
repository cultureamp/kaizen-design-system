import { tokens } from "../../js/tokens"
import { Theme } from "../types"

/**
 * @deprecated
 * - Not needed if you are using `KaizenProvider` from `@kaizen/components` or `defaultPreset` from next-services.
 * - If you require direct usage of these tokens in js you can `import { tokens } from "@kaizen/design-tokens/js"`
 */
export const heartTheme: Theme = {
  themeKey: "heart",
  ...tokens,
}
