import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

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
    if (this.state.inputValue !== "") {
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
      this.setState({ inputValue: "" });
    } else {
      toast(`Please name your robot!`, {
        position: toast.POSITION.TOP_LEFT,
        type: toast.TYPE.ERROR
      });
    }
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
            value={this.state.inputValue}
            ref="nameField"
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
