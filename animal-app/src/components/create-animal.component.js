// import React, {Component} from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// export default class CreateAnimal extends Component {
//   constructor(props) {
//     super(props)

//     // Setting up functions
//     this.onChangeAnimalName = this.onChangeAnimalName.bind(this);
//     this.onChangeAnimalSpecies = this.onChangeAnimalSpecies.bind(this);
//     this.onChangeAnimalAge = this.onChangeAnimalAge.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     // Setting up state
//     this.state = {
//       name: '',
//       species: '',
//       age: ''
//     }
//   }

//   onChangeAnimalName(e) {
//     this.setState({name: e.target.value})
//   }

//   onChangeAnimalSpecies(e) {
//     this.setState({species: e.target.value})
//   }

//   onChangeAnimalAge(e) {
//     this.setState({age: e.target.value})
//   }

//   onSubmit(e) {
//     e.preventDefault()

//     const animalObject = {
//       name: this.state.name,
//       species: this.state.species,
//       age: this.state.age
//     };
//     axios.post('http://localhost:8080/animals/create-animal', animalObject) //ubah
//       .then(res => console.log(res.data));

//     this.setState({name: '', species: '', age: ''})
//   }

//   render() {
//     return (<div class="form-wrapper">
//       <Form>
//         <Form.Group controlId="Name">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" value={this.state.name} onChange={this.onChangeAnimalName} />
//         </Form.Group>

//         <Form.Group controlId="Species">
//           <Form.Label>Species</Form.Label>
//           <Form.Control type="text" value={this.state.species} onChange={this.onChangeAnimalSpecies} />

//         </Form.Group>

//         <Form.Group controlId="Age">
//           <Form.Label>Age</Form.Label>
//           <Form.Control type="text" value={this.state.age} onChange={this.onChangeAnimalAge} />

//         </Form.Group>


//         <Button variant="danger" size="lg" block="block" type="submit">
//           Create Animal
//         </Button>
//       </Form>
//     </div>);
//   }
// }

import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateAnimal extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeAnimalName = this.onChangeAnimalName.bind(this);
    this.onChangeAnimalSpecies = this.onChangeAnimalSpecies.bind(this);
    this.onChangeAnimalAge = this.onChangeAnimalAge.bind(this);
    this.onChangeAnimalAdopted = this.onChangeAnimalAdopted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      species: '',
      age: '',
      adopted: false
    }
  }

  onChangeAnimalName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeAnimalSpecies(e) {
    this.setState({ species: e.target.value })
  }

  onChangeAnimalAge(e) {
    this.setState({ age: e.target.value })
  }

  onChangeAnimalAdopted(e) {
    this.setState({ adopted: !this.state.adopted })
  }  

  onSubmit(e) {
    e.preventDefault()

    const animalObject = {
      name: this.state.name,
      species: this.state.species,
      age: this.state.age,
      adopted: this.state.adopted
    };

    axios.post('http://localhost:8080/animals/create-animal', animalObject)
      .then(res => console.log(res.data));

    this.props.history.push('/')
    // this.setState({
    //   name: '',
    //   species: '',
    //   age: '',
    //   adopted: false
    // });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeAnimalName} />
        </Form.Group>

        <Form.Group controlId="Species">
          <Form.Label>Species</Form.Label>
          <Form.Control type="text" value={this.state.species} onChange={this.onChangeAnimalSpecies} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Born date</Form.Label>
          <Form.Control type="Date" value={this.state.age} onChange={this.onChangeAnimalAge} />
        </Form.Group>

        <Form.Group controlId="Adopted">
          <Form.Label>Adopted</Form.Label>
          <Form.Check type="checkbox" label="Adopted" value={this.state.adopted} checked={this.state.adopted} onChange={this.onChangeAnimalAdopted} />
        </Form.Group>

        <Button variant="primary" size="lg" block="block" type="submit" > 
          Add Animal
        </Button>
      </Form>
    </div>);
  }
}
