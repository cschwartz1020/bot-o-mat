import React, { Component } from "react";
import styled from "styled-components";
import Tasks from "./Tasks";

const Styles = styled.div`
  color: #EDEDED;
  font: courier new;
}
`;

class MyRobot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Styles key={this.props.id}>{this.props.name}</Styles>;
  }
}

export default MyRobot;
