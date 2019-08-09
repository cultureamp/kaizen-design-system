import React from 'react';
import Grid from '../../../../components/Grid';
import TransitionDrop from '../../../../components/TransitionDrop';
import './TransitionPresetsExample.scss';

class TransitionPresetsExample extends React.PureComponent {
  render() {
    return (
      <Grid>
        <TransitionDrop name="fade" color="#45AD8F" />
        <TransitionDrop name="scale-fade" color="#253C64" />
        <TransitionDrop name="slide-fade" color="#1B7688" />
      </Grid>
    );
  }
}

export default TransitionPresetsExample;
