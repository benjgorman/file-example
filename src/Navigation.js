import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import { Link, Route } from 'react-router-dom';
import surfvan from './images/surf_van.jpeg';
import {ExampleComponent} from './ExampleComponent'

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      products: []
    };
  }

  render() {
      return (
          <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
          <Navbar.Brand as={Link} to="/">
            <strong>Coffee Co.</strong>
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/coffee">Coffee</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Navbar>
        );
    }
}
