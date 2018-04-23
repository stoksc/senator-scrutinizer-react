import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { TwitterTweetEmbed } from 'react-twitter-embed';


class TweetGrid extends Component {
  constructor(props) {
    super(props);
    console.log(props.pie_data)
    console.log(this.props.pie_data)
    this.state = {
      'pie_data': props.pie_data,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      'pie_data': nextProps.pie_data,
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.pie_data === this.state.pie_data) {
      return false
    }
    return true
  }

  componentWillUpdate(nextProps, nextState) {
  }

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: "100%",
        height: 450,
        overflowY: 'auto',
        cols: 1,
      },
    };
    if (this.state.pie_data) {
      return (
        <div style={styles.root}>
          <GridList cellHeight='auto'
                    style={styles.gridList}>
            {this.state.pie_data.map((hashtag) => {
              if (hashtag) {
                console.log(hashtag)
                return (
                  hashtag.tweet_ids.map((tweet_id, index) => (
                    <GridTile
                        key={index}
                        title=" ">
                        <TwitterTweetEmbed
                          tweetId={tweet_id}
                        />
                    </GridTile>
                  )))
              }})}
          </GridList>
        </div>
      )
    } else {
    return (
        <div></div>
      )
    }
  }
}
export default TweetGrid;
