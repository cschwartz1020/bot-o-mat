import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import Task from "./Task";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Styles = styled.div`
  .modal-dialog {
    overflow-y: initial !important;
    overflow-x: initial;
  }
  .modal-body {
    height: 250px;
    overflow-y: auto;
  }
  .task {
    color: #b0b0b0;
  }

  .ul {
    list-style-type: decimal;
  }
`;
class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      tasks: [],
      tasksChosen: []
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
              <Modal.Title className="task" key={this.props.id}>
                Tasks for {this.props.name} ({this.props.type})
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul className="ul">
                {this.state.tasks.map((task, index) => (
                  <h4 key={task.description}>
                    <Task
                      className="task"
                      key={this.props.id}
                      name={this.props.name}
                      type={this.props.type}
                      description={task.description}
                      eta={task.eta}
                      id={this.props.id}
                      number={index}
                    />
                  </h4>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer className="task">
              Pick a task for {this.props.name}!
            </Modal.Footer>
          </Modal.Dialog>
        ) : (
          <Button
            className="btn btn-primary btn-sm"
            onClick={() => this.setState({ show: true })}
          >
            See Tasks!
          </Button>
        )}
      </Styles>
    );
  }
}

export default Tasks;
