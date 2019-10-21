import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #e1e1e1;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb

    &:hover {
      color: white;
    }
  }
`;

class NavigationBar extends Component {
  render() {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">BOT-O-MAT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/robots">Robots</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/myrobots">My Robot</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default NavigationBar;
