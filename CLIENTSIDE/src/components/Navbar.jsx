import React, { useState, useContext } from "react";
import { MyContext } from "../context/MyContext";
import SlidingPane from "react-sliding-pane";
import defaultAvatar from "../assets/images/defaultAvatar.png";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/Logo.png";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown  } from "@fortawesome/free-solid-svg-icons";
//import UserProfile from "../pages/UserProfile";
import "./Navbar.css";

function Navbar() {
  const [slideMenuOpen, setSlideMenuOpen] = useState({
    isPaneOpen: false,
  });

  const { state } = useContext(MyContext);
  const { user } = state;
  const profileImage = user ? user.profileImage : null;

  const toggleMenu = () => {
    setSlideMenuOpen(prevState => ({
      ...prevState,
      isPaneOpen: !prevState.isPaneOpen,
    }));
  };

  return (
    <div className="nav-bar">
      <ul className="nav-links">
      <li>
          <Link to="/">
            <img src={logoImage} alt="Logo" className="logo" />
          </Link>
        </li>

        <li>
          <Link className="nav-hover category" to="/categories">
            CATEGORIES
          </Link>
        </li>
        <li>
          <Link className="nav-hover about" to="/aboutus">
            ABOUT US
          </Link>
        </li>
        <li>
          <Link className="nav-hover contact" to="/contactus">
            CONTACT US
          </Link>
        </li>
      </ul>

      <ul className="user-actions">
        <li>
          {/* {user ? (uncomment later */}
            <div>
              <div className="menu-icon" onClick={toggleMenu}>
                <img
                  src={profileImage || defaultAvatar}
                  alt="Profile"
                  className="profile-avatar"
                />
              </div>
             {/*  {user && (uncomment later */}
                <SlidingPane
                  className="menuClass"
                  overlayClassName="menuOverlay"
                  isOpen={slideMenuOpen.isPaneOpen}
                  width="250px"
                  title="Welcome, User"
                  onRequestClose={() =>
                    setSlideMenuOpen({ isPaneOpen: false })
                  }
                >
                  {/* Options in the sliding pane */}
                  <Link to="/userprofile">Profile</Link>
                  <p>Uploads</p>
                  <p>Downloads</p>
                  <p>Credits</p>
                  <br />
                  <br />
                  <br />
                  <p>Cart</p>
                </SlidingPane>
             {/*  )} uncomment later*/}
            </div>
          {/* ) : (
            <Link to="/signin" className="nav-link">
              Sign-in
            </Link>
          )}  uncomment later*/}
        </li>

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
          <Link to="/register">Register</Link>
        </li> 
     
      

      </ul>
    </div>
  );
}

export default Navbar;
