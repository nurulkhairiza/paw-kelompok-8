

import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateAnimal from "./components/create-animal.component";
import EditAnimal from "./components/edit-animal.component";
import AnimalList from "./components/animal-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/animal-list"} className="nav-link">
                Animal Shelter Book
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-animal"} className="nav-link">
                  Add Animal 
                </Link>
              </Nav>

              <Nav>
                <Link to={"/animal-list"} className="nav-link">
                  Animal List
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
                <Route path="/create-animal" component={CreateAnimal} />
                <Route path="/edit-animal/:id" component={EditAnimal} />
                <Route path="/animal-list" component={AnimalList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;