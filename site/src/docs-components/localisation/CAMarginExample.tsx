import React from 'react';
import Code from '../../../../components/Code';

class CAMarginExample extends React.PureComponent {
  render() {
    return (
      <Code>{`@import '~cultureamp-style-guide/styles/layout';

.my-element {
  @include ca-margin($start: 10px, $end: 20px, $top: 30px, $bottom: 40px);
}`}</Code>
    );
  }
}

export default CAMarginExample;
