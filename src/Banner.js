import React from "react";
import "./App.css";

export default function Banner() {
  return (
    <div>
      <div
        className="banner"
        style={{
          padding: "300px",
          marginTop: "-300px",
          marginLeft: "100px",
        }}
      >
        <img
          alt=""
          src="./image/electronic-store-promotional-banner-2.jpg"
        ></img>
        <img
          alt=""
          src="./image/electronic-store-promotional-banner-1.jpg"
          style={{ padding: "10px" }}
        ></img>
      </div>
    </div>
  );
}
