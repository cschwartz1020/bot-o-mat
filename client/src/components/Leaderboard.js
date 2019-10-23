import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      empty: true,
      robots: []
    };
  }

  async componentDidMount() {
    await fetch("/api/myrobots")
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          this.setState({ empty: false });
        }
        json.forEach(bot => {
          let robot = {
            id: bot.id,
            type: bot.type,
            name: bot.name,
            completedTasks: bot.completedTasks,
            time: bot.totalTime
          };
          const robots = Object.assign([], this.state.robots);
          robots.push(robot);
          this.setState({ robots: robots });
        });
      });
    console.log(this.state);
  }

  render() {
    return (
      <BootstrapTable striped hover>
        <TableHeaderColumn isKey dataField="id">
          Robot Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField="name">Robot Type</TableHeaderColumn>
        <TableHeaderColumn dataField="price">Tasks Completed</TableHeaderColumn>
        <TableHeaderColumn dataField="price">
          Total Time Spent on Tasks
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Leaderboard;
