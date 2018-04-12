import React, { Component } from 'react';
import { render } from 'react-dom'
import { ResponsiveLine } from '@nivo/line'

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'data0': [
  {
    "id": "whisky",
    "color": "hsl(232, 70%, 50%)",
    "data": [
      {
        "color": "hsl(207, 70%, 50%)",
        "x": "IM",
        "y": 12
      },
      {
        "color": "hsl(352, 70%, 50%)",
        "x": "GS",
        "y": 26
      },
      {
        "color": "hsl(282, 70%, 50%)",
        "x": "GL",
        "y": 39
      },
      {
        "color": "hsl(224, 70%, 50%)",
        "x": "HM",
        "y": 39
      },
      {
        "color": "hsl(20, 70%, 50%)",
        "x": "ES",
        "y": 56
      },
      {
        "color": "hsl(116, 70%, 50%)",
        "x": "EH",
        "y": 55
      },
      {
        "color": "hsl(354, 70%, 50%)",
        "x": "BY",
        "y": 44
      },
      {
        "color": "hsl(206, 70%, 50%)",
        "x": "LB",
        "y": 59
      },
      {
        "color": "hsl(286, 70%, 50%)",
        "x": "SV",
        "y": 43
      }
    ]
  },
  {
    "id": "rhum",
    "color": "hsl(235, 70%, 50%)",
    "data": [
      {
        "color": "hsl(202, 70%, 50%)",
        "x": "IM",
        "y": 23
      },
      {
        "color": "hsl(132, 70%, 50%)",
        "x": "GS",
        "y": 46
      },
      {
        "color": "hsl(170, 70%, 50%)",
        "x": "GL",
        "y": 51
      },
      {
        "color": "hsl(79, 70%, 50%)",
        "x": "HM",
        "y": 59
      },
      {
        "color": "hsl(245, 70%, 50%)",
        "x": "ES",
        "y": 25
      },
      {
        "color": "hsl(177, 70%, 50%)",
        "x": "EH",
        "y": 8
      },
      {
        "color": "hsl(26, 70%, 50%)",
        "x": "BY",
        "y": 33
      },
      {
        "color": "hsl(170, 70%, 50%)",
        "x": "LB",
        "y": 13
      },
      {
        "color": "hsl(97, 70%, 50%)",
        "x": "SV",
        "y": 8
      }
    ]
  },
  {
    "id": "gin",
    "color": "hsl(13, 70%, 50%)",
    "data": [
      {
        "color": "hsl(118, 70%, 50%)",
        "x": "IM",
        "y": 15
      },
      {
        "color": "hsl(144, 70%, 50%)",
        "x": "GS",
        "y": 30
      },
      {
        "color": "hsl(15, 70%, 50%)",
        "x": "GL",
        "y": 22
      },
      {
        "color": "hsl(345, 70%, 50%)",
        "x": "HM",
        "y": 44
      },
      {
        "color": "hsl(97, 70%, 50%)",
        "x": "ES",
        "y": 59
      },
      {
        "color": "hsl(146, 70%, 50%)",
        "x": "EH",
        "y": 13
      },
      {
        "color": "hsl(274, 70%, 50%)",
        "x": "BY",
        "y": 40
      },
      {
        "color": "hsl(86, 70%, 50%)",
        "x": "LB",
        "y": 26
      },
      {
        "color": "hsl(71, 70%, 50%)",
        "x": "SV",
        "y": 0
      }
    ]
  },
  {
    "id": "vodka",
    "color": "hsl(158, 70%, 50%)",
    "data": [
      {
        "color": "hsl(201, 70%, 50%)",
        "x": "IM",
        "y": 4
      },
      {
        "color": "hsl(142, 70%, 50%)",
        "x": "GS",
        "y": 34
      },
      {
        "color": "hsl(147, 70%, 50%)",
        "x": "GL",
        "y": 4
      },
      {
        "color": "hsl(43, 70%, 50%)",
        "x": "HM",
        "y": 36
      },
      {
        "color": "hsl(298, 70%, 50%)",
        "x": "ES",
        "y": 45
      },
      {
        "color": "hsl(359, 70%, 50%)",
        "x": "EH",
        "y": 52
      },
      {
        "color": "hsl(200, 70%, 50%)",
        "x": "BY",
        "y": 22
      },
      {
        "color": "hsl(19, 70%, 50%)",
        "x": "LB",
        "y": 23
      },
      {
        "color": "hsl(134, 70%, 50%)",
        "x": "SV",
        "y": 29
      }
    ]
  },
  {
    "id": "cognac",
    "color": "hsl(62, 70%, 50%)",
    "data": [
      {
        "color": "hsl(192, 70%, 50%)",
        "x": "IM",
        "y": 58
      },
      {
        "color": "hsl(91, 70%, 50%)",
        "x": "GS",
        "y": 16
      },
      {
        "color": "hsl(17, 70%, 50%)",
        "x": "GL",
        "y": 18
      },
      {
        "color": "hsl(355, 70%, 50%)",
        "x": "HM",
        "y": 33
      },
      {
        "color": "hsl(148, 70%, 50%)",
        "x": "ES",
        "y": 31
      },
      {
        "color": "hsl(281, 70%, 50%)",
        "x": "EH",
        "y": 0
      },
      {
        "color": "hsl(5, 70%, 50%)",
        "x": "BY",
        "y": 25
      },
      {
        "color": "hsl(199, 70%, 50%)",
        "x": "LB",
        "y": 46
      },
      {
        "color": "hsl(7, 70%, 50%)",
        "x": "SV",
        "y": 8
      }
    ]
  }
]
    }
  }
  render() {
    return(

      <ResponsiveLine
        data={this.state.data0}
        margin={{
            "top": 50,
            "right": 110,
            "bottom": 50,
            "left": 60
        }}
        minY="auto"
        stacked={true}
        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "country code",
            "legendOffset": 36,
            "legendPosition": "center"
        }}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "count",
            "legendOffset": -40,
            "legendPosition": "center"
        }}
        dotSize={10}
        dotColor="inherit:darker(0.3)"
        dotBorderWidth={2}
        dotBorderColor="#ffffff"
        enableDotLabel={true}
        dotLabel="y"
        dotLabelYOffset={-12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "anchor": "bottom-right",
                "direction": "column",
                "translateX": 100,
                "itemWidth": 80,
                "itemHeight": 20,
                "symbolSize": 12,
                "symbolShape": "circle"
            }
        ]}
    />
    );
  }
}

export default LineGraph;
