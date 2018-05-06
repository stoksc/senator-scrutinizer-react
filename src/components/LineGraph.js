import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';
//change this
let url = 'http://twingiephp.us-east-1.elasticbeanstalk.com/analytics/hashtag/javascript';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = null
  }

  async componentDidMount() {

    const request = async () => {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({
        data: Object.values(json).map(element => {
          return {
            unix_time: parseInt(element['unix_time']['N'], 10),
            volume: parseInt(element['number_of_tweets']['N'], 10),
            sentiment: parseFloat(element['sentiment']['S'], 10)
          };
        }),
      });
    }
    request();
  }
  render() {
    const commonProperties = {
      data: this.props.volume_line_graph,
      margin: {top: 60, right: 150, bottom: 60, left: 150},
      width: 1400,
      height: 800,
      minY: "auto",
      stacked: false,
      curve: "monotoneY",
      colors: "nivo",
      axisBottom: {
          "orient": "bottom",
          "tickSize": 5,
          //padding clips out interval label
          "tickPadding": 13,
          "tickRotation": 0,
          "legend": "Time",
          "legendOffset": 36,
          "legendPosition": "center"},
      axisLeft: {
          "orient": "left",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0,
          "legend": "Count",
          "legendOffset": -40,
          "legendPosition": "center"},
      dotSize: 10,
      // dotColor: {inherit:darker(0.3)},
      dotBorderWidth: 2,
      dotBorderColor: '#ffffff',
      enableDotLabel: true,
      enableArea: true,
      dotLabel: 'y',
      dotLabelYOffset: -12,
      animate: true,
      motionStiffness: 90,
      motionDamping: 15,
      legends: [
          {
              "anchor": "bottom-right",
              "direction": "column",
              "translateX": 100,
              "itemWidth": 80,
              "itemHeight": 20,
              "symbolSize": 12,
              "symbolShape": "circle"
          }
      ]
    }

    if (commonProperties.data) {
      return (
        <ResponsiveLine {...commonProperties}
          tooltipFormat={value =>
            `${value}`}/>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default LineGraph;
