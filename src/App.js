import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  productInfo = { title: "Product List" };
  categoryInfo = { title: "Category List" };
  naviInfo = { title: "Navi Component" };

  state = { currentCategory: "" };

  changeCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName,
    });
  };

  render() {
    return (
      <div className="selam">
        <Container>
          <Row>
            <Navi info={this.naviInfo}></Navi>
          </Row>
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
