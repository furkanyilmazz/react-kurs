import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      {
        categoryID: 1,
        categoryName: "selami",
      },
      {
        categoryID: 2,
        categoryName: "aybar",
      },
      {
        categoryID: 3,
        categoryName: "babuş",
      },
      {
        categoryID: 4,
        categoryName: "younes",
      },
    ],
  };

  render() {
    return (
      <div>
        <h1> {this.props.info.title} </h1>{" "}
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.categoryID}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4> {this.props.currentCategory} </h4>
      </div>
    );
  }
}
