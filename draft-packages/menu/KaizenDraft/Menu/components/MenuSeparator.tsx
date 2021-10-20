import { Divider } from "@kaizen/draft-divider"
import * as React from "react"
import { withDeprecatedComponent } from "@kaizen/react-deprecate-warning"

/**
 * This is now built into the menu and doesn't need to be used.
 * @deprecated
 */

const MenuSeparator = () => <Divider variant="menuSeparator" />
MenuSeparator.displayName = "MenuSeparator"

export default withDeprecatedComponent(MenuSeparator, {
  warning: "MenuSeparator is deprecated. It's now built into Menu.",
})
