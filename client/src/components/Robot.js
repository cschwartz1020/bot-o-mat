import React, { Component } from "react";
import styled from "styled-components";

const Styles = styled.div`
  color: #808080;
`;

class Robot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Styles>
        <div>{this.props.kind}</div>
      </Styles>
    );
  }
}
