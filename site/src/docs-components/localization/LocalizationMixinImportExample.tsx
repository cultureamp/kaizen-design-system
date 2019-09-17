import * as React from "react"
import Code from "../Code"

class LocalizationMixinImportExample extends React.PureComponent {
  render() {
    return (
      <Code>{`@import '~@cultureamp/kaizen-component-library/styles/type';
@import '~@cultureamp/kaizen-component-library/styles/layout';`}</Code>
    )
  }
}

export default LocalizationMixinImportExample
