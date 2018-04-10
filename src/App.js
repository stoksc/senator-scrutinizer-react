import React, { Component } from 'react';
import FrequencyGraph from './components/frequencyGraph';
import HashtagHistogram from './components/hashtagHistogram';
import USAMap from "react-usa-map";
import { Media } from 'react-bootstrap';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import './App.css';

const fullPageOptions = {
  scrollSensitivity: 5,
  touchSensitivity: 5,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};
const tweetsDetailSlidesProps = {
  name: 'tweetsPage',
  infinite: true,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'stateSenators': [
        {
          'name': 'Shelby, Richard',
          'desc': 'The official Twitter page for U.S. Senator Richard Shelby (R-Ala.) https://www.facebook.com/RichardShelby',
          'img': 'https://pbs.twimg.com/profile_images/621070518834212864/ikIQKvUq_400x400.jpg',
        },
        {
          'name': 'Jomes, Doug',
          'desc': 'U.S. Senator for Alabama',
          'img': 'https://pbs.twimg.com/profile_images/959169332516409345/yMUOyuF__400x400.jpg',
        }
      ],
      'selectedSenator': null,
      'data': null,
      'tweets': [
        {
          'heading': 'test',
          'text': 'blah',
        },
        {
          'heading': 'test',
          'text': 'blah',
        },
        {
          'heading': 'test',
          'text': 'blah',
        },
        {
          'heading': 'test',
          'text': 'blah',
        },
      ]
    }
  }

  mapHandler = (event) => {
    alert('selected state')
  };

  selectRep = (event) => {
    alert('selected rep')
    this.setState({
      'selectedSenator': "name"
    })
  }

  render() {
    const tweetsDetailSlides = [
      <Slide>
        <div className="tweetTable">
          {this.state.tweets.map((tweet) => {
            return (
              <Media className="tweetTile">
                <Media.Left>
                  <img width={64} height={64} src={'https://pbs.twimg.com/profile_images/621070518834212864/ikIQKvUq_400x400.jpg'} alt="thumbnail" />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>
                    {tweet.heading}
                  </Media.Heading>
                  {tweet.text}
                </Media.Body>
              </Media>
            )
          })}
        </div>
      </Slide>,
      <Slide> Slide 2.2 </Slide>
    ];
    tweetsDetailSlidesProps.slides = tweetsDetailSlides;
    const slides = [
      <Slide>
        <div className="selection">
          <div className="usamap">
            <USAMap onClick={this.mapHandler} />
          </div>
          <div className="representativeTable">
            {this.state.stateSenators.map((representative) => {
              return (
                <Media className="representativeTile" onClick={this.selectRep}>
                  <Media.Left>
                    <img width={64} height={64} src={representative.img} alt="thumbnail" />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>
                      {representative.name}
                    </Media.Heading>
                    {representative.desc}
                  </Media.Body>
                </Media>
          )})}
          </div>
        </div>
      </Slide>,
      <Slide>
        <div className="frequencyGraph">
          <FrequencyGraph />
        </div>
        <div className="hashtagHistogram">
          <HashtagHistogram />
        </div>
      </Slide>,
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
