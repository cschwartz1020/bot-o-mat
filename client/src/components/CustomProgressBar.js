import React, { Component } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

class CustomProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0
    };
  }

  componentDidMount() {
    this.loadProgress();
  }

  loadProgress() {
    var interval = setInterval(
      function() {
        if (this.state.percent >= 100) clearInterval(interval);
        this.setState({ percent: this.state.percent + 1 });
      }.bind(this),
      this.props.eta / 100
    );
  }

  componentWillUnmount() {
    if (this.loadProgress) clearInterval(this.loadProgress());
  }
  render() {
    return (
      <div>
        <Progress type="circle" percent={this.state.percent} />
      </div>
    );
  }
}

export default CustomProgressBar;
