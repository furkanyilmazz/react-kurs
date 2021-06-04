import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryID: 1, categoryName: "selami" },
        { categoryID: 2, categoryName: "aybar" },
        { categoryID: 3, categoryName: "babuş" },
        { categoryID: 4, categoryName: "younes" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem key={category.categoryID}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
