import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import {ExampleComponent} from './ExampleComponent';

import {
  BrowserRouter as Router,
  Link,
  Route,
  useLocation
} from "react-router-dom";

export class CourseForm extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      CourseType:'',
      CourseName:'',
      ButtonClicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleChange(evt){
    let name = evt.target.name;
    let value = evt.target.value;

    this.setState({[name]:value});
  }

  handleForm(evt){
    evt.preventDefault();
    console.log("Type of student:" + this.state.CourseType);
    console.log("Name of Course"+ this.state.CourseName);
    this.setState({ButtonClicked:true});
  }

  courseFormExample() {
    return (
    <Container>
        <Form onSubmit={this.handleForm}>
        <Form.Row>
          <Form.Group controlId="CourseType">
            <Form.Label>What type of Courses are you looking for ? </Form.Label>
            <Form.Control as="select" onChange={this.handleChange} name = "CourseType">
              <option value="Undergraduate">Undergraduate</option>
              <option value ="Postgraduate">Postgraduate</option>
              <option value = "Other">Other</option>
            </Form.Control>
          </Form.Group>
          <Col>
            <Form.Group controlId="CourseName">
              <Form.Label>Search for Courses here:</Form.Label>
              <Form.Control type="input" placeholder="Search for courses here" onChange={this.handleChange} name="CourseName"/>
            </Form.Group>
          </Col>
          <Button
          variant="secondary"
          type="submit">Search</Button>

        </Form.Row>
        </Form>

      <Container>
        <h1>Results</h1>
      </Container>
    </Container>
    );
  }

  render()
  {
    let searchResult = false;
    let thingToRender;
    const headline = (
  <h1>
    Hello World
  </h1>
);

    if (this.state.ButtonClicked)
    {
      this.setState({ButtonClicked:false});
      searchResult = true;
      thingToRender = <h1>Hello</h1>;

    }
    return(
      <div class="center">
      <br/>
      {this.courseFormExample()}
      {thingToRender}
      </div>
      );
        }
          }
export default CourseForm;
