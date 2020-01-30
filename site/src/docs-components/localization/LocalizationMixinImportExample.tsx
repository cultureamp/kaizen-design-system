import * as React from "react"
import Code from "../Code"

class LocalizationMixinImportExample extends React.PureComponent {
  render() {
    return (
      <Code language="scss">{`@import '~@kaizen/component-library/styles/type';
@import '~@kaizen/component-library/styles/layout';`}</Code>
    )
  }
}

export default LocalizationMixinImportExample
