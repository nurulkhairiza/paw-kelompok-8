import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";

import CreateAnimal from "./components/create-animals.component";
import EditAnimal from "./components/edit-animals.component";
import AnimalList from "./components/animals-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-animals"} className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-animals"} className="nav-link">
                  Create Animal
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-animals/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/animals-list"} className="nav-link">
                  Animals List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateAnimal} />
                <Route path="/create-animals" component={CreateAnimal} />
                <Route path="/edit-animals/:id" component={EditAnimal} />
                <Route path="/animals-list" component={AnimalList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;