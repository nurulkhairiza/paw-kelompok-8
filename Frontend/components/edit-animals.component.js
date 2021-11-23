import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditAnimal extends Component {
  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeAnimalName = this.onChangeAnimalName.bind(this);
    this.onChangeAnimalSpecies = this.onChangeAnimalSpecies.bind(this);
    this.onChangeAnimalAge = this.onChangeAnimalAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      species: '',
      age: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/animals/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          species: res.data.species,
          age: res.data.age
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ species: e.target.value })
  }

  onChangeStudentRollno(e) {
    this.setState({ age: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      species: this.state.species,
      age: this.state.age
    };

    axios.patch('http://localhost:8080/animals/' + this.props.match.params.id, animalObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/animal-list')
  }
  render() {
    return (<div className="form-wrapper">
    <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={this.state.name} onChange={this.onChangeAnimalName} />
      </Form.Group>

      <Form.Group controlId="Email">
        <Form.Label>Species</Form.Label>
        <Form.Control type="text" value={this.state.species} onChange={this.onChangeAnimalSpecies} />
      </Form.Group>

      <Form.Group controlId="Age">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" value={this.state.age} onChange={this.onChangeAnimalAge} />
      </Form.Group>

      <Button variant="danger" size="lg" block="block" type="submit">
        Update Animal
      </Button>
    </Form>
  </div>);
  }
}