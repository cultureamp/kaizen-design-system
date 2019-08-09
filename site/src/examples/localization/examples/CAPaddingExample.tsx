import React from 'react';
import Code from '../../../../components/Code';

class CAPaddingExample extends React.PureComponent {
  render() {
    return (
      <Code>{`@import '~cultureamp-style-guide/styles/layout';

.my-element {
  @include ca-padding($start: 10px, $end: 20px, $top: 30px, $bottom: 40px);
}`}</Code>
    );
  }
}

export default CAPaddingExample;
