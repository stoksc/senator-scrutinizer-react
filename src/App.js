import React, { Component } from 'react';
import USAMap from "react-usa-map";
import { Fullpage, Slide } from 'fullpage-react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MediaTile from './components/MediaTile';
import LineGraph from './components/LineGraph';
import BarGraph from './components/BarGraph';
import PieGraph from './components/PieGraph';
import TweetGrid from './components/TweetGrid';
import ScatterGraph from './components/ScatterGraph';
import ProgressStepper from './components/Stepper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './App.css';

const muiTheme = getMuiTheme({
  stepper: {
    iconColor: '#61CDBB',
    textColor: 'grey',
  }
})
const fullPageOptions = {
  scrollSensitivity: 5,
  touchSensitivity: 5,
  scrollSpeed: 350,
  hideScrollBars: true,
  enableArrowKeys: true,
};

const php_endpoint = "http://twingiephp.us-east-2.elasticbeanstalk.com/"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'cState': 'AK',
      'pState': 'AK',
      'dropDownValue': 2,
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
      'userFieldValue': '',
      'displayedUserPieData': null,
      'radarData': null,
      'barData': null,
      'scatterData': null,

    }
    let url = `${php_endpoint}/analytics/state?state=ak`
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
    let default_url = `${php_endpoint}/analytics/senator?state=ak&twitterid=lisamurkowski`
    const default_request = async () => {
      const default_response = await fetch(default_url);
      const default_json = await default_response.json();
      this.setState({
        selectedSenator: '@lisamurkowski',
        data: default_json.volume_line_graph,
        hashtagPieData: default_json.related_hashtag,
        displayedHashtagPieData: default_json.related_hashtag,
        userPieData: default_json.related_user,
        displayedUserPieData: default_json.related_user,
      });
    }
    default_request();
  }

  mapHandler = (event) => {
    this.setState({pState: this.state.cState});
    this.setState({cState: event.target.dataset.name})
    let state = event.target.dataset.name.toLowerCase()

    let url = `${php_endpoint}/analytics/state?state=${state}`
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
    this.progressStepper.clickedState();
  };

  selectSenator = (senator) => {
    this.setState({
      'selectedSenator': senator.name,
    })
    let url = `${php_endpoint}/analytics/senator?state=${this.state.selectedState}&twitterid=${senator.name.substring(1, senator.name.length)}`
    const request = async () => {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({
        data: json.volume_line_graph,
        hashtagPieData: json.related_hashtag,
        displayedHashtagPieData: json.related_hashtag,
        userPieData: json.related_user,
        displayedUserPieData: json.related_user,
        wordPieData: json.word_occurence_pie_graph,
        scatterData: json.scatter_graph,
        barData: json.named_entity_bar_graph
      });
    }
    request();
    this.progressStepper.clickedSenator();
    Fullpage.changeFullpageSlide(1);
  };

  colorState = (event) => {
    const {cState, pState} = this.state;
    const newColors = {};
    if (cState!==pState) {
      newColors[pState] = {fill: null};
      newColors[cState] = {fill: "#F47560"};
    }
    else {
      newColors[pState] = {fill: "#F47560"};
      newColors[cState] = {fill: "#F47560"};
    }
    return newColors;
  }


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

  handleDropDown = (event, index, value) => this.setState({dropDownValue: value});

  render() {
    //Creates horizonal slides
    const slides = [
      //Slide 1 - US Map with Representatives
      <Slide className="selectionSlide">
        <ProgressStepper ref={instance => { this.progressStepper = instance; }} />
        <div className="selection">
          <div className="usamap">
            <USAMap customize={this.colorState()} onClick= {this.mapHandler} />
          </div>
          <div className="representativeTable">
            {this.state.stateSenators.map((senator) => {
              return (
                <MediaTile className="representativeTile"
                           key={senator.name}
                           media={senator}
                           onClick={this.selectSenator} />)})}
          </div>
        </div>
      </Slide>,
      //Slide 2 - Pie Page
      <Slide className="pieSlide">
        <div className="piePage">
          <div className="piePageLeft">
            <div style={{ display: 'flex', margin: 20 }}>
              <SelectField
                floatingLabelText='Search by'
                style={{ alignSelf: 'flex-end', marginLeft: 20, width: 150 }}
                value={this.state.dropDownValue}
                onChange={this.handleDropDown}>
                  <MenuItem value={1} primaryText="User" />
                  <MenuItem value={2} primaryText="Hashtag" />
              </SelectField>
              <TextField floatingLabelText=' ' multiLine style={{ flex: 1 }}
                value = {(() => {
                  switch (this.state.dropDownValue) {
                    case 1: return this.state.userFieldValue;
                    case 2: return this.state.hashtagFieldValue;
                    default: return ""; }})()}
                onChange = {(() => {
                  switch (this.state.dropDownValue) {
                    case 1: return this.userTextFieldChange;
                    case 2: return this.hashtagTextFieldChange;
                    default: return ""; }})()}/>
              </div>
            <PieGraph pie_data={(() => {
              switch (this.state.dropDownValue) {
                case 1: return this.state.displayedUserPieData;
                case 2: return this.state.displayedHashtagPieData;
                default: return null; }})()} />
          </div>
          <div className="piePageRight">
            <TweetGrid pie_data={(() => {
              switch (this.state.dropDownValue) {
                case 1: return this.state.displayedUserPieData;
                case 2: return this.state.displayedHashtagPieData;
                default: return null; }})()} />
          </div>
       </div>
      </Slide>,
      //Slide 3 Bar Graph Page
      <Slide className="barSlide">
        <BarGraph bar_data={this.state.barData}/>
      </Slide>,
      <Slide className="lineSlide">
        <LineGraph volume_line_graph={this.state.data}
                     />
      </Slide>,
      //Slide 4 Scatter Graph
      <Slide className="scatterSlide">
        <ScatterGraph scatter_data={this.state.scatterData}/>
      </Slide>,
      //Slide 3 - Piegraphs with different tabs


    ];
    fullPageOptions.slides = slides;

    return (
      <div className="app">
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Fullpage {...fullPageOptions} />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}







export default App;
