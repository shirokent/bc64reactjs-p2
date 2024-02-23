import React, { Component } from "react";

export default class Databinding extends Component {
  titleName = "Lâm";

  renderDesc = () => {
    return <div>Sắp nghỉ tết rùi các bạn ơi</div>;
  };

  person = {
    name: "Vinh",
    age: 18,
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  };

  render() {
    let title = "Hello cyber soft";

    let person = {
      name: "Lâm",
      age: 18,
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    };

    const renderTitle = () => {
      // có thể return string, number, sx,...
      // ko thể return về ( binding) object
      return <div className="text-warning">Hello bc64</div>;
    };

    return (
      <div>
        <div className="container">
          {/* Trước đó phải dom đến rồi gán value bằng giá trị */}
          {/* Bây giờ viết thẳng vào qua cặp dấu {} */}
          <p id="txt">{title}</p>
          <p>{this.titleName}</p>
          <p>{renderTitle()}</p>
          <p>{this.renderDesc()}</p>
          <br />

          <div className="card">
            <img className="card-img-top" src={this.person.image} alt="Title" />
            <div className="card-body">
              <h4 className="card-title">{this.person.name}</h4>
              <p className="card-text">{this.person.age}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
