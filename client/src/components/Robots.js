import React, { Component } from "react";
import RobotsLandscape from "../images/RobotsLandscape.jpg";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Styles = styled.div`
  .jumbotron {
    background: url(${RobotsLandscape});
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

class Robots extends Component {
  constructor() {
    super();
    this.state = {
      types: []
    };
  }

  render() {
    console.log(this.state.types);
    return (
      <React.Fragment>
        <Styles>
          <Jumbotron>
            <Container>
              <h1 className="header">Select a Robot!</h1>
            </Container>
          </Jumbotron>
        </Styles>
      </React.Fragment>
    );
  }
}

export default Robots;
