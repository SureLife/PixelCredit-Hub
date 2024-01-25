import React, { useEffect, useContext } from "react";
//import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import axios from "axios";

const backendURL = `http://localhost:5500`;




function ReviewUploadedImages() {
    const { state, dispatch } = useContext(MyContext);
    const { allUploads } = state;


  useEffect(() => {
    async function fetchUploadedImages() {
      try {
        const response = await axios.get(`${backendURL}/images/alluploadedimages`);
        dispatch({ type: "setAllUploads", payload: response.data });
        console.log("it is sending get req to server")
      } catch (error) {
        console.error("Error fetching allUploads details:", error);
         
      }
    }

    fetchUploadedImages();
  }, []);


  return (
    <div>
      <div>
        {allUploads.map(upload => (
          <div key={upload._id}>
            <img
              src={`${upload.data}`}
              alt={upload.fileName}
              style={{ width: '200px', height: 'auto' }}
            />
            <p>Status: {upload.status}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>

  )
}

export default ReviewUploadedImages