import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import Task from "./Task";
import Button from "react-bootstrap/Button";

const Styles = styled.div`
  .modal-dialog {
    overflow-y: initial !important;
  }
  .modal-body {
    height: 250px;
    overflow-y: auto;
  }
`;
class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      tasks: [],
      taskChosen: ""
    };
  }

  async componentDidMount() {
    await fetch("/api/tasks")
      .then(response => response.json())
      .then(json =>
        json.forEach(task => {
          JSON.stringify(task);
          let job = {
            description: task.description,
            eta: task.eta
          };
          var joined = this.state.tasks.concat(job);
          this.setState({ tasks: joined });
        })
      );
  }

  render() {
    return (
      <Styles>
        {this.state.show ? (
          <Modal.Dialog>
            <Modal.Header
              closeButton
              onClick={() => this.setState({ show: false })}
            >
              <Modal.Title key={this.props.id}>
                Tasks for {this.props.name} ({this.props.type})
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                {this.state.tasks.map(task => (
                  <h4 key={task.description}>
                    {task.description} in {task.eta} milliseconds
                    <Task
                      key={this.props.id}
                      name={this.props.name}
                      type={this.props.type}
                      description={task.description}
                      eta={task.eta}
                    />
                  </h4>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>Pick one task for {this.props.name}!</Modal.Footer>
          </Modal.Dialog>
        ) : (
          <Button onClick={() => this.setState({ show: true })}>
            See Tasks!
          </Button>
        )}
      </Styles>
    );
  }
}

export default Tasks;
