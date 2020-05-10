import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import {
  Link
} from "react-router-dom";


import decaf from './images/decaf.jpg';
import regular from './images/regular.jpeg';

export class ExampleComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render()
  {
    let value = "";
    let img_src;
    let cardExtract;

    if (this.props.matchParams === "regular")
    {
      value = "Regular coffee is the only coffee.";
      img_src = regular;
      cardExtract = (
        <Card>
          <Card.Body>
            <Card.Title>{value}</Card.Title>
            <Card.Img src={img_src} alt={this.props.matchParams} fluid className="rounded mx-auto d-block"/>
            <Card.Text>
            Ut and, aromatic café au lait robusta roast organic sugar sweet mazagran. Beans brewed, filter cortado and trifecta kopi-luwak blue mountain robust. Aroma, organic as filter instant aftertaste sugar half and half.

            Id, caffeine extraction americano shop percolator skinny french press arabica. As, mug froth medium grounds variety shop wings. Single origin viennese con panna cortado aromatic instant barista white froth.
            </Card.Text>
            <Button as={Link} to="/products" variant="primary" >Shop for {this.props.matchParams} coffee</Button>
          </Card.Body>
        </Card>
      );
    }
    else if (this.props.matchParams === "decaf")
    {
      value = "Decaf is for suckers.";
      img_src = decaf;
      cardExtract = (
        <Card>
          <Card.Body>
            <Card.Title>{value}</Card.Title>
            <Card.Img src={img_src} alt={this.props.matchParams} fluid className="rounded mx-auto d-block"/>
            <Card.Text>
              Eu single shot ristretto, a aroma whipped cup café au lait carajillo americano body single shot. Breve, ut sweet brewed cup ut espresso et beans flavour coffee. Extraction, americano id americano arabica, filter frappuccino whipped et robusta. Chicory spoon, skinny chicory siphon half and half roast.
            </Card.Text>
            <Button as={Link} to="/products" variant="primary" >Shop for {this.props.matchParams} coffee</Button>
          </Card.Body>
        </Card>
      );
    }
    else if (this.props.matchParams === "iced"){
      value = "Iced Coffee is nice in Summer.";

      cardExtract = (
        <Card>
          <Card.Body>
            <Card.Title>{value}</Card.Title>
            <Card.Text>
              Iced coffee tastes nice!
            </Card.Text>
            <Button as={Link} to="/products" variant="primary" >Shop for {this.props.matchParams} coffee</Button>
          </Card.Body>
        </Card>
      );
    }
    else
    {
      value = "You took a wrong turn!";
      cardExtract = (
        <Card>
          <Card.Body>{value}</Card.Body>
        </Card>
      );
    }

    return (
        cardExtract
    );
  }
}
