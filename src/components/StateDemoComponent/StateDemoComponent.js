import React, { Component } from "react";

export default class StateDemoComponent extends Component {
  // State là thuộc tính có sẵn của class Component (quản lý sự thay đổi của component)
  state = { fSize: 16 };
  render() {
    return (
      <div className="container">
        {/* StyleInline trong react là 1 loại object (key value) viết theo camelCase */}
        <p style={{ fontSize: this.state.fSize }}>lorem aaaaaaaa</p>

        <button
          className="btn btn-success"
          onClick={() => {
            // ở trong react class component sẽ ko xài theo cách này
            // this.state.fSize += 10;

            // this.setState là 1 hàm có sẵn của react class component nhận vào state với giá trị mới và gọi lại hàm render giao diện
            let newState = { fSize: this.state.fSize + 10 };
            this.setState(newState);
          }}
        >
          plus size
        </button>
      </div>
    );
  }
}
