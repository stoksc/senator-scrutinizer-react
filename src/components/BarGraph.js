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
      width: 1500,
      height: 625,
      layout: "horizontal",
      colors: "set2",
      groupMode: "grouped",
      enableLabel: false,
      padding: 0.2,
      margin: { top: 0, right: 175, bottom: 50, left: 200 },
      axisBottom: { tickPadding: 12, legendOffset: 0 },
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
