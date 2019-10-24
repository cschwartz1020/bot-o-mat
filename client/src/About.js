import React, { Component } from "react";
import styled from "styled-components";
import Keyboard from "./images/Keyboard.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import Iframe from "react-iframe";

const Styles = styled.div`
  .jumbotron {
    background: url(${Keyboard});
    height: 100vh;
    width: 100vw;
    background-size: cover;
    text-align: top;
    color: #808080;
  }
  .div {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  .ul {
    list-style-type: none;
  }
`;

class About extends Component {
  render() {
    return (
      <Styles>
        <Jumbotron>
          <div className="div">
            <h1>Description</h1>
            <p>
              This application allows a user to create a robot of one of seven
              types from the Robots page. After creating a robot, the user can
              then have that robot complete a set of tasks outlined in the My
              Robots page. Each task has an estimated time to complete. At any
              time, the user can navigate to the leaderboard page to see which
              robots have completed the most tasks and which robots have spent
              the most time doing tasks.
            </p>
            <h1>Other Information</h1>
            <div>
              Images taken from <a href="https://www.pexels.com/">pexels.com</a>
            </div>

            <div>
              Click{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://documenter.getpostman.com/view/8888204/SVzxXeWs"
              >
                here
              </a>{" "}
              for API Documentation
            </div>
            <div>
              Application created by Charles Schwartz (Last Edited: 10/24/2019)
            </div>
          </div>
        </Jumbotron>
      </Styles>
    );
  }
}

export default About;
