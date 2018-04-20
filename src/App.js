import React, { Component } from 'react';
//import FrequencyGraph from './components/frequencyGraph';
//import HashtagHistogram from './components/hashtagHistogram';
import USAMap from "react-usa-map";
import { Media } from 'react-bootstrap';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import MediaTile from './components/MediaTile'
import LineGraph from './components/LineGraph';
import StreamGraph from './components/StreamGraph';
import PieGraph from './components/PieGraph';
import RadarGraph from './components/RadarGraph';
import './App.css';

const fullPageOptions = {
  scrollSensitivity: 5,
  touchSensitivity: 5,
  scrollSpeed: 350,
  hideScrollBars: true,
  enableArrowKeys: true
};
const graphsSlidesProps = {
  name: 'graphsPage',
  infinite: true,
};
const tweetsDetailSlidesProps = {
  name: 'tweetsPage',
  infinite: true,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'selectedState': null,
      'stateSenators': [
        {
          'name': ' ',
          'img': ' ',
          'desc': ' ',
        },
      ],
      'selectedSenator': null,
      'data': null,
      'dataS': null,
      'hashtagPieData': null,
      'userPieData': null,
      'radarData': null,
    }
    let url = `http://twingiephp.us-west-2.elasticbeanstalk.com/analytics/state?state=ga`
    const request = async () => {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({
        stateSenators: Object.values(json.senators).map((element) => {
          const senatorName = Object.keys(element)
          return {
            name: element[senatorName]['twitterID'],
            desc: element[senatorName]['bio'],
            img: element[senatorName]['image'],
          }
        }),
      });
    }
    request();
    this.setState({
      'selectedSenator': '@realdonaldtrump',
    });
    let default_url = `http://twingiephp.us-west-2.elasticbeanstalk.com/analytics/senator?state=ga&twitterid=senatorisakson`
    const default_request = async () => {
      const default_response = await fetch(default_url);
      const default_json = await default_response.json();
      this.setState({
        data: default_json.volume_line_graph,
        hashtagPieData: default_json.related_hashtag,
        userPieData: default_json.related_user,
      });
    }
    default_request();
  }

  mapHandler = (event) => {
    let state = event.target.dataset.name.toLowerCase()
    let url = `http://twingiephp.us-west-2.elasticbeanstalk.com/analytics/state?state=${state}`
    const request = async () => {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({
        selectedState: state,
        stateSenators: Object.values(json.senators).map((element) => {
          const senatorName = Object.keys(element)
          return {
            name: element[senatorName]['twitterID'],
            desc: element[senatorName]['bio'],
            img: element[senatorName]['image'],
          }
        }),
      });
    }
    request();
  };

  selectSenator = (senator) => {
    alert(senator.name)
    console.log(senator)
    this.setState({
      'selectedSenator': senator.name,
    })
    let url = `http://twingiephp.us-west-2.elasticbeanstalk.com/analytics/senator?state=${this.state.selectedState}&twitterid=${senator.name.substring(1, senator.name.length)}`
    const request = async () => {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json)
      this.setState({
        data: json.volume_line_graph,
        hashtagPieData: json.related_hashtag,
        userPieData: json.related_user,
      });
    }
    request();
  };

  render() {
    //Creates horizonal slides
    const graphsSlides = [
      <Slide>
        <LineGraph volume_line_graph={this.state.data}/>
      </Slide>,
      <Slide>
         <PieGraph pie_data={this.state.userPieData} />
      </Slide>,
      <Slide>
        <PieGraph pie_data={this.state.hashtagPieData} />
      </Slide>
    ]

    //Assigns above consts as slide props
    graphsSlidesProps.slides = graphsSlides;

    const slides = [
      <Slide>
        <div className="selection">
          <div className="usamap">
            <USAMap onClick={this.mapHandler} />
          </div>
            <div className="representativeTable">
              {this.state.stateSenators.map((senator) => {
                return (
                  <MediaTile className="representativeTile"
                             key={senator.name}
                             media={senator}
                             onClick={this.selectSenator}
                             />
            )})}
          </div>
        </div>
      </Slide>,
      <HorizontalSlider {...graphsSlidesProps}></HorizontalSlider>,
      <HorizontalSlider {...tweetsDetailSlidesProps}></HorizontalSlider>
    ];
    fullPageOptions.slides = slides;

    return (
      <div className="app">
        <div>
          <Fullpage {...fullPageOptions} />
        </div>
      </div>
    );
  }
}

export default App;
