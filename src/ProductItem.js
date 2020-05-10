import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
  Link
} from "react-router-dom";

export class ProductItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render()
  {
    return (
      <Card fluid>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Container fluid>
            <Row>
              <Col><Card.Text>{this.props.country}</Card.Text></Col>
              <Col><Card.Text>£{this.props.price}</Card.Text></Col>
              <Button variant="primary">Add to Cart</Button>
            </Row>
          </Container>

        </Card.Body>
      </Card>
    );
  }
}
