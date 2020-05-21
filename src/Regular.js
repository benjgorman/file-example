import React from 'react';
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

import {
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

export function Regular(props) {
  let thingsToRender = (
    <Card>
      <Card.Body>
        <Card.Title>{props.value}</Card.Title>
        <Card.Img src={props.img_src} alt={"Regular Coffee"} fluid className="rounded mx-auto d-block"/>
        <Card.Text>
        Ut and, aromatic café au lait robusta roast organic sugar sweet mazagran. Beans brewed, filter cortado and trifecta kopi-luwak blue mountain robust. Aroma, organic as filter instant aftertaste sugar half and half.

        Id, caffeine extraction americano shop percolator skinny french press arabica. As, mug froth medium grounds variety shop wings. Single origin viennese con panna cortado aromatic instant barista white froth.
        </Card.Text>
        <Button as={Link} to="/products" variant="primary" >Shop for Regular coffee</Button>
      </Card.Body>
    </Card>
  );


  return (
    <>
    {thingsToRender}
    </>
  );
}
