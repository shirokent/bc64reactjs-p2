import React, { Component } from "react";
import CardDetailPhone from "./CardDetailPhone";

const dataListPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

// Xây dựng UI
// Xác định State
// Binding State lên UI
// Xử lý sự kiện

export default class ExViewDetail extends Component {
  state = {
    spDetail: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };

  handleViewDetail = (productClick) => {
    // console.log("productClick", productClick);
    this.setState({ spDetail: productClick });
  };

  renderListPhone() {
    return dataListPhone.map((phone, index) => {
      return (
        <div key={index} className="col-4 px-3">
          <CardDetailPhone
            phone={phone}
            handleViewDetail={this.handleViewDetail}
          />
        </div>
      );
    });
  }

  render() {
    let { hinhAnh, cameraSau, cameraTruoc, manHinh, heDieuHanh } =
      this.state.spDetail;
    return (
      <div className="container">
        <h3>Xem chi tiết phone</h3>
        {/* Danh sách sản phẩm */}
        <div className="row">
          {/* <div className="col-4 px-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://i.pravatar.cc?u=5"
                alt="Title"
              />
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <button className="btn btn-success">Xem chi tiết</button>
              </div>
            </div>
          </div>
          <div className="col-4 px-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://i.pravatar.cc?u=5"
                alt="Title"
              />
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <button className="btn btn-success">Xem chi tiết</button>
              </div>
            </div>
          </div>
          <div className="col-4 px-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://i.pravatar.cc?u=5"
                alt="Title"
              />
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <button className="btn btn-success">Xem chi tiết</button>
              </div>
            </div>
          </div> */}
          {this.renderListPhone()}
        </div>
        {/* Chi tiết sản phẩm */}
        <div className="row mt-4">
          <div className="col-3">
            <h3>Hình ảnh</h3>
            <img src={hinhAnh} alt="" width={300} />
          </div>
          <div className="col-9">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Cam trước</td>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Cam sau</td>
                  <td>{cameraSau}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
