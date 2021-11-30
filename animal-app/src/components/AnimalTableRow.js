// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// export default class AnimalsTableRow extends Component {
//     constructor(props) {
//         super(props);
//         this.deleteAnimal = this.deleteAnimal.bind(this);
//     }

//     deleteStudent() {
//         axios.delete('http://localhost:8080/animals/delete-animal/' + this.props.obj._id) //ubah
//             .then((res) => {
//                 console.log('Animal successfully deleted!')
//             }).catch((error) => {
//                 console.log(error)
//             })
//     }

//     render() {
//         return (
//             <tr>
//                 <td>{this.props.obj.name}</td>
//                 <td>{this.props.obj.species}</td>
//                 <td>{this.props.obj.age}</td>
//                 <td>
//                     <Link className="edit-link" to={"/edit-animals/" + this.props.obj._id}>
//                         Edit
//                     </Link>
//                     <Button onClick={this.deleteAnimal} size="sm" variant="danger">Delete</Button>
//                 </td>
//             </tr>
//         );
//     }
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class AnimalTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteAnimal = this.deleteAnimal.bind(this);
    }

    deleteAnimal() {
        axios.delete('http://localhost:8080/animals/delete-animal/' + this.props.obj._id)
            .then((res) => {
                console.log('Animal successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.species}</td>
                <td>{this.props.obj.age}</td>
                <td>{this.props.obj.adopted}</td>
                <td>
                    <Link className="edit-link" to={"/edit-animal/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteAnimal} size="sm" variant="danger" href={"/animal-list"}>Delete</Button>
                </td>
            </tr>
        );
    }
}