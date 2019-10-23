import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import styled from "styled-components";

const Styles = styled.div`
  .table {
    table-layout: fixed;
  }
`;

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      empty: true,
      data: []
    };
  }

  async componentDidMount() {
    await fetch("/api/myrobots")
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          this.setState({ empty: false });
        }
        let arr = [];
        json.forEach(bot => {
          let data = {
            name: bot.name,
            type: bot.type,
            count: bot.completedTasks.length,
            time: bot.totalTime
          };
          arr.push(data);

          this.setState({ data: arr });
        });
      });
  }

  render() {
    return (
      <Styles>
        <BootstrapTable
          className="table"
          data={this.state.data}
          options={{ noDataText: "No Robots Created" }}
          scrollTop={"Bottom"}
          striped
          hover
        >
          <TableHeaderColumn isKey dataField="name">
            Robot Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="type">Robot Type</TableHeaderColumn>
          <TableHeaderColumn dataField="count">
            Tasks Completed
          </TableHeaderColumn>
          <TableHeaderColumn dataField="time">
            Total Time Spent on Tasks
          </TableHeaderColumn>
        </BootstrapTable>
      </Styles>
    );
  }
}

export default Leaderboard;
