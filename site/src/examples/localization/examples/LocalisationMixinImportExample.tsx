import React from 'react';
import Code from '../../../../components/Code';

class LocalisationMixinImportExample extends React.PureComponent {
  render() {
    return (
      <Code>{`@import '~cultureamp-style-guide/styles/type';
@import '~cultureamp-style-guide/styles/layout';`}</Code>
    );
  }
}

export default LocalisationMixinImportExample;
