import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  productInfo = { title: "Product List" };
  categoryInfo = { title: "Category List" };
  naviInfo = { title: "Navi Component" };

  state = { currentCategory: "", products: [], cart: [] };

  changeCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName,
    });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCard = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };

  render() {
    return (
      <div className="selam">
        <Container>
          <Navi cart={this.state.cart} info={this.naviInfo}></Navi>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={this.categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="3">
              <ProductList
                addToCard={this.addToCard}
                products={this.state.products}
                info={this.productInfo}
                currentCategory={this.state.currentCategory}
              ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
