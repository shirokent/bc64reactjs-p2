import React, { Component } from "react";

export default class CardDetailPhone extends Component {
  render() {
    let { phone, handleViewDetail } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={phone.hinhAnh}
          alt="Title"
          // style={{ height: "500px" }}
          height={300}
        />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <button
            onClick={() => { 
              handleViewDetail(phone);
            }}
            className="btn btn-success"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
