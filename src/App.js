import React, { Component } from 'react';
//import FrequencyGraph from './components/frequencyGraph';
//import HashtagHistogram from './components/hashtagHistogram';
import USAMap from "react-usa-map";
import { Media } from 'react-bootstrap';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import LineGraph from './components/LineGraph';
import StreamGraph from './components/StreamGraph';
import PieGraph from './components/PieGraph';
import RadarGraph from './components/RadarGraph';
import './App.css';

const fullPageOptions = {
  scrollSensitivity: 5,
  touchSensitivity: 5,
  scrollSpeed: 500,
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
          "id": "coke",
          "color": "hsl(353, 70%, 50%)",
          "data": [
            {
              "color": "hsl(257, 70%, 50%)",
              "x": "RE",
              "y": 14
            },
            {
              "color": "hsl(357, 70%, 50%)",
              "x": "AS",
              "y": 11
            },
            {
              "color": "hsl(177, 70%, 50%)",
              "x": "JO",
              "y": 56
            },
            {
              "color": "hsl(293, 70%, 50%)",
              "x": "HM",
              "y": 0
            },
            {
              "color": "hsl(215, 70%, 50%)",
              "x": "BL",
              "y": 24
            },
            {
              "color": "hsl(277, 70%, 50%)",
              "x": "BT",
              "y": 49
            },
            {
              "color": "hsl(259, 70%, 50%)",
              "x": "SC",
              "y": 36
            },
            {
              "color": "hsl(165, 70%, 50%)",
              "x": "MM",
              "y": 60
            },
            {
              "color": "hsl(340, 70%, 50%)",
              "x": "LA",
              "y": 42
            }
          ]
        },
        {
          "id": "rhum",
          "color": "hsl(68, 70%, 50%)",
          "data": [
            {
              "color": "hsl(305, 70%, 50%)",
              "x": "RE",
              "y": 54
            },
            {
              "color": "hsl(183, 70%, 50%)",
              "x": "AS",
              "y": 44
            },
            {
              "color": "hsl(97, 70%, 50%)",
              "x": "JO",
              "y": 39
            },
            {
              "color": "hsl(156, 70%, 50%)",
              "x": "HM",
              "y": 31
            },
            {
              "color": "hsl(198, 70%, 50%)",
              "x": "BL",
              "y": 36
            },
            {
              "color": "hsl(88, 70%, 50%)",
              "x": "BT",
              "y": 53
            },
            {
              "color": "hsl(100, 70%, 50%)",
              "x": "SC",
              "y": 17
            },
            {
              "color": "hsl(328, 70%, 50%)",
              "x": "MM",
              "y": 22
            },
            {
              "color": "hsl(20, 70%, 50%)",
              "x": "LA",
              "y": 25
            }
          ]
        },
        {
          "id": "gin",
          "color": "hsl(16, 70%, 50%)",
          "data": [
            {
              "color": "hsl(311, 70%, 50%)",
              "x": "RE",
              "y": 26
            },
            {
              "color": "hsl(70, 70%, 50%)",
              "x": "AS",
              "y": 48
            },
            {
              "color": "hsl(13, 70%, 50%)",
              "x": "JO",
              "y": 40
            },
            {
              "color": "hsl(112, 70%, 50%)",
              "x": "HM",
              "y": 35
            },
            {
              "color": "hsl(133, 70%, 50%)",
              "x": "BL",
              "y": 20
            },
            {
              "color": "hsl(186, 70%, 50%)",
              "x": "BT",
              "y": 22
            },
            {
              "color": "hsl(331, 70%, 50%)",
              "x": "SC",
              "y": 55
            },
            {
              "color": "hsl(323, 70%, 50%)",
              "x": "MM",
              "y": 17
            },
            {
              "color": "hsl(19, 70%, 50%)",
              "x": "LA",
              "y": 11
            }
          ]
        },
        {
          "id": "vodka",
          "color": "hsl(306, 70%, 50%)",
          "data": [
            {
              "color": "hsl(298, 70%, 50%)",
              "x": "RE",
              "y": 11
            },
            {
              "color": "hsl(180, 70%, 50%)",
              "x": "AS",
              "y": 58
            },
            {
              "color": "hsl(200, 70%, 50%)",
              "x": "JO",
              "y": 21
            },
            {
              "color": "hsl(118, 70%, 50%)",
              "x": "HM",
              "y": 37
            },
            {
              "color": "hsl(240, 70%, 50%)",
              "x": "BL",
              "y": 39
            },
            {
              "color": "hsl(336, 70%, 50%)",
              "x": "BT",
              "y": 0
            },
            {
              "color": "hsl(262, 70%, 50%)",
              "x": "SC",
              "y": 35
            },
            {
              "color": "hsl(279, 70%, 50%)",
              "x": "MM",
              "y": 9
            },
            {
              "color": "hsl(173, 70%, 50%)",
              "x": "LA",
              "y": 34
            }
          ]
        },
        {
          "id": "cognac",
          "color": "hsl(355, 70%, 50%)",
          "data": [
            {
              "color": "hsl(193, 70%, 50%)",
              "x": "RE",
              "y": 0
            },
            {
              "color": "hsl(103, 70%, 50%)",
              "x": "AS",
              "y": 38
            },
            {
              "color": "hsl(189, 70%, 50%)",
              "x": "JO",
              "y": 21
            },
            {
              "color": "hsl(91, 70%, 50%)",
              "x": "HM",
              "y": 30
            },
            {
              "color": "hsl(207, 70%, 50%)",
              "x": "BL",
              "y": 41
            },
            {
              "color": "hsl(334, 70%, 50%)",
              "x": "BT",
              "y": 15
            },
            {
              "color": "hsl(142, 70%, 50%)",
              "x": "SC",
              "y": 21
            },
            {
              "color": "hsl(242, 70%, 50%)",
              "x": "MM",
              "y": 13
            },
            {
              "color": "hsl(57, 70%, 50%)",
              "x": "LA",
              "y": 40
            }
          ]
        }
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
      ],
      'dataS': [
        {
          "Raoul": 80,
          "Josiane": 14,
          "Marcel": 78,
          "René": 50,
          "Paul": 128,
          "Jacques": 174
        },
        {
          "Raoul": 133,
          "Josiane": 199,
          "Marcel": 197,
          "René": 57,
          "Paul": 90,
          "Jacques": 146
        },
        {
          "Raoul": 103,
          "Josiane": 15,
          "Marcel": 112,
          "René": 197,
          "Paul": 87,
          "Jacques": 50
        },
        {
          "Raoul": 181,
          "Josiane": 146,
          "Marcel": 109,
          "René": 168,
          "Paul": 175,
          "Jacques": 34
        },
        {
          "Raoul": 91,
          "Josiane": 128,
          "Marcel": 26,
          "René": 105,
          "Paul": 80,
          "Jacques": 117
        },
        {
          "Raoul": 119,
          "Josiane": 135,
          "Marcel": 110,
          "René": 86,
          "Paul": 176,
          "Jacques": 129
        },
        {
          "Raoul": 168,
          "Josiane": 29,
          "Marcel": 187,
          "René": 123,
          "Paul": 109,
          "Jacques": 15
        },
        {
          "Raoul": 171,
          "Josiane": 32,
          "Marcel": 91,
          "René": 96,
          "Paul": 41,
          "Jacques": 143
        },
        {
          "Raoul": 57,
          "Josiane": 143,
          "Marcel": 12,
          "René": 11,
          "Paul": 138,
          "Jacques": 47
        },
        {
          "Raoul": 131,
          "Josiane": 51,
          "Marcel": 54,
          "René": 42,
          "Paul": 77,
          "Jacques": 129
        },
        {
          "Raoul": 96,
          "Josiane": 136,
          "Marcel": 104,
          "René": 93,
          "Paul": 74,
          "Jacques": 153
        },
        {
          "Raoul": 173,
          "Josiane": 197,
          "Marcel": 42,
          "René": 32,
          "Paul": 61,
          "Jacques": 179
        },
        {
          "Raoul": 124,
          "Josiane": 105,
          "Marcel": 182,
          "René": 133,
          "Paul": 117,
          "Jacques": 143
        },
        {
          "Raoul": 37,
          "Josiane": 128,
          "Marcel": 23,
          "René": 176,
          "Paul": 144,
          "Jacques": 90
        },
        {
          "Raoul": 18,
          "Josiane": 42,
          "Marcel": 12,
          "René": 133,
          "Paul": 69,
          "Jacques": 69
        },
        {
          "Raoul": 58,
          "Josiane": 81,
          "Marcel": 159,
          "René": 130,
          "Paul": 190,
          "Jacques": 60
        }
      ],
      'pieData': [
        {
          "id": "haskell",
          "label": "haskell",
          "value": 543,
          "color": "hsl(353, 70%, 50%)"
        },
        {
          "id": "ruby",
          "label": "ruby",
          "value": 253,
          "color": "hsl(234, 70%, 50%)"
        },
        {
          "id": "javascript",
          "label": "javascript",
          "value": 21,
          "color": "hsl(18, 70%, 50%)"
        },
        {
          "id": "rust",
          "label": "rust",
          "value": 584,
          "color": "hsl(126, 70%, 50%)"
        },
        {
          "id": "java",
          "label": "java",
          "value": 376,
          "color": "hsl(96, 70%, 50%)"
        },
        {
          "id": "c",
          "label": "c",
          "value": 33,
          "color": "hsl(278, 70%, 50%)"
        },
        {
          "id": "css",
          "label": "css",
          "value": 333,
          "color": "hsl(34, 70%, 50%)"
        }
      ],
      'radarData': [
        {
          "taste": "fruity",
          "chardonay": 66,
          "carmenere": 47,
          "syrah": 75
        },
        {
          "taste": "bitter",
          "chardonay": 96,
          "carmenere": 92,
          "syrah": 92
        },
        {
          "taste": "heavy",
          "chardonay": 103,
          "carmenere": 21,
          "syrah": 40
        },
        {
          "taste": "strong",
          "chardonay": 107,
          "carmenere": 37,
          "syrah": 63
        },
        {
          "taste": "sunny",
          "chardonay": 29,
          "carmenere": 36,
          "syrah": 56
        }
      ]
    }
  }

  mapHandler = (event) => {
    let url = `http://twingiephp.us-west-2.elasticbeanstalk.com/analytics/state?state=${event.target.dataset.name.toLowerCase()}`
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
  };

  selectRep = (event) => {
    alert(event.target.dataset.name)
    this.setState({
      'selectedSenator': "name"
    })
  }

  render() {
    //Creates horizonal slides
    const graphsSlides = [
      <Slide> <LineGraph volume_line_graph={this.state.data} /> </Slide>,
      <Slide> <StreamGraph stream_data={this.state.dataS}/> </Slide>,
      <Slide> <PieGraph pie_data={this.state.pieData}/> </Slide>,
      <Slide> <RadarGraph radar_data={this.state.radarData}/> </Slide>
    ]
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
      <Slide> Slide 3.2 </Slide>
    ];

    //Assigns above consts as slide props
    graphsSlidesProps.slides = graphsSlides;
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
