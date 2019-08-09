import React from 'react';
import Code from '../../../../components/Code';

class CAPositionExample extends React.PureComponent {
  render() {
    return (
      <Code>{`@import '~cultureamp-style-guide/styles/layout';

.my-element {
  @include ca-position($start: 10px, $end: 20px, $top: 30px, $bottom: 40px);
}`}</Code>
    );
  }
}

export default CAPositionExample;
