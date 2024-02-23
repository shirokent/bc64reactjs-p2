import React, { Component } from "react";

// import css (file css sẽ ăn hết cho cả dự án)
// import "./StyleComponent.css";

// import module css (sẽ chỉ ăn cho component được import)
// khi dùng module css thì khai báo class (---['tên class']) (--- là tên được đặt, ví dụ là style bên dưới)
import style from "./StyleComponent.module.css";

export default class StyleComponent extends Component {
  render() {
    return (
      <div className={`display-4 ${style["text-red"]}`}>
        Helo các bạn lớp bc64
      </div>
    );
  }
}
