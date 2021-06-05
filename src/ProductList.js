import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <h5>{this.props.currentCategory}</h5>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>productName</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
