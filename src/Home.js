import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col'

import {About} from './About';
import {Products} from './Products';

export function Home() {

    useEffect(() => {
     document.title = "Coffee Co | Home"
  }, []);

  return (
    <Col>
      <h1>Welcome to the Coffee Co!</h1>

    </Col>
  );
}
