import React, { Component } from "react";

export default class ItemCard extends Component {
  render() {
    let { dataShoe } = this.props;
    console.log("😢 ~ ItemCard ~ render ~ dataShoe", dataShoe);
    return (
      <div className="card">
        <img className="card-img-top" src={dataShoe.image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{dataShoe.name}</h4>
          <p className="card-text">{dataShoe.price}</p>
          <button className="btn btn-success">Add Product</button>
        </div>
      </div>
    );
  }
}
