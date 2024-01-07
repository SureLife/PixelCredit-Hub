import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/Logo.png";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faBars } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

function Navbar() {
  const [slideMenu, setSlideMenu] = useState({
    isPaneOpen: false,
  })

  return (
    <div className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link to="/">
            <img src={logoImage} alt="Logo" className="logo" />
          </Link>
        </li>
        <li>
          <Link className="nav-hover category" to="/categories">CATEGORIES</Link>
        </li>
        <li>
          <Link className="nav-hover about" to="/aboutus">ABOUT US</Link>
        </li>
        <li>
          <Link className="nav-hover contact" to="/contactus">CONTACT US</Link>
        </li>
      </ul>

      <ul className="user-actions">
       <li>
          <Link to="/signin">LOGIN</Link>
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
      <li>
        <div className="menuRight" onClick= {() => setSlideMenu({isPaneOpen: true})}><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
        </div>
        <SlidingPane
          className="menuClass"
          overlayClassName="menuOverlay"
          isOpen={slideMenu.isPaneOpen}
          width="400px"
          title="Welcome, User"
          onRequestClose={() => {
            // When you click outside the menu, or the < arrow, it closes
            setSlideMenu({isPaneOpen: false});
          }}
        >

          <p>Profile</p>
          <p>Uploads</p>
          <p>Downloads</p>
          <p>Credits</p>
          <br/>
          <br/>
          <br/>
          <p>Cart</p>

        </SlidingPane>
      </li>
      </ul>
    </div>
  );
}

export default Navbar;
