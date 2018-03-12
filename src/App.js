import React, { Component } from 'react';
import FrequencyGraph from './components/frequencyGraph'
import HashtagHistogram from './components/hashtagHistogram'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="topBar">
          <div className="search">
          </div>
          <div className="sentimentScore">
          </div>
        </div>
        <div className="frequencyGraph">
        </div>
        <div className="hashtagHistogram">
        </div>
      </div>
    );
  }
}

export default App;
