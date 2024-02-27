import React, { Component } from "react";

export default class CardPerson extends Component {
  // this.props là thuộc tính có sẵn trong class componen, props là nơi sẽ chứa dữ liệu mà component này được truyền vào
  render() {
    let { name, age, img } = this.props;
    return (
      <div className="card">
        {/* <img className="card-img-top" src={this.props.img} alt="Title" /> */}
        <img className="card-img-top" src={img} alt="Title" />
        <div className="card-body">
          {/* <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">{this.props.age}</p> */}
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{age}</p>
        </div>
      </div>
    );
  }
}
