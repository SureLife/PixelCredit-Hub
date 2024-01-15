import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const { state, dispatch } = useContext(MyContext);
  

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    // POST request
    fetch("http://localhost:5500/users/logIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => {
        // this is the same res in backend in create function in user controler which is res.send({ msg: "welcome back", foundUser });
        const token = res.headers.get("token");
        if (token) {
          // storing/writing token in local storage
          localStorage.setItem("token", token);
        }
        return res.json(); // res is always JSON, but we need an object so we write this line to be able to work in React
      })
      .then((result) => {
        if (result.success) {
          dispatch({ type: "SET_USER", payload: result.data }); // Dispatch action to set user in global state
          navigate("/userprofile"); // 1s
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container">
        <div className="left-side">
          <h1>Welcome to PixelCredit Hub</h1>
          <img
            src="http://www.prothetik.med.uni-goettingen.de/wp-content/uploads/sites/2/2020/11/blank-profile-picture-973460_640-1-300x300.png"
            alt="PixelCredit Hub"
          />
        </div>

        <div className="right-side">
          <p>Log In</p>
          <form onSubmit={loginUser} action="login-action" method="POST">
            <label htmlFor="email">Email or Phone Number:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email or phone number*"
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password*"
              required
            />

            <button type="submit">Sign In</button>
          </form>
          <div className="additional-options">
            <p>
              <Link to="/forgotPassword">Forgot password?</Link>
            </p>
          </div>
          <p className="paragraph">or do it via other accounts</p>
          <div className="social-icons">
            <img
              src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
              alt="Google Icon"
              className="rounded-icon"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
              alt="Facebook Icon"
              className="rounded-icon"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
              alt="Twitter Icon"
              className="rounded-icon"
            />
          </div>

          <div className="additional-options">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
