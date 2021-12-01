
import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AnimalTableRow from './AnimalTableRow';


export default class AnimalList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      animals: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/animals/')
      .then(res => {
        this.setState({
          animals: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.animals.map((res, i) => {
      return <AnimalTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Species</th>
            <th>Age</th>
            <th>Adopted</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}