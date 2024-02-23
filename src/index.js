import React from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./components/Card";
import { AlertComponent } from "./components/AlertComponent";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import Databinding from "./components/Databinding/Databinding";
import StyleComponent from "./components/StyleComponent/StyleComponent";
import HandleEvent from "./components/HandleEvent/HandleEvent";
import StateDemoComponent from "./components/StateDemoComponent/StateDemoComponent";
import ChangeColor from "./components/StateDemoComponent/ChangeColor";
import ChangeAvatar from "./components/StateDemoComponent/ChangeAvatar";
import ChangeCar from "./components/StateDemoComponent/ChangeCar";

const root = ReactDOM.createRoot(document.getElementById("root"));
// jsx : ==> html được viết trong file js (nền js) được gọi là jsx
// có 2 loại: function component, class component
root.render(
  <div>
    {/* <Card /> */}
    {/* <AlertComponent /> */}
    {/* <HomeLayout /> */}
    {/* <Databinding /> */}
    {/* <StyleComponent /> */}
    {/* <HandleEvent /> */}
    {/* <StateDemoComponent /> */}
    {/* <ChangeColor /> */}
    {/* <ChangeAvatar /> */}
    <ChangeCar />
  </div>
);
