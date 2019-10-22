import React, { Component } from "react";
import styled from "styled-components";
import AddRobot from "./AddRobot";

const Styles = styled.div`
  color: #a8a8a8;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

class Robot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styles>
        <div>
          {this.props.type}
          <AddRobot type={this.props.type} />
        </div>
      </Styles>
    );
  }
}

export default Robot;
