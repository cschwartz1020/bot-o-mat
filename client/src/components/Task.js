import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      eta: 0
    };
  }

  render() {
    return (
      <div>
        <Button>DO TASK !</Button>
      </div>
    );
  }
}

export default Task;
