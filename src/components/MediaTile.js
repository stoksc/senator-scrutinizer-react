import React from "react";
import { Media } from 'react-bootstrap';

class MediaTile extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.media);
  }
  render () {
    return (
      <Media className="representativeTile"
             onClick={this.handleClick}>
        <Media.Left>
          <img width={64} height={64} src={this.props.media.img} />
        </Media.Left>
        <Media.Body>
          <Media.Heading>
            {this.props.media.name}
          </Media.Heading>
          {this.props.media.desc}
        </Media.Body>
      </Media>
    );
  }
}

export default MediaTile;
