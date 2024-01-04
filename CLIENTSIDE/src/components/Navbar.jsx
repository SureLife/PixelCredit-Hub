import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/Logo.png";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link to="/">
            <img src={logoImage} alt="Logo" className="logo" />
          </Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/aboutus">About us</Link>
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li>
      </ul>

      <ul className="user-actions">
       <li>
          <Link to="/signin">Sign-in</Link>
        </li>
       {/*  <li>
          <Link to="/register">Register</Link>
        </li> */}
      <li>
        <Link to="/shoppingcart" className="shopping-cart">
        <Button
                buttonText={<FontAwesomeIcon icon={faCartArrowDown} />}
                className="BTN"
                /* onClick={handleSearch} */
              />
        </Link>
      </li> 
      
      </ul>
    </div>
  );
}

export default Navbar;
