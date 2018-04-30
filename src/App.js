import React, { Component } from 'react';
//import FrequencyGraph from './components/frequencyGraph';
//import HashtagHistogram from './components/hashtagHistogram';
import USAMap from "react-usa-map";
import { Media } from 'react-bootstrap';
import { Fullpage, Slide, HorizontalSlider, changeFullpageSlide } from 'fullpage-react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MediaTile from './components/MediaTile';
import LineGraph from './components/LineGraph';
import StreamGraph from './components/StreamGraph';
import BarGraph from './components/BarGraph';
import PieGraph from './components/PieGraph';
import RadarGraph from './components/RadarGraph';
import TweetGrid from './components/TweetGrid';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ScatterGraph from './components/ScatterGraph';
import ProgressStepper from './components/Stepper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import './App.css';

const menuStyles = {
  customWidth: {
    width: 200,
  },
};



const styles = {
  headline: {
    fontSize: 16,
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
      'cState': 'GA',
      'pState': 'GA',
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
      'radarData': null,
      'barData': [
        {
            "id": "China",
            "negative_occurences": 3,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 5,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "United States",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 7,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Great",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 7,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Russia",
            "negative_occurences": 4,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Washington",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 5,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "North Korea",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 5,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "MAGA",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 5,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Fake News Media",
            "negative_occurences": 2,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 3,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "James Comey",
            "negative_occurences": 3,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Congress",
            "negative_occurences": 2,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 3,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Japan",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 5,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Michigan",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 5,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "FBI",
            "negative_occurences": 2,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Syria",
            "negative_occurences": 4,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 0,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "California",
            "negative_occurences": 2,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Mike Pompeo",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 3,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "France",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 4,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Comey",
            "negative_occurences": 2,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Abe",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 4,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "House",
            "negative_occurences": 3,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 0,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Obama",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Syrian",
            "negative_occurences": 2,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 1,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "POTUS Trump",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Democrats",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "WhiteHouse",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 3,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Fake News",
            "negative_occurences": 3,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 0,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "White House",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Jerry Brown",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 3,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Border",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "American",
            "negative_occurences": 2,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 1,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "U.S.",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 3,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Barbara Bush",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Florida",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 3,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Senate",
            "negative_occurences": 2,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 1,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "South Korea",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "DOWN",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Jeff Sessions",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 1,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Trump",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Security",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 1,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Dems",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 1,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Department",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 1,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Justice",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 1,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "THANK",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Hillary",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Washington Post",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "America",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Failing New York Times",
            "negative_occurences": 2,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 0,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "Robert Mueller",
            "negative_occurences": 1,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 1,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "TPP",
            "negative_occurences": 0,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 2,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        },
        {
            "id": "McCabe",
            "negative_occurences": 2,
            "negative_occurencesColor": "hsl(280, 70%, 50%)",
            "positive_occurences": 0,
            "positive_occurencesColor": "hsl(15, 70%, 50%, 1)"
        }
    ],
      'scatterData': [
        {
            "data": [
                {
                    "id": 0,
                    "x": 60608,
                    "y": 0.9567948579788208
                }
            ],
            "id": "Thank you @WVGovernor Jim Justice. It was my great honor to be with the amazing people of West Virginia today! #MAGA https://t.co/IwPuQNadMM"
        },
        {
            "data": [
                {
                    "id": 1,
                    "x": 99895,
                    "y": 0.21326717734336853
                }
            ],
            "id": "Despite the Aluminum Tariffs, Aluminum prices are DOWN 4%. People are surprised, I’m not! Lots of money coming into… https://t.co/Tiq71ZBkv1"
        },
        {
            "data": [
                {
                    "id": 2,
                    "x": 37089,
                    "y": 0.06523200124502182
                }
            ],
            "id": "RT @realDonaldTrump: We are not in a trade war with China, that war was lost many years ago by the foolish, or incompetent, people who repr…"
        },
        {
            "data": [
                {
                    "id": 3,
                    "x": 120855,
                    "y": 0.0033646291121840477
                }
            ],
            "id": "China, which is a great economic power, is considered a Developing Nation within the World Trade Organization. They… https://t.co/eXEW4QeUiM"
        },
        {
            "data": [
                {
                    "id": 4,
                    "x": 113815,
                    "y": 0.07904601097106934
                }
            ],
            "id": "Do you believe that the Fake News Media is pushing hard on a story that I am going to replace A.G. Jeff Sessions wi… https://t.co/jChjmx1nKu"
        },
        {
            "data": [
                {
                    "id": 5,
                    "x": 85392,
                    "y": 0.23072539269924164
                }
            ],
            "id": "AMERICA IS OPEN FOR BUSINESS! https://t.co/5jxdojPZmN"
        },
        {
            "data": [
                {
                    "id": 6,
                    "x": 126650,
                    "y": 0.9824193716049194
                }
            ],
            "id": "“BET founder: Trump's economy is bringing black workers back into the labor force” https://t.co/TtMDfi4bv0"
        },
        {
            "data": [
                {
                    "id": 7,
                    "x": 49783,
                    "y": 0.1432497501373291
                }
            ],
            "id": "Congratulations to @bernieandsid on their new @77wabcradio morning radio show in New York City. It was an honor to… https://t.co/6qhLQPgxwl"
        },
        {
            "data": [
                {
                    "id": 8,
                    "x": 111322,
                    "y": 0.9693700075149536
                }
            ],
            "id": "Just spoke to @JustinTrudeau to pay my highest respect and condolences to the families of the terrible Humboldt Tea… https://t.co/C9UPsBZvb1"
        },
        {
            "data": [
                {
                    "id": 9,
                    "x": 112538,
                    "y": 0.08383989334106445
                }
            ],
            "id": "The United States hasn’t had a Trade Surplus with China in 40 years. They must end unfair trade, take down barriers… https://t.co/zK5bgWoVqw"
        },
        {
            "data": [
                {
                    "id": 10,
                    "x": 132517,
                    "y": 0.009592649526894093
                }
            ],
            "id": "We are sealing up our Southern Border. The people of our great country want Safety and Security. The Dems have been… https://t.co/N1O7JKAiR7"
        },
        {
            "data": [
                {
                    "id": 11,
                    "x": 101562,
                    "y": 0.7103767991065979
                }
            ],
            "id": "Lawmakers of the House Judiciary Committee are angrily accusing the Department of Justice of missing the Thursday D… https://t.co/x1ilNS0Dwz"
        },
        {
            "data": [
                {
                    "id": 12,
                    "x": 120853,
                    "y": 0.7310763001441956
                }
            ],
            "id": "What does the Department of Justice and FBI have to hide? Why aren’t they giving the strongly requested documents (… https://t.co/GunZYEWzMd"
        },
        {
            "data": [
                {
                    "id": 13,
                    "x": 160271,
                    "y": 0.6571694016456604
                }
            ],
            "id": "Fire at Trump Tower is out. Very confined (well built building). Firemen (and women) did a great job. THANK YOU!"
        },
        {
            "data": [
                {
                    "id": 14,
                    "x": 94111,
                    "y": 0.9324724674224854
                }
            ],
            "id": "While Security spending was somewhat more than his predecessor, Scott Pruitt has received death threats because of… https://t.co/kneEeK0koP"
        },
        {
            "data": [
                {
                    "id": 15,
                    "x": 99664,
                    "y": 0.05966515839099884
                }
            ],
            "id": "“The FBI closed the case on Hillary, which was a rigged investigation. They exonerated her even before they ever in… https://t.co/Xg0ZLHYGHu"
        },
        {
            "data": [
                {
                    "id": 16,
                    "x": 101640,
                    "y": 0.10284659266471863
                }
            ],
            "id": "The Washington Post is far more fiction than fact. Story after story is made up garbage - more like a poorly writte… https://t.co/cNgsBmnJlE"
        },
        {
            "data": [
                {
                    "id": 17,
                    "x": 131567,
                    "y": 0.09864185005426407
                }
            ],
            "id": "President Xi and I will always be friends, no matter what happens with our dispute on trade. China will take down i… https://t.co/BwfZ1XvHlB"
        },
        {
            "data": [
                {
                    "id": 18,
                    "x": 134759,
                    "y": 0.9289010167121887
                }
            ],
            "id": "Many dead, including women and children, in mindless CHEMICAL attack in Syria. Area of atrocity is in lockdown and… https://t.co/A1m0GgLV1L"
        },
        {
            "data": [
                {
                    "id": 19,
                    "x": 83313,
                    "y": 0.0039285533130168915
                }
            ],
            "id": "....to pay. Open area immediately for medical help and verification. Another humanitarian disaster for no reason whatsoever. SICK!"
        },
        {
            "data": [
                {
                    "id": 20,
                    "x": 116421,
                    "y": 0.001031602849252522
                }
            ],
            "id": "If President Obama had crossed his stated Red Line In The Sand, the Syrian disaster would have ended long ago! Anim… https://t.co/blQl4xUQ49"
        },
        {
            "data": [
                {
                    "id": 21,
                    "x": 105324,
                    "y": 0.8047309517860413
                }
            ],
            "id": "Congratulations to Patrick Reed on his great and courageous MASTERS win! When Patrick had his amazing win at Doral… https://t.co/ry4szk4uix"
        },
        {
            "data": [
                {
                    "id": 22,
                    "x": 223363,
                    "y": 0.003261096077039838
                }
            ],
            "id": "When a car is sent to the United States from China, there is a Tariff to be paid of 2 1/2%. When a car is sent to C… https://t.co/lKzX2101uS"
        },
        {
            "data": [
                {
                    "id": 23,
                    "x": 10822,
                    "y": 0.4251318871974945
                }
            ],
            "id": "RT @StateDept: .@POTUS Trump condemns the heinous attack on innocent Syrians with banned chemical weapons. #Syria https://t.co/qiEahlL3Ah"
        },
        {
            "data": [
                {
                    "id": 24,
                    "x": 131879,
                    "y": 0.023924486711621284
                }
            ],
            "id": "The Democrats are not doing what’s right for our country. I will not rest until we have secured our borders and res… https://t.co/Sa3HNQ2G35"
        },
        {
            "data": [
                {
                    "id": 25,
                    "x": 63756,
                    "y": 0.976443886756897
                }
            ],
            "id": "Great @Cabinet meeting at the @WhiteHouse this morning! https://t.co/kzmfovwUeb https://t.co/7AgbwbFNuw"
        },
        {
            "data": [
                {
                    "id": 26,
                    "x": 132185,
                    "y": 0.7150748372077942
                }
            ],
            "id": "Attorney–client privilege is dead!"
        },
        {
            "data": [
                {
                    "id": 27,
                    "x": 153734,
                    "y": 0.5543146729469299
                }
            ],
            "id": "A TOTAL WITCH HUNT!!!"
        },
        {
            "data": [
                {
                    "id": 28,
                    "x": 107298,
                    "y": 0.04381091147661209
                }
            ],
            "id": "Last night, it was my great honor to host America’s senior defense and military leaders for dinner at the White Hou… https://t.co/sa6xgJOMsX"
        },
        {
            "data": [
                {
                    "id": 29,
                    "x": 128948,
                    "y": 0.8176779747009277
                }
            ],
            "id": "Very thankful for President Xi of China’s kind words on tariffs and automobile barriers...also, his enlightenment o… https://t.co/rV24pPsGjV"
        },
        {
            "data": [
                {
                    "id": 30,
                    "x": 96710,
                    "y": 0.027396252378821373
                }
            ],
            "id": "Today, it was my great honor to welcome the 2017 NCAA Football National Champion, Alabama Crimson Tide - to the Whi… https://t.co/7XFdpF69XP"
        },
        {
            "data": [
                {
                    "id": 31,
                    "x": 84270,
                    "y": 0.4001583456993103
                }
            ],
            "id": "The Failing New York Times wrote another phony story. It was political pundit Doug Schoen, not a Ukrainian business… https://t.co/aUCx9In8GT"
        },
        {
            "data": [
                {
                    "id": 32,
                    "x": 85572,
                    "y": 0.352373331785202
                }
            ],
            "id": "So much Fake News about what is going on in the White House. Very calm and calculated with a big focus on open and… https://t.co/I7oFa69R7G"
        },
        {
            "data": [
                {
                    "id": 33,
                    "x": 94061,
                    "y": 0.983838677406311
                }
            ],
            "id": "....doing things that nobody thought possible, despite the never ending and corrupt Russia Investigation, which tak… https://t.co/UWNTYIUvlU"
        },
        {
            "data": [
                {
                    "id": 34,
                    "x": 239668,
                    "y": 0.2714974880218506
                }
            ],
            "id": "Russia vows to shoot down any and all missiles fired at Syria. Get ready Russia,  because they will be coming, nice… https://t.co/tFXJAYDnOh"
        },
        {
            "data": [
                {
                    "id": 35,
                    "x": 158136,
                    "y": 0.9567995667457581
                }
            ],
            "id": "Our relationship with Russia is worse now than it has ever been, and that includes the Cold War. There is no reason… https://t.co/5k5Xu5QBgg"
        },
        {
            "data": [
                {
                    "id": 36,
                    "x": 124709,
                    "y": 0.011193906888365746
                }
            ],
            "id": "Much of the bad blood with Russia is caused by the Fake &amp; Corrupt Russia Investigation, headed up by the all Democr… https://t.co/eA1AtTPv49"
        },
        {
            "data": [
                {
                    "id": 37,
                    "x": 71654,
                    "y": 0.00046172249130904675
                }
            ],
            "id": "Speaker Paul Ryan is a truly good man, and while he will not be seeking re-election, he will leave a legacy of achi… https://t.co/ijIKo4oSgl"
        },
        {
            "data": [
                {
                    "id": 38,
                    "x": 44527,
                    "y": 0.5610364675521851
                }
            ],
            "id": "The @WhiteHouse is partnering with @Interior and @NatlParkService to bring the @NSCsafety's “Prescribed to Death” O… https://t.co/MdAenfaoTX"
        },
        {
            "data": [
                {
                    "id": 39,
                    "x": 15018,
                    "y": 0.4820009171962738
                }
            ],
            "id": "RT @StateDept: .@POTUS Trump at Signing of #FOSTA #SESTA bill: We are going to do everything in our power to make sure traffickers are brou…"
        },
        {
            "data": [
                {
                    "id": 40,
                    "x": 85866,
                    "y": 0.0036278096958994865
                }
            ],
            "id": "“Trump just took a giant step towards actual welfare reform” https://t.co/LQlACDDLug"
        },
        {
            "data": [
                {
                    "id": 41,
                    "x": 69158,
                    "y": 0.9363093376159668
                }
            ],
            "id": "Honored to have Republican Congressional Leadership join me at the @WhiteHouse this evening. Lots to discuss as we… https://t.co/83tJjXjGKf"
        },
        {
            "data": [
                {
                    "id": 42,
                    "x": 66802,
                    "y": 0.026071783155202866
                }
            ],
            "id": "Big show tonight on @seanhannity! 9:00 P.M. on @FoxNews"
        },
        {
            "data": [
                {
                    "id": 43,
                    "x": 106623,
                    "y": 0.19666221737861633
                }
            ],
            "id": "If I wanted to fire Robert Mueller in December, as reported by the Failing New York Times, I would have fired him.… https://t.co/wi7FDNjqK7"
        },
        {
            "data": [
                {
                    "id": 44,
                    "x": 101032,
                    "y": 0.0008074782672338188
                }
            ],
            "id": "California Governor Jerry Brown is doing the right thing and sending the National Guard to the Border. Thank you Je… https://t.co/yGcycH1xav"
        },
        {
            "data": [
                {
                    "id": 45,
                    "x": 139589,
                    "y": 0.9160746335983276
                }
            ],
            "id": "Never said when an attack on Syria would take place. Could be very soon or not so soon at all! In any event, the Un… https://t.co/drplEtWxNu"
        },
        {
            "data": [
                {
                    "id": 46,
                    "x": 75033,
                    "y": 0.844070315361023
                }
            ],
            "id": "Good luck to Mike Pompeo during his Confirmation Hearing today. He will be a great Secretary of State!"
        },
        {
            "data": [
                {
                    "id": 47,
                    "x": 82724,
                    "y": 0.12999412417411804
                }
            ],
            "id": "On Yom HaShoah we remember the six million Jews slaughtered in the Holocaust. With each passing year, our duty to r… https://t.co/yZ0pleVvDm"
        },
        {
            "data": [
                {
                    "id": 48,
                    "x": 99698,
                    "y": 0.9667972922325134
                }
            ],
            "id": "I have agreed with the historically cooperative, disciplined approach that we have engaged in with Robert Mueller (… https://t.co/yjSuYhmzJb"
        },
        {
            "data": [
                {
                    "id": 49,
                    "x": 79832,
                    "y": 0.9852057099342346
                }
            ],
            "id": "Thank you to all of the American workers who travelled here today! This event is dedicated to YOU: the hardworking… https://t.co/SQmpmS7Rvs"
        },
        {
            "data": [
                {
                    "id": 50,
                    "x": 101195,
                    "y": 0.017036115750670433
                }
            ],
            "id": "America’s greatest treasure is our people – and my Administration HEARS YOUR VOICE and HAS YOUR BACK. We are fighti… https://t.co/rkCWxcovmg"
        },
        {
            "data": [
                {
                    "id": 51,
                    "x": 95522,
                    "y": 0.891828715801239
                }
            ],
            "id": "Would only join TPP if the deal were substantially better than the deal offered to Pres. Obama. We already have BIL… https://t.co/OxSaor5rl3"
        },
        {
            "data": [
                {
                    "id": 52,
                    "x": 132044,
                    "y": 0.0030065947212278843
                }
            ],
            "id": "Tremendous pressure is building, like never before, for the Border Wall and an end to crime cradling Sanctuary Citi… https://t.co/WSvff6EI9G"
        },
        {
            "data": [
                {
                    "id": 53,
                    "x": 160794,
                    "y": 0.0008707423112355173
                }
            ],
            "id": "James Comey is a proven LEAKER &amp; LIAR. Virtually everyone in Washington thought he should be fired for the terrible… https://t.co/qKF0zshrZy"
        },
        {
            "data": [
                {
                    "id": 54,
                    "x": 178279,
                    "y": 0.0018598188180476427
                }
            ],
            "id": "....untruthful slime ball who was, as time has proven, a terrible Director of the FBI. His handling of the Crooked… https://t.co/GHQzyOWUT5"
        },
        {
            "data": [
                {
                    "id": 55,
                    "x": 136605,
                    "y": 0.26722249388694763
                }
            ],
            "id": "We are bringing back our factories, we are bringing back our jobs, and we are bringing back those four beautiful wo… https://t.co/nxiHk4sZZr"
        },
        {
            "data": [
                {
                    "id": 56,
                    "x": 163553,
                    "y": 0.00010164920968236402
                }
            ],
            "id": "DOJ just issued the McCabe report - which is a total disaster. He LIED! LIED! LIED! McCabe was totally controlled b… https://t.co/gK2Zjw6HyE"
        },
        {
            "data": [
                {
                    "id": 57,
                    "x": 140313,
                    "y": 0.5469783544540405
                }
            ],
            "id": "https://t.co/6VLQYAlcto"
        },
        {
            "data": [
                {
                    "id": 58,
                    "x": 243615,
                    "y": 0.6144610643386841
                }
            ],
            "id": "A perfectly executed strike last night. Thank you to France and the United Kingdom for their wisdom and the power o… https://t.co/oIPJVo3zQn"
        },
        {
            "data": [
                {
                    "id": 59,
                    "x": 191359,
                    "y": 0.9420796632766724
                }
            ],
            "id": "So proud of our great Military which will soon be, after the spending of billions of fully approved dollars, the fi… https://t.co/kZ5qqY35s1"
        },
        {
            "data": [
                {
                    "id": 60,
                    "x": 18464,
                    "y": 0.5469783544540405
                }
            ],
            "id": "RT @nikkihaley: https://t.co/oO3wIKolMy"
        },
        {
            "data": [
                {
                    "id": 61,
                    "x": 30357,
                    "y": 0.8969919681549072
                }
            ],
            "id": "RT @realDonaldTrump: So proud of our great Military which will soon be, after the spending of billions of fully approved dollars, the fines…"
        },
        {
            "data": [
                {
                    "id": 62,
                    "x": 134386,
                    "y": 0.05320313200354576
                }
            ],
            "id": "Unbelievably, James Comey states that Polls, where Crooked Hillary was leading, were a factor in the handling (stup… https://t.co/0WH4arK3ft"
        },
        {
            "data": [
                {
                    "id": 63,
                    "x": 129000,
                    "y": 0.0030025539454072714
                }
            ],
            "id": "The big questions in Comey’s badly reviewed book aren’t answered like, how come he gave up Classified Information (… https://t.co/rTrDHRqD5S"
        },
        {
            "data": [
                {
                    "id": 64,
                    "x": 128692,
                    "y": 0.6009487509727478
                }
            ],
            "id": "Comey throws AG Lynch “under the bus!” Why can’t we all find out what happened on the tarmac in the back of the pla… https://t.co/54vPnoqxsl"
        },
        {
            "data": [
                {
                    "id": 65,
                    "x": 139769,
                    "y": 0.00294570904225111
                }
            ],
            "id": "The Syrian raid was so perfectly carried out, with such precision, that the only way the Fake News Media could deme… https://t.co/PVFzvasea5"
        },
        {
            "data": [
                {
                    "id": 66,
                    "x": 124830,
                    "y": 0.33728739619255066
                }
            ],
            "id": "I never asked Comey for Personal Loyalty. I hardly even knew this guy. Just another of his many lies. His “memos” are self serving and FAKE!"
        },
        {
            "data": [
                {
                    "id": 67,
                    "x": 127176,
                    "y": 0.2911597192287445
                }
            ],
            "id": "Attorney Client privilege is now a thing of the past. I have many (too many!) lawyers and they are probably wonderi… https://t.co/pnYvIGR8Tw"
        },
        {
            "data": [
                {
                    "id": 68,
                    "x": 121611,
                    "y": 0.019090140238404274
                }
            ],
            "id": "Slippery James Comey, a man who always ends up badly and out of whack (he is not smart!), will go down as the WORST… https://t.co/YSTiN7oLWq"
        },
        {
            "data": [
                {
                    "id": 69,
                    "x": 171378,
                    "y": 0.9865847826004028
                }
            ],
            "id": "Just hit 50% in the Rasmussen Poll, much higher than President Obama at same point. With all of the phony stories a… https://t.co/J2tMvPcCtK"
        },
        {
            "data": [
                {
                    "id": 70,
                    "x": 141659,
                    "y": 0.09859557449817657
                }
            ],
            "id": "Comey drafted the Crooked Hillary exoneration long before he talked to her (lied in Congress to Senator G), then ba… https://t.co/X4GPSNm0KK"
        },
        {
            "data": [
                {
                    "id": 71,
                    "x": 119404,
                    "y": 0.0010557721834629774
                }
            ],
            "id": "Russia and China are playing the Currency Devaluation game as the U.S. keeps raising interest rates. Not acceptable!"
        },
        {
            "data": [
                {
                    "id": 72,
                    "x": 6960,
                    "y": 0.3348764181137085
                }
            ],
            "id": "RT @GOPChairwoman: We’re in a prime position to defend our majorities in 2018. Let’s defy history. #MAGA #LeadRight\nhttps://t.co/fo8g0pSjWQ"
        },
        {
            "data": [
                {
                    "id": 73,
                    "x": 7573,
                    "y": 0.8019033074378967
                }
            ],
            "id": "RT @GOPChairwoman: Comey’s misconduct once led both Republicans and Democrats to call for his firing. His reputation rehabilitation book to…"
        },
        {
            "data": [
                {
                    "id": 74,
                    "x": 5068,
                    "y": 0.9749749302864075
                }
            ],
            "id": "RT @GOP: Our entire RNC family offers prayers of comfort and peace for Barbara Bush and the entire Bush family."
        },
        {
            "data": [
                {
                    "id": 75,
                    "x": 6661,
                    "y": 0.8721006512641907
                }
            ],
            "id": "RT @IvankaTrump: Looking forward to traveling to Manchester, NH tomorrow with Sec @stevenmnuchin1 to celebrate the last #TaxDay under the o…"
        },
        {
            "data": [
                {
                    "id": 76,
                    "x": 5816,
                    "y": 0.8669031262397766
                }
            ],
            "id": "RT @WaysandMeansGOP: Tomorrow is #TaxDay and the good news is this is the last year you will have to file using the old, broken code. Check…"
        },
        {
            "data": [
                {
                    "id": 77,
                    "x": 9200,
                    "y": 0.4249511957168579
                }
            ],
            "id": "RT @GOPChairwoman: Crumbs are still coming. #MAGA\nhttps://t.co/JFZL6czboZ"
        },
        {
            "data": [
                {
                    "id": 78,
                    "x": 149503,
                    "y": 0.6621753573417664
                }
            ],
            "id": "Employment is up, Taxes are DOWN. Enjoy!"
        },
        {
            "data": [
                {
                    "id": 79,
                    "x": 75682,
                    "y": 0.31523483991622925
                }
            ],
            "id": "I am in Florida and looking forward to my meeting with Prime Minister Abe of Japan. Working on Trade and Military Security."
        },
        {
            "data": [
                {
                    "id": 80,
                    "x": 100781,
                    "y": 0.0009329071035608649
                }
            ],
            "id": "So many people are seeing the benefits of the Tax Cut Bill. Everyone is talking, really nice to see!"
        },
        {
            "data": [
                {
                    "id": 81,
                    "x": 80347,
                    "y": 0.12016653269529343
                }
            ],
            "id": "Looks like Jerry Brown and California are not looking for safety and security along their very porous Border. He ca… https://t.co/ngO5hLiIWx"
        },
        {
            "data": [
                {
                    "id": 82,
                    "x": 4688,
                    "y": 0.9271486401557922
                }
            ],
            "id": "RT @WhiteHouse: President Trump's tax cuts will generate greater economic opportunities for all. https://t.co/kcTsLNN1Uu"
        },
        {
            "data": [
                {
                    "id": 83,
                    "x": 5163,
                    "y": 0.03357498347759247
                }
            ],
            "id": "RT @WhiteHouse: Out with the old, in with the new: tax cuts and reforms that look out for hardworking taxpayers ⬇️\nhttps://t.co/eEHFWkG8xm"
        },
        {
            "data": [
                {
                    "id": 84,
                    "x": 4110,
                    "y": 0.40468642115592957
                }
            ],
            "id": "RT @WhiteHouse: Syrian President Bashar al-Assad’s April 7 attack on innocent civilians violated international law, the Chemical Weapons Co…"
        },
        {
            "data": [
                {
                    "id": 85,
                    "x": 5202,
                    "y": 0.6962817907333374
                }
            ],
            "id": "RT @RepKevinBrady: Starting next year, you will be able to file under the new tax law, which means MORE money in your pocket – all without…"
        },
        {
            "data": [
                {
                    "id": 86,
                    "x": 11246,
                    "y": 0.9252787828445435
                }
            ],
            "id": "RT @VP: Thanks to the historic TRUMP TAX CUTS, today marks the last time the American people will file taxes under a complicated &amp; outdated…"
        },
        {
            "data": [
                {
                    "id": 87,
                    "x": 4394,
                    "y": 0.006564762908965349
                }
            ],
            "id": "RT @NFIB: Our Optimism Index reached its 16th consecutive month in the top 5% of 45 years of survey readings – and it was the 1st time in 3…"
        },
        {
            "data": [
                {
                    "id": 88,
                    "x": 78312,
                    "y": 0.7637315988540649
                }
            ],
            "id": "Getting ready to meet Prime Minister Abe of Japan, a truly fine gentleman!"
        },
        {
            "data": [
                {
                    "id": 89,
                    "x": 96442,
                    "y": 0.2229655534029007
                }
            ],
            "id": "Rasmussen just came out at 51% Approval despite the Fake News Media. They were one of the three most accurate on El… https://t.co/PccBDzTejl"
        },
        {
            "data": [
                {
                    "id": 90,
                    "x": 72943,
                    "y": 0.15931977331638336
                }
            ],
            "id": "Welcome Prime Minister Abe! https://t.co/538EYyfWDq"
        },
        {
            "data": [
                {
                    "id": 91,
                    "x": 68838,
                    "y": 0.993320882320404
                }
            ],
            "id": "....Congress – House and Senate must quickly pass a legislative fix to ensure violent criminal aliens can be remove… https://t.co/lwGag991ch"
        },
        {
            "data": [
                {
                    "id": 92,
                    "x": 82729,
                    "y": 0.6674573421478271
                }
            ],
            "id": "Today’s Court decision means that Congress must close loopholes that block the removal of dangerous criminal aliens… https://t.co/6W1sRzLH1f"
        },
        {
            "data": [
                {
                    "id": 93,
                    "x": 4668,
                    "y": 0.010479850694537163
                }
            ],
            "id": "RT @FoxBusiness: WATCH LIVE: @IvankaTrump and @stevenmnuchin1 host tax event on Tax Day in New Hampshire. (Courtesy: WBZ) https://t.co/C3zr…"
        },
        {
            "data": [
                {
                    "id": 94,
                    "x": 5553,
                    "y": 0.988264799118042
                }
            ],
            "id": "RT @IvankaTrump: Great to be with Secretary Mnuchin &amp; former Governor Sununu in Derry, NH on #TaxDay to highlight the tremendous benefits o…"
        },
        {
            "data": [
                {
                    "id": 95,
                    "x": 84266,
                    "y": 0.36657917499542236
                }
            ],
            "id": "States and Cities throughout our Country are being cheated and treated so badly by online retailers. Very unfair to… https://t.co/CSLMfhPLLq"
        },
        {
            "data": [
                {
                    "id": 96,
                    "x": 54049,
                    "y": 0.21481116116046906
                }
            ],
            "id": ".@FLOTUS Melania and I join the Nation in celebrating the life of Barbara Bush: https://t.co/4OW72iddQx"
        },
        {
            "data": [
                {
                    "id": 97,
                    "x": 52084,
                    "y": 0.5442872047424316
                }
            ],
            "id": "It is my great honor to host @JPN_PMO @AbeShinzo! https://t.co/QxMpCGRycF"
        },
        {
            "data": [
                {
                    "id": 98,
                    "x": 105478,
                    "y": 0.8783889412879944
                }
            ],
            "id": "Pastor Andrew Brunson, a fine gentleman and Christian leader in the United States, is on trial and being persecuted… https://t.co/NCEchahdPc"
        },
        {
            "data": [
                {
                    "id": 99,
                    "x": 96352,
                    "y": 0.055235281586647034
                }
            ],
            "id": "While Japan and South Korea would like us to go back into TPP, I don’t like the deal for the United States. Too man… https://t.co/IYwJhsGNsF"
        },
        {
            "data": [
                {
                    "id": 100,
                    "x": 13120,
                    "y": 0.9892136454582214
                }
            ],
            "id": "RT @realDonaldTrump: ....Congress – House and Senate must quickly pass a legislative fix to ensure violent criminal aliens can be removed f…"
        },
        {
            "data": [
                {
                    "id": 101,
                    "x": 15802,
                    "y": 0.5040148496627808
                }
            ],
            "id": "RT @realDonaldTrump: Today’s Court decision means that Congress must close loopholes that block the removal of dangerous criminal aliens, i…"
        },
        {
            "data": [
                {
                    "id": 102,
                    "x": 14221,
                    "y": 0.3486884534358978
                }
            ],
            "id": "RT @realDonaldTrump: States and Cities throughout our Country are being cheated and treated so badly by online retailers. Very unfair to tr…"
        },
        {
            "data": [
                {
                    "id": 103,
                    "x": 8643,
                    "y": 0.6416534781455994
                }
            ],
            "id": "RT @IvankaTrump: This year’s #TaxDay is the last time you’ll have to file your taxes through an outdated, broken system. #BYE-BYE https://t…"
        },
        {
            "data": [
                {
                    "id": 104,
                    "x": 20140,
                    "y": 0.5469783544540405
                }
            ],
            "id": "RT @AbeShinzo: フロリダに到着し、早速トランプ大統領との首脳会談に臨みました。今日は、大半を北朝鮮問題に費やし、非常に重要な点で認識を一致させることができました。\n「日本のために最善となるようベストを尽くす」\nトランプ大統領は、来る米朝首脳会談で拉致問題を取り上げ…"
        },
        {
            "data": [
                {
                    "id": 105,
                    "x": 144354,
                    "y": 0.6384574174880981
                }
            ],
            "id": "There is a Revolution going on in California. Soooo many Sanctuary areas want OUT of this ridiculous, crime infeste… https://t.co/hNQmJXQ0Zz"
        },
        {
            "data": [
                {
                    "id": 106,
                    "x": 79598,
                    "y": 0.0006383768050000072
                }
            ],
            "id": "A sketch years later about a nonexistent man. A total con job, playing the Fake News Media for Fools (but they know… https://t.co/EcZ0Hs5IJg"
        },
        {
            "data": [
                {
                    "id": 107,
                    "x": 126831,
                    "y": 0.009008828550577164
                }
            ],
            "id": "Mike Pompeo met with Kim Jong Un in North Korea last week. Meeting went very smoothly and a good relationship was f… https://t.co/5zMrs47vF3"
        },
        {
            "data": [
                {
                    "id": 108,
                    "x": 119039,
                    "y": 0.2629276514053345
                }
            ],
            "id": "Slippery James Comey, the worst FBI Director in history, was not fired because of the phony Russia investigation wh… https://t.co/iJO4tejdw6"
        },
        {
            "data": [
                {
                    "id": 109,
                    "x": 125930,
                    "y": 0.0774841457605362
                }
            ],
            "id": "Best wishes to Prime Minister @Netanyahu and all of the people of Israel on the 70th Anniversary of your Great Inde… https://t.co/xRwM6h8nfl"
        },
        {
            "data": [
                {
                    "id": 110,
                    "x": 91010,
                    "y": 0.142795130610466
                }
            ],
            "id": "Prime Minister @AbeShinzo of Japan and myself this morning building an even deeper and better relationship while pl… https://t.co/3paSdvrOWu"
        },
        {
            "data": [
                {
                    "id": 111,
                    "x": 77526,
                    "y": 0.3656265139579773
                }
            ],
            "id": "Great working luncheon with U.S. and Japanese Delegations this afternoon! https://t.co/ywU2CEih8b"
        },
        {
            "data": [
                {
                    "id": 112,
                    "x": 8423,
                    "y": 0.054656609892845154
                }
            ],
            "id": "RT @StateDept: .@POTUS Trump thanks Prime Minister @AbeShinzo for his support, discusses U.S.-Japan cooperation on #NorthKorea, defense, an…"
        },
        {
            "data": [
                {
                    "id": 113,
                    "x": 79744,
                    "y": 0.058215655386447906
                }
            ],
            "id": "It was my great honor to host my friend @JPN_PMO @AbeShinzo and his delegation at Mar-a-Lago for the past two days.… https://t.co/MjT3f7BAv3"
        },
        {
            "data": [
                {
                    "id": 114,
                    "x": 85528,
                    "y": 0.22041091322898865
                }
            ],
            "id": "Great meeting with Prime Minister Abe of Japan, who has just left Florida. Talked in depth about North Korea, Milit… https://t.co/Tv1QmZN4IE"
        },
        {
            "data": [
                {
                    "id": 115,
                    "x": 106514,
                    "y": 0.020505843684077263
                }
            ],
            "id": "Thank you San Diego County for defending the rule of law and supporting our lawsuit against California's illegal an… https://t.co/4mH0InRGwt"
        },
        {
            "data": [
                {
                    "id": 116,
                    "x": 104662,
                    "y": 0.00039194445707835257
                }
            ],
            "id": "Governor Jerry Brown announced he will deploy “up to 400 National Guard Troops” to do nothing. The crime rate in Ca… https://t.co/I1ag2ckky1"
        },
        {
            "data": [
                {
                    "id": 117,
                    "x": 53918,
                    "y": 0.766115665435791
                }
            ],
            "id": "Just arrived @NASKeyWest! Heading to a briefing with the Joint Interagency Task Force South, NORTHCOM and SOUTHCOM. https://t.co/r906IXnBcG"
        },
        {
            "data": [
                {
                    "id": 118,
                    "x": 38113,
                    "y": 0.8545917868614197
                }
            ],
            "id": "THANK YOU #JIATFSouth, @Norad_Northcom, @southcomwatch and @DHSgov. Keep up the GREAT work! https://t.co/3v2uG6Jp1T"
        },
        {
            "data": [
                {
                    "id": 119,
                    "x": 75405,
                    "y": 0.02161232940852642
                }
            ],
            "id": ".@MarshaBlackburn is a wonderful woman who has always been there when we have needed her. Great on the Military, Bo… https://t.co/ljbsW8m8k6"
        },
        {
            "data": [
                {
                    "id": 120,
                    "x": 123064,
                    "y": 0.03195299208164215
                }
            ],
            "id": "Democrats are obstructing good (hopefully great) people wanting to give up a big portion of their life to work for… https://t.co/3bVTf4bSEk"
        },
        {
            "data": [
                {
                    "id": 121,
                    "x": 92522,
                    "y": 0.007011589594185352
                }
            ],
            "id": "...Hopefully the Senate will not leave Washington until our Ambassadors, Judges and the people who make Washington… https://t.co/QdNusStstl"
        },
        {
            "data": [
                {
                    "id": 122,
                    "x": 113726,
                    "y": 0.9913923740386963
                }
            ],
            "id": "Mike Pompeo is outstanding. First in his class at West Point. A top student at Harvard Law School. A success at wha… https://t.co/L6ojtZ8lW8"
        },
        {
            "data": [
                {
                    "id": 123,
                    "x": 80222,
                    "y": 0.8584478497505188
                }
            ],
            "id": "My thoughts, prayers and condolences are with the families, friends and colleagues of the two @GCSOFlorida deputies… https://t.co/tgjwJuZNiO"
        },
        {
            "data": [
                {
                    "id": 124,
                    "x": 94503,
                    "y": 0.16216960549354553
                }
            ],
            "id": "Sanctuary Cities released at least 142 Gang Members across the United States, making it easy for them to commit all… https://t.co/8HLBQXDCMJ"
        },
        {
            "data": [
                {
                    "id": 125,
                    "x": 106981,
                    "y": 0.060849979519844055
                }
            ],
            "id": "James Comey just threw Andrew McCabe “under the bus.” Inspector General’s Report on McCabe is a disaster for both o… https://t.co/EGXMB6QIkW"
        },
        {
            "data": [
                {
                    "id": 126,
                    "x": 127770,
                    "y": 0.061098843812942505
                }
            ],
            "id": "James Comey Memos just out and show clearly that there was NO COLLUSION and NO OBSTRUCTION. Also, he leaked classif… https://t.co/YfMYBrTkza"
        },
        {
            "data": [
                {
                    "id": 127,
                    "x": 139719,
                    "y": 0.002971508540213108
                }
            ],
            "id": "So General Michael Flynn’s life can be totally destroyed while Shadey James Comey can Leak and Lie and make lots of… https://t.co/q1lyKyyeYI"
        },
        {
            "data": [
                {
                    "id": 128,
                    "x": 136452,
                    "y": 0.745107889175415
                }
            ],
            "id": "So exciting! I have agreed to be the Commencement Speaker at our GREAT Naval Academy on May 25th in Annapolis, Mary… https://t.co/L9iZ6RS3ft"
        },
        {
            "data": [
                {
                    "id": 129,
                    "x": 139289,
                    "y": 0.9232475757598877
                }
            ],
            "id": "Nancy Pelosi is going absolutely crazy about the big Tax Cuts given to the American People by the Republicans...got… https://t.co/0REgmJNMqT"
        },
        {
            "data": [
                {
                    "id": 130,
                    "x": 122333,
                    "y": 0.06242457032203674
                }
            ],
            "id": "Looks like OPEC is at it again. With record amounts of Oil all over the place, including the fully loaded ships at… https://t.co/l5MMjmtI14"
        },
        {
            "data": [
                {
                    "id": 131,
                    "x": 163634,
                    "y": 0.9544001221656799
                }
            ],
            "id": "Can you believe that despite 93% bad stories from the Fake News Media (should be getting good stories), today we ha… https://t.co/x5Ad5M5UOi"
        },
        {
            "data": [
                {
                    "id": 132,
                    "x": 233601,
                    "y": 0.41103896498680115
                }
            ],
            "id": "North Korea has agreed to suspend all Nuclear Tests and close up a major test site. This is very good news for Nort… https://t.co/f7SCDPLvm0"
        },
        {
            "data": [
                {
                    "id": 133,
                    "x": 142926,
                    "y": 0.06867433339357376
                }
            ],
            "id": "Just heard the Campaign was sued by the Obstructionist Democrats. This can be good news in that we will now counter… https://t.co/77ChXaPzvm"
        },
        {
            "data": [
                {
                    "id": 134,
                    "x": 134964,
                    "y": 0.9774048328399658
                }
            ],
            "id": "James Comey illegally leaked classified documents to the press in order to generate a Special Council? Therefore, t… https://t.co/5Oeo81Disr"
        },
        {
            "data": [
                {
                    "id": 135,
                    "x": 174865,
                    "y": 0.005151212215423584
                }
            ],
            "id": "A message from Kim Jong Un: “North Korea will stop nuclear tests and launches of intercontinental ballistic missile… https://t.co/S6q8mESfn7"
        },
        {
            "data": [
                {
                    "id": 136,
                    "x": 74240,
                    "y": 0.026234949007630348
                }
            ],
            "id": "The New York Times and a third rate reporter named Maggie Haberman, known as a Crooked H flunkie who I don’t speak… https://t.co/du9mLxGUjS"
        },
        {
            "data": [
                {
                    "id": 137,
                    "x": 64351,
                    "y": 0.9827890992164612
                }
            ],
            "id": "....it means lying or making up stories. Sorry, I don’t see Michael doing that despite the horrible Witch Hunt and the dishonest media!"
        },
        {
            "data": [
                {
                    "id": 138,
                    "x": 60003,
                    "y": 0.9248477816581726
                }
            ],
            "id": "....non-existent “sources” and a drunk/drugged up loser who hates Michael, a fine person with a wonderful family. M… https://t.co/dlBa5kZQId"
        },
        {
            "data": [
                {
                    "id": 139,
                    "x": 51781,
                    "y": 0.556313157081604
                }
            ],
            "id": "Join me in Washington, Michigan on Saturday, April 28, 2018 at 7:00pm! #MAGA Tickets: https://t.co/DISosdqBuu https://t.co/gHdTgHw5FU"
        },
        {
            "data": [
                {
                    "id": 140,
                    "x": 82615,
                    "y": 0.28515157103538513
                }
            ],
            "id": "Fantastic crowd and great people yesterday in Key West, Florida. Thank you! https://t.co/HqOUFgmbQS"
        },
        {
            "data": [
                {
                    "id": 141,
                    "x": 91438,
                    "y": 0.9867913722991943
                }
            ],
            "id": "Today, my thoughts and prayers are with the entire Bush family. In memory of First Lady Barbara Bush, there is a re… https://t.co/Ryu60C8jI3"
        },
        {
            "data": [
                {
                    "id": 142,
                    "x": 90327,
                    "y": 0.05818716064095497
                }
            ],
            "id": "Heading to the Southern White House to watch the Funeral Service of Barbara Bush. First Lady Melania has arrived in… https://t.co/7tUt7jmI8N"
        },
        {
            "data": [
                {
                    "id": 143,
                    "x": 119806,
                    "y": 0.10004910826683044
                }
            ],
            "id": "So funny, the Democrats have sued the Republicans for Winning. Now he R’s counter and force them to turn over a tre… https://t.co/xk8hm1WM14"
        },
        {
            "data": [
                {
                    "id": 144,
                    "x": 120229,
                    "y": 0.2863210141658783
                }
            ],
            "id": "Sylvester Stallone called me with the story of heavyweight boxing champion Jack Johnson. His trials and tribulation… https://t.co/kQCWb2UOpH"
        },
        {
            "data": [
                {
                    "id": 145,
                    "x": 96587,
                    "y": 0.44878917932510376
                }
            ],
            "id": "James Comey’s Memos are Classified, I did not Declassify them. They belong to our Government! Therefore, he broke t… https://t.co/Qw0POMocIy"
        },
        {
            "data": [
                {
                    "id": 146,
                    "x": 86325,
                    "y": 0.18507631123065948
                }
            ],
            "id": "The Washington Post said I refer to Jeff Sessions as “Mr. Magoo” and Rod Rosenstein as “Mr. Peepers.” This is “acco… https://t.co/ISMM0vuii6"
        },
        {
            "data": [
                {
                    "id": 147,
                    "x": 7597,
                    "y": 0.543682873249054
                }
            ],
            "id": "RT @dmartosko: The same can be said of the \"collusion\" stuff. https://t.co/xMCVuH3OTs"
        },
        {
            "data": [
                {
                    "id": 148,
                    "x": 111053,
                    "y": 0.8631550073623657
                }
            ],
            "id": "“At least two Memos Comey shared with a friend contained Classified Information.”  Wall Street Journal"
        },
        {
            "data": [
                {
                    "id": 149,
                    "x": 108855,
                    "y": 0.10009998828172684
                }
            ],
            "id": "“GOP Lawmakers asking Sessions to Investigate Comey and Hillary Clinton.” @FoxNews   Good luck with that request!"
        },
        {
            "data": [
                {
                    "id": 150,
                    "x": 127704,
                    "y": 0.21357104182243347
                }
            ],
            "id": "Sleepy Eyes Chuck Todd of Fake News NBC just stated that we have given up so much in our negotiations with North Ko… https://t.co/SycCm3qDvI"
        },
        {
            "data": [
                {
                    "id": 151,
                    "x": 127799,
                    "y": 0.47053202986717224
                }
            ],
            "id": "....We are a long way from conclusion on North Korea, maybe things will work out, and maybe they won’t - only time… https://t.co/vnYXvuzQVy"
        },
        {
            "data": [
                {
                    "id": 152,
                    "x": 107587,
                    "y": 0.2867298722267151
                }
            ],
            "id": "“I can die happy now with Trump Job performance,” stated Mary Matalin. “A great overall President, stunning!” Thank you Mary."
        },
        {
            "data": [
                {
                    "id": 153,
                    "x": 116196,
                    "y": 0.5364089012145996
                }
            ],
            "id": "A complete Witch Hunt!"
        },
        {
            "data": [
                {
                    "id": 154,
                    "x": 149281,
                    "y": 0.05290347337722778
                }
            ],
            "id": "Funny how all of the Pundits that couldn’t come close to making a deal on North Korea are now all over the place te… https://t.co/SBc5VJlOdw"
        },
        {
            "data": [
                {
                    "id": 155,
                    "x": 118816,
                    "y": 0.6337469220161438
                }
            ],
            "id": "Kim Strassel of the WSJ just said, after reviewing the dumb Comey Memos, “you got to ask, what was the purpose of t… https://t.co/tjHeBnSJof"
        },
        {
            "data": [
                {
                    "id": 156,
                    "x": 111148,
                    "y": 0.5885849595069885
                }
            ],
            "id": "Thank you to the incredible Law Enforcement Officers from the Palm Beach County Sheriff’s Office. They keep us safe… https://t.co/ehyO5Ljcou"
        },
        {
            "data": [
                {
                    "id": 157,
                    "x": 112240,
                    "y": 0.9970670342445374
                }
            ],
            "id": "Hard to believe Obstructionists May vote against Mike Pompeo for Secretary of State. The Dems will not approve hund… https://t.co/ZElatyv8Fx"
        },
        {
            "data": [
                {
                    "id": 158,
                    "x": 128712,
                    "y": 0.27631428837776184
                }
            ],
            "id": "Despite the Democrat inspired laws on Sanctuary Cities and the Border being so bad and one sided, I have instructed… https://t.co/aT1zwHmK6t"
        },
        {
            "data": [
                {
                    "id": 159,
                    "x": 130691,
                    "y": 0.0005559282726608217
                }
            ],
            "id": "Mexico, whose laws on immigration are very tough, must stop people from going through Mexico and into the U.S. We m… https://t.co/mOUwvFuCpS"
        },
        {
            "data": [
                {
                    "id": 160,
                    "x": 185020,
                    "y": 0.0009195883176289499
                }
            ],
            "id": "Here’s a great stat - since January 2017, the number of people forced to use food stamps is down 1.9 million. The A… https://t.co/TWeJRygTfm"
        },
        {
            "data": [
                {
                    "id": 161,
                    "x": 9090,
                    "y": 0.9162655472755432
                }
            ],
            "id": "RT @mike_pence: PROUD to support our friend @VoteMarsha for US Senate representing Tennessee. Marsha Blackburn is a rock-ribbed conservativ…"
        },
        {
            "data": [
                {
                    "id": 162,
                    "x": 61078,
                    "y": 0.8620726466178894
                }
            ],
            "id": "Having great meetings and discussions with my friend, President @EmmanuelMacron of France. We are in the midst of m… https://t.co/Dd4x7XmV2v"
        },
        {
            "data": [
                {
                    "id": 163,
                    "x": 45817,
                    "y": 0.9131002426147461
                }
            ],
            "id": "Americans stand with you and all of Canada, Prime Minister @JustinTrudeau. Our thoughts and prayers are with you al… https://t.co/bn5yMNyVKm"
        },
        {
            "data": [
                {
                    "id": 164,
                    "x": 76733,
                    "y": 0.6852288246154785
                }
            ],
            "id": "Arizona, please get out today and vote @DebbieLesko for Congress in #AZ08. Strong on Border, Immigration and Crime.… https://t.co/D0awkdHmty"
        },
        {
            "data": [
                {
                    "id": 165,
                    "x": 64364,
                    "y": 0.9461032152175903
                }
            ],
            "id": "“President Trump Calls the U.S.-France Relationship ‘Unbreakable.’ History Shows He’s Right.” https://t.co/L0gT4rvaJO"
        },
        {
            "data": [
                {
                    "id": 166,
                    "x": 73501,
                    "y": 0.2666007876396179
                }
            ],
            "id": ".@JimRenacci has worked so hard on Tax Reductions, Illegal Immigration, the Border and Crime. I need Jim very badly… https://t.co/PqB2vspieq"
        },
        {
            "data": [
                {
                    "id": 167,
                    "x": 57357,
                    "y": 0.36798325181007385
                }
            ],
            "id": "Today, @FLOTUS Melania and I were honored to welcome French President @EmmanuelMacron and Mrs. Brigitte Macron to t… https://t.co/8kwPVoGn8B"
        },
        {
            "data": [
                {
                    "id": 168,
                    "x": 113220,
                    "y": 0.9035038948059082
                }
            ],
            "id": "Our two great republics are linked together by the timeless bonds of history, culture, and destiny. We are people w… https://t.co/pwvB5g3GaY"
        },
        {
            "data": [
                {
                    "id": 169,
                    "x": 134587,
                    "y": 0.314689964056015
                }
            ],
            "id": "Congratulations to Republican Debbie Lesko on her big win in the Special Election for Arizona House seat. Debbie wi… https://t.co/trwSb09q7l"
        },
        {
            "data": [
                {
                    "id": 170,
                    "x": 85915,
                    "y": 0.9775002598762512
                }
            ],
            "id": "Busy day planned.  Looking forward to watching President Macron of France address a Joint Session of Congress today… https://t.co/G8DnullYl5"
        },
        {
            "data": [
                {
                    "id": 171,
                    "x": 107015,
                    "y": 0.9452979564666748
                }
            ],
            "id": ".@FLOTUS did a spectacular job hosting the President of France @EmmanuelMacron and his wife Brigitte. Every detail… https://t.co/1eEkAVAgkl"
        },
        {
            "data": [
                {
                    "id": 172,
                    "x": 101246,
                    "y": 0.8583821058273315
                }
            ],
            "id": "Looking forward to my meeting with Tim Cook of Apple. We will be talking about many things, including how the U.S.… https://t.co/1gRfA4s5hl"
        },
        {
            "data": [
                {
                    "id": 173,
                    "x": 26525,
                    "y": 0.04140770062804222
                }
            ],
            "id": "RT @realDonaldTrump: Democrats are obstructing good (hopefully great) people wanting to give up a big portion of their life to work for our…"
        },
        {
            "data": [
                {
                    "id": 174,
                    "x": 466665,
                    "y": 0.6119834184646606
                }
            ],
            "id": "Thank you Kanye, very cool! https://t.co/vRIC87M21X"
        },
        {
            "data": [
                {
                    "id": 175,
                    "x": 292040,
                    "y": 0.5469783544540405
                }
            ],
            "id": "MAGA! https://t.co/jFf5ONASlv"
        },
        {
            "data": [
                {
                    "id": 176,
                    "x": 91590,
                    "y": 0.37681031227111816
                }
            ],
            "id": "Loved being on @foxandfriends this morning. Great show!"
        },
        {
            "data": [
                {
                    "id": 177,
                    "x": 119285,
                    "y": 0.007274214178323746
                }
            ],
            "id": "The U.S. has put together a STRONG bid w/ Canada &amp; Mexico for the 2026 World Cup. It would be a shame if countries… https://t.co/dTqZLP6oN0"
        },
        {
            "data": [
                {
                    "id": 178,
                    "x": 128198,
                    "y": 0.04193096235394478
                }
            ],
            "id": "Is everybody believing what is going on. James Comey can’t define what a leak is. He illegally leaked CLASSIFIED IN… https://t.co/X5Ee7JEYpN"
        },
        {
            "data": [
                {
                    "id": 179,
                    "x": 142433,
                    "y": 0.9138342142105103
                }
            ],
            "id": "After a furious year of missile launches and Nuclear testing, a historic meeting between North and South Korea is n… https://t.co/PLUzX0MESi"
        },
        {
            "data": [
                {
                    "id": 180,
                    "x": 166339,
                    "y": 0.5882701873779297
                }
            ],
            "id": "KOREAN WAR TO END! The United States, and all of its GREAT people, should be very proud of what is now taking place in Korea!"
        },
        {
            "data": [
                {
                    "id": 181,
                    "x": 73688,
                    "y": 0.6344355940818787
                }
            ],
            "id": "So great to have Staff Sgt. Dan Nevins and the incredible WOUNDED WARRIORS with me in the White House yesterday. Th… https://t.co/29b2xOXNba"
        },
        {
            "data": [
                {
                    "id": 182,
                    "x": 133643,
                    "y": 0.8693888783454895
                }
            ],
            "id": "Please do not forget the great help that my good friend, President Xi of China, has given to the United States, par… https://t.co/9mQL7VpUp7"
        },
        {
            "data": [
                {
                    "id": 183,
                    "x": 175261,
                    "y": 0.9627143740653992
                }
            ],
            "id": "Kanye West has performed a great service to the Black Community - Big things are happening and eyes are being opene… https://t.co/DFbFcLSqsl"
        },
        {
            "data": [
                {
                    "id": 184,
                    "x": 81691,
                    "y": 0.759938657283783
                }
            ],
            "id": "Look forward to meeting with Chancellor Angela Merkel of Germany today. So much to discuss, so little time! It will… https://t.co/FVi18WtSdX"
        },
        {
            "data": [
                {
                    "id": 185,
                    "x": 149526,
                    "y": 0.5205169320106506
                }
            ],
            "id": "Just Out: House Intelligence Committee Report released. “No evidence” that the Trump Campaign “colluded, coordinate… https://t.co/3erasoPL4N"
        },
        {
            "data": [
                {
                    "id": 186,
                    "x": 6905,
                    "y": 0.7004519104957581
                }
            ],
            "id": "RT @WhiteHouse: \"Today I am honored to welcome Chancellor Angela Merkel back to the White House... We are also pleased to have our newly co…"
        },
        {
            "data": [
                {
                    "id": 187,
                    "x": 58203,
                    "y": 0.9202061891555786
                }
            ],
            "id": "I urge all Americans to participate in #takebackday tomorrow! Let’s come together and BEAT last October’s record of… https://t.co/aIwL3BXrAp"
        },
        {
            "data": [
                {
                    "id": 188,
                    "x": 9009,
                    "y": 0.9577105641365051
                }
            ],
            "id": "RT @WhiteHouse: \"So today, on behalf of the United States, I want to thank every Olympian and Paralympian... To every member of @TeamUSA, I…"
        },
        {
            "data": [
                {
                    "id": 189,
                    "x": 134662,
                    "y": 0.9069291949272156
                }
            ],
            "id": "House Intelligence Committee rules that there was NO COLLUSION between the Trump Campaign and Russia. As I have bee… https://t.co/n4809kuVx3"
        },
        {
            "data": [
                {
                    "id": 190,
                    "x": 110101,
                    "y": 0.018146084621548653
                }
            ],
            "id": "Allegations made by Senator Jon Tester against Admiral/Doctor Ron Jackson are proving false. The Secret Service is… https://t.co/dybHbNNsoi"
        },
        {
            "data": [
                {
                    "id": 191,
                    "x": 106027,
                    "y": 0.5536133646965027
                }
            ],
            "id": "....great people of Montana will not stand for this kind of slander when talking of a great human being. Admiral Ja… https://t.co/Z6XRJpgTFk"
        },
        {
            "data": [
                {
                    "id": 192,
                    "x": 91460,
                    "y": 0.0058851963840425014
                }
            ],
            "id": "“Clapper lied about (fraudulent) Dossier leaks to CNN” @foxandfriends FoxNews  He is a lying machine who now works for Fake News CNN."
        },
        {
            "data": [
                {
                    "id": 193,
                    "x": 114930,
                    "y": 0.5632153153419495
                }
            ],
            "id": "Just had a long and very good talk with President Moon of South Korea. Things are going very well, time and locatio… https://t.co/gj6yqufCtr"
        },
        {
            "data": [
                {
                    "id": 194,
                    "x": 107656,
                    "y": 0.014575399458408356
                }
            ],
            "id": "Look forward to being in the Great State of Michigan tonight. Major business expansion and jobs pouring into your S… https://t.co/WSdinFPmCp"
        },
        {
            "data": [
                {
                    "id": 195,
                    "x": 155928,
                    "y": 0.9656877517700195
                }
            ],
            "id": "Secret Service has just informed me that Senator Jon Tester’s statements on Admiral Jackson are not true. There wer… https://t.co/WsPVNYvHOr"
        },
        {
            "data": [
                {
                    "id": 196,
                    "x": 52647,
                    "y": 0.21247325837612152
                }
            ],
            "id": "Join me LIVE in Washington, Michigan at 7:00pmE on @FoxNews! #MAGA"
        },
        {
            "data": [
                {
                    "id": 197,
                    "x": 101587,
                    "y": 0.008673213422298431
                }
            ],
            "id": "Great evening last night in Washington, Michigan. The enthusiasm, knowledge and love in that room was unreal. To th… https://t.co/FOPvQ3559W"
        },
        {
            "data": [
                {
                    "id": 198,
                    "x": 77860,
                    "y": 0.0008774255984462798
                }
            ],
            "id": "While Washington, Michigan, was a big success, Washington, D.C., just didn’t work. Everyone is talking about the fa… https://t.co/1jEA4ssPTg"
        },
        {
            "data": [
                {
                    "id": 199,
                    "x": 128328,
                    "y": 0.9710003733634949
                }
            ],
            "id": "Just got recent Poll - much higher than President O at same time....Well, much more has been accomplished!"
        }
    ],


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
    this.setState({pState: this.state.cState});
    console.log("prev: "+this.state.pState)
    this.setState({cState: event.target.dataset.name})
    console.log("curr: "+this.state.cState)
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
    this.progressStepper.clickedState();
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
        // scatterData: json.scatter_graph,
        // barData: json.named_entity_bar_graph
      });
      console.log(this.state.barData)
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
      newColors[cState] = {fill: "green"};

    }
    else {
      newColors[pState] = {fill: "green"};
      newColors[cState] = {fill: "green"};
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
      <Slide>
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
      <Slide>
        <IconButton tooltip="Reset">
          <ActionHome onClick={() => {this.progressStepper.clickedHome();
                                      Fullpage.changeFullpageSlide(0);}}/>
        </IconButton>
        <div className="piePage">
          <div className="piePageLeft">
            <TextField
              value = {(() => {
                switch (this.state.dropDownValue) {
                  case 1: return this.state.userFieldValue;
                  case 2: return this.statehashtagFieldValue;
                  default: return ""; }})()}
              onChange = {(() => {
                switch (this.state.dropDownValue) {
                  case 1: return this.userTextFieldChange;
                  case 2: return this.hashtagTextFieldChange;
                  default: return ""; }})()}/>
            <DropDownMenu
              style ={menuStyles}
              autoWith = {true}
              value={this.state.dropDownValue}
              onChange={this.handleDropDown}>
                <MenuItem value={1} primaryText="User" />
                <MenuItem value={2} primaryText="Hashtag" />
            </DropDownMenu>
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
      <Slide>
        <IconButton tooltip="Reset">
          <ActionHome onClick={() => {this.progressStepper.clickedHome();
                                    Fullpage.changeFullpageSlide(0);}}/>
        </IconButton>
        <BarGraph bar_data={this.state.barData}/>
      </Slide>,
      <Slide>
        <IconButton tooltip="Reset">
          <ActionHome onClick={() => {this.progressStepper.clickedHome();
                                      Fullpage.changeFullpageSlide(0);}}/>
        </IconButton>
        <LineGraph volume_line_graph={this.state.data}
                     />

      </Slide>,
      //Slide 4 Scatter Graph
      <Slide>
        <IconButton tooltip="Reset">
          <ActionHome onClick={() => {this.progressStepper.clickedHome();
                                      Fullpage.changeFullpageSlide(0);}}/>
        </IconButton>
        <ScatterGraph scatter_data={this.state.scatterData}/>
      </Slide>,
      //Slide 3 - Piegraphs with different tabs


    ];
    fullPageOptions.slides = slides;

    return (
      <div className="app">
        <div>
          <MuiThemeProvider >
            <ProgressStepper ref={instance => { this.progressStepper = instance; }} />

            <Fullpage {...fullPageOptions} />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}







export default App;
