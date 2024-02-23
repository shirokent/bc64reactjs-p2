import React, { Component } from "react";
// Các bước để làm 1 task trong react:
// -1 Xây dựng giao diện hoàn chỉnh
// -2 Xác định xem State là gì: string, boolean,...
// -3 Binding state lên giao diện
// -4 Xử lí thay đổi sự kiện state => setState

export default class ChangeAvatar extends Component {
  render() {
    this.state = {
      avatar: "https://i.pravatar.cc/150?u=300",
    };
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={this.state.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              onClick={() => {
                let random = Math.floor(Math.random() * 100);
                let newAvatar = `https://i.pravatar.cc/150?u=${random}`;
                this.setState({
                  avatar: newAvatar,
                });
              }}
            >
              Change Avatar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
