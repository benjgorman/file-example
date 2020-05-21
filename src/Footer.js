import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Link
} from "react-router-dom";

export function Footer() {
  return (
    <footer className='footer'>
      <div className='container fluid'>
        <p className="text-muted">© <b>2020 <Link to="/">Coffee Co</Link>.</b>, All Rights Reserved
        <br/>
        Our <Link to="/coffee">Coffee</Link> is the best coffee.</p>
      </div>
    </footer>
  );
}
