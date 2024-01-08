import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/Logo.png";
import defaultAvatar from "../assets/images/defaultAvatar.png";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  // State to hold user authentication status and profile image URL

  const { state, dispatch } = useContext(MyContext);
  const { user } = state;
  const profileImage = user ? user.profileImage : null; // Get user's profile image
 

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
          {user ? (
           <Link to="/userprofile"> <img
           src={profileImage || defaultAvatar} // pull profileImage from user profile, write code for it 
           alt="Profile"
           className="profile-avatar"
         /></Link>
          ) : (
            <Link to="/signin">Sign-in</Link>
          )}
        </li>

      
      {/*   {user && (
          <li>
            <Link to="/userprofile">Profile</Link>
          </li>
        )}//replace above li after adding all style so it sould only displys after user logged in */}

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
