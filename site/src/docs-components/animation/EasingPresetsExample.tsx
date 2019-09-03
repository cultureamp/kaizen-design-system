import scssCode from '!raw-loader!cultureamp-style-guide/styles/animations/_easings.scss';
import React from 'react';
import Code from '../../../../components/Code';

class EasingPresets extends React.PureComponent {
  render() {
    return <Code>{scssCode}</Code>;
  }
}

export default EasingPresets;
