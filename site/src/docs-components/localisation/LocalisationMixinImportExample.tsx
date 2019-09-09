import React from "react"
import Code from "../../../../components/Code"

class LocalisationMixinImportExample extends React.PureComponent {
  render() {
    return (
      <Code>{`@import '~@cultureamp/kaizen-component-library/styles/type';
@import '~@cultureamp/kaizen-component-library/styles/layout';`}</Code>
    )
  }
}

export default LocalisationMixinImportExample
