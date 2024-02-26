import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Logo from "./Logo";
import Header from "./Header";
import Title from "./Title";
import Contant from "./Contant";
import Product from "./Product";

import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import Himage from "./Himage";
import Banner from "./Banner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Logo />
    <Header />
    <Himage />
    <Title />
    <Contant />
    <Product />
    <Banner />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
