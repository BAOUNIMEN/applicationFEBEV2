import React from "react";
import "./accueil.css";
import "./entet.css"
const Entet = () => {
  return (
    <div>
      <div className="entet1">
        <div className="search-box">
          <form className="form1">
            <input type="text" name="search" placeholder=" search" />
          </form>
          <i className="fa-solid fa-magnifying-glass icon"> </i>
        </div>
        <div className="login">
          <h1>ARMALI.Com</h1>
          <p>LES GRANDS MARQUES CHEZ-VOUS</p>
        </div>
        <div className="icons">
          <i className="fa-solid fa-cart-shopping icon"></i>
          <i className="fa-solid fa-user dropdown icon">
            <ul className="subicon dropdown-content">
              <li class="sub-item">SingeIn</li>
              <li class="sub-item">Edit Profile</li>
              <li class="sub-item">Logout</li>
            </ul>
          </i>
        </div>
      </div>
    </div>
  );
};

export default Entet;
