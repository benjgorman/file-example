import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import {ExampleComponent} from './ExampleComponent'
import {CourseForm} from './CourseForm'


export const Coffee = ({ match }) => {

    useEffect(() => {
     document.title = "Coffee Co | Coffee"
  }, []);

  return (
    <Col>
      <h1>Our Coffee</h1>
      <div>
        <Row>
          <Col>
          <ul>
            <li><h2><Link to={`${match.url}/regular`}>Regular</Link></h2></li>
            <li><h2><Link to={`${match.url}/decaf`}>Decaf</Link></h2></li>
            <li><h2><Link to={`${match.url}/iced`}>Iced</Link></h2></li>
          </ul>
          </Col>
        </Row>
        <Route
          path={`${match.path}/:name`}
          render={({ match }) => (
            <ExampleComponent matchParams={match.params.name}/>
          )}
        />
        <CourseForm/>
      </div>
    </Col>
  );
}
