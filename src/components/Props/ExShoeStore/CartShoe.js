import React, { Component } from "react";

export default class CartShoe extends Component {
  renderListTrShoeCart = () => {
    let { dataCartShoe, handleDeleteShoe, handleChangeQuantity } = this.props;
    return dataCartShoe.map((shoe, index) => {
      return (
        <tr>
          <td>{shoe.name}</td>
          <td>
            <img width={50} src={shoe.image} alt="" />
          </td>
          <td>{shoe.price}</td>
          <td>
            <button
              onClick={() => {
                handleChangeQuantity(shoe.id, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
            <p className="mx-3">{shoe.soLuong}</p>
            <button
              onClick={() => {
                handleChangeQuantity(shoe.id, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>{shoe.price * shoe.soLuong}</td>
          <td>
            <button
              onClick={() => {
                handleDeleteShoe(shoe.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    // let { dataCartShoe } = this.props;

    return (
      <div className="container">
        <div className="table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>{this.renderListTrShoeCart()}</tbody>
        </div>
      </div>
    );
  }
}
