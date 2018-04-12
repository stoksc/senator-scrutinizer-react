import React, { Component } from 'react';
//import FrequencyGraph from './components/frequencyGraph';
//import HashtagHistogram from './components/hashtagHistogram';
import USAMap from "react-usa-map";
import { Media } from 'react-bootstrap';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import LineGraph from './components/LineGraph';
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
      'data':[
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1520462356.6166668,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1520512811.8500001,
                    "y": 3
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1520563267.0833335,
                    "y": 3
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1520613722.3166668,
                    "y": 4
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1520664177.5500002,
                    "y": 2
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1520714632.7833335,
                    "y": 9
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1520765088.016667,
                    "y": 5
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1520815543.2500002,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1520865998.4833336,
                    "y": 5
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1520916453.716667,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1520966908.9500003,
                    "y": 8
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521017364.1833336,
                    "y": 4
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521067819.416667,
                    "y": 5
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521118274.6500003,
                    "y": 4
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521168729.8833337,
                    "y": 2
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521219185.116667,
                    "y": 3
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521269640.3500004,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521320095.5833337,
                    "y": 4
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521370550.816667,
                    "y": 3
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521421006.0500004,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521471461.2833338,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521521916.5166671,
                    "y": 2
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521572371.7500005,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521622826.9833338,
                    "y": 4
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521673282.2166672,
                    "y": 4
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521723737.4500005,
                    "y": 4
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521774192.6833339,
                    "y": 2
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521824647.9166672,
                    "y": 6
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521875103.1500006,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521925558.383334,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1521976013.6166673,
                    "y": 6
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522026468.8500006,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522076924.083334,
                    "y": 3
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522127379.3166673,
                    "y": 2
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522177834.5500007,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522228289.783334,
                    "y": 3
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522278745.0166674,
                    "y": 6
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522329200.2500007,
                    "y": 4
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522379655.483334,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522430110.7166674,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522480565.9500008,
                    "y": 2
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522531021.183334,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522581476.4166675,
                    "y": 3
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522631931.6500008,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522682386.8833342,
                    "y": 8
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522732842.1166675,
                    "y": 9
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522783297.3500009,
                    "y": 4
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522833752.5833342,
                    "y": 5
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522884207.8166676,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522934663.050001,
                    "y": 3
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1522985118.2833343,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1523035573.5166676,
                    "y": 7
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1523086028.750001,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1523136483.9833343,
                    "y": 6
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1523186939.2166677,
                    "y": 6
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1523237394.450001,
                    "y": 1
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1523287849.6833344,
                    "y": 4
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1523338304.9166677,
                    "y": 2
                },
                {
                    "color": "hsl(280, 70%, 50%)",
                    "x": 1523388760.150001,
                    "y": 3}
                ],

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
          <LineGraph />
        </div>
        <div className="hashtagHistogram">
          <p>f</p>
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
