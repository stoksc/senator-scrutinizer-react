import React, { Component } from 'react';
import FrequencyGraph from './components/frequencyGraph'
import HashtagHistogram from './components/hashtagHistogram'
import USAMap from "react-usa-map";
import Representative from "./components/representative"
import Tweet from "./components/representative"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'stateSenators': null,
      'selectedSenator': null,
      'data': null,
      'tweets': [
        {
          'text': 'blah'
        },
        {
          'text': 'blah'
        },
        {
          'text': 'blah'
        },
        {
          'text': 'blah'
        },
      ]
    }
  }

  mapHandler = (event) => {
    this.setState({
      'stateSenators': event.target.dataset.name
    })
  };

  selectRep = (event) => {
    this.setState({
      'selectedSenator': "name"
    })
  }

  render() {
    return (
      <div className="app">
        <div className="topBar">
          <div className="logotext">
          </div>
          <div className="logo">
          </div>
        </div>
        <div className="selection">
          <div className="usamap">
            <USAMap onClick={this.mapHandler} />
          </div>
          <div className="representativeTable">
            <Representative
              representative={"name"}
              key={"name"}
              handleClick={this.selectRep} />
            <Representative
              representative={"name"}
              key={"name"}
              handleClick={this.selectRep} />
           </div>
        </div>
        <div className="dataDisplay">
          <div className="frequencyGraph">
            <FrequencyGraph />
          </div>
          <div className="hashtagHistogram">
            <HashtagHistogram />
          </div>
          <div className="tweetTable">
            {this.state.tweets.map((tweet) => {
              return <Tweet
                tweet={tweet.text} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
