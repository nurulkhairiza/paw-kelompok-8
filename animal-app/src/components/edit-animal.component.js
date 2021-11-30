// import React, { Component } from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// export default class EditAnimal extends Component {
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

//   componentDidMount() {
//     axios.get('http://localhost:8080/animals/edit-animal/' + this.props.match.params.id) //ubah
//       .then(res => {
//         this.setState({
//           name: res.data.name,
//           species: res.data.species,
//           age: res.data.age
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   onChangeAnimalName(e) {
//     this.setState({ name: e.target.value })
//   }

//   onChangeAnimalSpecies(e) {
//     this.setState({ species: e.target.value })
//   }

//   onChangeAnimalAge(e) {
//     this.setState({ age: e.target.value })
//   }

//   onSubmit(e) {
//     e.preventDefault()

//     const animalObject = {
//       name: this.state.name,
//       species: this.state.species,
//       age: this.state.age
//     };

//     axios.patch('http://localhost:8080/animals/update-animal' + this.props.match.params.id, animalObject)
//       .then((res) => {
//         console.log(res.data)
//         console.log('Student successfully updated')
//       }).catch((error) => {
//         console.log(error)
//       })

//     // Redirect to Student List 
//     this.props.history.push('/animal-list')
//   }
//   render() {
//     return (<div className="form-wrapper">
//     <Form onSubmit={this.onSubmit}>
//       <Form.Group controlId="Name">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" value={this.state.name} onChange={this.onChangeAnimalName} />
//       </Form.Group>

//       <Form.Group controlId="Email">
//         <Form.Label>Species</Form.Label>
//         <Form.Control type="text" value={this.state.species} onChange={this.onChangeAnimalSpecies} />
//       </Form.Group>

//       <Form.Group controlId="Age">
//         <Form.Label>Age</Form.Label>
//         <Form.Control type="text" value={this.state.age} onChange={this.onChangeAnimalAge} />
//       </Form.Group>

//       <Button variant="danger" size="lg" block="block" type="submit">
//         Update Animal
//       </Button>
//     </Form>
//   </div>);
//   }
// }

import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditAnimal extends Component {

  constructor(props) {
    super(props)

    this.onChangeAnimalName = this.onChangeAnimalName.bind(this);
    this.onChangeAnimalSpecies = this.onChangeAnimalSpecies.bind(this);
    this.onChangeAnimalAge = this.onChangeAnimalAge.bind(this);
    this.onChangeAnimalAdopted = this.onChangeAnimalAdopted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      species: '',
      age : '',
      adopted:false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/animals/edit-animal/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          species: res.data.species,
          age: res.data.age,
          adopted: res.data.adopted
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
    this.setState({ adopted: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const animalObject = {
      name: this.state.name,
      species: this.state.species,
      age: this.state.age,
      adopted: this.state.adopted

    };

    axios.put('http://localhost:8080/animals/update-animal/' + this.props.match.params.id, animalObject)
      .then((res) => {
        console.log(res.data)
        console.log('Animal successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Animal List 
    this.props.history.push('/animal-list')
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
          <Form.Label>Born Date</Form.Label>
          <Form.Control type="Date" value={this.state.age} onChange={this.onChangeAnimalAge} />
        </Form.Group>

        <Form.Group controlId="Adopted">
          <Form.Label>Adopted</Form.Label>
          <Form.Check type="checkbox" label="Adopted" checked={this.state.adopted} value={this.state.adopted} onChange={this.onChangeAnimalAdopted} placeholder="Yes / No"/>
        </Form.Group>
        
        <Button className = "button" variant="primary" size="lg" block="block" type="submit"  >
          Update
        </Button>
        <Button className="button-cancel" size="lg" block="block"  variant="danger" type="button" href={'/animal-list'} >
          Cancel
        </Button>
      </Form>
    </div>);
  }
}
