import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
    pixelAddress: "",
    password: "",
    confirmPassword: "",
    recoveryEmail: "",
    mobileNumber: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = () => {
    // Validation logic for each step
    if (step === 1) {
      if (formData.firstName.trim() === "" || formData.lastName.trim() === "") {
        alert("Please fill in all fields in the first step.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (
        formData.birthDate.trim() === "" ||
        formData.birthMonth.trim() === "" ||
        formData.birthYear.trim() === "" ||
        formData.gender.trim() === ""
      ) {
        alert("Please fill in all fields in the second step.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (formData.pixelAddress.trim() === "") {
        alert("Please fill in the pixel address.");
        return;
      }
      setStep(4);
    } else if (step === 4) {
      if (
        formData.password.trim() === "" ||
        formData.confirmPassword.trim() === ""
      ) {
        alert("Please fill in both password fields.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      setStep(5);
    } else if (step === 5) {
      // Validation logic for the fifth step (recovery email)
      setStep(6);
    } else if (step === 6) {
      // Validation logic for the sixth step (mobile number)
      setStep(7);
    } else if (step === 7) {
      // Validation logic for the seventh step (review and accept terms)
      if (!formData.termsAccepted) {
        alert("Please accept the terms and conditions.");
        return;
      }
      // Proceed to the next step or submit the form
      navigate("/final-step"); // Example: navigate to the final step or submit endpoint
    }
  };

  return (
    <div className="w-100 p-2 d-flex align-items-center justify-content-center h-100">
  <div className="container-fluid p-5">
    <div className="row justify-content-center">
      <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        <div className="card">
          <div className="card-body p-5"> {/* Changed to w-75 for a broader card body */}
                <h2 className="w-100  text-center mb-5">PixelCreditHub</h2>
                <form>
                  {step === 1 && (
                    <div  className="form-outline mb-4">
                      <h3 className="mb-4">Create a Pixel Account</h3>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="form-outline mb-4">
                      <h3 className="mb-4">Basic Information</h3>
                      {/* Add Bootstrap form controls for birth date, month, year, and gender */}
                    </div>
                  )}
                  {step === 3 && (
                    <div className="form-outline mb-4">
                      <h3 className="mb-4">Choose Your Pixel Address</h3>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Pixel Address"
                          name="pixelAddress"
                          value={formData.pixelAddress}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}
                  {step === 4 && (
                    <div className="form-outline mb-4">
                      <h3 className="mb-4">Create a Strong Password</h3>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}
                  {step === 5 && (
                    <div className="form-outline mb-4">
                      <h3 className="mb-4">Add Recovery Email</h3>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Recovery Email"
                          name="recoveryEmail"
                          value={formData.recoveryEmail}
                          onChange={handleChange}
                        />
                      </div>
                      <p className="mb-4">
                        You can skip this step if you want.
                      </p>
                    </div>
                  )}
                  {step === 6 && (
                    <div className="form-outline mb-4">
                      <h3 className="mb-4">Add Mobile Number</h3>
                      <div className="mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Mobile Number"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <p className="mb-4">
                        You can skip this step if you want.
                      </p>
                    </div>
                  )}
                  {step === 7 && (
                    <div className="form-outline mb-4">
                      <h3 className="mb-4">Review Your Account Info</h3>
                      <p>Email: {formData.recoveryEmail}</p>
                      <p>Mobile Number: {formData.mobileNumber}</p>
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="termsCheckbox"
                          name="termsAccepted"
                          checked={formData.termsAccepted}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="termsCheckbox"
                        >
                          I accept the terms and conditions.
                        </label>
                      </div>
                    </div>
                  )}
 

               </form>
               <div className="text-center">
                  {step < 7 && (
                    <button
                      className="btn btn-primary"
                      style={{ width: "100px", height: "40px" }}
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                  {step === 7 && (
                    <button
                      className="btn btn-success"
                      style={{ width: "100px", height: "40px" }}
                      onClick={handleNext}
                    >
                      Submit
                    </button>
                  )}
                </div>
                <p className="mt-3 text-center">
                  Already have an account? <Link to="/login">Log In</Link>
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Register;