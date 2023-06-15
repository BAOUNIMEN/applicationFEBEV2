import React from "react";
import "./accueil.css";
import Slider from "./Slider";
import Nav from "./Nav";
import ProductList from "../products/ProductList";
import Entet from "./Entet";
// import Slider2 from "./Slider2";

const Accueil = () => {
  return (
    <div>
      <div className="header">
        <Entet/>
        <Nav/>
      </div>
      
      <Slider/>
      <ProductList/>
    </div>
  );
};

export default Accueil;
