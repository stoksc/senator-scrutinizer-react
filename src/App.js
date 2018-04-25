import React, { Component } from 'react';
//import FrequencyGraph from './components/frequencyGraph';
//import HashtagHistogram from './components/hashtagHistogram';
import USAMap from "react-usa-map";
import { Media } from 'react-bootstrap';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MediaTile from './components/MediaTile';
import LineGraph from './components/LineGraph';
import StreamGraph from './components/StreamGraph';
import PieGraph from './components/PieGraph';
import RadarGraph from './components/RadarGraph';
import TweetGrid from './components/TweetGrid';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import './App.css';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

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
      'displayedHashtagPieData': null,
      'hashtagFieldValue': '',
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
    let default_url = `http://twingiephp.us-west-2.elasticbeanstalk.com/analytics/senator?state=ga&twitterid=senatorisakson`
    const default_request = async () => {
      const default_response = await fetch(default_url);
      const default_json = await default_response.json();
      this.setState({
        selectedSenator: '@senatorisakson',
        data: default_json.volume_line_graph,
        hashtagPieData: default_json.related_hashtag,
        displayedHashtagPieData: default_json.related_hashtag,
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
    this.setState({
      'selectedSenator': senator.name,
    })
    let url = `http://twingiephp.us-west-2.elasticbeanstalk.com/analytics/senator?state=${this.state.selectedState}&twitterid=${senator.name.substring(1, senator.name.length)}`
    const request = async () => {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({
        data: json.volume_line_graph,
        hashtagPieData: json.related_hashtag,
        displayedHashtagPieData: json.related_hashtag,
        userPieData: json.related_user,
        wordPieData: json.word_occurence_pie_graph,
      });
    }
    request();
  };

  hashtagTextFieldChange = (event) => {
    this.setState({
        hashtagFieldValue: event.target.value,
        displayedHashtagPieData: Object.values(this.state.hashtagPieData).filter(
          (slice) => {
            return slice.id.toLowerCase().includes(event.target.value.toLowerCase())
          }
        )
    });
  }

  userTextFieldChange = (event) => {
    this.setState({
        userFieldValue: event.target.value,
        displayedUserPieData: Object.values(this.state.userPieData).filter(
          (slice) => {
            return slice.id.toLowerCase().includes(event.target.value.toLowerCase())
          }
        )
    });
  }

  render() {
    //Creates horizonal slides

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
      <Slide>
        <LineGraph volume_line_graph={this.state.data}/>
      </Slide>,
        <Slide>
          <Tabs>
            <Tab label="byUser" >
              <div>
                <h2 style={styles.headline}>@mention</h2>
                  <div className="piePage">
                    <div className="piePageLeft">
                      <TextField value={this.state.userFieldValue} onChange={this.userTextFieldChange} />
                      <PieGraph pie_data={this.state.displayedUserPieData} />
                    </div>
                    <div className="piePageRight">
                      <TweetGrid pie_data={this.state.displayedUserPieData} />
                    </div>
                 </div>
              </div>
            </Tab>
            <Tab label="byHashtag" >
              <div>
                <h2 style={styles.headline}>#hashtag</h2>
                  <div className="piePage">
                    <div className="piePageLeft">
                      <TextField value={this.state.hashtagFieldValue} onChange={this.hashtagTextFieldChange} />
                      <PieGraph pie_data={this.state.displayedHashtagPieData} />
                    </div>
                    <div className="piePageRight">
                      <TweetGrid pie_data={this.state.displayedHashtagPieData} />
                    </div>
                 </div>
              </div>
            </Tab>
          </Tabs>
        </Slide>
    ];
    fullPageOptions.slides = slides;

    return (
      <div className="app">
        <div>
          <MuiThemeProvider >
            <Fullpage {...fullPageOptions} />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
