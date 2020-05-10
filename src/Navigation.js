import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  Link
} from "react-router-dom";

export function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand as={Link} to="/">
    <b>Coffee Co.</b>
     </Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/coffee">Coffee</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Nav>
    </Navbar>
  );
}
