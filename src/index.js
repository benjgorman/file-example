import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import {Navigation}  from './Navigation';
import {Home} from './Home';
import {Coffee} from './Coffee';
import {About} from './About';
import {Products} from './Products';
import {Footer} from './Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const pageContainer = (
    <Router>
      <Navigation/>
      <Container fluid>
          <Row>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/products" component={Products}/>
              <Route path="/about" component={About}/>
              <Route path="/coffee" component={Coffee}/>
            </Switch>
          </Row>
      </Container>
      <Footer/>
    </Router>
);

ReactDOM.render(
  pageContainer,
  document.getElementById('root')
);
