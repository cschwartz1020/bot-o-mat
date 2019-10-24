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
            <ul className="ul">
              <li>
                <div>
                  Images taken from{" "}
                  <a href="https://www.pexels.com/">pexels.com</a>
                </div>
              </li>
              <l1>
                <div>
                  <a href="https://documenter.getpostman.com/view/8888204/SVzxXeWs">
                    API Documentation
                  </a>
                </div>
              </l1>
            </ul>
          </div>
        </Jumbotron>
      </Styles>
    );
  }
}

export default About;
