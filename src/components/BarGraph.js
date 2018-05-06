import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar'

class BarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = null
  }
  render() {
    //implement keys prop and that instead.
    const keys = [
          "positive_occurences",
          "negative_occurences"
      ]

    const commonProperties = {
      width: 1400,
      height: 800,
      layout: "horizontal",
      colors: "nivo",
      enableLabel: false,
      margin: { top: 60, right: 175, bottom: 60, left: 175 },
      axisBottom: { tickPadding: 13, legendOffset: 0 },
      keys,
      indexBy: "id",
      data: this.props.bar_data,
      animate: true,
      offsetType: 'none',
      axisLeft: {},
    }
    if (this.props.bar_data) {
      return (
        <ResponsiveBar {...commonProperties} />
        )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default BarGraph;
