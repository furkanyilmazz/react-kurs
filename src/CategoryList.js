import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    state: {
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ListGroup>
          <ListGroupItem>1</ListGroupItem>
          <ListGroupItem>2</ListGroupItem>
          <ListGroupItem>3</ListGroupItem>
          <ListGroupItem>4</ListGroupItem>
          <ListGroupItem>5</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
