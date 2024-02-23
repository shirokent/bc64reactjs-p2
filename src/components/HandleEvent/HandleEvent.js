import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleSayHello = () => {
    console.log("Hello");
  };

  handleSayName = (name) => {
    console.log("Hello bạn", name);
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.handleSayHello}>Click me</button>
        <button
          onClick={() => {
            console.log("yes");
          }}
        >
          Click tui
        </button>
        <button
          onClick={() => {
            // Phải có () để chạy ngay khi click
            // this.handleSayHello();
            this.handleSayName("Vinh");
          }}
        >
          Click mị
        </button>

        {/* sự kiện chạy khi người dùng nhập value vào ô input */}
        <input
          type="text"
          className="py-3 px-3"
          onChange={(e) => {
            let value = e.target.value;
            console.log("😢 ~ HandleEvent ~ render ~ value", value);
          }}
        />
      </div>
    );
  }
}
