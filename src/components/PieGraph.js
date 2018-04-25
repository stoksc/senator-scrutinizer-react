import React, { Component } from 'react';
import { Pie } from '@nivo/pie'

class PieGraph extends Component {
  constructor(props) {
    super(props);
    this.state = null
  }
  render() {
    //implement keys prop and that instead.
    const keys = ['Raoul', 'Josiane', 'Marcel', 'René', 'Paul', 'Jacques']

    const commonProperties = {
      width: 700,
      height: 500,
      margin: { top: 60, right: 80, bottom: 60, left: 80 },
      keys,
      animate: true,
      offsetType: 'none',
      axisLeft: {},
      innerRadius: 0.5,
      padAngle: 0.7,
      cornerRadius: 3,
      colors: "d320c",
      colorBy: "id",
      borderColor: "inherit:darker(0.6)",
      radialLabelsSkipAngle: 10,
      radialLabelsTextXOffset: 6,
      radialLabelsTextColor: "#333333",
      radialLabelsLinkOffset: 0,
      radialLabelsLinkDiagonalLength: 16,
      radialLabelsLinkHorizontalLength: 24,
      radialLabelsLinkStrokeWidth: 1,
      radialLabelsLinkColor: "inherit",
      slicesLabelsSkipAngle: 10,
      slicesLabelsTextColor: "#333333",
      motionStiffness: 90,
      motionDamping: 15,
    }

    if (this.props.pie_data) {
      console.log(this.props.pie_data)
      return (
        <Pie {...commonProperties} data={this.props.pie_data} />

      )
    } else {
      return (
        // <Pie {...commonProperties} data={this.blank}/>
        <div></div>
      )
    }
  }
}
export default PieGraph;
