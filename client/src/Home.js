import React, { Component } from "react";
import styled from "styled-components";
import RobotParts from "./images/RobotParts.jpg";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Styles = styled.div`
  .jumbotron {
    background: url(${RobotParts});
    height: 100vh;
    width: 100vw;
    background-size: cover;
    text-align: top;
  }
  .header {
    color: #808080;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
`;

class Home extends Component {
  render() {
    return (
      <Styles>
        <Jumbotron>
          <h1 className="header">Welcome to BOT-O-MAT</h1>
        </Jumbotron>
      </Styles>
    );
  }
}

export default Home;
