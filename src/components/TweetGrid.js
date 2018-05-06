import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import TweetEmbed from 'react-tweet-embed';


class TweetGrid extends Component {
  constructor(props) {
    super(props);
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
        alignContext: 'flex-start'
      },
      gridList: {
        width: "100%",
        height: 500,
        overflowY: 'auto',
        cols: 2,
        padding: 4,
      },
    };
    if (this.state.pie_data) {
      return (
        <div style={styles.root}>
          <GridList cellHeight='auto'
                    style={styles.gridList}>
            {this.state.pie_data.map((hashtag) => {
              if (hashtag) {
                return (
                  hashtag.tweet_ids.map((tweet_id, index) => (
                    <GridTile
                        key={index}
                        title={null}>
                        <TweetEmbed
                          id={tweet_id}
                        />
                    </GridTile>
                  )))
              } else {
                return null
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
