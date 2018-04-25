import { ResponsiveScatterPlotCanvas } from '@nivo/scatterplot';
import React, { Component } from 'react';

class ScatterGraph extends Component {
  constructor(props) {
    super(props);
    this.state = null
  }
  render() {
    //implement keys prop and that instead.

    const commonProperties = {
      width: 900,
      height: 600,
      margin: { top: 60, right: 80, bottom: 60, left: 80 },
      // keys,
      data: this.props.scatter_data,
      animate: true,
      offsetType: 'none',
      axisLeft: {},
    }

    return( <ResponsiveScatterPlotCanvas {...commonProperties} /> )
  }
}
export default ScatterGraph;
