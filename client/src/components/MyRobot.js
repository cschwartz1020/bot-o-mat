import React, { Component } from "react";
import styled from "styled-components";
import Tasks from "./Tasks";

const Styles = styled.div`
  color: #ededed;
  font: courier new;
`;

class MyRobot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styles key={this.props.id}>
        <div className="row">
          {this.props.name}
          &nbsp; &nbsp; &nbsp;
          <Tasks
            className="tasks"
            completedTasks={this.props.completedTasks}
            key={this.props.id}
            id={this.props.id}
            name={this.props.name}
            type={this.props.type}
          />
          <br />
          <br />
        </div>
      </Styles>
    );
  }
}

export default MyRobot;
