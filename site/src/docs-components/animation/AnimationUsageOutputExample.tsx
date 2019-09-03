import scssCode from '!raw-loader!./AnimationUsageOutputExample.scss';
import React from 'react';
import Code from '../../../../components/Code';

class AnimationUsageOutputExample extends React.PureComponent {
  render() {
    return <Code>{scssCode}</Code>;
  }
}

export default AnimationUsageOutputExample;
