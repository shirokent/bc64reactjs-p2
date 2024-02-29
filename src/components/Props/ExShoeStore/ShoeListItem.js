import React, { Component } from "react";
import ShoeItem from "./ShoeItem";

export default class ShoeListItem extends Component {
  renderListShoe = () => {
    let { dataListShoe, handleAddShoe } = this.props;
    return dataListShoe.map((shoe, index) => {
      return (
        <div key={index} className="col-3">
          <ShoeItem shoe={shoe} handleAddShoe={handleAddShoe} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="row">
        {/* <div className="col-4">
          <ShoeItem />
        </div>
        <div className="col-4">
          <ShoeItem />
        </div>
        <div className="col-4">
          <ShoeItem />
        </div> */}
        {this.renderListShoe()}
      </div>
    );
  }
}
