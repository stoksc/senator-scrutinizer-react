import React from "react";
import "./tweet.css";

class Tweet extends React.Component {
  handleClick = () => {
    this.props.handleClick(this.props.tweet);
  }
  render () {
    const title = "blank";

    const style = {
      backgroundImage: 'https://avatars2.githubusercontent.com/u/9650546?s=400&u=4396983d2ee349fdd3a6b55453c2a19f4578a9d1&v=4'
    };

    return (
      <div className="tweet">
        <div className="tweet-picture"></div>
        <div className="tweet-title">
          {title}
        </div>
      </div>
    );
  }
}

export default Tweet;
