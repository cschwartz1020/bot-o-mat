import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import CustomProgressBar from "./CustomProgressBar";
import styled from "styled-components";

const Styles = styled.div`
  #progress {
    display: flex;
    justify-content: center;
  }
`;

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      eta: 0,
      showBar: false,
      showTask: true,
      showDescription: true,
      percent: 0
    };
  }

  componentDidMount() {
    this.setState({ eta: this.props.eta, description: this.props.description });
  }

  handleTaskClick(event) {
    event.preventDefault();
    this.putTask(event);

    this.setState({ showBar: true, showTask: false });
    let firstWord = this.state.description.substring(
      0,
      this.state.description.indexOf(" ")
    );
    let description = "";
    if (firstWord.charAt(firstWord.length - 1) === "e") {
      description =
        firstWord.substring(0, firstWord.indexOf("e")) +
        "ing" +
        this.state.description.substring(firstWord.length);
    } else {
      description =
        firstWord + "ing" + this.state.description.substring(firstWord.length);
    }
    return toast(
      <Styles>
        <div align="center">
          {this.props.name} is {description}
        </div>
        <div align="center">
          <CustomProgressBar className="progress" eta={this.state.eta} />
        </div>
      </Styles>,
      {
        hideProgressBar: true,
        autoClose: this.state.eta + 1000,
        position: toast.POSITION.TOP_CENTER
      }
    );
  }

  async putTask(event) {
    event.preventDefault();
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    let data = {
      task: this.state.description,
      time: this.state.eta,
      id: this.props.id
    };
    const options = {
      method: "PUT",
      headers,
      body: JSON.stringify(data)
    };
    await fetch(`/api/myrobots/${data.id}`, options);
  }
  render() {
    return (
      <div>
        {this.props.description} in {this.props.eta} milliseconds
        <Button onClick={event => this.handleTaskClick(event)}>
          DO TASK !
        </Button>
        <ToastContainer />
      </div>
    );
  }
}

export default Task;
