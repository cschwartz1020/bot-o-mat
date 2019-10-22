import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

const Styles = styled.div`
  .toast {
    position: relative;
  }
`;

class AddRobot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  getToast(event, type) {
    event.preventDefault();
    toast(`${this.state.inputValue} (${type}) added to My Robots`, {
      position: toast.POSITION.TOP_LEFT,
      type: toast.TYPE.SUCCESS
    });
  }

  updateState(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  async postRobot(event, type) {
    event.preventDefault();
    this.getToast(event, type);
    const robot = {
      type: type,
      name: this.state.inputValue
    };
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(robot)
    };
    await fetch("/api/myrobots", options);
  }

  render() {
    return (
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label className="sr-only">Name Me !</label>
          <input
            onChange={event => {
              this.updateState(event);
            }}
            type="name"
            className="form-control"
            id="name"
            placeholder="Name Me !"
          />
        </div>
        <button
          onClick={event => {
            this.postRobot(event, this.props.type);
          }}
          type="submit"
          className="btn btn-primary mb-2"
        >
          Add Me to My Robots
        </button>
        <ToastContainer hideProgressBar />
      </form>
    );
  }
}

export default AddRobot;
