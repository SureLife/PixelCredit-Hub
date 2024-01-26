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
        const response = await axios.get(`${backendURL}/images/alluploadedimages/pending`);
        //const response = await axios.get(`${backendURL}/images/alluploadedimages/here comes STATUS`);
        dispatch({ type: "setAllUploads", payload: response.data });
        console.log(response.data )
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
              src={`${upload.imageURL}`}
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