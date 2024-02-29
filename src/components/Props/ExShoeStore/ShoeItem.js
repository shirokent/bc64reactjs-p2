import React, { Component } from "react";

export default class ShoeItem extends Component {
  render() {
    let { shoe, handleAddShoe } = this.props;
    return (
      <div class="card m-3" style={{ height: "500px" }}>
        <img class="card-img-top" src={shoe.image} alt="Title" />
        <div class="card-body">
          <h4 class="card-title">{shoe.name} $</h4>
          <p>{shoe.price}</p>
          <button
            onClick={() => {
              handleAddShoe(shoe);
            }}
            className="btn btn-success"
          >
            Add To Cart
            <i className="fa-solid fa-cart-shopping" />
          </button>
        </div>
      </div>
    );
  }
}
