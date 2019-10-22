import React, { Component } from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import HappyRobot from "../images/HappyRobot.jpg";
import MyRobot from "./MyRobot";
import Tasks from "./Tasks";

const Styles = styled.div`
  .jumbotron {
    background: url(${HappyRobot});
    height: 100vh;
    width: 100vw;
    background-size: cover;
    text-align: top;
  }

  .h {
    color: #d3d3d3;
  }
`;

class MyRobots extends Component {
  constructor() {
    super();
    this.state = {
      robots: {
        Unipedal: [],
        Bipedal: [],
        Quadrupedal: [],
        Arachnid: [],
        Radial: [],
        Aeronautical: []
      },
      empty: true
    };

    this.makeRenderDecision = this.makeRenderDecision.bind(this);
  }

  async componentDidMount() {
    await fetch("/api/myrobots")
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          this.setState({ empty: false });
        }
        json.forEach(bot => {
          JSON.stringify(bot);
          let robot = {
            id: bot.id,
            type: bot.type,
            name: bot.name
          };
          let arr = [];
          arr = this.state.robots[bot.type];
          arr.push(robot);
          let temp = this.state.robots[bot.type];
          this.setState({ temp: arr });
        });
      });
    console.log(this.state.robots);
  }

  makeRenderDecision(type) {
    if (type.length !== 0) {
      console.log("test");
      return (
        <div key={type.length}>
          <h4 className="h">
            <u>{type[0].type}</u>
          </h4>
          {type.map(robot => (
            <div key={robot.id + 1000} className="rows">
              <div key={robot.id + 100} className="row">
                <MyRobot key={robot.id} name={robot.name} type={robot.type} />
                <Tasks
                  key={robot.id + 10}
                  id={robot.id}
                  name={robot.name}
                  type={robot.type}
                />
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  render() {
    return (
      <Styles>
        <Jumbotron>
          <Container>
            {this.state.empty ? (
              <h1 className="h">Add Robots from the Robots Page !</h1>
            ) : (
              <div>
                <h1 className="h">Your Robots !</h1>
                {Object.values(this.state.robots).map(type =>
                  this.makeRenderDecision(type)
                )}
              </div>
            )}
          </Container>
        </Jumbotron>
      </Styles>
    );
  }
}

export default MyRobots;
