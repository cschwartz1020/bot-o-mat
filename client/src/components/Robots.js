import React, { Component } from "react";
import RobotsLandscape from "../images/RobotsLandscape.jpg";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Robot from "./Robot";
import "react-toastify/dist/ReactToastify.css";

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
  .robot {
    color: #a8a8a8;
  }
`;

class Robots extends Component {
  static count = 0;
  constructor(props) {
    super(props);
    this.state = {
      types: []
    };
  }
  async componentDidMount() {
    fetch("/api/types")
      .then(response => response.json())
      .then(json =>
        json.forEach(bot => {
          JSON.stringify(bot);
          let botType = bot;
          var joined = this.state.types.concat(botType);
          this.setState({
            types: joined
          });
        })
      );
  }

  render() {
    return (
      <React.Fragment>
        <Styles>
          <Jumbotron>
            <Container>
              <h1 className="header">Create a Robot!</h1>
              <ul>
                {this.state.types.map(type => (
                  <Robot key={type} type={type} />
                ))}
              </ul>
            </Container>
          </Jumbotron>
        </Styles>
      </React.Fragment>
    );
  }
}

export default Robots;
