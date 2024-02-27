import React, { Component } from "react";

const dataPhone = [
  {
    id: 1,
    name: "iphone",
    price: 1000,
    img: "https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pink-pure-back-iphone-15-pink-pure-front-2up-screen-usen_638301948854041434.png",
  },
  {
    id: 2,
    name: "samsung",
    price: 2000,
    img: "https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pink-pure-back-iphone-15-pink-pure-front-2up-screen-usen_638301948854041434.png",
  },
  {
    id: 3,
    name: "blackBery",
    price: 3000,
    img: "https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pink-pure-back-iphone-15-pink-pure-front-2up-screen-usen_638301948854041434.png",
  },
];

export default class RenderWithMap extends Component {
  // *** render with forEach
  renderPhoneListLi() {
    let contentLiJsx = [];
    dataPhone.forEach((item, index) => {
      let liJsx = <li key={item.id}>{item.name}</li>;
      contentLiJsx.push(liJsx);
    });

    return contentLiJsx; // [li,li,li]

    // return [
    //   <li key={1}>{dataPhone[0].name}</li>,
    //   <li key={2}>{dataPhone[1].name}</li>,
    //   <li key={3}>{dataPhone[2].name}</li>,
    // ];
  }

  // *** render with map
  RenderWithMap() {
    let contentLiJsx = dataPhone.map((item, index) => {
      return <li key={item.id}>{item.name}</li>;
    });
    return contentLiJsx; // [li,li,li]
  }

  // render table
  renderWithPhone() {
    let contentTrJsx = dataPhone.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      );
    });
    return contentTrJsx;
  }

  // render card phone
  renderPhoneCard() {
    return dataPhone.map((item, index) => {
      return (
        <div key={item.id} className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.price}</p>
              <button type="button" class="btn btn-primary">
                Mua
              </button>
              <i className="fa-regular fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      );
    });
    // return conentCardJsx;
  }

  render() {
    // return [<div>RenderWithMap</div>,<div>Hello Cyber Soft</div>];
    return (
      <div className="container">
        <h3>Demo render ul, li</h3>
        <ul>
          {this.renderPhoneListLi()}
          {/* render with map */}
          {this.RenderWithMap()}
        </ul>

        <h3>render phone list table</h3>
        <table>
          <thead>
            <tr>
              <td>STT</td>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>{this.renderWithPhone()}</tbody>
        </table>

        <h3>render phone Card</h3>
        <div className="row">{this.renderPhoneCard()}</div>
      </div>
    );
  }
}
