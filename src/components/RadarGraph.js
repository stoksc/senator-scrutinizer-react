import React, { Component } from 'react';
import { ResponsiveRadar } from '@nivo/radar'

class RadarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = null
  }
  render() {
    //implement keys prop and that instead.
    const keys = ["chardonay", "carmenere", "syrah"]

    const commonProperties = {
      width: 900,
      height: 360,
      indexBy: "taste",
      margin: { top: 60, right: 80, bottom: 60, left: 80 },
      keys,
      data: this.props.radar_data,
      curve: "catmullRomClosed",
      borderWidth: 2,
      borderColor: "inherit",
      gridLevels: 5,
      gridShape: "circular",
      gridLabelOffset: 36,
      enableDots: true,
      dotSize: 8,
      dotColor: "inherit",
      dotBorderWidth: 0,
      dotBorderColor: "#ffffff",
      enableDotLabel: true,
      dotLabel: "value",
      dotLabelYOffset: -12,
      colors: "nivo",
      colorBy: "key",
      fillOpacity: 0.1,
      animate: true,
      motionStiffness: 90,
      motionDamping: 15,
      isInteractive: true,
      legends: [
          {
              "anchor": "top-left",
              "direction": "column",
              "translateX": -50,
              "translateY": -40,
              "itemWidth": 80,
              "itemHeight": 20,
              "symbolSize": 12,
              "symbolShape": "circle"
          }
      ],
      animate: true,
      offsetType: 'none',
      axisLeft: {},
    }

    return( <ResponsiveRadar {...commonProperties} /> )
  }
}
export default RadarGraph;
