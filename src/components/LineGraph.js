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
            //change these
            unix_time: parseInt(element['unix_time']['N']),
            volume: parseInt(element['number_of_tweets']['N']),
            sentiment: parseFloat(element['sentiment']['S'])
          };
        }),
      });
    }
    request();
  }
  render() {
    const commonProperties = {
      data: this.props.volume_line_graph,
      margin: {top: 50, right: 110, bottom: 50, left: 60},
      minY: "auto",
      stacked: false,
      axisBottom: {
          "orient": "bottom",
          "tickSize": 5,
          //padding clips out interval label
          "tickPadding": 105,
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
    `${Number(value).toLocaleString('ru-RU', {
        minimumFractionDigits: 2,
    })} ₽`
}/>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default LineGraph;
