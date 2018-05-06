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
      width: 1400,
      height: 800,
      colors: "nivo",
      margin: { top: 60, right: 150, bottom: 60, left: 150 },
      // keys,
      data: this.props.scatter_data,
      animate: true,
      offsetType: 'none',
      axisLeft: {},
    }
    if (this.props.scatter_data) {
      return (
        <ResponsiveScatterPlotCanvas {...commonProperties} />
        )
    } else {
      return (
        <div></div>
      )
    }
  }
}
export default ScatterGraph;
