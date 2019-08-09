import scssCode from '!raw-loader!./TransitionUsageInputExample.scss';
import React from 'react';
import Code from '../../../../components/Code';

class TransitionUsageInputExample extends React.PureComponent {
  render() {
    return <Code>{scssCode}</Code>;
  }
}

export default TransitionUsageInputExample;
