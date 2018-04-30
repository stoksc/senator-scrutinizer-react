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
      height: 360,
      margin: { top: 60, right: 80, bottom: 60, left: 80 },
      keys,
      indexBy: "id",
      data: this.props.bar_data,
      animate: true,
      offsetType: 'none',
      axisLeft: {},
    }

    return( <ResponsiveBar {...commonProperties} /> )
  }
}
export default BarGraph;
