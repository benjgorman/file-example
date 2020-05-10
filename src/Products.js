import React from 'react';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import {ProductItem} from './ProductItem.js'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

let products = [
  {
    name: "ZAROCA",
    country: "Brazil",
    price: 5.20
  },
  {
    name: "PERTÃO",
    country: "Brazil",
    price: 4.25
  },
  {
    name: "CHAPADA",
    country: "Brazil",
    price: 6.20
  },
  {
    name: "PLANALTO",
    country: "Brazil",
    price: 6.90
  },
  {
    name: "EL MIRCHADOR",
    country: "Colombia",
    price: 5.50
  },
  {
    name: "IBUMWE",
    country: "Rwanda",
    price: 4.60
  },
  {
    name: "BLUE MOUNTAIN",
    country: "Jamacia",
    price: 7.20
  },
  {
    name: "KONA",
    country: "Hawawii, USA",
    price: 8.20
  }
];

export class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      products: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      products: products
    });
    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    let _products = this.state.products;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _products = _products.filter(function(product) {
        return product.name.toLowerCase().match(search);
      });
    }

    return (
      <Col>
        <h1>Our Products</h1>
        <Container fluid>
        <Col>
          <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="Search"
          />
        </Col>

        <Col>
            {_products.map(product_item => {
              return (
                <ProductItem name={product_item.name} country={product_item.country} price={product_item.price}/>
              );
            })}
        </Col>
        </Container>
      </Col>
    );
  }
}
