import React, { useContext } from "react";
import axios from "axios";
import { MyContext } from "../context/MyContext";
import "bootstrap/dist/css/bootstrap.min.css";

const backendURL = "http://localhost:5500";

const UploadImage = () => {
  const { state, dispatch } = useContext(MyContext);
  const { user } = state;

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];  // Use e.target.files[0] to get the first file
  
    console.log("uploadedImages:", file);
  
    dispatch({
      type: "SetUploadedImages",
      payload: file,
    });
  
    try {
      const formData = new FormData();
      formData.append("foo", file); // Use the same key that server expects ("foo")
  
      const response = await axios.post(
        `${backendURL}/images/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  

  return (
    <div className="container p-5">
      <div className="card-body p-5">
        <h2 className="w-100 text-center mb-5">PixelCreditHub</h2>
        {user && (
       
            <div className="mb-3">
              <input
                type="file"
                accept="image/*"
                name="Image"
                id="ImageInput"
                onChange={handleImageUpload}
                 
              />
            </div>
           
        )}
      </div>
    </div>
  );
};

export default UploadImage;
