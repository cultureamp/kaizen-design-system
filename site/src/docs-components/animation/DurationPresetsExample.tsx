import scssCode from '!raw-loader!cultureamp-style-guide/styles/animations/_durations.scss';
import React from 'react';
import Code from '../../../../components/Code';

class DurationPresets extends React.PureComponent {
  render() {
    return <Code>{scssCode}</Code>;
  }
}

export default DurationPresets;
