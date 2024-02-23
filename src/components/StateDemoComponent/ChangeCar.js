import React, { Component } from "react";
// Các bước để làm 1 task trong react:
// -1 Xây dựng giao diện hoàn chỉnh
// -2 Xác định xem State là gì: string, boolean,...
// -3 Binding state lên giao diện
// -4 Xử lí thay đổi sự kiện state => setState

export default class ChangeCar extends Component {
  state = {
    imgCar: "./img/products/black-car.jpg",
  };
  handleChangeCar = (nameCar) => {
    this.setState({
      imgCar: `./img/products/${nameCar}.jpg`,
    });
  };
  render() {
    return (
      <div className="container d-flex">
        <div className="w-50">
          <img src={this.state.imgCar} className="w-100" alt="" />
        </div>
        <div className="w-50">
          <button
            onClick={() => {
              this.handleChangeCar("black-car");
            }}
            className="btn btn-dark"
          >
            Black
          </button>
          <button
            onClick={() => {
              this.handleChangeCar("red-car");
            }}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={() => {
              this.handleChangeCar("silver-car");
            }}
            className="btn btn-info"
          >
            Silver
          </button>
        </div>
      </div>
    );
  }
}
