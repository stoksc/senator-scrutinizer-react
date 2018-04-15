import React, { Component } from 'react';
import { Stream } from '@nivo/stream'

class StreamGraph extends Component {
  constructor(props) {
    super(props);
    this.state = null
  }
  render() {
    //implement keys prop and that instead.
    const keys = ['Raoul', 'Josiane', 'Marcel', 'René', 'Paul', 'Jacques']

    const commonProperties = {
      width: 900,
      height: 360,
      margin: { top: 60, right: 80, bottom: 60, left: 80 },
      keys,
      data: this.props.stream_data,
      animate: true,
      offsetType: 'none',
      axisLeft: {},
    }

    return( <Stream {...commonProperties} /> )
  }
}
export default StreamGraph;
