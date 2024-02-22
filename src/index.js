import React from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./components/Card";
import { AlertComponent } from "./components/AlertComponent";
import HomeLayout from "./components/HomeLayout/HomeLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
// jsx : ==> html được viết trong file js (nền js) được gọi là jsx
// có 2 loại: function component, class component
root.render(
  <div>
    <Card />
    <AlertComponent />
    <HomeLayout />
  </div>
);
