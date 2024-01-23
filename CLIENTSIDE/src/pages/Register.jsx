import React from 'react';
import { Link } from "react-router-dom";
import "./Register.css"; 
// import toast,{ Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const registerUser=(e)=>{
      e.preventDefault()
      const user = {
          name: e.target.name.value ,
          email: e.target.email.value,
          password:e.target.password.value 
      }
      console.log(user);
      //making POST request 
      fetch("http://localhost:5500/users/register",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(result=>{
          if(result.errors){
              console.log(result.errors)
              // toast.error(JSON.stringify(result.errors))
          }else{
              e.target.reset()
              console.log("hi");
              // toast.success("you successfully registered!")
              setTimeout(()=>{
                   navigate("/login")
              },1500)
             
          }

      })
      .catch(err=>console.log(err))
  }
  return (
    <div>

<div className="container">
      <div className="left-side">
        <h1>Unlock special features with a free account</h1>
        <br />
        <br />
        
        <img src="http://www.prothetik.med.uni-goettingen.de/wp-content/uploads/sites/2/2020/11/blank-profile-picture-973460_640-1-300x300.png" alt="PixelCredit Hub" />
      </div>


      <div className="right-side">
        <h1>Create your account</h1>
        <p>It's free and easy</p>
        {/* <Toaster position="top-center"/> */}
        <br /><br /><br /><br />
        <form onSubmit={registerUser}>
          <label htmlFor="text">Full name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name*" required  autoComplete="username"/>

          <label htmlFor="email">Email or Phone Number:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email or phone number*" required autoComplete="username"/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder='Type your Password*'  required autoComplete="current-password"/>
         <p className="additional-options" >Must be 8 characters at least</p>
          <button type="submit">Register</button>
        </form>
        <div className="additional-options">
          <p> By creating an account means you agree to the 
            <Link to="#">Terms and Conditions</Link> , and our <Link to="#">Privacy Policy</Link>
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
          Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div> 

       
      </div>
    </div>

    </div>
  )
}

export default Register