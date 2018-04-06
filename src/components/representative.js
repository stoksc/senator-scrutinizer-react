import React from "react";
import "./representative.css";

class Representative extends React.Component {
  handleClick = () => {
    this.props.handleClick(this.props.representative);
  }
  render () {
    const title = "blank";

    const style = {
      backgroundImage: 'https://avatars2.githubusercontent.com/u/9650546?s=400&u=4396983d2ee349fdd3a6b55453c2a19f4578a9d1&v=4'
    };

    return (
      <div className="representative" onClick={this.handleClick}>
        <div className="representative-picture" style={style}></div>
        <div className="representative-title">
          {title}
        </div>
      </div>
    );
  }
}

export default Representative;
