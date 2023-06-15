import React from "react";
import Entet from "./Entet";
import Nav from "./Nav";
import "./accueil.css";
const Contact = () => {
  return (
    <div className="header">
      <Entet />
      <Nav />
      <h2>Contact us</h2>
      <div>
        <h4>Notre service client</h4>
        <p> 58669073</p>
        <p>du lundi au vendredi</p>
        <p>de 9h à 12h et de 14h à 16h</p>
        <p>contact@armali.com</p>
        <p>Parfumerie en ligne</p>
        <p>sfax</p>
      </div>
    </div>
  );
};

export default Contact;
