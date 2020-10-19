import * as React from "react"

import { Icon } from "@kaizen/component-library"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"

export default {
  title: "Icon (React)",
  parameters: {
    info: {
      text: `
        import { Icon } from "@kaizen/component-library";
      `,
    },
  },
}

export const MeaningfulKaizenSiteDemo = () => (
  // the wrapper with the fixed with is to solve a problem when this is used
  // as a site demo: the iframe was getting a height of 0px in Firefox
  <div style={{ width: "20px" }}>
    <Icon
      icon={configureIcon}
      title="Warning"
      desc="Aliens approaching!"
      role="img"
      inheritSize={true}
    />
  </div>
)

MeaningfulKaizenSiteDemo.storyName = "Meaningful (Kaizen Site Demo)"

export const Presentational = () => (
  <Icon icon={configureIcon} role="presentation" />
)

export const InheritSize = () => (
  <div style={{ width: "100%" }}>
    <Icon icon={configureIcon} role="presentation" inheritSize={true} />
  </div>
)
