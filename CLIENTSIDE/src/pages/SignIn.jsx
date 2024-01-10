import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./SignIn.css"; 
import { MyContext } from '../context/MyContext.jsx'
import { useNavigate } from 'react-router-dom'
function SignIn() {
  const {setUser} =useContext(MyContext)
  const navigate = useNavigate()
  const loginUser=(e)=>{
      e.preventDefault()
      //POST reuqest
      fetch("http://localhost:8000/api/users/signIn", {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({email: e.target.email.value, password :e.target.password.value })
      })
      .then(res=>{ // this is the same res in backend in create function in usercontroler which is res.send({ msg: "welcome back", foundUser });
      const token = res.headers.get("token")
      if(token){
          //storing/writing token in localstorage
          localStorage.setItem("token",token) 
      }
      return res.json() // res is always jason, but we need object so we write this line to be able to work in react 
      })
      .then(result=>{
         if(result.success){
          setUser(result.data) // 2s
          navigate("/profile") // 1s
          }else{
          console.log(result.message)
         }
      })
      .catch(err=>console.log(err))
  }
  
  return (
    <div>
    <div className="container">
      <div className="left-side">
        <h1>Welcome to PixelCredit Hub</h1>
        <br />
        <br />
        <img src="http://www.prothetik.med.uni-goettingen.de/wp-content/uploads/sites/2/2020/11/blank-profile-picture-973460_640-1-300x300.png" alt="PixelCredit Hub" />
      </div>


      <div className="right-side">
        <p>Log In</p>
        <br /><br /><br /><br />
        <form onSubmit={loginUser}
        action="login-action" method="POST">
          <label htmlFor="email">Email or Phone Number:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email or phone number*" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder='Your Password*' required />
         
          <button type="submit">Sign In</button>
        </form>
        <div className="additional-options">
          <p>
            <Link to="#">Forgot password?</Link>
          </p>
          <br />
          
        </div> 
        <p className='paragraph'>or do it via other accounts</p>
        <div className="social-icons">
          <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="Google Icon" className="rounded-icon" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook Icon" className="rounded-icon" />
          <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="Twitter Icon" className="rounded-icon" />
        </div>

        <div className="additional-options">
          
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div> 

       
      </div>
    </div>
  

    </div>
  );
}

export default SignIn;