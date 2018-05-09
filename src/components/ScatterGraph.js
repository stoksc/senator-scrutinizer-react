import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import React, { Component } from 'react';

class ScatterGraph extends Component {
  constructor(props) {
    super(props);
    this.state = null
  }
  render() {
    const commonProperties = {
      width: 1600,
      height: 600,
      colors: "nivo",
      margin: { top: 40, right: 175, bottom: 50, left: 50 },
      axisBottom: {
          "orient": "bottom",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0,
          "legend": "(conservative) <---- Political Leaning ----> (liberal)",
          "legendPosition": "center",
          "legendOffset": 46
      },
      axisLeft: {
          "orient": "left",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0,
          "legend": "Popularity",
          "legendPosition": "center",
          "legendOffset": -60
      },
      data: this.props.scatter_data,
      animate: true,
      offsetType: 'none',
    }
    if (this.props.scatter_data) {
      return (
        <ResponsiveScatterPlot {...commonProperties} />
        )
    } else {
      return (
        <div></div>
      )
    }
  }
}
export default ScatterGraph;
