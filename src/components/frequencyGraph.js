import React, { Component } from "react";
import { Line, Bar, LinePath } from "@vx/shape";
import { withTooltip, Tooltip } from "@vx/tooltip";
import { localPoint } from "@vx/event";
import { scaleTime, scaleLinear } from "@vx/scale";
import { extent, max, bisector } from "d3-array";
import { timeFormat } from "d3-time-format";

const width = window.innerWidth;
const height = (0.5) * window.innerHeight;

const xSelector = d => d.unix_time;
const ySelector = d => d.volume;
const zSelector = d => d.sentiment;

const bisectDate = bisector(xSelector).left;

class FrequencyGraph extends Component {
  state = {
    language: 'javascript',
    data: null,
  };

  async componentDidMount() {
    let url = 'http://twingiephp.us-east-1.elasticbeanstalk.com/analytics/hashtag/javascript'
    const request = async () => {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({
          data: Object.values(json).map(element => {
            return {
              unix_time: parseInt(element['unix_time']['N']),
              volume: parseInt(element['number_of_tweets']['N']),
              sentiment: parseFloat(element['sentiment']['S'])
            };
          }),
        });
      }
      request();
    }

  componentWillReceiveProps(nextProps){}

  componentWillUpdate(nextProps, nextState){}

  componentWillUnmount(){}

  unixTimeToDate = (unix_time) => {
    const day_map = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]
    var date = new Date(1000*parseInt(unix_time));
    var day = date.getDay();
    var hour = date.getHours() == '0' ? '12' : date.getHours();
    var minute = date.getMinutes() < '10' ? `0${date.getMinutes()}` : date.getMinutes()
    return `${day_map[day]} ${hour}:${minute}`;
  };

  submitSearch = (framework) => {
    this.setState({language: framework});
    var SearchButton = document.getElementById('SearchButton');
    let url = `http://twingiephp.us-east-1.elasticbeanstalk.com/analytics/hashtag/${framework}`;
    const request = async () => {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({
        data: Object.values(json).map(element => {
          return {
            unix_time: parseInt(element['unix_time']['N']),
            volume: parseInt(element['number_of_tweets']['N']),
            sentiment: parseFloat(element['sentiment']['S'])
          };
        }),
      });
      }
    request();
  }

  handleTooltip = ({ event, data, xSelector, xScale, yScale }) => {
    const { showTooltip } = this.props;
    const { x } = localPoint(event);
    const x0 = xScale.invert(x);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    let d = d0;
    if (d1 && d1.date) {
      d = x0 - xSelector(d0) > xSelector(d1) - x0 ? d1 : d0;
    }
    showTooltip({
      tooltipData: d,
      tooltipLeft: xScale(xSelector(d)),
      tooltipTop: yScale(ySelector(d)),
    });
  };

  render() {
    const { language, data } = this.state;
    const { showTooltip, hideTooltip, tooltipData, tooltipTop, tooltipLeft } = this.props;

    if (!data) return null;

    const padding = 100;
    const xMax = width - padding;
    const yMax = height - padding;

    const xScale = scaleTime({
      range: [padding, xMax],
      domain: extent(data, xSelector),
    });

    const dataMax = max(data, ySelector);
    const yScale = scaleLinear({
      range: [yMax, padding],
      domain: [0, dataMax + dataMax / 3],
    });

    const zScale = scaleLinear({
      range: [yMax, padding],
      domain: [0, 1.33],
    });

    return (
      <div>
        <svg width={width} height={height}>
          <rect x={0} y={0} width={width} height={height} fill="white" />
          <LinePath
            data={data}
            xScale={xScale}
            yScale={yScale}
            x={xSelector}
            y={ySelector}
            strokeWidth={1.5}
            stroke="#AEC6CF"
            strokeLinecap="flat"
            fill="transparent"
          />
          <Bar
            x={0}
            y={0}
            width={width}
            height={height}
            fill="transparent"
            data={data}
            onMouseMove={data => event =>
              this.handleTooltip({
                event,
                data,
                xSelector,
                xScale,
                yScale,
              })}
            onMouseLeave={data => event => hideTooltip()}
            onTouchEnd={data => event => hideTooltip()}
            onTouchMove={data => event =>
              this.handleTooltip({
                event,
                data,
                xSelector,
                xScale,
                yScale,
              })}
          />
          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: 0 }}
                to={{ x: tooltipLeft, y: yMax }}
                stroke="#AEC6CF"
                strokeWidth={1}
                style={{ pointerEvents: "none" }}
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                fill="white"
                stroke="#AEC6CF"
                strokeWidth={1}
                style={{ pointerEvents: "none" }}
              />
            </g>
          )}
        </svg>
        {tooltipData && (
          <div>
            <Tooltip
              top={yMax + 75}
              left={tooltipLeft}
              style={{
                backgroundColor: "white",
                color: "black",
                boxShadow: "none",
              }}
            >
              {`Number of tweets: ${ySelector(tooltipData)}`}
            </Tooltip>
            <Tooltip
              top={yMax + 125}
              left={tooltipLeft}
              style={{
                backgroundColor: "white",
                color: "black",
                boxShadow: "none",
              }}
            >
              {`Sentiment: ${zSelector(tooltipData)}`}
            </Tooltip>
            <Tooltip
              top={yMax + 100}
              left={tooltipLeft}
              style={{
                backgroundColor: "white",
                color: "black",
                boxShadow: "none",
              }}
            >
              {`Time: ${this.unixTimeToDate(xSelector(tooltipData))}`}
            </Tooltip>
          </div>
        )}
      </div>
    );
  }
}

export default withTooltip(FrequencyGraph);
