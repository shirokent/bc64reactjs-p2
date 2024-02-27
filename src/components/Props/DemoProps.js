import React, { Component } from "react";
import CardPerson from "./CardPerson";
import ProductCard from "./ProductCard";

export default class DemoProps extends Component {
  // Props còn có thể truyền vào {}, [], string, number, bolean, jsx, ...

  // Prop là gì?
  // => Prop là thuộc tính có sẵn của class component dùng để nhận giá trị từ nơi nó được sử dụng (từ cha truyền vào con)

  // Prop giống và khác gì với state?
  // Giống => Props và state đều là thuộc tính có sẵn của class componen, để chứa dữ liệu và binding lên giao diện

  // Khác =>
  // State: có thể setState (gán lại giá trị mới)
  // Prop: thì ko thể thay đổi giá trị

  render() {
    const product = {
      id: 1,
      name: "Vinh",
      age: 24,
      img: "https://i.pravatar.cc?u=100",
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <CardPerson
              name={"tèo"}
              age={90}
              img={"https://i.pravatar.cc?u=90"}
            />
          </div>
          <div className="col-4">
            <CardPerson
              name={"Vinh"}
              age={15}
              img={"https://i.pravatar.cc?u=120"}
            />
          </div>
          <div className="col-4">
            <CardPerson
              name={"Lâm"}
              age={43}
              img={"https://i.pravatar.cc?u=100"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <ProductCard dataProduct={product} desc={<p>Hãy mua tui</p>} />
          </div>
        </div>
      </div>
    );
  }
}
