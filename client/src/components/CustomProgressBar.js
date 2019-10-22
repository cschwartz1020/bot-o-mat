import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

class CustomProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: 0
    };
  }

  componentDidMount() {
    var interval = setInterval(
      function() {
        if (this.state.now >= 100) clearInterval(interval);
        this.setState({ now: this.state.now + 1 });
      }.bind(this),
      this.props.eta / 100
    );
  }

  render() {
    return (
      <div>
        <ProgressBar now={this.state.now}></ProgressBar>
      </div>
    );
  }
}

export default CustomProgressBar;
