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


  // Clicking on approveImage, sets it's status to "approved" in the database.
  const approveImage = async (upload) => {

    try {
      const res = await fetch(`http://localhost:5500/images/approve/${upload._id}`, {
        method: `PATCH`,
        headers: {
          "Content-Type": `application/json`,
        },
      });
      if (res.ok) {
        alert("Image approved successfully");
      } else {
        const errorData = await res.json(); 
        alert(`Error: ${errorData.message}`);
      }
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  // Clicking on Deny an image, delete's it from the database.
  const denyImage = async (upload) => {

    try {
      const res = await fetch(`http://localhost:5500/images/deny/${upload._id}`, {
        method: `DELETE`,
        headers: {
          "Content-Type": `application/json`,
        },
      });
      if (res.ok) {
        alert("Image denied and removed successfully");
      } else {
        const errorData = await res.json(); 
        alert(`Error: ${errorData.message}`);
      }
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }
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
            <button onClick={() => approveImage(upload)}>Approve</button>
            <button onClick={() => denyImage(upload)}>Deny</button>
            <hr />
          </div>
        ))}
      </div>
    </div>

  )
}

export default ReviewUploadedImages