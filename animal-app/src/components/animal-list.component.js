// import React, { Component, useState } from "react";
// import axios from 'axios';
// import Table from 'react-bootstrap/Table';
// import AnimalsTableRow from './AnimalsTableRow';

// export default class AnimalList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//           animals: []
//         };
//       }
    
//       componentDidMount() {
//         axios.get('http://localhost:8080/animals/')
//           .then(res => {
//             this.setState({
//               animals: res.data
//             });
//           })
//           .catch((error) => {
//             console.log(error);
//           })
//       }
    
//       DataTable() {
//         return this.state.animals.map((res, i) => {
//           if (useState(false)) {
//             return <p>Data is loading...</p>;
//           }

//           return <AnimalsTableRow obj={res} key={i} />;
//         });
//       }
    
//     render() {
//         return (<div className="table-wrapper">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Species</th>
//               <th>Age</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.DataTable()}
//           </tbody>
//         </Table>
//       </div>);
//   }
// }

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
            <th>Age(Month)</th>
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