import React, { Component } from "react";
// Các bước để làm 1 task trong react:
// -1 Xây dựng giao diện hoàn chỉnh
// -2 Xác định xem State là gì: string, boolean,...
// -3 Binding state lên giao diện
// -4 Xử lí thay đổi sự kiện state => setState

export default class ChangeColor extends Component {
  state = {
    color: "red",
  };
  render() {
    // cách 1: để xem state hiện tại log ở hàm render()
    // Cách 2: thì log ở tham số thứ 2 của this.state (gọi là 1 call back function)
    // console.log("state", this.state);
    return (
      <div className="container">
        <i
          style={{
            color: this.state.color,
          }}
          className="fa-solid fa-house display-4"
        />
        <br />
        <button
          onClick={() => {
            this.setState(
              {
                color: "red",
              },
              () => {
                console.log("state", this.state);
              }
            );
          }}
          className="btn btn-danger"
        >
          Red
        </button>
        <button
          onClick={() => {
            this.setState(
              {
                color: "green",
              },
              () => {
                console.log("state", this.state);
              }
            );
          }}
          className="btn btn-success"
        >
          Green
        </button>
        <button
          onClick={() => {
            this.setState(
              {
                color: "blue",
              },
              () => {
                console.log("state", this.state);
              }
            );
          }}
          className="btn btn-primary"
        >
          Blue
        </button>
      </div>
    );
  }
}
